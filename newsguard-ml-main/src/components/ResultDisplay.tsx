
import { Check, X, AlertTriangle, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ResultDisplayProps {
  result: {
    isReal: boolean;
    credibilityScore: number;
    explanation: string;
    features: {
      label: string;
      value: number;
    }[];
  };
}

const ResultDisplay = ({ result }: ResultDisplayProps) => {
  const score = result.credibilityScore * 100;
  const formattedScore = Math.round(score);
  
  let statusColor = 'bg-muted text-muted-foreground';
  let statusIcon = <Info className="h-6 w-6" />;
  let statusText = 'Uncertain';
  
  if (score >= 70) {
    statusColor = 'bg-truth text-truth-foreground';
    statusIcon = <Check className="h-6 w-6" />;
    statusText = 'Likely Real';
  } else if (score <= 30) {
    statusColor = 'bg-falsehood text-falsehood-foreground';
    statusIcon = <X className="h-6 w-6" />;
    statusText = 'Likely Fake';
  } else {
    statusColor = 'bg-amber-500 text-white';
    statusIcon = <AlertTriangle className="h-6 w-6" />;
    statusText = 'Uncertain';
  }
  
  const getProgressColor = (score: number) => {
    return score >= 70 ? "bg-truth" : 
           score <= 30 ? "bg-falsehood" : 
           "bg-amber-500";
  };
  
  const getFeatureProgressColor = (label: string, value: number) => {
    const isPositiveFeature = label === "Source credibility" || label === "Content coherence";
    if (isPositiveFeature) {
      return value > 0.5 ? "bg-truth" : "bg-falsehood";
    } else {
      return value < 0.5 ? "bg-truth" : "bg-falsehood";
    }
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div 
          className={cn(
            "rounded-full p-2 flex items-center justify-center",
            statusColor
          )}
        >
          {statusIcon}
        </div>
        
        <div>
          <h3 className="text-xl font-medium">{statusText}</h3>
          <p className="text-muted-foreground">{result.explanation}</p>
        </div>
      </div>
      
      <Card className="p-4">
        <div className="text-center mb-2">
          <span className="text-4xl font-bold">
            {formattedScore}%
          </span>
          <p className="text-sm text-muted-foreground">Credibility Score</p>
        </div>
        
        <Progress 
          value={score} 
          className={cn("h-3 mb-6", getProgressColor(score))}
        />
        
        <div className="space-y-4 mt-6">
          <h4 className="font-medium">Feature Analysis</h4>
          <div className="space-y-3">
            {result.features.map((feature, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{feature.label}</span>
                  <span>{Math.round(feature.value * 100)}%</span>
                </div>
                <Progress 
                  value={feature.value * 100} 
                  className={cn("h-2", getFeatureProgressColor(feature.label, feature.value))}
                />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultDisplay;
