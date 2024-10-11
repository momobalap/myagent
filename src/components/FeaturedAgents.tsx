import React from 'react';
import AgentCard from './AgentCard';

interface Agent {
  id: number;
  name: string;
  image: string;
  description: string;
  username: string;
}

const featuredAgents: Agent[] = [
  { id: 1, name: 'Stock Watch', image: '/stock-watch.jpg', description: 'Get latest news of stock market', username: 'Xer W' },
  { id: 2, name: 'SEO Blog Writer', image: '/seo-writer.jpg', description: 'Why waste money on AI blog writer out there? 🔥🔥🔥 Use me for free!', username: '@JZ' },
  { id: 3, name: 'Zorina', image: '/zorina.jpg', description: 'I can generate line graphic in SVG format. Give it a name up...', username: '@Robin X' },
  { id: 4, name: 'Flux Real Person Generator', image: '/flux-generator.jpg', description: 'I can generate real person photo with super high quality', username: '@agentX' },
];

const FeaturedAgents: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Featured Agents</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {featuredAgents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedAgents;