'use client';

import { useState } from 'react';
import styles from './submit.module.css';

export default function SubmitPaper() {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    authors: '',
    category: '',
    keywords: '',
    pdfFile: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting paper:', formData);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.navContent}>
            <div className="flex items-center">
              <h1 className={styles.logo}>DexiV</h1>
            </div>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.formContainer}>
          <div>
            <div className={styles.header}>
              <h1 className={styles.title}>Submit Research Paper</h1>
              <p className={styles.description}>
                Your research will be permanently stored on the blockchain and made available 
                to the academic community worldwide.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="title" className={styles.label}>
                  Paper Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="authors" className={styles.label}>
                  Authors * <span className={styles.description}>(comma-separated)</span>
                </label>
                <input
                  type="text"
                  id="authors"
                  value={formData.authors}
                  onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="category" className={styles.label}>
                  Primary Category *
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className={styles.input}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="cs.AI">Computer Science - Artificial Intelligence</option>
                  <option value="cs.CL">Computer Science - Computation and Language</option>
                  <option value="cs.CR">Computer Science - Cryptography and Security</option>
                  <option value="cs.DC">Computer Science - Distributed Computing</option>
                  <option value="math.AC">Mathematics - Commutative Algebra</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="keywords" className={styles.label}>
                  Keywords <span className={styles.description}>(comma-separated)</span>
                </label>
                <input
                  type="text"
                  id="keywords"
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="abstract" className={styles.label}>
                  Abstract *
                </label>
                <textarea
                  id="abstract"
                  value={formData.abstract}
                  onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                  rows={6}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="file-upload" className={styles.label}>
                  Paper PDF *
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setFormData({ ...formData, pdfFile: e.target.files?.[0] || null })}
                  className={styles.input}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit Paper
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 