import React from 'react';
import { Home, Grid, Calendar, Phone, UtensilsCrossed } from 'lucide-react';

function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'rooms', label: '包厢', icon: Grid },
    { id: 'menu', label: '点餐', icon: UtensilsCrossed },
    { id: 'booking', label: '预订', icon: Calendar },
    { id: 'contact', label: '联系', icon: Phone }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-yellow-600/30 z-50 shadow-2xl">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setCurrentPage(id)}
            className={`flex flex-col items-center justify-center flex-1 transition-all ${
              currentPage === id ? 'text-yellow-500' : 'text-gray-400'
            }`}
          >
            <Icon size={22} strokeWidth={currentPage === id ? 2.5 : 2} />
            <span className="text-xs mt-1 font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;