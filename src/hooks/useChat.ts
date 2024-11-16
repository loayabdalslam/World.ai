import { useEffect, useCallback } from 'react';
import { useStore } from '../store';
import client from '../services/feathers';

export function useChat() {
  const { addMessage, messages } = useStore();

  const sendMessage = useCallback(async (data) => {
    try {
      await client.service('messages').create(data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }, []);

  useEffect(() => {
    const messageService = client.service('messages');

    messageService.on('created', message => {
      addMessage(message);
    });

    return () => {
      messageService.removeAllListeners('created');
    };
  }, [addMessage]);

  return { messages, sendMessage };
}