export default function BlockchainSpinner() {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-2 border-transparent border-t-primary rounded-full animate-spin" />
      <div className="absolute inset-1 border-2 border-transparent border-t-secondary rounded-full animate-spin-slow" />
      <div className="absolute inset-2 border-2 border-transparent border-t-accent rounded-full animate-spin-slower" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-primary rounded-full" />
      </div>
    </div>
  );
} 