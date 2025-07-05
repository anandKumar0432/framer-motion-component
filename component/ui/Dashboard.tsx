"use client"

import React from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4">
    {icon && <div className="text-blue-500 text-3xl">{icon}</div>}
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  </div>
);

export const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Users', value: 1200 },
    { title: 'Revenue', value: '$34,000' },
    { title: 'Orders', value: 320 },
    { title: 'Pending Support Tickets', value: 14 },
  ];

  return (
    <div className='flex'>
      <div>
          <Sidebar />
      </div>
      <div className='h-screen w-full'>
          <Navbar/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ">
          {stats.map((stat, idx) => (
              <DashboardCard key={idx} title={stat.title} value={stat.value} />
          ))}
          </div>
      </div>
    </div>
  );
};


