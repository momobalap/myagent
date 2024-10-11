import React from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';

const categories: string[] = [
  'Business', 'Productivity', 'Entertainment', 'Finance',
  'Marketing', 'Shopping', 'Art & Design', 'Education',
  'Lifestyle', 'Mental Health', 'News & Events'
];

const CategoryTabs: React.FC = () => {
  return (
    <ScrollArea className="w-full mb-6">
      <div className="flex justify-center pb-2">
        <div className="inline-flex space-x-2 flex-wrap justify-center">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-full text-xs whitespace-nowrap hover:bg-gray-100 mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default CategoryTabs;