import React, { useState } from 'react';
import {
  BellIcon,
  InformationCircleIcon,
  LogoutIcon,
  ChevronDownIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MenuIcon,
  ArrowLeftIcon,
} from '@heroicons/react/outline';

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex animate-gradient-x bg-gradient-to-r from-purple-900 to-gray-900 text-white">

      {/* Sidebar for desktop */}
      <aside className="hidden md:flex w-64 p-4 bg-gradient-to-b from-purple-800 via-purple-900 to-purple-800 rounded-r-3xl shadow-lg flex-col">
        <div className="mb-8 text-3xl font-bold">Logo</div>
        <nav className="space-y-4 flex-1">
          {sidebarItems.map(item => (
            <div key={item.label}>
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
        <button className="flex items-center px-3 py-2 bg-gradient-to-r from-pink-600 to-pink-400 rounded-lg mt-auto">
          <LogoutIcon className="w-5 h-5 mr-2" /> Logout
        </button>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-64 bg-gradient-to-b from-purple-800 via-purple-900 to-purple-800 p-4">
            <button
              onClick={() => setSidebarOpen(false)}
              className="mb-6 p-2 bg-purple-700 rounded-full"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <nav className="space-y-4">
              {sidebarItems.map(item => (
                <div key={item.label}>
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
            <button className="flex items-center px-3 py-2 bg-gradient-to-r from-pink-600 to-pink-400 rounded-lg mt-6">
              <LogoutIcon className="w-5 h-5 mr-2" /> Logout
            </button>
          </div>
          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4">
          <button onClick={() => setSidebarOpen(true)}>
            <MenuIcon className="w-6 h-6 text-white" />
          </button>
          <div className="flex items-center space-x-3">
            <InformationCircleIcon className="w-6 h-6" />
            <BellIcon className="w-6 h-6" />
            <img
              src="https://via.placeholder.com/32"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Desktop Header */}
        <header className="hidden md:flex justify-between items-center p-6">
          <h1 className="text-2xl font-semibold">Event Requests</h1>
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

        {/* Content Body */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          {/* Table for desktop */}
          <div className="hidden md:block">
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

          {/* Mobile list */}
          <div className="md:hidden space-y-4">
            {rows.slice(0, 5).map((row, idx) => (
              <div key={idx} className="bg-purple-800 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold">{row.name}</h2>
                  <span className="text-pink-400 text-sm">Details</span>
                </div>
                <p className="text-sm">Start: {row.start}</p>
                <p className="text-sm">Ends: {row.end}</p>
                <p className="text-sm mt-2">Venue: {row.venue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="p-4 md:p-6 flex justify-center items-center space-x-2 text-pink-500">
          <button><ChevronLeftIcon className="w-5 h-5" /></button>
          {[1,2,3,4].map(n => (
            <button
              key={n}
              className={`px-3 py-1 rounded-full ${n===1 ? 'bg-pink-500 text-white' : ''}`}
            >
              {n}
            </button>
          ))}
          <button><ChevronRightIcon className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
}