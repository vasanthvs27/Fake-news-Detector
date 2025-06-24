
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

interface DetectionRequest {
  title?: string;
  content: string;
  source?: string;
  url?: string;
  author?: string;
  date?: string;
  userId?: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Parse request body
    const requestData: DetectionRequest = await req.json();
    const { title = "", content, source = "", url = "", author = "", date = "", userId } = requestData;

    if (!content) {
      return new Response(
        JSON.stringify({ error: "Content is required for analysis" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get domain from URL if available
    let domain = "";
    if (url) {
      try {
        domain = new URL(url).hostname.replace(/^www\./, '');
      } catch (e) {
        // If URL parsing fails, try extracting from source
        domain = source?.toLowerCase() || "";
      }
    } else if (source) {
      domain = source.toLowerCase();
    }

    // Check if the domain is in known fake news sources
    const { data: fakeSource } = await supabase
      .from('fake_news_sources')
      .select('reliability_score, description')
      .ilike('domain', `%${domain}%`)
      .maybeSingle();

    // Check if the domain is in known trusted sources
    const { data: trustedSource } = await supabase
      .from('trusted_news_sources')
      .select('reliability_score, description')
      .ilike('domain', `%${domain}%`)
      .maybeSingle();

    // Analyze content
    const analysisResult = analyzeContent(content, title, fakeSource, trustedSource);
    
    // Save detection result to history if userId is provided
    if (userId) {
      await supabase.from('detection_history').insert({
        user_id: userId,
        title,
        content,
        source,
        url,
        author,
        date: date ? new Date(date).toISOString() : null,
        is_real: analysisResult.isReal,
        credibility_score: analysisResult.credibilityScore,
        explanation: analysisResult.explanation,
        features: analysisResult.features
      });
    }

    return new Response(
      JSON.stringify(analysisResult),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing detection request:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process detection request" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function analyzeContent(
  content: string, 
  title: string, 
  fakeSource: { reliability_score: number, description: string } | null, 
  trustedSource: { reliability_score: number, description: string } | null
) {
  // This is a simplified version of content analysis
  // In a real-world scenario, this would use NLP models or ML algorithms
  
  // Calculate individual feature scores
  const features = [
    {
      label: "Emotional language",
      value: calculateEmotionalLanguageScore(content, title)
    },
    {
      label: "Source credibility",
      value: calculateSourceCredibilityScore(fakeSource, trustedSource)
    },
    {
      label: "Clickbait indicators",
      value: calculateClickbaitScore(title, content)
    },
    {
      label: "Content coherence",
      value: calculateContentCoherenceScore(content)
    }
  ];
  
  // Calculate overall credibility score (weighted average)
  const weights = [0.3, 0.4, 0.15, 0.15]; // Weights for each feature
  const credibilityScore = features.reduce(
    (score, feature, index) => score + feature.value * weights[index], 
    0
  );
  
  // Determine classification
  const isReal = credibilityScore >= 0.5;
  
  // Generate explanation
  let explanation = generateExplanation(isReal, credibilityScore, features, fakeSource, trustedSource);
  
  return {
    isReal,
    credibilityScore,
    explanation,
    features
  };
}

function calculateEmotionalLanguageScore(content: string, title: string): number {
  // List of emotional/sensationalist words
  const emotionalWords = [
    "shocking", "amazing", "unbelievable", "miracle", "disaster", 
    "catastrophe", "crisis", "bombshell", "devastating", "outrage",
    "explosive", "stunning", "jaw-dropping", "terrifying", "scandal"
  ];
  
  const combinedText = (title + " " + content).toLowerCase();
  let emotionalWordCount = 0;
  
  emotionalWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = combinedText.match(regex);
    if (matches) emotionalWordCount += matches.length;
  });
  
  // Calculate ratio of emotional words to total words
  const totalWords = combinedText.split(/\s+/).length;
  const emotionalRatio = emotionalWordCount / totalWords;
  
  // Invert the score (higher emotional content = lower credibility)
  const emotionalScore = Math.max(0, 1 - (emotionalRatio * 20));
  
  // Random factor for demo purposes (remove in production)
  return Math.min(1, Math.max(0, emotionalScore * (0.8 + Math.random() * 0.4)));
}

function calculateSourceCredibilityScore(
  fakeSource: { reliability_score: number } | null,
  trustedSource: { reliability_score: number } | null
): number {
  if (trustedSource) {
    return trustedSource.reliability_score;
  }
  
  if (fakeSource) {
    return fakeSource.reliability_score;
  }
  
  // If source is unknown, return a moderate score
  // For demo purposes, add some randomness (remove in production)
  return 0.4 + Math.random() * 0.2;
}

function calculateClickbaitScore(title: string, content: string): number {
  if (!title) return 0.5;
  
  const clickbaitPatterns = [
    /\b(you won't believe|mind-blowing|shocking truth)\b/i,
    /\b(this one trick|simple trick)\b/i,
    /\b(what happens next|what happened next)\b/i,
    /\b(shocking result|number \d+ will amaze you)\b/i,
    /\b(doctors hate (him|her|them))\b/i,
    /\?\!\?|\!\!\!/,
    /\b(SECRET|REVEALED|EXCLUSIVE)\b/
  ];
  
  let matchCount = 0;
  clickbaitPatterns.forEach(pattern => {
    if (pattern.test(title)) matchCount++;
  });
  
  // Calculate clickbait score (higher matchCount = lower credibility)
  const clickbaitScore = Math.max(0, 1 - (matchCount * 0.25));
  
  // Add some randomness for demo (remove in production)
  return Math.min(1, Math.max(0, clickbaitScore * (0.8 + Math.random() * 0.4)));
}

function calculateContentCoherenceScore(content: string): number {
  // Simplified coherence scoring
  // Count average sentence length (very short or very long sentences can indicate lower coherence)
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  if (sentences.length === 0) return 0.5;
  
  const totalWords = content.split(/\s+/).length;
  const avgWordsPerSentence = totalWords / sentences.length;
  
  // Optimal sentence length is around 15-20 words
  // Calculate deviation from this range
  const optimalLength = 17.5;
  const deviation = Math.abs(avgWordsPerSentence - optimalLength) / optimalLength;
  
  // Calculate coherence score (lower deviation = higher coherence)
  const coherenceScore = Math.max(0, 1 - (deviation * 1.5));
  
  // Add some randomness for demo (remove in production)
  return Math.min(1, Math.max(0, coherenceScore * (0.8 + Math.random() * 0.4)));
}

function generateExplanation(
  isReal: boolean, 
  credibilityScore: number, 
  features: {label: string, value: number}[],
  fakeSource: { description: string } | null,
  trustedSource: { description: string } | null
): string {
  const scorePercent = Math.round(credibilityScore * 100);
  
  let explanation = `Based on our analysis, this content has a credibility score of ${scorePercent}%. `;
  
  if (trustedSource) {
    explanation += `The source is recognized as credible: ${trustedSource.description}. `;
  } else if (fakeSource) {
    explanation += `The source has been flagged for reliability concerns: ${fakeSource.description}. `;
  }
  
  // Add information about key factors
  const emotionalScore = features.find(f => f.label === "Emotional language")?.value || 0;
  const clickbaitScore = features.find(f => f.label === "Clickbait indicators")?.value || 0;
  const coherenceScore = features.find(f => f.label === "Content coherence")?.value || 0;
  
  if (emotionalScore < 0.5) {
    explanation += "The content contains highly emotional language which is often associated with sensationalism. ";
  }
  
  if (clickbaitScore < 0.5) {
    explanation += "The headline exhibits clickbait characteristics that are typically used to draw attention rather than inform. ";
  }
  
  if (coherenceScore < 0.5) {
    explanation += "The content shows potential coherence issues that may indicate lower-quality reporting. ";
  }
  
  if (isReal) {
    explanation += "Overall, the content appears to be likely legitimate based on our analysis criteria.";
  } else {
    explanation += "Overall, the content has characteristics that suggest it may be misleading or unreliable.";
  }
  
  return explanation;
}
