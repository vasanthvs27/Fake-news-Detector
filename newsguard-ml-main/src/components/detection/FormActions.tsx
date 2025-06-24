
import { Button } from '@/components/ui/button';
import { Loader2, Newspaper } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface FormActionsProps {
  isLoading: boolean;
  onReset: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const FormActions = ({ isLoading, onReset, onSubmit }: FormActionsProps) => {
  return (
    <>
      <Separator />
      
      <div className="flex justify-between">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onReset}
          disabled={isLoading}
        >
          Reset
        </Button>
        <Button 
          type="submit" 
          disabled={isLoading}
          className="min-w-[120px]"
          onClick={onSubmit}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing
            </>
          ) : (
            <>
              <Newspaper className="mr-2 h-4 w-4" />
              Analyze
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default FormActions;
