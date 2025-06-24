
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DetectionForm from '@/components/DetectionForm';

const Detector = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 fade-in-slide-up">
              Fake News Detector
            </h1>
            <p className="text-muted-foreground fade-in-slide-up">
              Analyze any article or news content to determine its credibility and truthfulness
            </p>
          </div>
          
          <DetectionForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Detector;
