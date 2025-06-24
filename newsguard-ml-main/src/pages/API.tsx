
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Copy, Check, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const API = () => {
  const { toast } = useToast();
  const [copiedPython, setCopiedPython] = useState(false);
  const [copiedJs, setCopiedJs] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);
  
  const handleCopy = (text: string, type: 'python' | 'js' | 'curl') => {
    navigator.clipboard.writeText(text);
    
    if (type === 'python') {
      setCopiedPython(true);
      setTimeout(() => setCopiedPython(false), 2000);
    } else if (type === 'js') {
      setCopiedJs(true);
      setTimeout(() => setCopiedJs(false), 2000);
    } else {
      setCopiedCurl(true);
      setTimeout(() => setCopiedCurl(false), 2000);
    }
    
    toast({
      title: "Code copied",
      description: "The code example has been copied to your clipboard",
    });
  };
  
  const pythonCode = `import requests

url = "https://api.fakedetector.com/v1/detect"
api_key = "YOUR_API_KEY"

payload = {
    "text": "Article text goes here...",
    "source": "Source name (optional)",
    "title": "Article title (optional)",
    "include_features": True
}

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
result = response.json()

print(f"Credibility Score: {result['credibility_score']}")
print(f"Classification: {result['classification']}")`;

  const jsCode = `// Using fetch API
const analyzeContent = async () => {
  const url = "https://api.fakedetector.com/v1/detect";
  const apiKey = "YOUR_API_KEY";
  
  const payload = {
    text: "Article text goes here...",
    source: "Source name (optional)",
    title: "Article title (optional)",
    include_features: true
  };
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    const result = await response.json();
    
    console.log(\`Credibility Score: \${result.credibility_score}\`);
    console.log(\`Classification: \${result.classification}\`);
    
    return result;
  } catch (error) {
    console.error('Error analyzing content:', error);
  }
};

analyzeContent();`;

  const curlCode = `curl -X POST https://api.fakedetector.com/v1/detect \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Article text goes here...",
    "source": "Source name (optional)",
    "title": "Article title (optional)",
    "include_features": true
  }'`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl fade-in-slide-up">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Integrate our fake news detection capabilities directly into your applications
              with our easy-to-use REST API.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
            <div className="lg:col-span-1 space-y-6 fade-in-slide-up">
              <h2 className="text-2xl font-medium">Getting Started</h2>
              <p className="text-muted-foreground">
                Our API provides a simple way to analyze content for credibility and detect 
                potential fake news. Follow these steps to get started:
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Sign Up for an API Key</h3>
                    <p className="text-sm text-muted-foreground">
                      Create an account to receive your unique API key for authentication.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Choose Your Integration Method</h3>
                    <p className="text-sm text-muted-foreground">
                      Use our API with the programming language of your choice. We provide 
                      examples for Python, JavaScript, and cURL.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Make API Calls</h3>
                    <p className="text-sm text-muted-foreground">
                      Send content for analysis and receive detailed credibility assessments.
                    </p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-medium pt-6">API Features</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Real-time content analysis with millisecond response times</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Comprehensive credibility scoring from 0-1 (0 = likely fake, 1 = likely real)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Detailed feature analysis for understanding classification decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Support for text, URLs, and social media content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Enterprise-grade security with API key authentication</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-medium pt-6">Pricing</h2>
              <Card className="p-5 glass-card">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Free Tier</h3>
                    <p className="text-sm text-muted-foreground">
                      100 API calls per month
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Basic Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      1,000 API calls per month for $29
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Pro Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      10,000 API calls per month for $99
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Enterprise</h3>
                    <p className="text-sm text-muted-foreground">
                      Custom volume and pricing, contact sales
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="lg:col-span-2 space-y-8 fade-in-slide-up delay-2">
              <h2 className="text-2xl font-medium">API Reference</h2>
              
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Endpoint: Content Analysis</h3>
                <div className="p-3 bg-muted rounded-lg mb-4">
                  <code className="text-sm font-mono">
                    POST https://api.fakedetector.com/v1/detect
                  </code>
                </div>
                
                <h4 className="font-medium mb-2">Request Parameters</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="font-mono text-sm">text</p>
                    <p className="text-xs text-muted-foreground">
                      String (required) <br />
                      The content to analyze
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-sm">source</p>
                    <p className="text-xs text-muted-foreground">
                      String (optional) <br />
                      The source of the content
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-sm">title</p>
                    <p className="text-xs text-muted-foreground">
                      String (optional) <br />
                      The title of the article
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-sm">url</p>
                    <p className="text-xs text-muted-foreground">
                      String (optional) <br />
                      URL to fetch and analyze
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-sm">include_features</p>
                    <p className="text-xs text-muted-foreground">
                      Boolean (optional) <br />
                      Include detailed feature analysis
                    </p>
                  </div>
                </div>
                
                <h4 className="font-medium mb-2">Response Format</h4>
                <div className="p-3 bg-muted rounded-lg mb-4">
                  <pre className="text-sm font-mono overflow-x-auto">
{`{
  "credibility_score": 0.87,
  "classification": "real",
  "confidence": 0.92,
  "features": {
    "emotional_language": 0.23,
    "source_credibility": 0.95,
    "clickbait_indicators": 0.12,
    "content_coherence": 0.89
  },
  "explanation": "This content shows high credibility..."
}`}
                  </pre>
                </div>
              </Card>
              
              <h2 className="text-2xl font-medium pt-4">Code Examples</h2>
              
              <Tabs defaultValue="python" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                
                <TabsContent value="python" className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute top-2 right-2 h-8"
                    onClick={() => handleCopy(pythonCode, 'python')}
                  >
                    {copiedPython ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                  <div className="p-4 bg-muted rounded-lg">
                    <pre className="text-sm font-mono whitespace-pre-wrap">
                      {pythonCode}
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="javascript" className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute top-2 right-2 h-8"
                    onClick={() => handleCopy(jsCode, 'js')}
                  >
                    {copiedJs ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                  <div className="p-4 bg-muted rounded-lg">
                    <pre className="text-sm font-mono whitespace-pre-wrap">
                      {jsCode}
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="curl" className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute top-2 right-2 h-8"
                    onClick={() => handleCopy(curlCode, 'curl')}
                  >
                    {copiedCurl ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                  <div className="p-4 bg-muted rounded-lg">
                    <pre className="text-sm font-mono whitespace-pre-wrap">
                      {curlCode}
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-medium mb-2">Ready to get started?</h3>
                <p className="text-muted-foreground mb-4">
                  Sign up today to receive your API key and start integrating our fake news 
                  detection capabilities into your applications.
                </p>
                <Button className="flex items-center gap-1">
                  Get Your API Key <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default API;
