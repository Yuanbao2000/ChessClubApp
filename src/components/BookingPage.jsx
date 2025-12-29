import React, { useState } from 'react';
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

function BookingPage({ selectedRoom }) {
  const [formData, setFormData] = useState({
    room: selectedRoom?.name || '',
    date: '',
    time: '',
    duration: '',
    name: '',
    phone: '',
    note: ''
  });

  const handleSubmit = () => {
    if (!formData.room || !formData.date || !formData.time || 
        !formData.duration || !formData.name || !formData.phone) {
      alert('请填写完整信息');
      return;
    }
    alert('预订提交成功！我们会尽快电话联系您确认。');
  };

  const timeSlots = ['上午', '下午', '晚上'];
  const durations = ['2小时', '3小时', '半天'];

  return (
    <div className="pb-20 bg-black min-h-screen">
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <GinkgoLeaf className="absolute top-4 left-10 text-yellow-500" size="large" />
        </div>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent relative z-10">
          在线预订
        </h2>
        <p className="text-yellow-500/80">填写信息 · 快速预订</p>
      </div>

      <div className="px-6 py-6 space-y-5">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 shadow-xl border border-yellow-600/20">
          <label className="block text-yellow-500 font-bold mb-3 text-lg">选择包厢</label>
          <select
            value={formData.room}
            onChange={(e) => setFormData({ ...formData, room: e.target.value })}
            className="w-full px-4 py-4 bg-black border-2 border-yellow-600/30 rounded-xl focus:border-yellow-500 focus:outline-none text-base text-gray-300"
          >
            <option value="">请选择包厢类型</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.name}>
                {room.name} - {room.capacity} - ¥{room.price}/小时
              </option>
            ))}
          </select>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 shadow-xl border border-yellow-600/20">
          <label className="block text-yellow-500 font-bold mb-3 text-lg">预订日期</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-4 bg-black border-2 border-yellow-600/30 rounded-xl focus:border-yellow-500 focus:outline-none text-base text-gray-300"
          />
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 shadow-xl border border-yellow-600/20">
          <label className="block text-yellow-500 font-bold mb-3 text-lg">预订时段</label>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setFormData({ ...formData, time })}
                className={`py-4 rounded-xl font-bold text-base transition-all border ${
                  formData.time === time
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black border-yellow-400 shadow-lg shadow-yellow-500/30'
                    : 'bg-black text-gray-400 border-yellow-600/30 active:scale-95'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 shadow-xl border border-yellow-600/20">
          <label className="block text-yellow-500 font-bold mb-3 text-lg">预订时长</label>
          <div className="grid grid-cols-3 gap-3">
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => setFormData({ ...formData, duration })}
                className={`py-4 rounded-xl font-bold text-base transition-all border ${
                  formData.duration === duration
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black border-yellow-400 shadow-lg shadow-yellow-500/30'
                    : 'bg-black text-gray-400 border-yellow-600/30 active:scale-95'
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 shadow-xl border border-yellow-600/20">
          <label className="block text-yellow-500 font-bold mb-3 text-lg">您的姓名</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="请输入您的姓名"
            className="w-full px-4 py-4 bg-black border-2 border-yellow-600/30 rounded-xl focus:border-yellow-500 focus:outline-none text-base text-gray-300 placeholder-gray-600"
          />
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 shadow-xl border border-yellow-600/20">
          <label className="block text-yellow-500 font-bold mb-3 text-lg">联系电话</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="请输入您的手机号"
            className="w-full px-4 py-4 bg-black border-2 border-yellow-600/30 rounded-xl focus:border-yellow-500 focus:outline-none text-base text-gray-300 placeholder-gray-600"
          />
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 shadow-xl border border-yellow-600/20">
          <label className="block text-yellow-500 font-bold mb-3 text-lg">备注（可选）</label>
          <textarea
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            placeholder="如有特殊需求请填写"
            rows="3"
            className="w-full px-4 py-4 bg-black border-2 border-yellow-600/30 rounded-xl focus:border-yellow-500 focus:outline-none resize-none text-base text-gray-300 placeholder-gray-600"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black py-5 rounded-xl font-bold text-xl shadow-2xl shadow-yellow-500/50 active:scale-98 transition-all border border-yellow-400"
        >
          提交预订
        </button>

        <p className="text-center text-gray-500 text-sm">
          提交后我们会尽快电话联系您确认预订
        </p>
      </div>
    </div>
  );
}

export default BookingPage;