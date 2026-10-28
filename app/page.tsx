'use client';

import { useState } from 'react';
import DashboardView from '@/components/clients/DashboardView';
import ThemeToggle from '@/components/clients/ThemeToggle';
import SidemenuRoutes from '@/lib/data/SidemenuRoutes';
// import AnalyticsView from './components/AnalyticsView';
// import BillingView from './components/BillingView';

type Tab = 'dashboard' | 'analytics' | 'billing';

export default function SinglePageApp() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Persistent Sidebar (Never reloads) */}
      <aside className="w-64 flex flex-col border-r border-(--primary-color) bg-(--primary-color) p-6 text-(--secondary-color)   dark:text-(--secondary-color)">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xl font-extrabold tracking-wider text-(--theme-color)">
            Monetix
          </span>
          <span className="rounded-full border-gray-200 bg-(--primary-color) border-2 dark:bg-(--secondary-color) px-2 py-0.5 text-xs text-(--theme-color) ">
            SPA
          </span>
        </div>

        <nav className="flex flex-col gap-2">
          {SidemenuRoutes.map((route:any) => (
            <a
              key={route.to}
              onClick={() => setActiveTab(route.to.slice(1) as Tab)}
              className={`flex gap-2 text-left px-4 py-2.5 rounded-lg transition font-medium cursor-pointer ${
                activeTab === route.to.slice(1)
                  ? 'bg-(--theme-color) text-(--primary-color) dark:text-(--secondary-color) shadow-md'
                  : 'text-(--secondary-color) hover:bg-(--primary-color) hover:text-(--theme-color)'
            }`}
          >
            <route.icon /> {route.name}
          </a>))}
        </nav>
      </aside>

      {/* Main Dynamic View Panel */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        <header className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8 bg-white dark:bg-gray-900">
          <h2 className="text-lg font-semibold capitalize">{activeTab} Overview</h2>
          <ThemeToggle />
        </header>

        <div className="p-8 flex-1">
          {activeTab === 'dashboard' && <DashboardView />}
          {/* {activeTab === 'analytics' && <AnalyticsView />} */}
          {/* {activeTab === 'billing' && <BillingView />} */}
        </div>
      </main>
    </div>
  );
}