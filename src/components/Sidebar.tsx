import React from 'react';
import { useStore } from '../store';
import { Globe, Book, Users, MessageSquare } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { nations, selectedNation, globalLaws } = useStore();

  return (
    <div className="bg-gray-800 text-white w-64 p-4 flex flex-col h-screen">
      <div className="mb-8">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Globe className="w-6 h-6" />
          Meta World
        </h1>
      </div>

      <nav className="space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 flex items-center gap-2 mb-2">
            <Users className="w-4 h-4" />
            Nations ({nations.length})
          </h2>
          <ul className="space-y-1">
            {nations.map((nation) => (
              <li
                key={nation.id}
                className={`px-2 py-1 rounded text-sm cursor-pointer ${
                  selectedNation?.id === nation.id
                    ? 'bg-blue-600'
                    : 'hover:bg-gray-700'
                }`}
              >
                {nation.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-400 flex items-center gap-2 mb-2">
            <Book className="w-4 h-4" />
            Global Laws ({globalLaws.length})
          </h2>
          <ul className="space-y-1">
            {globalLaws.map((law) => (
              <li
                key={law.id}
                className="px-2 py-1 rounded text-sm hover:bg-gray-700 cursor-pointer"
              >
                {law.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-400 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Parliament Chat
          </h2>
        </div>
      </nav>
    </div>
  );
};