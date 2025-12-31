
import React from 'react';
import { Book } from '../types';

interface GiftingScreenProps {
  book: Book;
  onBack: () => void;
}

const GiftingScreen: React.FC<GiftingScreenProps> = ({ book, onBack }) => {
  return (
    <div className="relative flex flex-col h-full bg-background-dark text-white pb-32">
      <header className="flex items-center p-4 pt-6 pb-2 justify-between sticky top-0 bg-background-dark z-20">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full hover:bg-white/10">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">Gift this Book</h1>
        <button onClick={onBack} className="text-gray-400 text-base font-bold">Cancel</button>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar px-4 pt-4">
        <div className="flex items-stretch gap-4 rounded-xl bg-surface-dark p-4 border border-white/5">
          <img className="w-24 aspect-[2/3] rounded-lg shadow-md" src={book.coverUrl} alt={book.title} />
          <div className="flex flex-col gap-1 py-1">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary w-fit">Bestseller</span>
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-400 text-sm font-medium">{book.author}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold mb-3 px-1">Choose Format</h2>
          <div className="flex bg-surface-dark/50 p-1 rounded-xl gap-2">
            {['E-book', 'Audio', 'Hardcover'].map((f, i) => (
              <div key={f} className={`flex-1 flex flex-col items-center justify-center py-3 rounded-lg border ${i === 0 ? 'border-primary bg-primary/10 text-primary' : 'border-transparent text-gray-400'}`}>
                <span className="material-symbols-outlined mb-1">{i === 0 ? 'tablet_mac' : i === 1 ? 'headphones' : 'book_2'}</span>
                <span className="text-xs font-bold">{f}</span>
                <span className="text-[10px] opacity-60">$12.99</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-lg font-bold px-1">Who is this for?</h2>
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400"><span className="material-symbols-outlined">person</span></span>
            <input className="w-full bg-surface-dark rounded-xl py-4 pl-12 border-none focus:ring-2 focus:ring-primary text-sm" placeholder="Recipient's Name" />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400"><span className="material-symbols-outlined">mail</span></span>
            <input className="w-full bg-surface-dark rounded-xl py-4 pl-12 border-none focus:ring-2 focus:ring-primary text-sm" placeholder="Recipient's Email" />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold mb-3 px-1">Add a message</h2>
          <textarea className="w-full h-32 bg-surface-dark rounded-xl p-4 border-none focus:ring-2 focus:ring-primary text-sm resize-none" placeholder="Write a warm message..."></textarea>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark/90 border-t border-white/5 backdrop-blur-md">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Total to pay</span>
            <span className="text-2xl font-bold">$12.99</span>
          </div>
          <button className="text-primary text-sm font-bold">View details</button>
        </div>
        <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2">
          <span>Continue to Preview</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default GiftingScreen;
