
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
} from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResultDisplay from './ResultDisplay';
import TabSelector from './detection/TabSelector';
import TextInputForm from './detection/TextInputForm';
import UrlInputForm from './detection/UrlInputForm';
import FormActions from './detection/FormActions';
import { detectFakeNews, DetectionResult } from '@/services/detectionService';
import { extractDomainFromUrl } from '@/lib/utils';

const DetectionForm = () => {
  const { toast } = useToast();
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [activeTab, setActiveTab] = useState<'text' | 'url'>('text');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (activeTab === 'text' && !text) {
      toast({
        title: "Input required",
        description: "Please enter some text to analyze",
        variant: "destructive"
      });
      return;
    }
    
    if (activeTab === 'url' && !url) {
      toast({
        title: "URL required",
        description: "Please enter a valid URL to analyze",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    setResult(null);
    
    try {
      let detectionResult;
      
      if (activeTab === 'text') {
        // Text analysis
        detectionResult = await detectFakeNews({
          title,
          content: text,
          source
        });
      } else {
        // URL analysis
        detectionResult = await detectFakeNews({
          url,
          content: "Content to be extracted from URL", // In a real implementation, the backend would fetch the content
          source: extractDomainFromUrl(url)
        });
      }
      
      setResult(detectionResult);
      
      toast({
        title: "Analysis complete",
        description: "We've analyzed your content and provided results",
      });
    } catch (error) {
      console.error('Error during detection:', error);
      
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your content. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setText('');
    setSource('');
    setUrl('');
    setTitle('');
    setResult(null);
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl">Fake News Detector</CardTitle>
          <CardDescription>
            Analyze text or a URL to detect if the content is likely to be fake news
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {result ? (
            <div className="animate-fade-in">
              <ResultDisplay result={result} />
              <div className="mt-6 flex justify-end">
                <Button 
                  variant="outline" 
                  onClick={() => setResult(null)}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Analyze Another
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <TabSelector 
                activeTab={activeTab} 
                onTabChange={setActiveTab} 
              />
              
              {activeTab === 'text' ? (
                <TextInputForm
                  title={title}
                  text={text}
                  source={source}
                  onTitleChange={setTitle}
                  onTextChange={setText}
                  onSourceChange={setSource}
                />
              ) : (
                <UrlInputForm
                  url={url}
                  onUrlChange={setUrl}
                />
              )}
              
              <FormActions
                isLoading={isLoading}
                onReset={handleReset}
                onSubmit={handleSubmit}
              />
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DetectionForm;
