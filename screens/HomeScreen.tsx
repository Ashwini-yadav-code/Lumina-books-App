
import React from 'react';
import { Book, Screen } from '../types';
import { BOOKS, EDITOR_PICKS, MOCK_USER } from '../constants';

interface HomeScreenProps {
  onBookSelect: (book: Book) => void;
  setScreen: (screen: Screen) => void;
  recentlyViewed?: Book[];
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onBookSelect, setScreen, recentlyViewed = [] }) => {
  return (
    <div className="flex flex-col pb-32">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background-dark/95 backdrop-blur-md px-4 py-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-primary/20" 
                style={{ backgroundImage: `url("${MOCK_USER.avatarUrl}")` }}
              />
              <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-background-dark"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-400">Welcome back</span>
              <h2 className="text-base font-bold leading-none tracking-tight">{MOCK_USER.name}</h2>
            </div>
          </div>
          <button className="flex items-center justify-center size-10 rounded-full bg-surface-dark text-white hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>notifications</span>
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full">
          <div className="flex w-full items-center rounded-2xl bg-surface-dark shadow-sm border border-gray-800 overflow-hidden h-12 transition-all focus-within:ring-2 focus-within:ring-primary/50">
            <div className="flex items-center justify-center pl-4 text-gray-400">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="w-full bg-transparent border-none text-sm font-medium placeholder:text-gray-400 focus:ring-0 text-white px-3" 
              placeholder="Search titles, authors, or ISBN..." 
              type="text"
            />
            <button className="flex items-center justify-center pr-4 text-primary hover:text-primary/80 transition-colors">
              <span className="material-symbols-outlined">barcode_scanner</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-8 pt-2">
        {/* Personalized Recommendations */}
        <section className="flex flex-col gap-4">
          <div className="px-4 flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight">Based on your reading taste</h2>
            <button className="text-xs font-bold text-primary hover:opacity-80">View All</button>
          </div>
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 gap-4">
            {BOOKS.map((book) => (
              <div 
                key={book.id} 
                className="snap-center shrink-0 w-[280px] flex flex-col gap-3 group cursor-pointer"
                onClick={() => onBookSelect(book)}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <div 
                    className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500" 
                    style={{ backgroundImage: `url("${book.coverUrl}")` }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className={`text-white text-[10px] font-bold px-2 py-1 rounded-md w-fit mb-2 ${book.matchPercentage! > 90 ? 'bg-primary/90' : 'bg-orange-500/90'}`}>
                      {book.matchPercentage ? `${book.matchPercentage}% MATCH` : 'TRENDING'}
                    </div>
                    <h3 className="text-white font-bold text-lg leading-snug line-clamp-2">{book.title}</h3>
                    <p className="text-gray-300 text-xs mt-1">{book.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recently Viewed Section */}
        {recentlyViewed.length > 0 && (
          <section className="flex flex-col gap-4">
            <div className="px-4 flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">Recently Viewed</h2>
              <button className="text-xs font-bold text-gray-400 hover:text-white transition-colors">Clear</button>
            </div>
            <div className="flex overflow-x-auto no-scrollbar px-4 gap-3">
              {recentlyViewed.map((book) => (
                <div 
                  key={`recent-${book.id}`}
                  className="shrink-0 w-24 flex flex-col gap-2 group cursor-pointer"
                  onClick={() => onBookSelect(book)}
                >
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-white/10 shadow-md">
                    <div 
                      className="w-full h-full bg-center bg-cover transition-transform group-hover:scale-110"
                      style={{ backgroundImage: `url("${book.coverUrl}")` }}
                    />
                  </div>
                  <p className="text-[10px] font-bold text-gray-300 line-clamp-1 leading-tight group-hover:text-primary transition-colors">
                    {book.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Discovery Chips */}
        <section className="flex gap-3 px-4 overflow-x-auto no-scrollbar">
          {['For You', 'Dystopian', 'Cozy Mystery', 'Memoir', 'Sci-Fi'].map((tag, i) => (
            <button 
              key={tag} 
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-5 transition-all active:scale-95 ${
                i === 0 ? 'bg-primary text-white' : 'bg-surface-dark border border-gray-800 text-gray-200'
              }`}
            >
              {i === 0 && <span className="material-symbols-outlined text-[18px]">auto_awesome</span>}
              <p className="text-sm font-semibold">{tag}</p>
            </button>
          ))}
        </section>

        {/* Book Map Banner */}
        <section className="px-4">
          <div 
            onClick={() => setScreen('explore')}
            className="relative w-full rounded-2xl overflow-hidden h-36 flex items-center shadow-lg group cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: 'url("https://picsum.photos/seed/map/800/400")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 dark:from-background-dark/90 dark:to-primary/30 mix-blend-multiply"></div>
            <div className="relative z-10 px-6 w-full flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-orange-300">map</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-orange-200">Interactive</span>
                </div>
                <h3 className="text-white text-xl font-bold">Explore the Book Map</h3>
                <p className="text-gray-200 text-sm max-w-[200px] leading-tight">Travel through genres geographically and historically.</p>
              </div>
              <div className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
        </section>

        {/* Editor's Picks */}
        <section className="flex flex-col gap-4">
          <div className="px-4 flex flex-col gap-1">
            <h2 className="text-xl font-bold tracking-tight">Editor's Picks</h2>
            <p className="text-sm text-gray-400">Curated hidden gems for this weekend</p>
          </div>
          <div className="flex overflow-x-auto no-scrollbar px-4 gap-4">
            {EDITOR_PICKS.map((book) => (
              <div 
                key={book.id} 
                className="flex flex-col gap-2 w-32 shrink-0 group cursor-pointer"
                onClick={() => onBookSelect(book)}
              >
                <div className="w-full aspect-[2/3] rounded-xl bg-gray-800 overflow-hidden shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" 
                    style={{ backgroundImage: `url("${book.coverUrl}")` }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight truncate">{book.title}</h4>
                  <p className="text-xs text-gray-400 truncate">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Pulse */}
        <section className="px-4 mb-4">
          <div className="flex flex-col gap-4 p-5 rounded-2xl bg-surface-dark border border-gray-800 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">diversity_3</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Community Pulse</h3>
              </div>
              <button onClick={() => setScreen('community')} className="text-xs text-primary font-bold">Join Discussion</button>
            </div>
            <div className="flex gap-4 items-start">
              <div className="shrink-0 size-12 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://picsum.photos/seed/sarah/100/100")' }}></div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium leading-relaxed italic text-gray-300">
                  "The world-building in <span className="text-primary font-bold">The Fifth Season</span> is unlike anything I've ever read. The magic system based on geology is pure genius..."
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold">Sarah J.</span>
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((s) => <span key={s} className="material-symbols-outlined text-[14px] fill-current">star</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeScreen;
