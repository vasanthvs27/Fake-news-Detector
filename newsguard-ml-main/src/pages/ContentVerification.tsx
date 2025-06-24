
import { CheckCircle, FileSearch, AlertTriangle, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';

const ContentVerification = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 fade-in-slide-up">
              Content Verification
            </h1>
            <p className="text-muted-foreground fade-in-slide-up">
              Validating factual claims and content accuracy through cross-referencing, fact-checking, and inconsistency detection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              icon={<CheckCircle className="h-6 w-6" />}
              title="Fact Cross-Referencing"
              description="We extract factual claims and verify them against authoritative sources and databases of known facts."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<FileSearch className="h-6 w-6" />}
              title="Claim Extraction"
              description="Our system identifies specific claims made in news content and evaluates their verifiability and supporting evidence."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<AlertTriangle className="h-6 w-6" />}
              title="Inconsistency Detection"
              description="We analyze content for internal contradictions, exaggerations, and logical inconsistencies that suggest misinformation."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<BarChart className="h-6 w-6" />}
              title="Statistical Accuracy"
              description="Our system checks numerical claims and statistics against official data sources to verify accuracy."
              className="animate-fade-in"
            />
          </div>
          
          <div className="bg-muted/50 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">The Content Verification Process</h2>
            <div className="space-y-4">
              <p>
                Beyond analyzing writing style and source credibility, we dive deep into the actual facts presented in news content:
              </p>
              <div className="space-y-6 mt-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">1</div>
                  <div>
                    <h3 className="font-medium">Claim Identification</h3>
                    <p className="text-muted-foreground">Our system extracts specific factual assertions from the text.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">2</div>
                  <div>
                    <h3 className="font-medium">Evidence Retrieval</h3>
                    <p className="text-muted-foreground">We search verified sources of information to find supporting or contradicting evidence.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">3</div>
                  <div>
                    <h3 className="font-medium">Fact Checking</h3>
                    <p className="text-muted-foreground">Claims are checked against multiple verified data sources and expert knowledge.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">4</div>
                  <div>
                    <h3 className="font-medium">Context Analysis</h3>
                    <p className="text-muted-foreground">We verify if facts are presented in their proper context or misleadingly framed.</p>
                  </div>
                </div>
              </div>
              <p className="mt-4">
                This multi-layered verification approach allows our system to determine whether news content includes false information, even when it comes from sources that might otherwise appear trustworthy.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContentVerification;
