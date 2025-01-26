'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import styles from '@/styles/pages/submit.module.css';

export default function SubmitPaper() {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    abstract: '',
    keywords: '',
    file: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.formContainer}>
          {/* Pixel Corners */}
          <div className={styles.pixelCorner}></div>
          <div className={styles.pixelCorner}></div>
          <div className={styles.pixelCorner}></div>
          <div className={styles.pixelCorner}></div>

          <header className={styles.header}>
            <h1 className={styles.title}>Submit Your Research</h1>
            <p className={styles.subtitle}>
              Share your work with the decentralized academic community
            </p>
          </header>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.label}>
                PAPER TITLE
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className={styles.input}
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="Enter your paper title..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="authors" className={styles.label}>
                AUTHORS
              </label>
              <input
                type="text"
                id="authors"
                name="authors"
                className={styles.input}
                value={formData.authors}
                onChange={handleInputChange}
                required
                placeholder="Author names (separated by commas)..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="abstract" className={styles.label}>
                ABSTRACT
              </label>
              <textarea
                id="abstract"
                name="abstract"
                className={styles.textarea}
                value={formData.abstract}
                onChange={handleInputChange}
                required
                placeholder="Enter your paper abstract..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="keywords" className={styles.label}>
                KEYWORDS
              </label>
              <input
                type="text"
                id="keywords"
                name="keywords"
                className={styles.input}
                value={formData.keywords}
                onChange={handleInputChange}
                required
                placeholder="Enter keywords (separated by commas)..."
              />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.fileUpload}>
                <label htmlFor="file" className={styles.fileUploadLabel}>
                  {formData.file ? '📄 File Selected' : '📎 Upload PDF'}
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className={styles.fileInput}
                  onChange={handleFileChange}
                  accept=".pdf"
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              SUBMIT PAPER
            </button>
          </form>
        </div>
      </main>
    </div>
  );
} 