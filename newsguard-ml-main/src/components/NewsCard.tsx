
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

interface NewsCardProps {
  title: string;
  source: string;
  snippet: string;
  date: string;
  credibilityScore: number;
  className?: string;
}

const NewsCard = ({ 
  title, 
  source, 
  snippet, 
  date, 
  credibilityScore,
  className 
}: NewsCardProps) => {
  const isCredible = credibilityScore >= 0.7;
  
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-400 hover:shadow-card animate-fade-in",
        className
      )}
    >
      <CardContent className="p-0">
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">{source}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{date}</span>
              </div>
              <h3 className="text-xl font-medium leading-tight">{title}</h3>
            </div>
            <Badge 
              className={cn(
                "text-xs px-3 py-1 ml-auto",
                isCredible 
                  ? "bg-truth text-truth-foreground hover:bg-truth/90" 
                  : "bg-falsehood text-falsehood-foreground hover:bg-falsehood/90"
              )}
            >
              {isCredible ? (
                <span className="flex items-center gap-1">
                  <Check className="h-3 w-3" /> 
                  Credible
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <X className="h-3 w-3" /> 
                  Suspicious
                </span>
              )}
            </Badge>
          </div>
          
          <p className="text-muted-foreground line-clamp-3">{snippet}</p>
          
          <div className="pt-2">
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
              <div 
                className={cn(
                  "h-full rounded-full",
                  isCredible ? "bg-truth" : "bg-falsehood"
                )}
                style={{ width: `${credibilityScore * 100}%` }}
              ></div>
            </div>
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>Credibility Score</span>
              <span>{Math.round(credibilityScore * 100)}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
