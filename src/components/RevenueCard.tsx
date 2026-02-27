import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  percentage: string;
  trend: 'up' | 'down';
  trendText: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, percentage, trend, trendText, icon }) => {
  const isUp = trend === 'up';
  
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm w-full">
      <div className="flex justify-between items-start mb-4">
        <p className="text-gray-500 font-medium">{title}</p>
        <div className={`p-2 rounded-lg ${isUp ? 'bg-blue-50' : 'bg-pink-50 text-pink-500'}`}>
           {icon}
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{value}</h2>
      <div className="flex items-center gap-2 pt-4 border-t border-gray-50">
        <span className={`px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 ${
          isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
        }`}>
          {isUp ? '↑' : '↓'} {percentage}
        </span>
        <span className="text-sm text-gray-400">{trendText}</span>
      </div>
    </div>
  );
};

export default StatsCard;