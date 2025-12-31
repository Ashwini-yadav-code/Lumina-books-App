
import React, { useEffect, useState } from 'react';
import { Book, Screen } from '../types';
import { getPersonalizedSynopsis } from '../services/geminiService';

interface BookDetailScreenProps {
  book: Book;
  onBack: () => void;
  setScreen: (screen: Screen) => void;
}

const BookDetailScreen: React.FC<BookDetailScreenProps> = ({ book, onBack, setScreen }) => {
  const [aiSynopsis, setAiSynopsis] = useState<string>("");

  useEffect(() => {
    async function loadSynopsis() {
      const syn = await getPersonalizedSynopsis(book.title, book.author);
      setAiSynopsis(syn);
    }
    loadSynopsis();
  }, [book]);

  return (
    <div className="relative min-h-screen flex flex-col bg-background-dark pb-32">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-background-dark/90 to-transparent">
        <button 
          onClick={onBack}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex gap-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white">
            <span className="material-symbols-outlined text-accent-coral" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white">
            <span className="material-symbols-outlined">ios_share</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-8 px-6 flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/20 blur-[100px] -z-10 rounded-full opacity-60"></div>
        <div className="relative group w-48 h-72 mb-8">
          <div className="absolute inset-0 bg-primary/40 blur-2xl translate-y-4 rounded-full opacity-60"></div>
          <div 
            className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-surface-dark bg-cover bg-center" 
            style={{ backgroundImage: `url("${book.coverUrl}")` }}
          />
        </div>
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">{book.title}</h1>
          <p className="text-lg text-gray-400 font-medium">by {book.author}</p>
        </div>
        <div className="flex items-center gap-3 bg-surface-dark/50 px-4 py-2 rounded-full border border-white/5">
          <div className="flex items-center text-accent-sand">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="ml-1 text-base font-bold text-white">{book.rating}</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <span className="text-sm text-gray-400">{book.reviews || '2.4k'} reviews</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="bg-[#131022] rounded-t-[2rem] px-6 pt-8 -mt-4 relative z-10">
        {/* Formats */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-6">
          <div className="shrink-0 flex flex-col items-start p-4 rounded-xl border-2 border-primary bg-primary/10 w-32 relative">
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary"></div>
            <span className="material-symbols-outlined text-primary mb-2">book_2</span>
            <span className="text-sm font-bold text-white">eBook</span>
            <span className="text-xs text-gray-400 mt-1">{book.price || "$12.99"}</span>
          </div>
          <div className="shrink-0 flex flex-col items-start p-4 rounded-xl border border-white/10 bg-surface-dark w-32">
            <span className="material-symbols-outlined text-gray-400 mb-2">hard_disk</span>
            <span className="text-sm font-medium text-gray-300">Hardcover</span>
            <span className="text-xs text-gray-400 mt-1">$24.99</span>
          </div>
          <div className="shrink-0 flex flex-col items-start p-4 rounded-xl border border-white/10 bg-surface-dark w-32">
            <span className="material-symbols-outlined text-gray-400 mb-2">headphones</span>
            <span className="text-sm font-medium text-gray-300">Audiobook</span>
            <span className="text-xs text-green-500 mt-1">Free Trial</span>
          </div>
        </div>

        {/* AI Insight */}
        <div className="mb-8 p-4 bg-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                AI Personalized Blurb
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed italic">
                "{aiSynopsis || "Curating your perfect blurb..."}"
            </p>
        </div>

        {/* Synopsis */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-3">Synopsis</h3>
          <p className="text-gray-300 leading-relaxed text-base">
            {book.synopsis || "This compelling narrative takes readers on a journey through complex human emotions and extraordinary circumstances..."}
          </p>
          <button className="mt-2 text-primary font-bold text-sm flex items-center gap-1">
            Read more <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </button>
        </div>

        {/* Community Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-4">Community Insights</h3>
          <div className="flex flex-wrap gap-2">
            {(book.tags || ["#Sci-Fi", "#Deep Reading", "#Classic"]).map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-xs font-semibold">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark/80 border-t border-white/5 backdrop-blur-xl flex gap-3 z-50">
        <button 
          onClick={() => setScreen('gift')}
          className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 text-white"
        >
          <span className="material-symbols-outlined">card_giftcard</span>
        </button>
        <button className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 text-white">
          <span className="material-symbols-outlined">bookmark_add</span>
        </button>
        <button 
          onClick={() => setScreen('checkout')}
          className="flex-1 h-14 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg shadow-lg flex flex-col items-center justify-center leading-tight transition-all"
        >
          <span>Buy Now</span>
          <span className="text-xs font-normal opacity-80">{book.price || "$12.99"}</span>
        </button>
      </div>
    </div>
  );
};

export default BookDetailScreen;
