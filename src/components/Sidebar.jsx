import React from 'react';
import { RefreshCw, Download, Clock, Info, MessageSquare } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-16 bg-[#e6e4ed] h-screen flex flex-col items-center py-4">
      <img src="/logo.png" alt="Logo" className="w-10 h-10 mb-8" />
      <nav className="flex flex-col space-y-4">
        <a href="#" className="p-2 rounded-lg hover:bg-gray-200">
          <RefreshCw size={24} />
        </a>
        <a href="#" className="p-2 rounded-lg hover:bg-gray-200">
          <Download size={24} />
        </a>
        <a href="#" className="p-2 rounded-lg hover:bg-gray-200">
          <Clock size={24} />
        </a>
        <a href="#" className="p-2 rounded-lg hover:bg-gray-200">
          <Info size={24} />
        </a>
        <a href="#" className="p-2 rounded-lg hover:bg-gray-200">
          <MessageSquare size={24} />
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;