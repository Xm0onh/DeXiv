'use client';

export default function NavIndicator() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50
                    px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm
                    border border-border/50 shadow-lg">
      <div className="flex items-center gap-3 text-sm">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-foreground/70">Connected to Blockchain</span>
      </div>
    </div>
  );
} 