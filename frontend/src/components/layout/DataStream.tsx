export default function DataStream() {
  return (
    <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
      <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream" style={{ left: '20%' }} />
      <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-data-stream" style={{ left: '40%', animationDelay: '2s' }} />
      <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-data-stream" style={{ left: '60%', animationDelay: '1s' }} />
      <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream" style={{ left: '80%', animationDelay: '3s' }} />
    </div>
  );
} 