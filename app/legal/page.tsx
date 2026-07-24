'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { legalDocuments, type ContentBlock } from './data';
import { cn } from '@/lib/utils'; // adjust path to your cn() helper

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={idx} className="text-xl font-medium text-slate-900 mt-8 mb-2 tracking-wide scroll-mt-20">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={idx} className="text-base font-medium text-slate-800 mt-6 mb-2 tracking-wide scroll-mt-20">
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p key={idx} className="text-sm text-slate-600 leading-relaxed mb-3">
          {block.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={idx} className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-4 marker:text-blue-600">
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">{item}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={idx} className="list-decimal pl-5 space-y-1 text-sm text-slate-600 mb-4 marker:text-blue-600">
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">{item}</li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div key={idx} className="overflow-x-auto mb-4 border border-slate-200 shadow-sm rounded-none">
          <table className="min-w-full text-sm text-left text-slate-600">
            <thead className="bg-slate-50 text-slate-900 font-medium uppercase text-xs tracking-widest">
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 border-b border-slate-200 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {block.rows.map((row, ri) => (
                <tr key={ri} className="hover:bg-slate-50 transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'blockquote':
      return (
        <blockquote
          key={idx}
          className="border-l-4 border-blue-600 bg-blue-50/50 p-4 text-sm text-slate-800 font-medium italic mb-4 shadow-sm rounded-none"
        >
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}

export default function LegalPage() {
  const [activeId, setActiveId] = useState<string>(legalDocuments[0].id);
  const activeDoc = legalDocuments.find((d) => d.id === activeId) ?? legalDocuments[0];

  // Sync with URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && legalDocuments.some((d) => d.id === hash)) {
      setActiveId(hash);
    }
  }, []);

  // Update URL hash when tab changes
  useEffect(() => {
    if (window.history.replaceState) {
      window.history.replaceState(null, '', `#${activeId}`);
    }
  }, [activeId]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <main className="min-h-screen bg-slate-50/50 font-sans">
      {/* Hero Section - Sharp, Blue, Slim & Animated */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 border-b border-blue-950 relative overflow-hidden rounded-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 py-10 lg:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-xl"
            >
              <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-2 drop-shadow-sm">
                AJAX Global LLC
              </p>
              <h1 className="text-3xl lg:text-4xl font-light text-white tracking-wide mb-3 drop-shadow-sm">
                Legal Center
              </h1>
              <p className="text-blue-100/90 text-sm leading-relaxed font-light">
                Review our terms, privacy practices, and compliance disclosures. Select a document from the navigation to view its specific guidelines.
              </p>
            </motion.div>
            
            {/* Glass-morphic Effective Date Badge - Sharp Corners */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="hidden md:flex flex-col items-end bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-lg rounded-none"
            >
              <p className="text-[10px] text-blue-200 uppercase tracking-widest font-semibold mb-1">
                Effective Date
              </p>
              <p className="text-base font-medium text-white tracking-wide">
                {activeDoc.effectiveDate}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 shrink-0">
            <nav className="sticky top-8 bg-white border border-slate-200 shadow-sm overflow-hidden rounded-none">
              <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/80">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Documents
                </span>
              </div>
              <div className="p-2 bg-white flex flex-col gap-1">
                {legalDocuments.map((doc) => {
                  const isActive = doc.id === activeId;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => setActiveId(doc.id)}
                      className={cn(
                        'w-full text-left px-3 py-2 text-sm font-medium transition-all duration-200 flex flex-col gap-0.5 border-l-2 rounded-none',
                        isActive
                          ? 'bg-blue-50/50 text-blue-700 border-blue-600'
                          : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      )}
                    >
                      <span className="block">{doc.title}</span>
                      {doc.description && (
                        <span className={cn(
                          'block text-[11px] font-normal leading-snug',
                          isActive ? 'text-blue-500' : 'text-slate-400'
                        )}>
                          {doc.description}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>
          </aside>

          {/* Main Content Panel */}
          <section className="flex-1 min-w-0">
            <div className="bg-white border border-slate-200 shadow-sm p-6 sm:p-8 rounded-none">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDoc.id}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, y: -5, transition: { duration: 0.2 } }}
                >
                  {/* Document Header */}
                  <motion.div variants={itemVariants} className="border-b border-slate-100 pb-4 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-wide">
                        {activeDoc.title}
                      </h2>
                      <span className="inline-flex items-center bg-blue-50 px-2 py-1 text-[11px] font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10 whitespace-nowrap rounded-none">
                        {activeDoc.effectiveDate}
                      </span>
                    </div>
                    {activeDoc.description && (
                      <p className="mt-3 text-slate-500 font-normal text-sm leading-relaxed">
                        {activeDoc.description}
                      </p>
                    )}
                  </motion.div>

                  {/* Rendered Blocks */}
                  <div className="max-w-none">
                    {activeDoc.blocks.map((block, idx) => (
                      <motion.div key={`${activeDoc.id}-block-${idx}`} variants={itemVariants}>
                        {renderBlock(block, idx)}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Footer inside panel */}
              <div className="mt-10 pt-6 border-t border-slate-100 text-left">
                <p className="text-xs font-normal text-slate-500">
                  Questions regarding this document? Contact our compliance team at{' '}
                  <a href="mailto:info@ajaxglobal.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    info@ajaxglobal.com
                  </a>
                </p>
              </div>
              
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}