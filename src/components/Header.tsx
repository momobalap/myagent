import React from 'react';
import { User } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-[#e6e4ed] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-800">AGENTX</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-purple-600">
            <User size={20} className="mr-2" />
            Login
          </Button>
          <Button variant="outline" className="text-purple-600 border-purple-600">
            UPGRADE
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;