'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', query);
  };

  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search papers, authors, or keywords..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     dark:bg-gray-900 dark:text-white"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 
                     bg-blue-600 text-white rounded-md hover:bg-blue-700
                     transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
} 