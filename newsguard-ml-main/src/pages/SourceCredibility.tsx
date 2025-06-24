
import { ShieldCheck, History, Users, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';

const SourceCredibility = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 fade-in-slide-up">
              Source Credibility Analysis
            </h1>
            <p className="text-muted-foreground fade-in-slide-up">
              Evaluating the trustworthiness of information sources through reputation, historical accuracy, and domain expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Domain Reputation Scoring"
              description="We maintain a database of website credibility scores based on their history of publishing accurate information."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<History className="h-6 w-6" />}
              title="Historical Accuracy Tracking"
              description="Sources are evaluated based on their track record of corrections, retractions, and verified reporting."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Author Credibility Analysis"
              description="We analyze author expertise, credentials, and history of accurate reporting to evaluate content reliability."
              className="animate-fade-in"
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Citation Network Analysis"
              description="Our system tracks how information propagates across media outlets to identify original sources and verify claims."
              className="animate-fade-in"
            />
          </div>
          
          <div className="bg-muted/50 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Why Source Credibility Matters</h2>
            <div className="space-y-4">
              <p>
                The source of information is often the strongest indicator of its reliability. Our source credibility system:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintains a comprehensive database of news sources and their credibility ratings</li>
                <li>Evaluates institutional factors like editorial standards and correction policies</li>
                <li>Examines transparency practices including ownership disclosure and funding sources</li>
                <li>Analyzes citation patterns to trusted primary sources and expert opinions</li>
                <li>Tracks changes in source reliability over time to detect declining standards</li>
              </ul>
              <p className="mt-4">
                By combining automated analysis with expert input, our system can quickly evaluate whether information comes from reliable sources or those with a history of misinformation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SourceCredibility;
