
import { MessageCircle, Flame, Scale, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';

const SentimentAnalysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 fade-in-slide-up">
              Sentiment Analysis
            </h1>
            <p className="text-muted-foreground fade-in-slide-up">
              Detecting emotional manipulation, bias, and inflammatory language designed to provoke reactions rather than inform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              icon={<MessageCircle className="h-6 w-6" />}
              title="Emotional Language Detection"
              description="We identify and measure the use of emotionally charged language that may be used to manipulate readers."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<Flame className="h-6 w-6" />}
              title="Clickbait Recognition"
              description="Our system detects sensationalist headlines and content designed to generate clicks rather than inform."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<Scale className="h-6 w-6" />}
              title="Bias Measurement"
              description="We analyze political, ideological, and other forms of bias in news content to help readers identify slanted reporting."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<Target className="h-6 w-6" />}
              title="Persuasion Techniques"
              description="Our analysis identifies common propaganda and persuasion tactics used to influence opinions rather than present facts."
              className="animate-fade-in"
            />
          </div>
          
          <div className="bg-muted/50 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">How Sentiment Reveals Misinformation</h2>
            <div className="space-y-4">
              <p>
                Fake news often relies on emotional manipulation rather than factual reporting. Our sentiment analysis system:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium text-primary mb-2">Emotion Analysis</h3>
                  <p className="text-sm">Measures the intensity of emotions like anger, fear, and outrage in content, which are often amplified in fake news.</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium text-primary mb-2">Objectivity Scoring</h3>
                  <p className="text-sm">Evaluates how factual vs. opinion-based the content is, helping identify subjective reporting masquerading as news.</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium text-primary mb-2">Language Intensity</h3>
                  <p className="text-sm">Measures the use of superlatives, absolutes, and dramatic language that often signal exaggeration.</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium text-primary mb-2">Polarization Detection</h3>
                  <p className="text-sm">Identifies content designed to divide readers along political or social lines rather than inform.</p>
                </div>
              </div>
              <p className="mt-4">
                By analyzing these emotional and rhetorical patterns, our system can flag content that attempts to manipulate rather than inform, a common characteristic of fake news and propaganda.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SentimentAnalysis;
