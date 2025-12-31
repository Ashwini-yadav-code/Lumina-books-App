
import React, { useState } from 'react';
import { Screen, Book } from './types';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import BookDetailScreen from './screens/BookDetailScreen';
import LibraryScreen from './screens/LibraryScreen';
import CommunityScreen from './screens/CommunityScreen';
import ProfileScreen from './screens/ProfileScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import GiftingScreen from './screens/GiftingScreen';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentScreen, setScreen] = useState<Screen>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [recentlyViewed, setRecentlyViewed] = useState<Book[]>([]);

  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
    setScreen('detail');
    
    // Update recently viewed list: remove if exists, then add to front
    setRecentlyViewed(prev => {
      const filtered = prev.filter(b => b.id !== book.id);
      return [book, ...filtered].slice(0, 10); // Keep last 10
    });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen 
            onBookSelect={handleBookSelect} 
            setScreen={setScreen} 
            recentlyViewed={recentlyViewed}
          />
        );
      case 'explore':
        return <ExploreScreen onBookSelect={handleBookSelect} />;
      case 'library':
        return <LibraryScreen />;
      case 'community':
        return <CommunityScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'detail':
        return selectedBook ? (
          <BookDetailScreen 
            book={selectedBook} 
            onBack={() => setScreen('home')} 
            setScreen={setScreen} 
          />
        ) : <HomeScreen onBookSelect={handleBookSelect} setScreen={setScreen} recentlyViewed={recentlyViewed} />;
      case 'checkout':
        return selectedBook ? (
          <CheckoutScreen book={selectedBook} onBack={() => setScreen('detail')} />
        ) : <HomeScreen onBookSelect={handleBookSelect} setScreen={setScreen} recentlyViewed={recentlyViewed} />;
      case 'gift':
        return selectedBook ? (
          <GiftingScreen book={selectedBook} onBack={() => setScreen('detail')} />
        ) : <HomeScreen onBookSelect={handleBookSelect} setScreen={setScreen} recentlyViewed={recentlyViewed} />;
      default:
        return <HomeScreen onBookSelect={handleBookSelect} setScreen={setScreen} recentlyViewed={recentlyViewed} />;
    }
  };

  // Bottom Nav is hidden for Detail, Checkout, and Gifting flows for a focused experience
  const showNav = ['home', 'explore', 'library', 'community', 'profile'].includes(currentScreen);

  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-white max-w-md mx-auto shadow-2xl relative">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {renderScreen()}
      </div>
      {showNav && <BottomNav currentScreen={currentScreen} setScreen={setScreen} />}
    </div>
  );
};

export default App;
