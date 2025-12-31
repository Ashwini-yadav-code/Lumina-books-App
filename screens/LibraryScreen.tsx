
import React from 'react';
import { Book } from '../types';
import { BOOKS } from '../constants';

const LibraryScreen: React.FC = () => {
  return (
    <div className="flex flex-col pb-32">
      <header className="sticky top-0 z-40 bg-background-dark/95 backdrop-blur-md px-4 py-4 border-b border-white/5">
        <h1 className="text-xl font-bold tracking-tight">My Library</h1>
      </header>

      <nav className="px-4 py-4">
        <div className="bg-surface-dark p-1 rounded-xl flex items-center justify-between gap-1 shadow-inner">
          <button className="flex-1 py-2.5 px-4 rounded-lg bg-primary text-white shadow-md text-sm font-semibold">Reading</button>
          <button className="flex-1 py-2.5 px-4 rounded-lg text-gray-400 text-sm font-medium">To Read</button>
          <button className="flex-1 py-2.5 px-4 rounded-lg text-gray-400 text-sm font-medium">Done</button>
        </div>
      </nav>

      <main className="flex flex-col gap-8 pt-4">
        <section>
          <div className="px-4 flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Current Reads</h2>
            <button className="text-primary text-sm font-semibold">See All</button>
          </div>
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 gap-4 pb-4">
            {BOOKS.slice(0, 2).map(book => (
              <div key={book.id} className="snap-center shrink-0 w-[85vw] max-w-sm">
                <div className="relative rounded-2xl bg-surface-dark p-4 border border-white/5 flex gap-4 overflow-hidden group">
                  <div className="absolute -left-10 top-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full"></div>
                  <img className="relative w-28 aspect-[2/3] shrink-0 rounded-lg shadow-lg object-cover" src={book.coverUrl} alt={book.title} />
                  <div className="flex flex-col flex-1 justify-between py-1 z-10">
                    <div>
                      <h3 className="text-lg font-bold leading-tight mb-1 truncate">{book.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{book.author}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-medium text-gray-300">
                        <span>Page 115 of 180</span>
                        <span className="text-primary">64%</span>
                      </div>
                      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: '64%' }}></div>
                      </div>
                      <button className="w-full py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">edit_note</span>
                        Log Reading
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4">
          <h2 className="text-xl font-bold mb-4">Your Progress</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-dark p-4 rounded-2xl border border-white/5 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1.5 rounded-md bg-orange-500/10 text-orange-500">
                  <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Streak</span>
              </div>
              <p className="text-2xl font-bold">12 Days</p>
              <p className="text-xs text-green-500 font-medium">+2 days vs avg</p>
            </div>
            <div className="bg-surface-dark p-4 rounded-2xl border border-white/5 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Read in '24</span>
              </div>
              <p className="text-2xl font-bold">15 Books</p>
              <p className="text-xs text-green-500 font-medium">+3 books vs goal</p>
            </div>
          </div>
        </section>

        <section className="px-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Collections</h2>
            <button className="p-1 rounded-full text-gray-400 hover:text-white">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl bg-surface-dark border border-white/5 p-4 flex flex-col justify-between group cursor-pointer">
              <div className="flex -space-x-4 overflow-hidden py-2">
                <div className="size-16 w-12 rounded bg-gray-600 ring-2 ring-surface-dark transform -rotate-6 shadow-md"></div>
                <div className="size-16 w-12 rounded bg-gray-500 ring-2 ring-surface-dark transform rotate-3 shadow-md"></div>
                <div className="size-16 w-12 rounded bg-gray-800 ring-2 ring-surface-dark flex items-center justify-center shadow-md">
                  <span className="text-[10px] font-bold">+5</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Sci-Fi Classics</h3>
                <p className="text-xs text-gray-500">7 books</p>
              </div>
            </div>
            <div className="aspect-square rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 transition-all group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-white">add</span>
              </div>
              <span className="text-sm font-medium text-gray-500 group-hover:text-primary">New Collection</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LibraryScreen;
