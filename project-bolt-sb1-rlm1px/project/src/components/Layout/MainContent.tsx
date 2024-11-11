import React from 'react';
import { useStore } from '../../store/useStore';
import { RefreshCw } from 'lucide-react';
import InfiniteScroll from 'react-infinite-scroll-component';

export const MainContent: React.FC = () => {
  const { currentPage, items, hasMore } = useStore();

  const fetchMoreData = () => {
    // Implement fetch logic here
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Discover New Content</h1>
        <button className="p-2 hover:bg-gray-800 rounded-full">
          <RefreshCw className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<div className="text-center my-4 text-gray-400">Loading...</div>}
        endMessage={
          <div className="text-center my-4 text-gray-400">
            <b>¡Ya has visto todo el contenido!</b>
          </div>
        }
      >
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
              {/* Content will be implemented based on item type */}
              <div className="text-white">{item.type}</div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};