
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileText } from 'lucide-react';

interface TextInputFormProps {
  title: string;
  text: string;
  source: string;
  onTitleChange: (value: string) => void;
  onTextChange: (value: string) => void;
  onSourceChange: (value: string) => void;
}

const TextInputForm = ({
  title,
  text,
  source,
  onTitleChange,
  onTextChange,
  onSourceChange
}: TextInputFormProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div>
        <Label htmlFor="title">Title (Optional)</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Enter the title of the article"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="text">Content</Label>
        <Textarea
          id="text"
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="Paste the article content here..."
          className="mt-1 min-h-[200px]"
        />
      </div>
      
      <div>
        <Label htmlFor="source">Source (Optional)</Label>
        <Input
          id="source"
          value={source}
          onChange={(e) => onSourceChange(e.target.value)}
          placeholder="Enter the source of the content (e.g., website name)"
          className="mt-1"
        />
      </div>
    </div>
  );
};

export default TextInputForm;
