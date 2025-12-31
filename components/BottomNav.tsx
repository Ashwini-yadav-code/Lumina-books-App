
import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, setScreen }) => {
  const navItems: { id: Screen; icon: string; label: string }[] = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'explore', icon: 'explore', label: 'Explore' },
    { id: 'library', icon: 'library_books', label: 'Library' },
    { id: 'community', icon: 'forum', label: 'Community' },
    { id: 'profile', icon: 'person', label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-6 left-4 right-4 h-16 rounded-2xl bg-surface-dark/80 backdrop-blur-xl border border-white/10 shadow-2xl z-50 flex items-center justify-around px-2">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setScreen(item.id)}
          className={`flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-xl transition-all ${
            currentScreen === item.id ? 'text-primary bg-primary/10' : 'text-gray-400 hover:text-white'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: currentScreen === item.id ? "'FILL' 1" : "'FILL' 0" }}>
            {item.icon}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
