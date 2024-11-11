import React from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Laptop2, Volume, Maximize2, Heart } from 'lucide-react';

export const PlaybackControls: React.FC = () => {
  return (
    <div className="bg-gray-900 border-t border-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gray-800 rounded"></div>
          <div>
            <p className="font-semibold text-white">Track Title</p>
            <p className="text-sm text-gray-400">Artist</p>
          </div>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Heart className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="flex flex-col items-center flex-1 max-w-2xl">
          <div className="flex items-center space-x-4 mb-2">
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Shuffle className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <SkipBack className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-3 bg-white rounded-full hover:bg-gray-200">
              <Play className="w-5 h-5 text-black" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <SkipForward className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Repeat className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="w-full flex items-center space-x-2">
            <span className="text-xs text-gray-400">0:00</span>
            <div className="flex-1 h-1 bg-gray-700 rounded-full">
              <div className="w-1/3 h-full bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">3:30</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Laptop2 className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Volume className="w-5 h-5 text-gray-400" />
          </button>
          <div className="w-24 h-1 bg-gray-700 rounded-full">
            <div className="w-2/3 h-full bg-white rounded-full"></div>
          </div>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Maximize2 className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};