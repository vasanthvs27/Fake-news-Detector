
import { Button } from '@/components/ui/button';
import { FileText, Link as LinkIcon } from 'lucide-react';

interface TabSelectorProps {
  activeTab: 'text' | 'url';
  onTabChange: (tab: 'text' | 'url') => void;
}

const TabSelector = ({ activeTab, onTabChange }: TabSelectorProps) => {
  return (
    <div className="flex items-center p-1 bg-muted rounded-lg mb-6">
      <Button
        type="button"
        variant={activeTab === 'text' ? 'default' : 'ghost'}
        className="flex-1 gap-2"
        onClick={() => onTabChange('text')}
      >
        <FileText className="h-4 w-4" />
        Text Input
      </Button>
      <Button
        type="button"
        variant={activeTab === 'url' ? 'default' : 'ghost'}
        className="flex-1 gap-2"
        onClick={() => onTabChange('url')}
      >
        <LinkIcon className="h-4 w-4" />
        URL Input
      </Button>
    </div>
  );
};

export default TabSelector;
