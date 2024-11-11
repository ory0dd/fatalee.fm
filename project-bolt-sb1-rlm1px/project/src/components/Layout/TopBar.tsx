import React from 'react';
import { Bell, ChevronLeft, ChevronRight, Users } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900">
      <div className="flex space-x-2">
        <button className="p-2 hover:bg-gray-800 rounded-full">
          <ChevronLeft className="text-gray-400 w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-full">
          <ChevronRight className="text-gray-400 w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 max-w-xl px-4">
        <input
          type="search"
          placeholder="Search for artists, songs, podcasts..."
          className="w-full px-4 py-2 bg-gray-800 text-white border-none rounded-full focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-white border border-gray-600 rounded-full hover:bg-gray-800">
          Explorar Premium
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-full">
          <Bell className="text-gray-400 w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-full">
          <Users className="text-gray-400 w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-800">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop"
            alt="User"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};