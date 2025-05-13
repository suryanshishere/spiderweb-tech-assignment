import React from 'react';
import { BellIcon, InformationCircleIcon, LogoutIcon, ChevronDownIcon, EyeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const sidebarItems = [
  { label: 'Events', sub: ['New Requests', 'Estimate', 'Events', 'Partial Requests'] },
  { label: 'Positions' },
  { label: 'Contractors' },
  { label: 'Users', sub: ['Admins', 'Clients', 'Coordinators'] },
  { label: 'Profile' }
];

const rows = Array.from({ length: 12 }).map((_, i) => ({
  name: 'Filled Name',
  start: 'Jan 12, 2024',
  end: 'Jan 14, 2024',
  client: 'Muhammad Asad',
  contact: '+1 234 566 7890',
  venue: 'Lorem Ipsum Dolor Sit Amet'
}));

export default function DashboardHomePage() {
  return (
    <div className="min-h-screen flex bg-gradient-to-r from-purple-900 to-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 p-4 bg-gradient-to-b from-purple-800 via-purple-900 to-purple-800 rounded-r-3xl shadow-lg">
        <div className="mb-8">
          <div className="text-3xl font-bold">Logo</div>
        </div>
        <nav className="space-y-2">
          {sidebarItems.map(item => (
            <div key={item.label} className="">
              <button className="w-full flex justify-between items-center px-3 py-2 hover:bg-purple-700 rounded-lg">
                <span>{item.label}</span>
                {item.sub && <ChevronDownIcon className="w-5 h-5" />}
              </button>
              {item.sub && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.sub.map(sub => (
                    <button key={sub} className="w-full text-sm px-3 py-1 hover:bg-purple-700 rounded-lg">
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-auto">
          <button className="flex items-center px-3 py-2 bg-gradient-to-r from-pink-600 to-pink-400 rounded-lg w-full">
            <LogoutIcon className="w-5 h-5 mr-2" /> Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="text-2xl font-semibold">Event Requests</div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="px-3 py-2 rounded-lg bg-purple-800 placeholder-gray-400"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2">
                🔍
              </button>
            </div>
            <button className="px-4 py-2 bg-pink-600 hover:bg-pink-500 rounded-lg">+</button>
            <InformationCircleIcon className="w-6 h-6" />
            <BellIcon className="w-6 h-6" />
            <div className="flex items-center space-x-2">
              <img src="https://via.placeholder.com/32" alt="avatar" className="w-8 h-8 rounded-full" />
              <div>
                <div className="text-green-400 text-sm">Hi, Muhammad Asad</div>
                <div className="text-gray-400 text-xs">welcome back!</div>
              </div>
            </div>
          </div>
        </header>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="text-left border-b border-pink-500">
                <th className="p-2">Event Name</th>
                <th className="p-2">Event Start</th>
                <th className="p-2">Event End</th>
                <th className="p-2">Client Name</th>
                <th className="p-2">Contact Info</th>
                <th className="p-2">Venue</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-b border-purple-700 hover:bg-purple-800">
                  <td className="p-2 flex items-center"><EyeIcon className="w-5 h-5 mr-2" />{row.name}</td>
                  <td className="p-2">{row.start}</td>
                  <td className="p-2">{row.end}</td>
                  <td className="p-2">{row.client}</td>
                  <td className="p-2">{row.contact}</td>
                  <td className="p-2">{row.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-4 space-x-2 text-pink-500">
          <button><ChevronLeftIcon className="w-5 h-5" /></button>
          {[1,2,3,4].map(n => (
            <button key={n} className={`px-3 py-1 rounded-full ${n===1 ? 'bg-pink-500 text-white' : ''}`}>{n}</button>
          ))}
          <button><ChevronRightIcon className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
}
