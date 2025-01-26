export default function PaperList() {
  // This is a placeholder. Later we'll fetch this from the blockchain
  const papers = [
    {
      id: 1,
      title: "Quantum Computing: A New Approach",
      authors: ["John Doe", "Jane Smith"],
      category: "cs.QC",
      abstract: "This paper presents a novel approach to quantum computing...",
      date: "2024-03-20",
    },
    // Add more paper examples...
  ];

  return (
    <div className="space-y-6">
      {papers.map((paper) => (
        <article
          key={paper.id}
          className="p-6 rounded-lg border border-gray-200 dark:border-gray-800
                     hover:border-blue-500 transition-colors"
        >
          <h4 className="text-xl font-semibold mb-2 hover:text-blue-600">
            <a href={`/paper/${paper.id}`}>{paper.title}</a>
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {paper.authors.join(", ")}
          </p>
          <p className="text-sm mb-3">{paper.abstract}</p>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>{paper.category}</span>
            <span>•</span>
            <span>{paper.date}</span>
          </div>
        </article>
      ))}
    </div>
  );
} 