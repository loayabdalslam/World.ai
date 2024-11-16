export const achievements = [
  {
    id: 'nation_founder',
    name: 'Nation Founder',
    description: 'Successfully establish your first nation',
    icon: '🏛️',
    xpReward: 1000,
    requiredAction: 'create_nation'
  },
  {
    id: 'lawmaker',
    name: 'Lawmaker',
    description: 'Propose your first law',
    icon: '⚖️',
    xpReward: 500,
    requiredAction: 'propose_law'
  },
  {
    id: 'diplomat_initiate',
    name: 'Diplomat Initiate',
    description: 'Establish your first international alliance',
    icon: '🤝',
    xpReward: 750,
    requiredAction: 'create_alliance'
  },
  {
    id: 'voice_of_people',
    name: 'Voice of the People',
    description: 'Participate in 10 community discussions',
    icon: '📢',
    xpReward: 300,
    requiredAction: 'participate_discussions',
    requiredCount: 10
  },
  {
    id: 'master_negotiator',
    name: 'Master Negotiator',
    description: 'Successfully negotiate 5 international treaties',
    icon: '📜',
    xpReward: 1500,
    requiredAction: 'negotiate_treaty',
    requiredCount: 5
  }
];