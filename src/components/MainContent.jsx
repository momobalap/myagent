import React from 'react';
import AgentSpaceTab from './AgentSpaceTab';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs"

const MainContent = () => {
  return (
    <div className="bg-white h-full overflow-auto rounded-l-3xl shadow-lg">
      <Tabs defaultValue="agentSpace" className="w-full">
        <div className="sticky top-0 bg-white z-10 rounded-tl-3xl">
          <TabsList className="flex justify-center space-x-8 py-2.5 pb-1 border-b-2 border-gray-300 w-full bg-transparent shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <TabsTrigger 
              value="agentSpace" 
              className="relative px-4 py-2 mt-2 text-lg font-medium text-gray-600 transition-colors duration-300"
            >
              Agent Space
              <span className="absolute bottom-[-10px] left-0 w-full h-[2px] bg-purple-600 transform scale-x-0 transition-transform duration-300 group-data-[state=active]:scale-x-100 shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)]"></span>
            </TabsTrigger>
            <TabsTrigger 
              value="myProfile" 
              className="relative px-4 py-2 mt-2 text-lg font-medium text-gray-600 transition-colors duration-300"
            >
              My profile
              <span className="absolute bottom-[-10px] left-0 w-full h-[2px] bg-purple-600 transform scale-x-0 transition-transform duration-300 group-data-[state=active]:scale-x-100 shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)]"></span>
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="p-6">
          <TabsContent value="agentSpace">
            <AgentSpaceTab />
          </TabsContent>
          <TabsContent value="myProfile">
            <div>My Profile Content</div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default MainContent;