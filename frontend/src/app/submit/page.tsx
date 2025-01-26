'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import styles from '@/styles/pages/submit.module.css';

export default function SubmitPaper() {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    authors: '',
    category: '',
    keywords: '',
    pdfFile: null as File | null,
  });

  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({
        ...prev,
        pdfFile: e.dataTransfer.files[0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement submission logic
    console.log('Submitting paper:', formData);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.formContainer}>
          <div className={styles.glowOrb}></div>
          <div className={styles.glowOrb2}></div>
          
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
                Paper Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={styles.input}
                placeholder="Enter the title of your paper"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="authors" className={styles.label}>
                Authors
              </label>
              <input
                type="text"
                id="authors"
                value={formData.authors}
                onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
                className={styles.input}
                placeholder="Enter authors (separated by commas)"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="abstract" className={styles.label}>
                Abstract
              </label>
              <textarea
                id="abstract"
                value={formData.abstract}
                onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Enter your paper's abstract"
                rows={4}
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="category" className={styles.label}>
                  Category
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className={styles.select}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="cs.AI">Computer Science - AI</option>
                  <option value="cs.CL">Computer Science - Computation and Language</option>
                  <option value="cs.CR">Computer Science - Cryptography</option>
                  <option value="cs.DC">Computer Science - Distributed Computing</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="keywords" className={styles.label}>
                  Keywords
                </label>
                <input
                  type="text"
                  id="keywords"
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  className={styles.input}
                  placeholder="Enter keywords (separated by commas)"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Upload PDF</label>
              <div 
                className={`${styles.dropzone} ${dragActive ? styles.dragActive : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="pdfFile"
                  accept=".pdf"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      setFormData({ ...formData, pdfFile: e.target.files[0] });
                    }
                  }}
                  className={styles.fileInput}
                />
                <div className={styles.dropzoneContent}>
                  <span className={styles.uploadIcon}>📄</span>
                  <p>Drag and drop your PDF here or click to browse</p>
                  {formData.pdfFile && (
                    <p className={styles.fileName}>{formData.pdfFile.name}</p>
                  )}
                </div>
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit Paper
            </button>
          </form>
        </div>
      </main>
    </div>
  );
} 