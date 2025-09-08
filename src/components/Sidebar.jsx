import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  LayoutDashboard, 
  Map, 
  FileText, 
  Plus, 
  Database, 
  Lightbulb,
  Navigation,
  Users,
  Droplets,
  BarChart3,
  UserCog,
  TrendingUp,
  Settings,
  LogOut,
  Search,
  Bell
} from 'lucide-react';

const navigationItems = [
  {
    title: 'MAIN NAVIGATION',
    items: [
      { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
      { name: 'Interactive Map', path: '/interactive-map', icon: Map },
      { name: 'AI Report', path: '/ai-report', icon: FileText, count: 7 },
    ]
  },
  {
    title: 'ISSUE CATEGORIES',
    items: [
      { name: '+ New Categories', path: '/new-categories', icon: Plus },
      { name: 'Data Issues', path: '/data-issues', icon: Database },
      { name: 'Street Lighting', path: '/street-lighting', icon: Lightbulb },
      { name: 'Road Management', path: '/road-management', icon: Navigation },
      { name: 'Police & People', path: '/police-people', icon: Users, count: 4 },
      { name: 'Water & Utilities', path: '/water-issues', icon: Droplets, count: 6 },
    ]
  },
  {
    title: 'SECONDARY',
    items: [
      { name: 'Data Analytics', path: '/data-analytics', icon: BarChart3 },
      { name: 'User Management', path: '/user-management', icon: UserCog },
      { name: 'Analytics & Reports', path: '/analytics-reports', icon: TrendingUp },
      { name: 'Settings', path: '/settings', icon: Settings },
    ]
  }
];

export default function Sidebar({ onLogout }) {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-border h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">C</span>
            </div>
          </div>
          <span className="font-semibold text-xl">CivicReport</span>
        </div>
      </div>

      {/* Search and Notifications */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-2 mb-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search reports, users..." 
              className="w-full pl-10 pr-4 py-2 bg-input-background rounded-lg border-0 text-sm"
            />
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </Button>
        </div>
        
        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <Users className="h-4 w-4 text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-medium">Admin Portal</p>
            <p className="text-xs text-gray-500">City Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {navigationItems.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <nav className="space-y-1 px-3">
              {section.items.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`h-4 w-4 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                      <span>{item.name}</span>
                    </div>
                    {item.count && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <Button 
          onClick={onLogout}
          variant="ghost" 
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}