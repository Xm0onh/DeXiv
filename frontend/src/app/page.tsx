import Image from "next/image";
import SearchBar from "../components/SearchBar";
import PaperList from "../components/PaperList";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">DexiV</h1>
            <span className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-100">
              Beta
            </span>
          </div>
          <nav className="space-x-6">
            <a href="/submit" className="hover:text-blue-600">Submit Paper</a>
            <a href="/categories" className="hover:text-blue-600">Categories</a>
            <a href="/about" className="hover:text-blue-600">About</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Decentralized Academic Research
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Access and share research papers on the blockchain
          </p>
          <SearchBar />
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Recent Submissions</h3>
          <PaperList />
        </div>
      </main>

      <footer className="max-w-6xl mx-auto mt-20 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 DexiV. Powered by Blockchain.
          </p>
          <div className="flex gap-6">
            <a href="/terms" className="text-sm hover:text-blue-600">Terms</a>
            <a href="/privacy" className="text-sm hover:text-blue-600">Privacy</a>
            <a href="/contact" className="text-sm hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
