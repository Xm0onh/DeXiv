import Link from 'next/link';

export default function FloatingActionButton() {
  return (
    <Link 
      href="/submit"
      className="fixed bottom-8 right-8 z-50
                p-4 rounded-full bg-primary text-background
                shadow-lg hover:shadow-primary/20 hover:-translate-y-1
                transition-all duration-300"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </Link>
  );
} 