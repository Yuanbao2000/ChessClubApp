import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import RoomsPage from './components/RoomsPage';
import BookingPage from './components/BookingPage';
import ContactPage from './components/ContactPage';
import MenuPage from './components/MenuPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRoom, setSelectedRoom] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'rooms':
        return (
          <RoomsPage 
            setCurrentPage={setCurrentPage} 
            setSelectedRoom={setSelectedRoom} 
          />
        );
      case 'booking':
        return <BookingPage selectedRoom={selectedRoom} />;
      case 'menu':
        return <MenuPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {renderPage()}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;