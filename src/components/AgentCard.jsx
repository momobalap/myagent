import React from 'react';
import { Heart } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const AgentCard = ({ agent }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={agent.image} alt={agent.name} className="w-full h-32 object-cover" />
      <div className="p-3">
        <h3 className="font-bold text-sm mb-1 text-gray-800">{agent.name}</h3>
        <p className="text-gray-600 text-xs mb-2 h-8 overflow-hidden">{agent.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className="w-4 h-4 mr-1">
              <AvatarImage src="/avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className="text-xs text-gray-500">@username</span>
          </div>
          <button className="text-gray-400 hover:text-red-500">
            <Heart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;