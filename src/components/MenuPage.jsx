import React, { useState } from 'react';
import { ShoppingCart, Phone } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';

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

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('tea');
  const [cart, setCart] = useState({});

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (itemId) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [itemId, count]) => {
      const item = menuItems.find(i => i.id === parseInt(itemId));
      return sum + (item ? parseInt(item.price) * count : 0);
    }, 0);
  };

  return (
    <div className="pb-20 bg-black min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-8 relative overflow-hidden sticky top-0 z-40">
        <div className="absolute inset-0 opacity-10">
          <GinkgoLeaf className="absolute top-4 left-10 text-yellow-500 rotate-45" size="large" />
        </div>
        <div className="flex items-center justify-between relative z-10">
          <div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              在线点餐
            </h2>
            <p className="text-yellow-500/80">杭帮美食 · 茗茶雅座</p>
          </div>
          <button className="relative">
            <ShoppingCart className="text-yellow-500" size={28} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-24 z-30 bg-black border-b border-yellow-600/20 overflow-x-auto">
        <div className="flex px-6 py-4 space-x-3 min-w-max">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black shadow-lg shadow-yellow-500/30'
                  : 'bg-gray-900 text-gray-400 border border-yellow-600/20'
              }`}
            >
              <span className="mr-2 text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 py-6 space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-xl overflow-hidden border border-yellow-600/20"
          >
            <div className="flex">
              {/* Image Placeholder */}
              <div className="w-28 h-28 bg-gradient-to-br from-yellow-900/20 to-black flex items-center justify-center border-r border-yellow-600/20 flex-shrink-0">
                <span className="text-5xl">{item.image}</span>
              </div>

              {/* Content */}
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-yellow-500 mb-1">
                      {item.name}
                      {item.hot && (
                        <span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded">热卖</span>
                      )}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <span className="text-2xl font-bold text-yellow-500">¥{item.price}</span>
                    <span className="text-gray-500 text-sm">/{item.unit}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="flex items-center justify-end mt-3">
                  {cart[item.id] ? (
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 bg-gray-800 text-yellow-500 rounded-lg font-bold border border-yellow-600/30 active:scale-95 transition-all"
                      >
                        -
                      </button>
                      <span className="text-yellow-500 font-bold w-8 text-center">{cart[item.id]}</span>
                      <button
                        onClick={() => addToCart(item.id)}
                        className="w-8 h-8 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black rounded-lg font-bold active:scale-95 transition-all"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item.id)}
                      className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black rounded-lg font-bold active:scale-95 transition-all shadow-lg shadow-yellow-500/20"
                    >
                      加入
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary - Fixed Bottom */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-16 left-0 right-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-yellow-600/30 px-6 py-4 z-50">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-gray-400 text-sm">已选 {getTotalItems()} 项</p>
              <p className="text-2xl font-bold text-yellow-500">¥{getTotalPrice()}</p>
            </div>
            <button
              onClick={() => alert('电话点餐功能：请拨打 123-4567-8890')}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black rounded-xl font-bold active:scale-95 transition-all shadow-xl shadow-yellow-500/30"
            >
              <Phone size={20} className="mr-2" />
              电话下单
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuPage;