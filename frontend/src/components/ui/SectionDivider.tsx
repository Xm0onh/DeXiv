export default function SectionDivider() {
  return (
    <div className="relative h-px w-full my-16">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent 
                      via-primary/20 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-2 h-2 rounded-full bg-primary/30" />
    </div>
  );
} 