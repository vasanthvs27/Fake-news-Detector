
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle } from 'lucide-react';

interface UrlInputFormProps {
  url: string;
  onUrlChange: (value: string) => void;
}

const UrlInputForm = ({ url, onUrlChange }: UrlInputFormProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div>
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          value={url}
          onChange={(e) => onUrlChange(e.target.value)}
          placeholder="Enter the URL of the article to analyze"
          className="mt-1"
        />
      </div>
      
      <div className="p-4 rounded-lg bg-secondary flex items-center gap-3">
        <AlertCircle className="h-5 w-5 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          We'll fetch and analyze the content from this URL automatically.
        </p>
      </div>
    </div>
  );
};

export default UrlInputForm;
