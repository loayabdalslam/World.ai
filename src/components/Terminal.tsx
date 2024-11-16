import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../store';
import { Terminal as TerminalIcon } from 'lucide-react';

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to Meta World Simulation',
    'Type "help" for available commands',
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { addNation, selectNation, proposeLaw } = useStore();

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [history]);

  const handleCommand = (cmd: string) => {
    const args = cmd.toLowerCase().split(' ');
    const command = args[0];

    switch (command) {
      case 'help':
        setHistory((h) => [
          ...h,
          '> ' + cmd,
          'Available commands:',
          'create-nation <name> - Create a new nation',
          'select-nation <name> - Select a nation to control',
          'propose-law <title> <description> - Propose a new law',
          'clear - Clear terminal history',
        ]);
        break;
      case 'create-nation':
        if (args[1]) {
          addNation({
            id: Date.now().toString(),
            name: args.slice(1).join(' '),
            government: 'democracy',
            laws: [],
            resources: 1000,
            population: 1000000,
          });
          setHistory((h) => [...h, '> ' + cmd, `Nation "${args[1]}" created successfully`]);
        }
        break;
      case 'clear':
        setHistory(['Terminal cleared']);
        break;
      default:
        setHistory((h) => [...h, '> ' + cmd, 'Unknown command. Type "help" for available commands']);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-xl font-mono h-[600px] overflow-y-auto">
      <div className="flex items-center gap-2 mb-4">
        <TerminalIcon className="w-5 h-5" />
        <span className="text-sm">Meta World Terminal</span>
      </div>
      <div className="space-y-1">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex items-center">
          <span className="mr-2">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none"
            autoFocus
          />
        </div>
      </form>
      <div ref={bottomRef} />
    </div>
  );
};