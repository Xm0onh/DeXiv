import BlockchainSpinner from './BlockchainSpinner';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
      <BlockchainSpinner />
      <p className="text-sm text-foreground/60">Loading...</p>
    </div>
  );
} 