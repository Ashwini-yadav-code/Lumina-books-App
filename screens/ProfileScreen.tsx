
import React from 'react';
import { MOCK_USER } from '../constants';

const ProfileScreen: React.FC = () => {
  const stats = [
    { label: 'Books Read', value: '42', icon: 'auto_stories', color: 'text-primary' },
    { label: 'Reading Hours', value: '156', icon: 'timer', color: 'text-accent-purple' },
    { label: 'Reviews', value: '18', icon: 'rate_review', color: 'text-accent-coral' },
    { label: 'Collections', value: '5', icon: 'folder_special', color: 'text-yellow-500' },
  ];

  const achievements = [
    { name: 'Night Owl', desc: 'Read for 5 hours after midnight', icon: 'dark_mode' },
    { name: 'Genre Hopper', desc: 'Read 5 different genres in a month', icon: 'shuffle' },
    { name: 'Social Butterfly', desc: 'Shared 10 book recommendations', icon: 'celebration' },
    { name: 'Early Bird', desc: 'Pre-ordered 3 upcoming releases', icon: 'rocket_launch' },
  ];

  return (
    <div className="flex flex-col pb-32">
      {/* Profile Header */}
      <header className="relative pt-12 pb-8 px-6 flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-primary/20 to-transparent -z-10"></div>
        <div className="relative mb-4">
          <div 
            className="size-28 rounded-full border-4 border-surface-dark bg-cover bg-center shadow-2xl ring-2 ring-primary/20" 
            style={{ backgroundImage: `url("${MOCK_USER.avatarUrl}")` }}
          />
          <button className="absolute bottom-0 right-0 size-8 bg-primary rounded-full border-2 border-surface-dark flex items-center justify-center text-white shadow-lg">
            <span className="material-symbols-outlined text-[18px]">edit</span>
          </button>
        </div>
        <h1 className="text-2xl font-bold text-white">{MOCK_USER.name}</h1>
        <p className="text-sm text-gray-400 font-medium">Lumina Member since 2023</p>
      </header>

      <main className="px-4 space-y-8">
        {/* Stats Grid */}
        <section className="grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface-dark p-4 rounded-2xl border border-white/5 flex flex-col gap-1 shadow-sm">
              <span className={`material-symbols-outlined ${stat.color} mb-1`}>{stat.icon}</span>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Achievements */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-xl font-bold">Achievements</h2>
            <button className="text-primary text-sm font-bold">View All</button>
          </div>
          <div className="space-y-3">
            {achievements.map((ach) => (
              <div key={ach.name} className="flex items-center gap-4 p-3 bg-surface-dark/50 rounded-xl border border-white/5">
                <div className="size-12 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/5">
                  <span className="material-symbols-outlined">{ach.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-white">{ach.name}</h3>
                  <p className="text-xs text-gray-400">{ach.desc}</p>
                </div>
                <div className="size-2 rounded-full bg-primary shadow-[0_0_8px_rgba(50,17,212,0.8)]"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Settings/Account */}
        <section className="space-y-2">
          <h2 className="text-xl font-bold mb-4 px-1">Account & Privacy</h2>
          <button className="w-full flex items-center justify-between p-4 bg-surface-dark rounded-xl border border-white/5 group active:bg-white/5">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-400 group-hover:text-white">account_circle</span>
              <span className="text-sm font-medium">Personal Information</span>
            </div>
            <span className="material-symbols-outlined text-gray-600">chevron_right</span>
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-surface-dark rounded-xl border border-white/5 group active:bg-white/5">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-400 group-hover:text-white">notifications</span>
              <span className="text-sm font-medium">Notification Preferences</span>
            </div>
            <span className="material-symbols-outlined text-gray-600">chevron_right</span>
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-surface-dark rounded-xl border border-white/5 group active:bg-white/5">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-400 group-hover:text-white">verified_user</span>
              <span className="text-sm font-medium">Security & Passwords</span>
            </div>
            <span className="material-symbols-outlined text-gray-600">chevron_right</span>
          </button>
          <button className="w-full mt-4 flex items-center justify-center gap-2 p-4 text-accent-coral font-bold text-sm bg-accent-coral/5 rounded-xl border border-accent-coral/10 active:bg-accent-coral/10">
            <span className="material-symbols-outlined text-sm">logout</span>
            Sign Out
          </button>
        </section>
      </main>
    </div>
  );
};

export default ProfileScreen;
