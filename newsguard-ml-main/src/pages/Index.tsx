
import { ArrowRight, BarChart3, Brain, FileText, MessageCircle, ShieldCheck, Webhook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import NewsCard from '@/components/NewsCard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl fade-in-slide-up">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Advanced Machine Learning Powered
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Detect fake news with precision and confidence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our state-of-the-art AI system analyzes content to identify misinformation 
              and help you make informed decisions about what you read online.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/detector" className="inline-flex items-center gap-2">
                  Try the Detector <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-6">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Powered by Advanced Machine Learning
            </h2>
            <p className="text-muted-foreground">
              Our system leverages cutting-edge AI to analyze content from multiple angles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Brain className="h-6 w-6" />}
              title="Natural Language Processing"
              description="Advanced text analysis that examines linguistic patterns, sentiment, and content structure to identify suspicious content."
              className="animate-fade-in delay-1"
            />
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Source Credibility Analysis"
              description="Evaluation of the source's historical accuracy, reputation, and consistency to establish trustworthiness."
              className="animate-fade-in delay-2"
            />
            <FeatureCard
              icon={<FileText className="h-6 w-6" />}
              title="Content Verification"
              description="Cross-reference with verified facts and detect inconsistencies or exaggerations in reporting."
              className="animate-fade-in delay-3"
            />
            <FeatureCard
              icon={<MessageCircle className="h-6 w-6" />}
              title="Sentiment Analysis"
              description="Detection of emotional manipulation, bias, and inflammatory language designed to provoke reactions."
              className="animate-fade-in delay-1"
            />
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Clickbait Detection"
              description="Identification of sensationalist headlines and content designed to generate clicks rather than inform."
              className="animate-fade-in delay-2"
            />
            <FeatureCard
              icon={<Webhook className="h-6 w-6" />}
              title="API Integration"
              description="Easily integrate our detection capabilities into your own applications with our robust API."
              className="animate-fade-in delay-3"
            />
          </div>
        </div>
      </section>
      
      {/* Examples Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              See It In Action
            </h2>
            <p className="text-muted-foreground">
              Examples of how our system analyzes and classifies news content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsCard
              title="Global Leaders Reach Historic Climate Agreement at Summit"
              source="World News Network"
              snippet="In a groundbreaking development, world leaders have unanimously agreed to significant carbon emission reductions following two weeks of intense negotiations at the Climate Summit."
              date="May 15, 2023"
              credibilityScore={0.87}
            />
            <NewsCard
              title="Scientists Discover Miracle Cure That Big Pharma Doesn't Want You to Know About"
              source="Health Revolution Blog"
              snippet="A team of independent researchers claims to have found a natural compound that cures multiple diseases overnight, but pharmaceutical companies are allegedly suppressing this information."
              date="June 3, 2023"
              credibilityScore={0.12}
            />
            <NewsCard
              title="Market Analysis: Tech Stocks Show Steady Growth in Q2"
              source="Financial Times"
              snippet="Despite economic uncertainties, major technology companies reported better-than-expected earnings for the second quarter, driving a modest rally in the sector."
              date="July 12, 2023"
              credibilityScore={0.94}
            />
            <NewsCard
              title="SHOCKING: Celebrity Caught in Secret Government Conspiracy"
              source="Celebrity Insider"
              snippet="Anonymous sources reveal that a popular celebrity has been working with government agencies on a classified project that could change everything we know about privacy."
              date="August 24, 2023"
              credibilityScore={0.23}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link to="/detector" className="inline-flex items-center gap-2">
                Try for Yourself <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Ready to fight misinformation?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Get started with our fake news detection tool today and help promote 
            information integrity in your community.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary" 
            className="rounded-full px-6"
          >
            <Link to="/detector">Try the Detector Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
