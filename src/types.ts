export interface User {
  id: string;
  name: string;
  role: Role;
  experience: number;
  level: number;
  achievements: Achievement[];
  nationId?: string;
}

export interface Role {
  id: string;
  name: 'president' | 'minister' | 'diplomat' | 'citizen';
  permissions: string[];
  chatRooms: string[];
}

export interface Nation {
  id: string;
  name: string;
  government: string;
  laws: Law[];
  resources: number;
  population: number;
  chatRooms: ChatRoom[];
}

export interface Law {
  id: string;
  title: string;
  description: string;
  votes: number;
  status: 'proposed' | 'active' | 'rejected';
  proposedBy: string;
}

export interface Message {
  id: string;
  content: string;
  sender: User;
  timestamp: number;
  roomId: string;
  aiResponse?: string;
}

export interface ChatRoom {
  id: string;
  name: string;
  type: 'nation' | 'role' | 'community';
  participants: string[];
  messages: Message[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: number;
}

export interface GameState {
  user: User | null;
  nations: Nation[];
  selectedNation: Nation | null;
  chatRooms: ChatRoom[];
  selectedRoom: ChatRoom | null;
  messages: Message[];
  globalLaws: Law[];
  achievements: Achievement[];
  
  setUser: (user: User) => void;
  addNation: (nation: Nation) => void;
  selectNation: (nationId: string) => void;
  proposeLaw: (law: Law) => void;
  addMessage: (message: Message) => void;
  selectRoom: (roomId: string) => void;
  unlockAchievement: (achievementId: string) => void;
}