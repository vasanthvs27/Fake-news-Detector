
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Brain, Database, Globe, Layers, Server, BarChart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl fade-in-slide-up">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
              About Our Fake News Detection System
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Learn how our advanced machine learning system works to identify 
              and classify misinformation with high accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6 fade-in-slide-up">
              <h2 className="text-2xl font-medium">Our Mission</h2>
              <p className="text-muted-foreground">
                In an era of information overload, distinguishing fact from fiction has 
                become increasingly challenging. Our mission is to empower individuals and 
                organizations to make informed decisions by providing tools that help identify 
                misinformation and promote information literacy.
              </p>
              
              <p className="text-muted-foreground">
                We believe that access to accurate information is fundamental to a healthy 
                society and democracy. By leveraging cutting-edge technology, we aim to 
                contribute to a more informed public discourse and help combat the spread 
                of misinformation.
              </p>
              
              <h2 className="text-2xl font-medium pt-4">How It Works</h2>
              <p className="text-muted-foreground">
                Our system uses a comprehensive machine learning pipeline that analyzes 
                content across multiple dimensions:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Natural Language Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Analysis of linguistic patterns, writing style, and content structure
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Database className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Source Verification</h3>
                    <p className="text-sm text-muted-foreground">
                      Assessment of publication credibility and historical accuracy
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Cross-referencing</h3>
                    <p className="text-sm text-muted-foreground">
                      Comparison with verified information sources and fact-checking databases
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Layers className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Multimodal Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Examination of text, metadata, and contextual factors
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 fade-in-slide-up delay-2">
              <h2 className="text-2xl font-medium">Technology Stack</h2>
              <p className="text-muted-foreground">
                Our system employs a sophisticated technology stack that combines traditional
                machine learning with deep learning techniques to achieve high accuracy in 
                fake news detection.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="rounded-xl p-5 glass-card">
                  <h3 className="font-medium mb-3">Machine Learning Models</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      TensorFlow/Keras for deep learning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      scikit-learn for traditional ML models
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      BERT & Transformer-based models
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Ensemble methods for improved accuracy
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-xl p-5 glass-card">
                  <h3 className="font-medium mb-3">Natural Language Processing</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      NLTK for text preprocessing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      spaCy for entity recognition
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      TF-IDF and embedding techniques
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Sentiment analysis libraries
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-xl p-5 glass-card">
                  <h3 className="font-medium mb-3">Infrastructure</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Cloud-based processing on AWS/GCP
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Flask/Django for web services
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      RESTful API architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Docker containers for deployment
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-xl p-5 glass-card">
                  <h3 className="font-medium mb-3">Performance Metrics</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      95%+ classification accuracy
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      F1-score above 0.9
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      ROC-AUC score of 0.95+
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Balanced precision and recall
                    </li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl font-medium pt-4">Data & Privacy</h2>
              <p className="text-muted-foreground">
                We take data privacy seriously. Our system is trained on publicly available 
                datasets and does not store the content you analyze beyond the immediate 
                processing requirements. All analysis is conducted with the highest standards 
                of privacy and security.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Our Machine Learning Pipeline
            </h2>
            <p className="text-muted-foreground">
              A comprehensive approach to fake news detection
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/30 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              <div className="glass-card p-5 text-center">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Data Collection</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Gathering content from reliable and unreliable sources
                </p>
              </div>
              
              <div className="glass-card p-5 text-center">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Preprocessing</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Cleaning and transforming text for analysis
                </p>
              </div>
              
              <div className="glass-card p-5 text-center">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Feature Extraction</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Identifying key linguistic and contextual patterns
                </p>
              </div>
              
              <div className="glass-card p-5 text-center">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Model Training</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Building and optimizing machine learning algorithms
                </p>
              </div>
              
              <div className="glass-card p-5 text-center">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Evaluation</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Testing performance metrics and fine-tuning
                </p>
              </div>
              
              <div className="glass-card p-5 text-center">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Deployment</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Making the system available via web and API
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
