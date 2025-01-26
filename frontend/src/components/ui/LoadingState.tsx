import BlockchainSpinner from './BlockchainSpinner';

interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  fullscreen?: boolean;
}

export default function LoadingState({ 
  message = 'Loading...', 
  size = 'md',
  fullscreen = false 
}: LoadingStateProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const Container = fullscreen ? 'div' : 'div';
  const containerClasses = fullscreen 
    ? 'fixed inset-0 bg-background/80 backdrop-blur-sm z-50'
    : 'min-h-[200px]';

  return (
    <Container className={`
      ${containerClasses}
      flex flex-col items-center justify-center gap-4
      animate-fade-in
    `}>
      <div className={sizeClasses[size]}>
        <BlockchainSpinner />
      </div>
      {message && (
        <p className="text-sm text-foreground/60 animate-pulse">
          {message}
        </p>
      )}
    </Container>
  );
} 