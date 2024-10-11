import React, { useState } from 'react';
import AgentCard from './AgentCard';
import { Button } from './ui/button';

interface Agent {
  id: number;
  name: string;
  image: string;
  description: string;
  username: string;
}

const allPopularAgents: Agent[] = [
  { id: 1, name: 'KOSAM AI', image: '/kosam-ai.jpg', description: 'a dynamic and anonymous chat bot from kosam', username: '@Vinod Sh Tv' },
  { id: 2, name: 'ROV', image: '/rov.jpg', description: 'Art is encouraging', username: '@ROV THEPDET' },
  // ... (rest of the agents)
];

const PopularAgents: React.FC = () => {
  const [visibleAgents, setVisibleAgents] = useState<number>(14);

  const loadMore = () => {
    setVisibleAgents(prevVisible => Math.min(prevVisible + 7, allPopularAgents.length));
  };

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Popular Agents</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {allPopularAgents.slice(0, visibleAgents).map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
      {visibleAgents < allPopularAgents.length && (
        <div className="text-center mt-8">
          <Button onClick={loadMore} variant="outline" className="px-8 py-2">
            Load More
          </Button>
        </div>
      )}
    </section>
  );
};

export default PopularAgents;