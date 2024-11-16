export const roles = [
  {
    id: 'president',
    name: 'President',
    description: 'Lead your nation and make executive decisions',
    permissions: ['manage_nation', 'create_laws', 'veto_laws', 'manage_economy'],
    chatRooms: ['executive_office', 'parliament', 'international_summit'],
    requiredLevel: 10,
    xpMultiplier: 2.0
  },
  {
    id: 'minister',
    name: 'Minister',
    description: 'Manage specific aspects of your nation',
    permissions: ['propose_laws', 'manage_department', 'allocate_resources'],
    chatRooms: ['cabinet', 'parliament', 'department_chat'],
    requiredLevel: 5,
    xpMultiplier: 1.5
  },
  {
    id: 'diplomat',
    name: 'Diplomat',
    description: 'Handle international relations and negotiations',
    permissions: ['negotiate_treaties', 'represent_nation', 'propose_alliances'],
    chatRooms: ['diplomatic_corps', 'international_summit', 'embassy'],
    requiredLevel: 7,
    xpMultiplier: 1.75
  },
  {
    id: 'citizen',
    name: 'Citizen',
    description: 'Participate in democracy and community activities',
    permissions: ['vote', 'propose_initiatives', 'participate_community'],
    chatRooms: ['town_hall', 'community_forum', 'local_chat'],
    requiredLevel: 1,
    xpMultiplier: 1.0
  },
  {
    id: 'entrepreneur',
    name: 'Entrepreneur',
    description: 'Build and manage businesses in your nation',
    permissions: ['create_business', 'trade', 'hire_employees'],
    chatRooms: ['business_hub', 'market_square', 'innovation_lab'],
    requiredLevel: 3,
    xpMultiplier: 1.25
  }
];