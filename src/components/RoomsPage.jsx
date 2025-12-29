import React from 'react';
import { Users } from 'lucide-react';
import { rooms } from '../data/roomsData';

const GinkgoLeaf = ({ className = "", size = "small" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8"
  };
  return (
    <svg className={`${sizeClasses[size]} ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C12 2 8 6 8 10C8 12 9 14 12 14C15 14 16 12 16 10C16 6 12 2 12 2Z" />
      <path d="M11 14L10 22H14L13 14" />
    </svg>
  );
};

function RoomsPage({ setCurrentPage, setSelectedRoom }) {
  const handleBookRoom = (room) => {
    setSelectedRoom(room);
    setCurrentPage('booking');
  };

  return (
    <div className="pb-20 bg-black min-h-screen">
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <GinkgoLeaf className="absolute top-4 right-10 text-yellow-500" size="large" />
        </div>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent relative z-10">
          选择包厢
        </h2>
        <p className="text-yellow-500/80">三种规格 · 满足不同需求</p>
      </div>
      
      <div className="px-6 py-6 space-y-5">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-yellow-600/20"
          >
            <div className="bg-gradient-to-br from-yellow-900/20 to-black p-10 text-center relative overflow-hidden border-b border-yellow-600/20">
              <div className="absolute top-2 right-2 opacity-20">
                <GinkgoLeaf className="text-yellow-500" size="medium" />
              </div>
              <div className="text-7xl mb-3">{room.image}</div>
              <h3 className="text-2xl font-bold text-yellow-500">{room.name}</h3>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center text-gray-400">
                  <Users size={20} className="mr-2 text-yellow-500" />
                  <span className="font-medium">{room.capacity}</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-yellow-500">¥{room.price}</span>
                  <span className="text-gray-500 ml-1">/小时</span>
                </div>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">{room.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {room.facilities.map((facility, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-yellow-900/20 text-yellow-500 rounded-full text-sm font-medium border border-yellow-600/30"
                  >
                    {facility}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleBookRoom(room)}
                className="w-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black py-4 rounded-xl font-bold text-lg active:scale-98 transition-all shadow-xl shadow-yellow-500/30 border border-yellow-400"
              >
                预订此包厢
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomsPage;