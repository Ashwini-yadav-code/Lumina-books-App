
import React from 'react';
import { Book } from '../types';
import { BOOKS } from '../constants';

interface ExploreScreenProps {
  onBookSelect: (book: Book) => void;
}

const ExploreScreen: React.FC<ExploreScreenProps> = ({ onBookSelect }) => {
  const mainBook = BOOKS[0];

  return (
    <div className="relative flex-1 w-full h-full overflow-hidden bg-background-dark text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#2a2455] via-background-dark to-background-dark opacity-80 z-0"></div>

      {/* Top Bar */}
      <header className="z-20 flex flex-col w-full bg-gradient-to-b from-background-dark/90 via-background-dark/80 to-transparent backdrop-blur-[2px] pt-4">
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="bg-primary/20 p-2 rounded-full text-primary">
              <span className="material-symbols-outlined text-2xl">auto_awesome</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">Explore</h1>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-dark border border-white/5 hover:bg-white/5 transition-colors group">
            <span className="text-accent-purple text-sm font-semibold group-hover:text-white">List View</span>
            <span className="material-symbols-outlined text-accent-purple text-lg group-hover:text-white">list</span>
          </button>
        </div>
        <div className="px-5 py-2">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent-purple">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="block w-full pl-11 pr-4 py-3 rounded-2xl bg-surface-dark border-none focus:ring-2 focus:ring-primary/50 text-white placeholder-accent-purple/70 text-sm shadow-lg shadow-black/20" 
              placeholder="Search titles, authors, or themes..." 
              type="text"
            />
          </div>
        </div>
      </header>

      {/* Map Area */}
      <div className="relative flex-1 w-full h-[60vh] overflow-hidden z-0 mt-8">
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
          <line stroke="#9b92c9" strokeDasharray="4 4" strokeWidth="1" x1="20%" x2="50%" y1="30%" y2="45%"></line>
          <line stroke="#9b92c9" strokeWidth="1" x1="50%" x2="80%" y1="45%" y2="35%"></line>
          <line stroke="#9b92c9" strokeWidth="1" x1="50%" x2="60%" y1="45%" y2="70%"></line>
          <line stroke="#9b92c9" strokeWidth="1" x1="50%" x2="25%" y1="45%" y2="65%"></line>
        </svg>

        {/* Theme Node */}
        <div className="absolute top-[25%] left-[15%] flex flex-col items-center gap-2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(155,146,201,0.2)] group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-accent-purple text-3xl">rocket_launch</span>
          </div>
          <span className="text-xs font-bold text-accent-purple tracking-widest uppercase bg-background-dark/80 px-2 py-0.5 rounded-md">Sci-Fi</span>
        </div>

        {/* Selected Node: Dune (using mock as placeholder for visual) */}
        <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer" onClick={() => onBookSelect(mainBook)}>
          <div className="relative w-24 h-24 rounded-full shadow-[0_0_30px_rgba(50,17,212,0.6)] pulse-ring">
            <img 
              className="w-full h-full object-cover rounded-full border-2 border-primary z-20 relative" 
              src={mainBook.coverUrl}
              alt={mainBook.title}
            />
            <div className="absolute -bottom-1 -right-1 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-30 border border-background-dark">
              Top Pick
            </div>
          </div>
        </div>

        {/* Floating Controls */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
          <div className="bg-surface-dark/90 backdrop-blur-sm p-1.5 rounded-xl border border-white/5 flex flex-col gap-1 shadow-xl">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 text-white">
              <span className="material-symbols-outlined">add</span>
            </button>
            <div className="h-px bg-white/10 w-6 mx-auto"></div>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 text-white">
              <span className="material-symbols-outlined">remove</span>
            </button>
          </div>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white shadow-xl shadow-primary/30">
            <span className="material-symbols-outlined">near_me</span>
          </button>
        </div>
      </div>

      {/* Contextual Drawer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-dark border-t border-white/10 rounded-t-3xl shadow-2xl pb-32 pt-2 px-6">
        <div className="w-12 h-1.5 bg-white/10 rounded-full mx-auto my-3"></div>
        <div className="flex items-start gap-4">
          <div className="relative w-24 aspect-[2/3] shrink-0 rounded-lg overflow-hidden shadow-lg border border-white/5 group">
            <img className="w-full h-full object-cover" src={mainBook.coverUrl} alt={mainBook.title} />
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <p className="text-accent-purple text-xs font-semibold uppercase tracking-wider mb-0.5">Selected Node</p>
            <h2 className="text-2xl font-bold text-white leading-tight truncate">{mainBook.title}</h2>
            <p className="text-gray-400 text-sm font-medium mb-3">{mainBook.author}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 text-[10px] text-gray-300">
                <span className="material-symbols-outlined text-[12px]">schedule</span> 19h 45m
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 text-[10px] text-gray-300">
                <span className="material-symbols-outlined text-[12px] text-yellow-500 fill-current">star</span> 4.8
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-[1fr_auto] gap-3">
          <button 
            onClick={() => onBookSelect(mainBook)}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-6 rounded-xl transition-all"
          >
            <span>View Details</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
          <button className="flex items-center justify-center bg-white/5 hover:bg-white/10 text-white p-3.5 rounded-xl border border-white/5">
            <span className="material-symbols-outlined">bookmark_add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreScreen;
