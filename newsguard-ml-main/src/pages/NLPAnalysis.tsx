
import { Brain, FileText, BarChart2, Network } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';

const NLPAnalysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 fade-in-slide-up">
              Natural Language Processing
            </h1>
            <p className="text-muted-foreground fade-in-slide-up">
              Our advanced NLP technologies analyze text patterns, linguistic markers, and semantic structures to identify misinformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              icon={<Brain className="h-6 w-6" />}
              title="Transformer-Based Models"
              description="We employ state-of-the-art transformer models like BERT and RoBERTa to understand context and nuances in news text."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<FileText className="h-6 w-6" />}
              title="Contextual Analysis"
              description="News content is compared against trusted sources using semantic similarity techniques to verify claims and statements."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<BarChart2 className="h-6 w-6" />}
              title="Topic Modeling"
              description="We categorize news into topics using Latent Dirichlet Allocation (LDA) to better understand content context."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<Network className="h-6 w-6" />}
              title="Named Entity Recognition"
              description="Our systems identify people, organizations, locations, and dates to cross-reference facts against verified information."
              className="animate-fade-in"
            />
          </div>
          
          <div className="bg-muted/50 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">How NLP Powers Fake News Detection</h2>
            <div className="space-y-4">
              <p>
                Natural Language Processing forms the core of our detection system, enabling computers to understand, interpret, and analyze human language at scale. Our NLP pipeline includes:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <span className="font-medium">Text preprocessing</span> - tokenization, stopword removal, and normalization
                </li>
                <li>
                  <span className="font-medium">Feature extraction</span> - converting text into numerical representations
                </li>
                <li>
                  <span className="font-medium">Semantic analysis</span> - understanding meaning, context, and relationships between entities
                </li>
                <li>
                  <span className="font-medium">Pattern recognition</span> - identifying linguistic markers of misinformation
                </li>
                <li>
                  <span className="font-medium">Classification</span> - determining credibility scores based on multiple features
                </li>
              </ol>
              <p>
                By combining these techniques with continuous model training on diverse datasets, our system can identify subtle patterns that indicate misinformation, even as fake news tactics evolve.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NLPAnalysis;
