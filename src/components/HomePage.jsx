import React from 'react';
import { Clock, Users } from 'lucide-react';
import { businessInfo } from '../data/roomsData';

// 银杏叶装饰组件
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

function HomePage({ setCurrentPage }) {
  const services = [
    { icon: '🀄', label: '麻将' },
    { icon: '🎴', label: '扑克' },
    { icon: '🍜', label: '餐饮' },
    { icon: '☕', label: '茶水' }
  ];

  return (
    <div className="pb-20 bg-black">
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <GinkgoLeaf className="absolute top-10 left-10 text-yellow-500 rotate-12" size="large" />
          <GinkgoLeaf className="absolute top-20 right-20 text-yellow-500 -rotate-45" size="medium" />
          <GinkgoLeaf className="absolute bottom-10 left-1/4 text-yellow-500 rotate-90" size="medium" />
        </div>

        <div className="px-6 py-16 text-center relative z-10">
          <div className="flex items-center justify-center mb-4">
            <GinkgoLeaf className="text-yellow-500 mr-2" size="large" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              {businessInfo.name}
            </h1>
            <GinkgoLeaf className="text-yellow-500 ml-2 rotate-180" size="large" />
          </div>
          <p className="text-yellow-500/80 text-lg tracking-wider">{businessInfo.slogan}</p>
          
          <div className="flex items-center justify-center mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-600"></div>
            <div className="mx-3 text-yellow-500">◆</div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-600"></div>
          </div>
        </div>
        
        <div className="bg-gradient-to-b from-gray-900 to-black rounded-t-3xl -mt-6 px-6 pt-8 pb-6 border-t border-yellow-600/20">
          <div className="bg-gradient-to-br from-yellow-900/20 to-black rounded-2xl h-52 flex items-center justify-center mb-6 shadow-2xl border border-yellow-600/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <GinkgoLeaf className="absolute top-4 right-4 text-yellow-500" size="large" />
              <GinkgoLeaf className="absolute bottom-4 left-4 text-yellow-500 rotate-180" size="large" />
            </div>
            
            <div className="text-center relative z-10">
              <div className="text-7xl mb-3">🎴</div>
              <p className="text-yellow-500/90 font-medium tracking-wide">奢华环境 · 尊享体验</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-center shadow-xl border border-yellow-600/20">
              <Clock className="mx-auto mb-2 text-yellow-500" size={32} />
              <p className="text-gray-400 text-sm mb-1">营业时间</p>
              <p className="text-yellow-500 font-bold text-lg">{businessInfo.hours}</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-center shadow-xl border border-yellow-600/20">
              <Users className="mx-auto mb-2 text-yellow-500" size={32} />
              <p className="text-gray-400 text-sm mb-1">包厢数量</p>
              <p className="text-yellow-500 font-bold text-lg">{businessInfo.roomCount}间</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <button
              onClick={() => setCurrentPage('rooms')}
              className="w-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black py-4 rounded-xl font-bold text-lg shadow-2xl shadow-yellow-500/50 active:scale-98 transition-all border border-yellow-400"
            >
              查看包厢
            </button>
            <button
              onClick={() => setCurrentPage('booking')}
              className="w-full bg-black border-2 border-yellow-500 text-yellow-500 py-4 rounded-xl font-bold text-lg active:scale-98 transition-all shadow-lg shadow-yellow-500/20"
            >
              立即预订
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 shadow-xl border border-yellow-600/20">
            <div className="flex items-center justify-center mb-4">
              <GinkgoLeaf className="text-yellow-500 mr-2" size="small" />
              <h3 className="text-lg font-bold text-yellow-500 tracking-wide">特色服务</h3>
              <GinkgoLeaf className="text-yellow-500 ml-2 rotate-180" size="small" />
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-900/30 to-black rounded-2xl flex items-center justify-center mb-2 border border-yellow-600/30">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{service.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;