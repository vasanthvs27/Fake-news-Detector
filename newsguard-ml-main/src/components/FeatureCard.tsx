
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden p-6 rounded-2xl glass-card transition-all duration-400 hover:shadow-card group",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-400"></div>
      <div className="space-y-4">
        <div className="p-3 inline-flex items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
