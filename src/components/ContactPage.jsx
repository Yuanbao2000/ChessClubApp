import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../data/roomsData';

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

function ContactPage() {
  return (
    <div className="pb-20 bg-black min-h-screen">
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <GinkgoLeaf className="absolute top-4 right-10 text-yellow-500 rotate-45" size="large" />
        </div>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent relative z-10">
          联系我们
        </h2>
        <p className="text-yellow-500/80">随时为您服务</p>
      </div>

      <div className="px-6 py-6 space-y-5">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-6 border border-yellow-600/20">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 bg-yellow-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-yellow-600/30">
              <Phone className="text-yellow-500" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-yellow-500 mb-2 text-lg">联系电话</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-4">{businessInfo.phone}</p>
              <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-4 rounded-xl font-bold text-lg active:scale-98 transition-all shadow-xl shadow-yellow-500/30 border border-yellow-400">
                立即拨打
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-6 border border-yellow-600/20">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 bg-yellow-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-yellow-600/30">
              <MapPin className="text-yellow-500" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-yellow-500 mb-2 text-lg">店铺地址</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {businessInfo.address}<br />
                {businessInfo.addressDetail}
              </p>
              <button className="w-full bg-black border-2 border-yellow-500 text-yellow-500 py-4 rounded-xl font-bold text-lg active:scale-98 transition-all">
                打开地图导航
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-6 border border-yellow-600/20">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-yellow-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-yellow-600/30">
              <Clock className="text-yellow-500" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-yellow-500 mb-2 text-lg">营业时间</h3>
              <p className="text-gray-400 leading-relaxed">
                周一至周日<br />
                {businessInfo.hours}<br />
                <span className="text-sm text-yellow-500 font-semibold mt-2 inline-block">全年无休</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/10 to-black rounded-2xl p-8 text-center shadow-xl border border-yellow-600/20 relative overflow-hidden">
          <div className="absolute top-2 right-2 opacity-20">
            <GinkgoLeaf className="text-yellow-500" size="medium" />
          </div>
          <div className="text-6xl mb-4">📱</div>
          <h3 className="font-bold text-yellow-500 mb-2 text-lg">添加微信</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            扫码添加微信客服<br />享受专属优惠
          </p>
          <div className="bg-black w-36 h-36 mx-auto rounded-2xl flex items-center justify-center shadow-xl border border-yellow-600/30">
            <span className="text-gray-600">微信二维码</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;