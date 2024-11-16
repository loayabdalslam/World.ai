import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../store';
import { Send, Bot } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { getAIResponse } from '../services/ai';

export const ChatRoom: React.FC = () => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user, selectedRoom, messages, addMessage } = useStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  if (!selectedRoom || !user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      content: message,
      sender: user,
      timestamp: Date.now(),
      roomId: selectedRoom.id,
    };

    addMessage(newMessage);
    setMessage('');

    // Get AI response
    const aiResponse = await getAIResponse(
      message,
      `Room: ${selectedRoom.name}, User Role: ${user.role.name}`
    );

    if (aiResponse) {
      addMessage({
        id: Date.now().toString(),
        content: aiResponse,
        sender: {
          id: 'ai',
          name: 'AI Advisor',
          role: { id: 'ai', name: 'citizen', permissions: [], chatRooms: [] },
          experience: 0,
          level: 0,
          achievements: [],
        },
        timestamp: Date.now(),
        roomId: selectedRoom.id,
        aiResponse: true,
      });
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-gray-800 rounded-lg">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">{selectedRoom.name}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages
          .filter((m) => m.roomId === selectedRoom.id)
          .map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.sender.id === user.id ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender.id === 'ai' ? 'bg-purple-600' : 'bg-blue-600'
                }`}
              >
                {message.sender.id === 'ai' ? (
                  <Bot className="w-4 h-4" />
                ) : (
                  message.sender.name.charAt(0)
                )}
              </div>
              <div
                className={`max-w-[70%] ${
                  message.sender.id === user.id
                    ? 'bg-blue-600'
                    : message.sender.id === 'ai'
                    ? 'bg-purple-600'
                    : 'bg-gray-700'
                } rounded-lg p-3`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{message.sender.name}</span>
                  <span className="text-xs text-gray-400">
                    {formatDistanceToNow(message.timestamp, { addSuffix: true })}
                  </span>
                </div>
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Send</span>
          </button>
        </div>
      </form>
    </div>
  );
};