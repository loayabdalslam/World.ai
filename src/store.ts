import { create } from 'zustand';
import { GameState, Nation, Law, Message, User, ChatRoom, Achievement } from './types';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  role: {
    id: '1',
    name: 'president',
    permissions: ['create_laws', 'manage_nation'],
    chatRooms: ['general', 'parliament']
  },
  experience: 1500,
  level: 3,
  achievements: []
};

const mockAchievements: Achievement[] = [
  {
    id: '1',
    name: 'First Steps',
    description: 'Created your first nation',
    icon: '🌟',
    unlockedAt: Date.now() - 86400000
  },
  {
    id: '2',
    name: 'Lawmaker',
    description: 'Proposed your first law',
    icon: '⚖️',
    unlockedAt: Date.now() - 43200000
  }
];

export const useStore = create<GameState>((set) => ({
  user: mockUser,
  nations: [],
  selectedNation: null,
  chatRooms: [],
  selectedRoom: null,
  messages: [],
  globalLaws: [],
  achievements: mockAchievements,

  setUser: (user) => set({ user }),

  addNation: (nation) =>
    set((state) => ({
      nations: [...state.nations, nation],
      achievements: state.achievements.some(a => a.id === '1')
        ? state.achievements
        : [...state.achievements, {
            id: '1',
            name: 'First Steps',
            description: 'Created your first nation',
            icon: '🌟',
            unlockedAt: Date.now()
          }]
    })),

  selectNation: (nationId) =>
    set((state) => ({
      selectedNation: state.nations.find((n) => n.id === nationId) || null,
    })),

  proposeLaw: (law) =>
    set((state) => ({
      globalLaws: [...state.globalLaws, law],
      achievements: state.achievements.some(a => a.id === '2')
        ? state.achievements
        : [...state.achievements, {
            id: '2',
            name: 'Lawmaker',
            description: 'Proposed your first law',
            icon: '⚖️',
            unlockedAt: Date.now()
          }]
    })),

  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),

  selectRoom: (roomId) =>
    set((state) => ({
      selectedRoom: state.chatRooms.find((r) => r.id === roomId) || null,
    })),

  unlockAchievement: (achievementId) =>
    set((state) => ({
      achievements: state.achievements.map(a =>
        a.id === achievementId
          ? { ...a, unlockedAt: Date.now() }
          : a
      )
    }))
}));