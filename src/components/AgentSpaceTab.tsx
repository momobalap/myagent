import React from 'react';
import SearchBar from './SearchBar';
import PublishButton from './PublishButton';
import CategoryTabs from './CategoryTabs';
import FeaturedAgents from './FeaturedAgents';
import PopularAgents from './PopularAgents';

const AgentSpaceTab: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">Welcome to Agent Space</h2>
        <p className="text-gray-600 mb-4 text-center">Explore various agents from the community, get inspirations to kickstart your next big idea.</p>
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <PublishButton />
          <SearchBar />
        </div>
      </div>
      <CategoryTabs />
      <div className="max-w-7xl mx-auto">
        <FeaturedAgents />
        <PopularAgents />
      </div>
    </div>
  );
};

export default AgentSpaceTab;