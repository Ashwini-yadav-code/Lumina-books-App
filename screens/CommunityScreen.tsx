
import React from 'react';

const CommunityScreen: React.FC = () => {
  return (
    <div className="flex flex-col pb-32">
      <header className="sticky top-0 z-40 bg-background-dark/95 backdrop-blur-md px-4 py-4 border-b border-white/5">
        <h1 className="text-xl font-bold tracking-tight">Community</h1>
      </header>

      <div className="px-4 pt-4">
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          <button className="pb-3 border-b-2 border-primary text-white font-bold text-sm whitespace-nowrap">For You</button>
          <button className="pb-3 border-b-2 border-transparent text-gray-500 font-medium text-sm whitespace-nowrap">Book Clubs</button>
          <button className="pb-3 border-b-2 border-transparent text-gray-500 font-medium text-sm whitespace-nowrap">Following</button>
          <button className="pb-3 border-b-2 border-transparent text-gray-500 font-medium text-sm whitespace-nowrap">Discussions</button>
        </div>
      </div>

      <main className="flex flex-col gap-8 pt-6">
        <section>
          <div className="px-4 flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Tastemakers</h3>
            <button className="text-sm font-semibold text-primary">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex-shrink-0 w-32 flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="size-20 rounded-full bg-gray-800 overflow-hidden ring-2 ring-offset-2 ring-offset-background-dark ring-primary">
                    <img className="w-full h-full object-cover" src={`https://picsum.photos/seed/user${i}/200/200`} alt="User" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-accent-coral text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {i === 1 ? 'Sci-Fi' : i === 2 ? 'History' : 'Fiction'}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold truncate w-full">Reader {i}</p>
                  <p className="text-xs text-gray-500 mb-2">Top Reviewer</p>
                  <button className="w-full py-1.5 px-3 bg-primary/10 text-primary text-xs font-bold rounded-lg">Follow</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 space-y-6">
          <h3 className="text-lg font-bold">Currently Buzzing</h3>
          <article className="bg-surface-dark rounded-xl overflow-hidden border border-white/5">
            <div className="relative h-64 w-full bg-gray-900 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center blur-xl opacity-50 scale-110" 
                style={{ backgroundImage: 'url("https://picsum.photos/seed/buzz/600/400")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-90"></div>
              <div className="absolute inset-0 p-5 flex flex-col justify-end items-start z-10">
                <div className="flex gap-4 items-end w-full">
                  <div className="w-24 h-36 flex-shrink-0 rounded-lg shadow-lg overflow-hidden bg-gray-700">
                    <img className="w-full h-full object-cover" src="https://picsum.photos/seed/bookbuzz/200/300" alt="Book" />
                  </div>
                  <div className="flex-1 pb-1">
                    <div className="flex items-center gap-1 mb-2 text-accent-sand">
                      {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined text-lg fill-current">star</span>)}
                    </div>
                    <h4 className="text-xl font-bold text-white leading-tight">Project Hail Mary</h4>
                    <p className="text-gray-300 text-sm">Andy Weir</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 pt-2">
              <div className="flex gap-3 mb-3">
                <div className="size-8 rounded-full overflow-hidden bg-gray-700">
                  <img src="https://picsum.photos/seed/reviewer/50/50" alt="Avatar" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">"A dazzling novel about all the choices that go into a life well lived..."</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5">
                <div className="flex gap-4">
                  <button className="flex items-center gap-1.5 text-gray-500 text-xs hover:text-accent-coral">
                    <span className="material-symbols-outlined text-lg">favorite</span> 1.2k
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <span className="material-symbols-outlined text-lg">chat_bubble</span> 86
                  </button>
                </div>
                <button className="text-primary text-xs font-bold">Read Full Review</button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default CommunityScreen;
