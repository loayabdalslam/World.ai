import React from 'react';
import { useStore } from '../store';
import { Trophy, Star, TrendingUp, Award } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, achievements } = useStore();

  if (!user) return null;

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold">Level Progress</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-600 h-2 rounded-full">
              <div
                className="bg-blue-400 h-2 rounded-full"
                style={{ width: `${(user.experience % 1000) / 10}%` }}
              />
            </div>
            <span className="text-sm">Level {user.level}</span>
          </div>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold">Role</h3>
          </div>
          <p className="text-lg font-medium capitalize">{user.role.name}</p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold">Achievements</h3>
          </div>
          <p className="text-lg font-medium">{achievements.length} Unlocked</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" />
          Recent Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.slice(-3).map((achievement) => (
            <div
              key={achievement.id}
              className="bg-gray-700 p-4 rounded-lg flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                {achievement.icon}
              </div>
              <div>
                <h4 className="font-medium">{achievement.name}</h4>
                <p className="text-sm text-gray-400">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};