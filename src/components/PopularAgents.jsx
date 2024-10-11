import React, { useState } from 'react';
import AgentCard from './AgentCard';
import { Button } from './ui/button';

const allPopularAgents = [
  { id: 1, name: 'KOSAM AI', image: '/kosam-ai.jpg', description: 'a dynamic and anonymous chat bot from kosam', username: '@Vinod Sh Tv' },
  { id: 2, name: 'ROV', image: '/rov.jpg', description: 'Art is encouraging', username: '@ROV THEPDET' },
  { id: 3, name: 'Thia', image: '/thia.jpg', description: 'qwe', username: '@HLG' },
  { id: 4, name: 'SEO AuditPro', image: '/seo-auditpro.jpg', description: 'Conducts a comprehensive SEO audit of any website.', username: '@Tom Panos' },
  { id: 5, name: 'Переводчик', image: '/translator.jpg', description: 'Переводчик', username: '@Yegenn Light' },
  { id: 6, name: 'xiaoyu', image: '/xiaoyu.jpg', description: 'first agentx', username: '@tianyu feng' },
  { id: 7, name: 'Cosmo', image: '/cosmo.jpg', description: 'Versatile AI for Creative endeavours', username: '@Ambreen' },
  { id: 8, name: 'BlackPink', image: '/blackpink.jpg', description: 'Ask me anything about BlackPink! World Tour - Born Pink', username: '@Jerry' },
  { id: 9, name: 'LT2 Bot', image: '/lt2-bot.jpg', description: 'b', username: '@Jakob noonan' },
  { id: 10, name: 'Ava', image: '/ava.jpg', description: 'dynamic ai tutor that answers your digital marketing questions', username: '@rui silva' },
  { id: 11, name: 'Branko', image: '/branko.jpg', description: 'Brank is the friendly assistant that helps visitors to...', username: '@Blas Gifuni' },
  { id: 12, name: 'Juanpy Carritos', image: '/juanpy-carritos.jpg', description: 's', username: '@Ricky Espinal' },
  { id: 13, name: 'TAVE - Org & People', image: '/tave.jpg', description: 'AI Teaching Assistant for course: Organisation & People', username: '@jerry neo' },
  { id: 14, name: 'EYE ELITE', image: '/eye-elite.jpg', description: 'Eye Elite is an advanced AI chatbot designed to provide reliable and...', username: '@Jeno Jeno' },
  { id: 15, name: 'DayLight', image: '/daylight.jpg', description: 'This is DayLight a AI chatbot for anything that the user needs anything...', username: '@Miguel Caruana' },
  { id: 16, name: 'Материница', image: '/materinnica.jpg', description: 'qwe', username: '@midd stry' },
  { id: 17, name: 'Бот Умный выбор масла', image: '/bot-oil.jpg', description: 'This bot is a motor oil expert for car enthusiasts, professional advice on...', username: '@Ilya Be' },
  { id: 18, name: '小驴', image: '/xiaolv.jpg', description: 'http://www.spacetouch.co/', username: '@Jerry' },
  { id: 19, name: 'research', image: '/research.jpg', description: '?', username: '@Joshua Medlock' },
  { id: 20, name: 'Studio di Informatica - Calia S...', image: '/calia.jpg', description: 'Assistente Virtuale sui Nostri Servizi Web', username: '@Gaspare Calia' },
  { id: 21, name: 'GPT4', image: '/gpt4.jpg', description: '', username: '@dasfa sa' },
];

const PopularAgents = () => {
  const [visibleAgents, setVisibleAgents] = useState(14);

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