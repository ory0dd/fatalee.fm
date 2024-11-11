import React from 'react';
import { useStore } from '../../store/useStore';
import { Home, Search, Library, Plus, ShoppingCart, Video, Users, Tv, MessageSquare } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Inicio', page: 'home' },
  { icon: Search, label: 'Buscar', page: 'search' },
  { icon: Library, label: 'Tu biblioteca', page: 'library' },
  { icon: ShoppingCart, label: 'Marketplace', page: 'marketplace' },
  { icon: Video, label: 'Reels', page: 'reels' },
  { icon: Users, label: 'Perfil de Artista', page: 'artist' },
  { icon: Tv, label: 'Streaming en Vivo', page: 'streaming' },
  { icon: Users, label: 'Espacios Comunitarios', page: 'community' },
  { icon: MessageSquare, label: 'Mensajería', page: 'messaging' },
];

export const Sidebar: React.FC = () => {
  const { currentPage, setCurrentPage } = useStore();

  return (
    <div className="w-64 bg-gray-900 p-4">
      <div className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.page}
            onClick={() => setCurrentPage(item.page as any)}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              currentPage === item.page
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-6">
        <button className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-white w-full">
          <Plus className="w-5 h-5" />
          <span>Crear playlist</span>
        </button>
      </div>
    </div>
  );
};