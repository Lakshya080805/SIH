import React, { useState } from 'react';

// UI Components
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  size = 'default',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium';
  
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
  };
  
  const sizeClasses = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-1.5 text-xs',
    lg: 'px-6 py-3 text-base',
    icon: 'p-2'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => (
  <input 
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => (
  <textarea 
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y ${className}`}
    {...props}
  />
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white border border-gray-200 rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="p-6 pb-0">{children}</div>;
const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="p-6">{children}</div>;

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'success' | 'warning';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const variantClasses = {
    default: 'bg-blue-100 text-blue-800',
    destructive: 'bg-red-100 text-red-800',
    outline: 'border border-gray-300 text-gray-700',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800'
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};

// Icons
const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const MapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ReportIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const LightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const WaterIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
  </svg>
);

const RoadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const AIIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const MicIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const HistoryIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

// CivicTracker Logo Component
const CivicTrackerLogo = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const dimensions = {
    small: 'w-8 h-8',
    default: 'w-10 h-10',
    large: 'w-12 h-12'
  };

  return (
    <div className={`${dimensions[size]} bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md`}>
      <div className="text-white font-bold text-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
    </div>
  );
};

// Simple Chart Components
const SimpleBarChart = ({ data, className = '' }: { data: { name: string; value: number; color: string }[], className?: string }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className={`space-y-3 ${className}`}>
      {data.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-20 text-sm text-gray-600">{item.name}</div>
          <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className={`h-full ${item.color} transition-all duration-500 ease-out`}
              style={{ width: `${(item.value / maxValue) * 100}%` }}
            ></div>
          </div>
          <div className="w-12 text-sm font-medium text-gray-900">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

const SimplePieChart = ({ data, className = '' }: { data: { name: string; value: number; color: string }[], className?: string }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className={`space-y-2 ${className}`}>
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
          <div className="text-sm font-medium">{Math.round((item.value / total) * 100)}%</div>
        </div>
      ))}
    </div>
  );
};

// Landing Page Component
interface LandingPageProps {
  onShowLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onShowLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <CivicTrackerLogo />
              <span className="text-2xl font-bold text-gray-900">CivicTracker</span>
            </div>
            <Button onClick={onShowLogin} className="bg-blue-600 hover:bg-blue-700">
              Admin Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Smart City Reporting Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Revolutionizing civic infrastructure management with AI-powered insights,
            real-time reporting, and intelligent issue resolution for modern cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Report an Issue
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comprehensive City Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapIcon,
                title: "Interactive Maps",
                description: "Real-time visualization of city issues with advanced filtering and geographic insights."
              },
              {
                icon: AIIcon,
                title: "AI-Powered Analytics",
                description: "Intelligent reporting and predictive maintenance recommendations powered by machine learning."
              },
              {
                icon: LightIcon,
                title: "Infrastructure Monitoring",
                description: "Track street lighting, road conditions, and public utilities with automated alerts."
              },
              {
                icon: WaterIcon,
                title: "Water Management",
                description: "Comprehensive water system monitoring with leak detection and quality tracking."
              },
              {
                icon: UserIcon,
                title: "Citizen Engagement",
                description: "Easy reporting system for citizens to submit issues and track resolution progress."
              },
              {
                icon: ReportIcon,
                title: "Advanced Reporting",
                description: "Detailed analytics and reports for data-driven decision making and resource allocation."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <feature.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Cities Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Cities Using Platform</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-blue-100">Issues Resolved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Resolution Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <CivicTrackerLogo />
                <span className="text-xl font-bold">CivicTracker</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Empowering cities with intelligent infrastructure management and citizen engagement solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Interactive Maps</li>
                <li>AI Analytics</li>
                <li>Issue Tracking</li>
                <li>Reporting Tools</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@civictracker.com</li>
                <li>1-800-CIVIC-01</li>
                <li>Documentation</li>
                <li>API Access</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CivicTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Login Modal Component with Light Blue Background
interface LoginModalProps {
  onLogin: () => void;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 bg-opacity-95 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full shadow-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <CivicTrackerLogo size="small" />
              <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="admin@civictracker.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </button>
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Header Component with User Account
interface HeaderProps {
  currentUser: { name: string; email: string; role: string };
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentUser, onLogout, onNavigate }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-end">
        <div className="relative">
          <button 
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-medium text-sm">{currentUser.name.charAt(0)}</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
              <p className="text-xs text-gray-500">{currentUser.role}</p>
            </div>
            <svg className={`w-4 h-4 text-gray-400 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
              <button 
                onClick={() => {
                  onNavigate('profile');
                  setShowUserMenu(false);
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                My Profile
              </button>
              <button 
                onClick={() => {
                  onNavigate('history');
                  setShowUserMenu(false);
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Complaint History
              </button>
              <hr className="my-1" />
              <button 
                onClick={onLogout}
                className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const navigationItems = [
    { name: 'Dashboard', page: 'dashboard', icon: HomeIcon },
    { name: 'Interactive Map', page: 'map', icon: MapIcon },
    { name: 'AI Report', page: 'ai-report', icon: AIIcon },
    { name: 'Street Lighting', page: 'lighting', icon: LightIcon },
    { name: 'Road Management', page: 'roads', icon: RoadIcon },
    { name: 'Water Issues', page: 'water', icon: WaterIcon },
    { name: 'User Management', page: 'users', icon: UserIcon },
    { name: 'Settings', page: 'settings', icon: SettingsIcon },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <CivicTrackerLogo />
          <span className="font-semibold text-xl">CivicTracker</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {navigationItems.map((item) => {
            const isActive = currentPage === item.page;
            const Icon = item.icon;
            
            return (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

// Add Complaint Modal Component
interface AddComplaintModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (complaint: any) => void;
}

const AddComplaintModal: React.FC<AddComplaintModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('road');
  const [priority, setPriority] = useState('medium');
  const [location, setLocation] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const complaint = {
      id: Date.now().toString(),
      title,
      description,
      category,
      priority,
      location,
      status: 'Open',
      date: new Date().toISOString().split('T')[0],
      reportedBy: 'Current User'
    };
    onSubmit(complaint);
    onClose();
    // Reset form
    setTitle('');
    setDescription('');
    setCategory('road');
    setPriority('medium');
    setLocation('');
  };

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    // Simulate voice to text
    if (!isRecording) {
      setTimeout(() => {
        setDescription(prev => prev + (prev ? ' ' : '') + 'Voice recording: There is a large pothole on Main Street that needs immediate attention.');
        setIsRecording(false);
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Report New Issue</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issue Title
              </label>
              <Input
                type="text"
                placeholder="Brief description of the issue"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="road">Road Issues</option>
                <option value="water">Water Issues</option>
                <option value="lighting">Street Lighting</option>
                <option value="public-safety">Public Safety</option>
                <option value="environment">Environment</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <Input
                type="text"
                placeholder="Street address or landmark"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <div className="relative">
                <Textarea
                  placeholder="Detailed description of the issue..."
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={handleVoiceRecord}
                  className={`absolute bottom-2 right-2 p-2 rounded-full transition-colors ${
                    isRecording 
                      ? 'bg-red-100 text-red-600 animate-pulse' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <MicIcon />
                </button>
              </div>
              {isRecording && (
                <p className="text-sm text-red-600 mt-1">Recording... Speak now</p>
              )}
            </div>

            <div className="flex space-x-3 mt-6">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Submit Report
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Dashboard Component with Charts and Add Complaint
const Dashboard: React.FC = () => {
  const [showAddComplaint, setShowAddComplaint] = useState(false);
  const [complaints, setComplaints] = useState([
    { 
      id: '10-81-13-005', 
      title: 'Large pothole on Main Street',
      category: 'Road Issues', 
      location: 'Main St & 3rd Ave', 
      status: 'Open',
      priority: 'High',
      date: '2024-01-15',
      description: 'Large pothole causing traffic issues',
      reportedBy: 'John Doe'
    },
    { 
      id: '10-81-13-006', 
      title: 'Water main leak',
      category: 'Water Issues', 
      location: '5th Park Ln', 
      status: 'In Progress',
      priority: 'Medium',
      date: '2024-01-14',
      description: 'Water main leak reported',
      reportedBy: 'Jane Smith'
    },
    { 
      id: '10-81-13-007', 
      title: 'Street light not functioning',
      category: 'Street Light', 
      location: 'Central Plaza', 
      status: 'Resolved',
      priority: 'Low',
      date: '2024-01-13',
      description: 'Street light not functioning',
      reportedBy: 'Mike Johnson'
    }
  ]);

  const statsCards = [
    { title: 'Total Reports', value: complaints.length.toString(), change: '+5.2%', color: 'bg-orange-100 text-orange-700', trend: 'up' },
    { title: 'Active Issues', value: complaints.filter(c => c.status === 'Open').length.toString(), change: 'Past 7 days', color: 'bg-red-100 text-red-700', trend: 'neutral' },
    { title: 'In Progress', value: complaints.filter(c => c.status === 'In Progress').length.toString(), change: '5 More to resolve', color: 'bg-blue-100 text-blue-700', trend: 'down' },
    { title: 'Resolved', value: complaints.filter(c => c.status === 'Resolved').length.toString(), change: '15% Resolved rate', color: 'bg-green-100 text-green-700', trend: 'up' }
  ];

  const chartData = [
    { name: 'Road Issues', value: 32, color: 'bg-red-500' },
    { name: 'Water Issues', value: 28, color: 'bg-blue-500' },
    { name: 'Street Lighting', value: 25, color: 'bg-yellow-500' },
    { name: 'Other', value: 15, color: 'bg-gray-500' }
  ];

  const priorityData = [
    { name: 'High', value: 23, color: 'bg-red-500' },
    { name: 'Medium', value: 45, color: 'bg-yellow-500' },
    { name: 'Low', value: 78, color: 'bg-green-500' }
  ];

  const handleAddComplaint = (newComplaint: any) => {
    setComplaints(prev => [newComplaint, ...prev]);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Track, drive insights and solve issue reporting and resolution</p>
        </div>
        <Button 
          onClick={() => setShowAddComplaint(true)}
          className="bg-green-600 hover:bg-green-700 flex items-center space-x-2"
        >
          <PlusIcon />
          <span>Add Complaint</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat) => (
          <Card key={stat.title}>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1 flex items-center">
                    {stat.trend === 'up' && <span className="text-green-500 mr-1">↑</span>}
                    {stat.trend === 'down' && <span className="text-red-500 mr-1">↓</span>}
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <ReportIcon />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="col-span-2">
          <CardHeader>
            <h3 className="text-xl font-semibold">Issue Categories Distribution</h3>
          </CardHeader>
          <CardContent>
            <SimpleBarChart data={chartData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Priority Distribution</h3>
          </CardHeader>
          <CardContent>
            <SimplePieChart data={priorityData} />
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold">Recent Reports</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complaints.slice(0, 5).map((report) => (
              <div key={report.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold">{report.id}</h4>
                      <Badge variant={report.priority === 'High' ? 'destructive' : report.priority === 'Medium' ? 'warning' : 'secondary'}>
                        {report.priority}
                      </Badge>
                    </div>
                    <p className="font-medium text-gray-800">{report.title}</p>
                    <p className="text-sm text-gray-600">{report.location}</p>
                    <p className="text-sm text-gray-500 mt-1">{report.description}</p>
                    <p className="text-xs text-gray-400 mt-2">{report.date}</p>
                  </div>
                  <Badge variant={report.status === 'Open' ? 'destructive' : report.status === 'In Progress' ? 'default' : 'success'}>
                    {report.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AddComplaintModal
        isOpen={showAddComplaint}
        onClose={() => setShowAddComplaint(false)}
        onSubmit={handleAddComplaint}
      />
    </div>
  );
};

// Interactive Map Component with Realistic Streets
const InteractiveMap: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [filter, setFilter] = useState('all');

  interface MapMarker {
    id: number;
    x: number;
    y: number;
    type: string;
    priority: string;
    title: string;
    description: string;
    reportedBy: string;
    date: string;
  }

  const mapMarkers: MapMarker[] = [
    { 
      id: 1, 
      x: 25, 
      y: 35, 
      type: 'road', 
      priority: 'high',
      title: 'Pothole on Main Street',
      description: 'Large pothole causing traffic delays',
      reportedBy: 'John Doe',
      date: '2024-01-15'
    },
    { 
      id: 2, 
      x: 45, 
      y: 28, 
      type: 'water', 
      priority: 'medium',
      title: 'Water Main Leak',
      description: 'Water leak near residential area',
      reportedBy: 'Jane Smith',
      date: '2024-01-14'
    },
    { 
      id: 3, 
      x: 65, 
      y: 45, 
      type: 'lighting', 
      priority: 'low',
      title: 'Street Light Out',
      description: 'Street light not functioning properly',
      reportedBy: 'Mike Johnson',
      date: '2024-01-13'
    },
    { 
      id: 4, 
      x: 30, 
      y: 60, 
      type: 'road', 
      priority: 'high',
      title: 'Traffic Signal Malfunction',
      description: 'Traffic signal stuck on red',
      reportedBy: 'Sarah Wilson',
      date: '2024-01-12'
    },
    { 
      id: 5, 
      x: 55, 
      y: 25, 
      type: 'water', 
      priority: 'medium',
      title: 'Drainage Issue',
      description: 'Storm drain clogged after rain',
      reportedBy: 'Tom Brown',
      date: '2024-01-11'
    }
  ];

  const filteredMarkers = filter === 'all' 
    ? mapMarkers 
    : mapMarkers.filter(marker => marker.type === filter);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">City Issue Map</h1>
        <p className="text-gray-600">Interactive visualization of civic issues across the city</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Controls */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Map Controls</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Filter by Type</label>
                <select 
                  value={filter} 
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Issues</option>
                  <option value="road">Road Issues</option>
                  <option value="water">Water Issues</option>
                  <option value="lighting">Street Lighting</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Zoom Controls</label>
                <div className="flex space-x-2">
                  <Button size="sm" onClick={handleZoomIn}>+</Button>
                  <Button size="sm" onClick={handleZoomOut}>-</Button>
                  <Button size="sm" variant="outline" onClick={handleReset}>Reset</Button>
                </div>
                <p className="text-xs text-gray-500">Zoom: {(zoom * 100).toFixed(0)}%</p>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Legend</h4>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-xs">High Priority</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs">Medium Priority</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-xs">Low Priority</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Realistic Map */}
        <Card className="col-span-3">
          <CardHeader>
            <h3 className="text-xl font-semibold">City Issue Map</h3>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden h-96 border">
              <div 
                className="absolute inset-0 transition-transform duration-200"
                style={{ 
                  transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                  backgroundImage: `
                    linear-gradient(90deg, #e5e7eb 1px, transparent 1px),
                    linear-gradient(#e5e7eb 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  backgroundColor: '#f3f4f6'
                }}
              >
                {/* Main Roads */}
                <div className="absolute top-1/3 left-0 right-0 h-4 bg-gray-600 opacity-80">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-400 transform -translate-y-1/2"></div>
                </div>
                <div className="absolute top-2/3 left-0 right-0 h-4 bg-gray-600 opacity-80">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-400 transform -translate-y-1/2"></div>
                </div>
                <div className="absolute left-1/4 top-0 bottom-0 w-4 bg-gray-600 opacity-80">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 transform -translate-x-1/2"></div>
                </div>
                <div className="absolute left-3/4 top-0 bottom-0 w-4 bg-gray-600 opacity-80">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 transform -translate-x-1/2"></div>
                </div>

                {/* Buildings */}
                <div className="absolute top-2 left-8 w-16 h-20 bg-gray-400 rounded opacity-70"></div>
                <div className="absolute top-8 left-28 w-20 h-16 bg-gray-500 rounded opacity-70"></div>
                <div className="absolute top-4 right-8 w-24 h-28 bg-gray-600 rounded opacity-70"></div>
                <div className="absolute bottom-8 left-12 w-18 h-22 bg-gray-400 rounded opacity-70"></div>
                <div className="absolute bottom-4 right-12 w-20 h-18 bg-gray-500 rounded opacity-70"></div>

                {/* Parks and Green Areas */}
                <div className="absolute top-4 left-4 w-32 h-24 bg-green-200 rounded opacity-80 flex items-center justify-center text-xs font-medium">
                  Central Park
                </div>
                <div className="absolute bottom-4 right-4 w-40 h-32 bg-blue-200 rounded opacity-80 flex items-center justify-center text-xs font-medium">
                  Business District
                </div>
                <div className="absolute top-1/2 left-1/2 w-24 h-16 bg-red-200 rounded opacity-80 flex items-center justify-center text-xs font-medium transform -translate-x-1/2 -translate-y-1/2">
                  City Hall
                </div>

                {/* Markers */}
                {filteredMarkers.map((marker) => (
                  <div
                    key={marker.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                    onClick={() => setSelectedMarker(marker.id)}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-white ${
                      marker.priority === 'high' ? 'bg-red-500' : 
                      marker.priority === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    {selectedMarker === marker.id && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border max-w-xs z-10">
                        <h4 className="font-semibold text-sm">{marker.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{marker.description}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant={marker.priority === 'high' ? 'destructive' : marker.priority === 'medium' ? 'warning' : 'default'}>
                            {marker.priority}
                          </Badge>
                          <span className="text-xs text-gray-500">{marker.date}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Reported by: {marker.reportedBy}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Issue Summary */}
      <Card className="mt-6">
        <CardHeader>
          <h3 className="text-xl font-semibold">Issue Summary</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">2</div>
              <div className="text-sm text-gray-600">High Priority</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">2</div>
              <div className="text-sm text-gray-600">Medium Priority</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1</div>
              <div className="text-sm text-gray-600">Low Priority</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">5</div>
              <div className="text-sm text-gray-600">Total Issues</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Enhanced Street Lighting Component with Visual Data
const StreetLighting: React.FC = () => {
  const [selectedLight, setSelectedLight] = useState<any>(null);

  const lightingData = [
    { id: 'SL-001', location: 'Main St & 1st Ave', status: 'Online', brightness: 85, lastMaintenance: '2023-12-15', nextMaintenance: '2024-03-15', energyUsage: 120, cost: '$15.2' },
    { id: 'SL-002', location: 'Oak Park Dr', status: 'Offline', brightness: 0, lastMaintenance: '2023-11-20', nextMaintenance: 'Overdue', energyUsage: 0, cost: '$0' },
    { id: 'SL-003', location: 'Central Plaza', status: 'Dimmed', brightness: 45, lastMaintenance: '2023-12-01', nextMaintenance: '2024-02-28', energyUsage: 80, cost: '$9.6' },
    { id: 'SL-004', location: 'Industrial Ave', status: 'Online', brightness: 90, lastMaintenance: '2024-01-10', nextMaintenance: '2024-04-10', energyUsage: 135, cost: '$16.8' }
  ];

  const performanceData = [
    { name: 'Online', value: 85, color: 'bg-green-500' },
    { name: 'Offline', value: 8, color: 'bg-red-500' },
    { name: 'Dimmed', value: 7, color: 'bg-yellow-500' }
  ];

  const energyData = [
    { name: 'Jan', value: 12500, color: 'bg-blue-500' },
    { name: 'Feb', value: 11800, color: 'bg-blue-500' },
    { name: 'Mar', value: 13200, color: 'bg-blue-500' },
    { name: 'Apr', value: 12900, color: 'bg-blue-500' }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <LightIcon />
          <span className="ml-3">Street Lighting Management</span>
        </h1>
        <p className="text-gray-600">Monitor and manage street lighting infrastructure across the city</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Lights</p>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-xs text-green-600">↑ 2.3% from last month</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <LightIcon />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Online</p>
                <p className="text-2xl font-bold text-green-600">1,180</p>
                <p className="text-xs text-gray-500">94.6% uptime</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Energy Usage</p>
                <p className="text-2xl font-bold text-blue-600">12.5K</p>
                <p className="text-xs text-gray-500">kWh this month</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Cost Savings</p>
                <p className="text-2xl font-bold text-green-600">$2.8K</p>
                <p className="text-xs text-gray-500">vs last month</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <span className="text-green-600 font-bold">$</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visual Data Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Performance Distribution</h3>
          </CardHeader>
          <CardContent>
            <SimplePieChart data={performanceData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Monthly Energy Usage</h3>
          </CardHeader>
          <CardContent>
            <SimpleBarChart data={energyData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Quick Stats</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg Brightness</span>
                <span className="font-medium">78%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Maintenance Due</span>
                <span className="font-medium text-yellow-600">22</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Emergency Repairs</span>
                <span className="font-medium text-red-600">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Cost per Light</span>
                <span className="font-medium">$12.5/mo</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lighting Status Table */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold">Street Light Status</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {lightingData.map((light) => (
              <div 
                key={light.id} 
                className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedLight(light)}
              >
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  <div>
                    <h4 className="font-medium">{light.id}</h4>
                    <p className="text-sm text-gray-600">{light.location}</p>
                  </div>
                  <div className="text-center">
                    <Badge variant={
                      light.status === 'Online' ? 'success' : 
                      light.status === 'Offline' ? 'destructive' : 'warning'
                    }>
                      {light.status}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{light.brightness}%</div>
                    <div className="text-xs text-gray-500">Brightness</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{light.energyUsage}W</div>
                    <div className="text-xs text-gray-500">Usage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{light.cost}</div>
                    <div className="text-xs text-gray-500">Monthly</div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Next Maintenance:</p>
                    <p className={`text-sm font-medium ${light.nextMaintenance === 'Overdue' ? 'text-red-600' : ''}`}>
                      {light.nextMaintenance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Light Details Modal */}
      {selectedLight && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-md w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Light Details</h3>
                <button 
                  onClick={() => setSelectedLight(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium">ID:</span>
                  <span className="text-sm text-gray-600 ml-2">{selectedLight.id}</span>
                </div>
                <div>
                  <span className="text-sm font-medium">Location:</span>
                  <span className="text-sm text-gray-600 ml-2">{selectedLight.location}</span>
                </div>
                <div>
                  <span className="text-sm font-medium">Status:</span>
                  <Badge className="ml-2" variant={
                    selectedLight.status === 'Online' ? 'success' : 
                    selectedLight.status === 'Offline' ? 'destructive' : 'warning'
                  }>
                    {selectedLight.status}
                  </Badge>
                </div>
                <div>
                  <span className="text-sm font-medium">Brightness:</span>
                  <span className="text-sm text-gray-600 ml-2">{selectedLight.brightness}%</span>
                </div>
                <div>
                  <span className="text-sm font-medium">Energy Usage:</span>
                  <span className="text-sm text-gray-600 ml-2">{selectedLight.energyUsage}W</span>
                </div>
                <div>
                  <span className="text-sm font-medium">Monthly Cost:</span>
                  <span className="text-sm text-gray-600 ml-2">{selectedLight.cost}</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-6">
                <Button size="sm" className="flex-1">Schedule Maintenance</Button>
                <Button size="sm" variant="outline" className="flex-1">Toggle Light</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

// AI Report Component
const AIReport: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportType, setReportType] = useState('predictive');

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  const reportInsights = [
    {
      title: "Predictive Maintenance Alert",
      description: "AI analysis predicts 3 street lights will fail within next 2 weeks",
      priority: "High",
      confidence: "92%",
      action: "Schedule maintenance"
    },
    {
      title: "Traffic Pattern Analysis",
      description: "Unusual traffic congestion detected on Main St during morning hours",
      priority: "Medium",
      confidence: "87%",
      action: "Review traffic signals"
    },
    {
      title: "Water Usage Anomaly",
      description: "Potential water leak detected in Sector 5 based on usage patterns",
      priority: "High",
      confidence: "95%",
      action: "Inspect water lines"
    }
  ];

  const accuracyData = [
    { name: 'Predictive', value: 92, color: 'bg-green-500' },
    { name: 'Traffic', value: 87, color: 'bg-blue-500' },
    { name: 'Water', value: 95, color: 'bg-purple-500' },
    { name: 'Infrastructure', value: 89, color: 'bg-orange-500' }
  ];

  const monthlyReports = [
    { name: 'Jan', value: 45, color: 'bg-blue-500' },
    { name: 'Feb', value: 52, color: 'bg-blue-500' },
    { name: 'Mar', value: 48, color: 'bg-blue-500' },
    { name: 'Apr', value: 61, color: 'bg-blue-500' }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <AIIcon />
          <span className="ml-3">AI-Powered Reports</span>
        </h1>
        <p className="text-gray-600">Generate intelligent insights and predictive analytics for city infrastructure</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">127</p>
              <p className="text-sm text-gray-600">Reports Generated</p>
              <p className="text-xs text-green-600">↑ 12% this month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">91%</p>
              <p className="text-sm text-gray-600">Accuracy Rate</p>
              <p className="text-xs text-gray-500">Industry leading</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">23</p>
              <p className="text-sm text-gray-600">Predictions Made</p>
              <p className="text-xs text-gray-500">This week</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">$2.1M</p>
              <p className="text-sm text-gray-600">Cost Savings</p>
              <p className="text-xs text-gray-500">From predictions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Report Generation */}
        <Card className="col-span-2">
          <CardHeader>
            <h3 className="text-xl font-semibold">Generate New Report</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Report Type</label>
                <select 
                  value={reportType} 
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option value="predictive">Predictive Maintenance</option>
                  <option value="performance">Performance Analysis</option>
                  <option value="resource">Resource Optimization</option>
                  <option value="citizen">Citizen Satisfaction</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Time Period</label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Include Departments</label>
                <div className="space-y-2">
                  {['Street Lighting', 'Road Management', 'Water Services', 'Public Safety'].map(dept => (
                    <label key={dept} className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">{dept}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleGenerateReport} 
                disabled={isGenerating}
                className="w-full"
              >
                {isGenerating ? 'Generating Report...' : 'Generate AI Report'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Insights */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Recent AI Insights</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reportInsights.map((insight, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <h4 className="font-medium text-sm">{insight.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{insight.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant={insight.priority === 'High' ? 'destructive' : 'warning'}>
                      {insight.priority}
                    </Badge>
                    <span className="text-xs text-gray-500">{insight.confidence}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visual Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">AI Model Accuracy</h3>
          </CardHeader>
          <CardContent>
            <SimpleBarChart data={accuracyData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Monthly Report Generation</h3>
          </CardHeader>
          <CardContent>
            <SimpleBarChart data={monthlyReports} />
          </CardContent>
        </Card>
      </div>

      {/* Report History */}
      <Card className="mt-8">
        <CardHeader>
          <h3 className="text-xl font-semibold">Generated Reports</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Predictive Maintenance Report - January 2024', date: '2024-01-15', type: 'Predictive', status: 'Complete' },
              { name: 'Performance Analysis - Q4 2023', date: '2024-01-10', type: 'Performance', status: 'Complete' },
              { name: 'Resource Optimization Report', date: '2024-01-05', type: 'Resource', status: 'Processing' }
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div>
                  <h4 className="font-medium">{report.name}</h4>
                  <p className="text-sm text-gray-600">{report.date}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge>{report.type}</Badge>
                  <Badge variant={report.status === 'Complete' ? 'success' : 'warning'}>{report.status}</Badge>
                  {report.status === 'Complete' && (
                    <Button size="sm" variant="outline">Download</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Road Management Component  
const RoadManagement: React.FC = () => {
  const roadData = [
    { 
      id: 'RD-001', 
      name: 'Main Street', 
      condition: 'Good', 
      lastInspection: '2024-01-10', 
      nextMaintenance: '2024-04-15',
      length: '2.5 km',
      traffic: 'High',
      issues: []
    },
    { 
      id: 'RD-002', 
      name: 'Oak Avenue', 
      condition: 'Poor', 
      lastInspection: '2023-12-15', 
      nextMaintenance: 'Overdue',
      length: '1.8 km',
      traffic: 'Medium',
      issues: ['Potholes', 'Cracking']
    },
    { 
      id: 'RD-003', 
      name: 'Industrial Boulevard', 
      condition: 'Fair', 
      lastInspection: '2024-01-05', 
      nextMaintenance: '2024-03-20',
      length: '3.2 km',
      traffic: 'High',
      issues: ['Surface wear']
    }
  ];

  const conditionData = [
    { name: 'Good', value: 127, color: 'bg-green-500' },
    { name: 'Fair', value: 43, color: 'bg-yellow-500' },
    { name: 'Poor', value: 12, color: 'bg-red-500' }
  ];

  const maintenanceBudget = [
    { name: 'Q1', value: 2500000, color: 'bg-blue-500' },
    { name: 'Q2', value: 3200000, color: 'bg-blue-500' },
    { name: 'Q3', value: 2800000, color: 'bg-blue-500' },
    { name: 'Q4', value: 4000000, color: 'bg-blue-500' }
  ];

  const maintenanceProjects = [
    { name: 'Highway 101 Resurfacing', progress: 75, deadline: '2024-03-01', budget: '$2.5M' },
    { name: 'Downtown Street Repairs', progress: 45, deadline: '2024-02-15', budget: '$800K' },
    { name: 'Residential Area Pothole Fixes', progress: 90, deadline: '2024-01-30', budget: '$150K' }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <RoadIcon />
          <span className="ml-3">Road Management</span>
        </h1>
        <p className="text-gray-600">Monitor and manage road infrastructure and maintenance projects</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">127</p>
              <p className="text-sm text-gray-600">Roads in Good Condition</p>
              <p className="text-xs text-green-600">↑ 3% this quarter</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">43</p>
              <p className="text-sm text-gray-600">Roads Need Maintenance</p>
              <p className="text-xs text-yellow-600">→ Same as last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">12</p>
              <p className="text-sm text-gray-600">Critical Repairs Needed</p>
              <p className="text-xs text-red-600">↓ 2 from last week</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold">$12.5M</p>
              <p className="text-sm text-gray-600">Annual Maintenance Budget</p>
              <p className="text-xs text-gray-500">67% utilized</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visual Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Road Condition Distribution</h3>
          </CardHeader>
          <CardContent>
            <SimplePieChart data={conditionData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Quarterly Maintenance Budget</h3>
          </CardHeader>
          <CardContent>
            <SimpleBarChart data={maintenanceBudget} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Road Inventory */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Road Inventory</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {roadData.map((road) => (
                <div key={road.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{road.name}</h4>
                      <p className="text-sm text-gray-600">{road.id} • {road.length}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant={
                          road.condition === 'Good' ? 'success' : 
                          road.condition === 'Fair' ? 'warning' : 'destructive'
                        }>
                          {road.condition}
                        </Badge>
                        <Badge variant="outline">{road.traffic} Traffic</Badge>
                      </div>
                      {road.issues.length > 0 && (
                        <div className="mt-2">
                          <p className="text-xs text-gray-500">Issues:</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {road.issues.map((issue, idx) => (
                              <Badge key={idx} variant="destructive" className="text-xs">{issue}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-right text-sm">
                      <p className="text-gray-500">Last Inspection:</p>
                      <p className="font-medium">{road.lastInspection}</p>
                      <p className="text-gray-500 mt-1">Next Maintenance:</p>
                      <p className={`font-medium ${road.nextMaintenance === 'Overdue' ? 'text-red-600' : ''}`}>
                        {road.nextMaintenance}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Projects */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Active Maintenance Projects</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {maintenanceProjects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">{project.name}</h4>
                    <span className="text-sm text-gray-500">{project.budget}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{project.progress}% Complete</span>
                    <span>Due: {project.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card className="mt-8">
        <CardHeader>
          <h3 className="text-xl font-semibold">Recent Road Reports</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: 'RPT-001', location: 'Main St & 5th Ave', issue: 'Large pothole', priority: 'High', status: 'In Progress' },
              { id: 'RPT-002', location: 'Oak Avenue near School', issue: 'Cracked pavement', priority: 'Medium', status: 'Assigned' },
              { id: 'RPT-003', location: 'Industrial Blvd', issue: 'Faded lane markings', priority: 'Low', status: 'Open' }
            ].map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{report.id}</h4>
                  <p className="text-sm text-gray-600">{report.location}</p>
                  <p className="text-sm text-gray-800">{report.issue}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={report.priority === 'High' ? 'destructive' : report.priority === 'Medium' ? 'warning' : 'secondary'}>
                    {report.priority}
                  </Badge>
                  <Badge variant="outline">{report.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Water Issues Component
const WaterIssues: React.FC = () => {
  const waterData = [
    { 
      id: 'WS-001', 
      type: 'Water Main', 
      location: 'Downtown District', 
      status: 'Operational', 
      pressure: 85, 
      flowRate: '450 GPM',
      lastInspection: '2024-01-08'
    },
    { 
      id: 'WS-002', 
      type: 'Fire Hydrant', 
      location: 'Residential Area A', 
      status: 'Maintenance Required', 
      pressure: 60, 
      flowRate: '200 GPM',
      lastInspection: '2023-12-20'
    },
    { 
      id: 'WS-003', 
      type: 'Water Main', 
      location: 'Industrial Zone', 
      status: 'Critical', 
      pressure: 35, 
      flowRate: '150 GPM',
      lastInspection: '2024-01-12'
    }
  ];

  const systemData = [
    { name: 'Operational', value: 847, color: 'bg-green-500' },
    { name: 'Maintenance', value: 12, color: 'bg-yellow-500' },
    { name: 'Critical', value: 3, color: 'bg-red-500' }
  ];

  const qualityMetrics = [
    { name: 'pH Level', value: 7.2, target: 7.0, color: 'bg-green-500' },
    { name: 'Chlorine', value: 1.1, target: 1.0, color: 'bg-blue-500' },
    { name: 'Turbidity', value: 0.3, target: 0.5, color: 'bg-green-500' },
    { name: 'Bacteria', value: 0, target: 0, color: 'bg-green-500' }
  ];

  const emergencyAlerts = [
    { type: 'Water Main Break', location: 'Elm Street', severity: 'Critical', time: '2 hours ago' },
    { type: 'Low Pressure', location: 'Park Avenue', severity: 'Medium', time: '4 hours ago' },
    { type: 'Quality Alert', location: 'Sector 7', severity: 'High', time: '6 hours ago' }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <WaterIcon />
          <span className="ml-3">Water System Management</span>
        </h1>
        <p className="text-gray-600">Monitor water infrastructure, quality, and emergency response</p>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">98.5%</p>
              <p className="text-sm text-gray-600">System Uptime</p>
              <p className="text-xs text-green-600">↑ 0.2% from last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">847</p>
              <p className="text-sm text-gray-600">Active Connections</p>
              <p className="text-xs text-green-600">+12 new connections</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">12</p>
              <p className="text-sm text-gray-600">Maintenance Alerts</p>
              <p className="text-xs text-yellow-600">→ Same as yesterday</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">3</p>
              <p className="text-sm text-gray-600">Emergency Situations</p>
              <p className="text-xs text-red-600">↓ 1 resolved today</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visual Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">System Status Distribution</h3>
          </CardHeader>
          <CardContent>
            <SimplePieChart data={systemData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Water Quality Metrics</h3>
          </CardHeader>
          <CardContent>
            <SimpleBarChart data={qualityMetrics} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Water Infrastructure */}
        <Card className="col-span-2">
          <CardHeader>
            <h3 className="text-xl font-semibold">Water Infrastructure Status</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {waterData.map((item) => (
                <div key={item.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium">{item.id}</h4>
                        <Badge variant="outline">{item.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{item.location}</p>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <div>
                          <p className="text-xs text-gray-500">Pressure</p>
                          <p className="text-sm font-medium">{item.pressure} PSI</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Flow Rate</p>
                          <p className="text-sm font-medium">{item.flowRate}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Last Inspection: {item.lastInspection}</p>
                    </div>
                    <Badge variant={
                      item.status === 'Operational' ? 'success' : 
                      item.status === 'Maintenance Required' ? 'warning' : 'destructive'
                    }>
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Alerts */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Emergency Alerts</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {emergencyAlerts.map((alert, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-sm">{alert.type}</h4>
                      <p className="text-xs text-gray-600">{alert.location}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                    </div>
                    <Badge variant={alert.severity === 'Critical' ? 'destructive' : alert.severity === 'High' ? 'warning' : 'secondary'}>
                      {alert.severity}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" size="sm">View All Alerts</Button>
          </CardContent>
        </Card>
      </div>

      {/* Water Quality Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Detailed Quality Metrics</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { parameter: 'pH Level', value: '7.2', range: '6.5-8.5', status: 'Normal' },
                { parameter: 'Chlorine', value: '1.1 mg/L', range: '0.5-4.0 mg/L', status: 'Normal' },
                { parameter: 'Turbidity', value: '0.3 NTU', range: '<1.0 NTU', status: 'Normal' },
                { parameter: 'Bacteria', value: '0 CFU/100mL', range: '0 CFU/100mL', status: 'Normal' }
              ].map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{metric.parameter}</h4>
                    <p className="text-xs text-gray-600">Range: {metric.range}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{metric.value}</p>
                    <Badge variant="success">{metric.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Maintenance Schedule</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { task: 'Hydrant Inspection - Zone A', date: '2024-01-18', priority: 'Medium' },
                { task: 'Main Line Pressure Test', date: '2024-01-20', priority: 'High' },
                { task: 'Water Quality Sampling', date: '2024-01-22', priority: 'High' },
                { task: 'Valve Maintenance', date: '2024-01-25', priority: 'Low' }
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{task.task}</h4>
                    <p className="text-xs text-gray-600">Scheduled: {task.date}</p>
                  </div>
                  <Badge variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'warning' : 'secondary'}>
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// User Management Component
const UserManagement: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const users = [
    { 
      id: 1, 
      name: 'John Smith', 
      email: 'john.smith@city.gov', 
      role: 'Admin', 
      department: 'Public Works',
      status: 'Active',
      lastLogin: '2024-01-15 09:30'
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      email: 'sarah.j@city.gov', 
      role: 'Manager', 
      department: 'Water Services',
      status: 'Active',
      lastLogin: '2024-01-15 08:45'
    },
    { 
      id: 3, 
      name: 'Mike Wilson', 
      email: 'mike.w@city.gov', 
      role: 'Technician', 
      department: 'Street Lighting',
      status: 'Inactive',
      lastLogin: '2024-01-10 16:20'
    }
  ];

  const roleData = [
    { name: 'Admins', value: 8, color: 'bg-purple-500' },
    { name: 'Managers', value: 15, color: 'bg-blue-500' },
    { name: 'Technicians', value: 24, color: 'bg-green-500' }
  ];

  const activityData = [
    { name: 'Week 1', value: 145, color: 'bg-blue-500' },
    { name: 'Week 2', value: 158, color: 'bg-blue-500' },
    { name: 'Week 3', value: 132, color: 'bg-blue-500' },
    { name: 'Week 4', value: 167, color: 'bg-blue-500' }
  ];

  const permissions = [
    { module: 'Dashboard', read: true, write: true, admin: true },
    { module: 'Map View', read: true, write: false, admin: true },
    { module: 'Reports', read: true, write: true, admin: true },
    { module: 'User Management', read: false, write: false, admin: true }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <UserIcon />
          <span className="ml-3">User Management</span>
        </h1>
        <p className="text-gray-600">Manage system users, roles, and permissions</p>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold">47</p>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-xs text-green-600">+3 this month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">42</p>
              <p className="text-sm text-gray-600">Active Users</p>
              <p className="text-xs text-green-600">89% active rate</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">5</p>
              <p className="text-sm text-gray-600">Pending Approval</p>
              <p className="text-xs text-yellow-600">Need review</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">8</p>
              <p className="text-sm text-gray-600">Departments</p>
              <p className="text-xs text-gray-500">Across city</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visual Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">User Role Distribution</h3>
          </CardHeader>
          <CardContent>
            <SimplePieChart data={roleData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Weekly User Activity</h3>
          </CardHeader>
          <CardContent>
            <SimpleBarChart data={activityData} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User List */}
        <Card className="col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">System Users</h3>
              <Button size="sm">Add New User</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div 
                  key={user.id} 
                  className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="font-medium text-blue-600">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{user.name}</h4>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-xs text-gray-500">{user.department}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={user.status === 'Active' ? 'success' : 'secondary'}>
                        {user.status}
                      </Badge>
                      <p className="text-xs text-gray-500 mt-1">Role: {user.role}</p>
                      <p className="text-xs text-gray-500">Last: {user.lastLogin}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Permissions */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Role Permissions</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Select Role</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Technician</option>
                  <option>Viewer</option>
                </select>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Module Permissions</h4>
                {permissions.map((perm, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="font-medium text-sm mb-2">{perm.module}</div>
                    <div className="space-y-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={perm.read} className="rounded" />
                        <span className="text-xs">Read</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={perm.write} className="rounded" />
                        <span className="text-xs">Write</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={perm.admin} className="rounded" />
                        <span className="text-xs">Admin</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="mt-8">
        <CardHeader>
          <h3 className="text-xl font-semibold">Recent User Activity</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { user: 'John Smith', action: 'Updated street light status', time: '10 minutes ago' },
              { user: 'Sarah Johnson', action: 'Generated water quality report', time: '1 hour ago' },
              { user: 'Mike Wilson', action: 'Completed maintenance task', time: '2 hours ago' },
              { user: 'John Smith', action: 'Created new user account', time: '3 hours ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-lg w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">User Details</h3>
                <button 
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-medium text-blue-600">{selectedUser.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{selectedUser.name}</h4>
                    <p className="text-gray-600">{selectedUser.email}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Role</label>
                    <p className="text-sm">{selectedUser.role}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Department</label>
                    <p className="text-sm">{selectedUser.department}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Status</label>
                    <Badge variant={selectedUser.status === 'Active' ? 'success' : 'secondary'}>
                      {selectedUser.status}
                    </Badge>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Last Login</label>
                    <p className="text-sm">{selectedUser.lastLogin}</p>
                  </div>
                </div>

                <div className="flex space-x-2 mt-6">
                  <Button size="sm" className="flex-1">Edit User</Button>
                  <Button size="sm" variant="outline" className="flex-1">Reset Password</Button>
                  <Button size="sm" variant="destructive">Deactivate</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

// Settings Component
const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  const systemUsage = [
    { name: 'CPU', value: 67, color: 'bg-blue-500' },
    { name: 'Memory', value: 45, color: 'bg-green-500' },
    { name: 'Storage', value: 78, color: 'bg-yellow-500' },
    { name: 'Network', value: 23, color: 'bg-purple-500' }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <SettingsIcon />
          <span className="ml-3">System Settings</span>
        </h1>
        <p className="text-gray-600">Configure system preferences and administrative settings</p>
      </div>

      {/* System Health Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">99.9%</p>
              <p className="text-sm text-gray-600">System Uptime</p>
              <p className="text-xs text-green-600">30 days</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">2.1.3</p>
              <p className="text-sm text-gray-600">Current Version</p>
              <p className="text-xs text-gray-500">Latest</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">3</p>
              <p className="text-sm text-gray-600">Pending Updates</p>
              <p className="text-xs text-yellow-600">Available</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">12GB</p>
              <p className="text-sm text-gray-600">Storage Used</p>
              <p className="text-xs text-gray-500">of 50GB</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Usage Chart */}
      <Card className="mb-8">
        <CardHeader>
          <h3 className="text-xl font-semibold">System Resource Usage</h3>
        </CardHeader>
        <CardContent>
          <SimpleBarChart data={systemUsage} />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <Card>
          <CardContent className="p-0">
            <nav className="space-y-1">
              {[
                { id: 'general', name: 'General', icon: SettingsIcon },
                { id: 'notifications', name: 'Notifications', icon: UserIcon },
                { id: 'security', name: 'Security', icon: SettingsIcon },
                { id: 'integrations', name: 'Integrations', icon: SettingsIcon },
                { id: 'backup', name: 'Backup & Recovery', icon: SettingsIcon }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                      activeTab === tab.id 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon />
                    <span className="text-sm">{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </CardContent>
        </Card>

        {/* Settings Content */}
        <Card className="col-span-3">
          <CardHeader>
            <h3 className="text-xl font-semibold">
              {activeTab === 'general' && 'General Settings'}
              {activeTab === 'notifications' && 'Notification Preferences'}
              {activeTab === 'security' && 'Security Settings'}
              {activeTab === 'integrations' && 'System Integrations'}
              {activeTab === 'backup' && 'Backup & Recovery'}
            </h3>
          </CardHeader>
          <CardContent>
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">System Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">System Name</label>
                      <Input defaultValue="CivicTracker Platform" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Version</label>
                      <Input defaultValue="2.1.3" disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Time Zone</label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>UTC-8 (Pacific Time)</option>
                        <option>UTC-5 (Eastern Time)</option>
                        <option>UTC+0 (GMT)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Date Format</label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>MM/DD/YYYY</option>
                        <option>DD/MM/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Display Settings</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Enable dark mode</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Show system statistics on dashboard</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Enable advanced tooltips</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Email Notifications</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">High priority issue alerts</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Daily system reports</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Maintenance reminders</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">User activity updates</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Alert Thresholds</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">System Downtime Alert (minutes)</label>
                      <Input type="number" defaultValue="5" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">High Priority Issues (count)</label>
                      <Input type="number" defaultValue="10" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Password Policy</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Minimum Password Length</label>
                      <Input type="number" defaultValue="8" />
                    </div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Require uppercase letters</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Require special characters</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Enable two-factor authentication</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Session Management</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Session Timeout (minutes)</label>
                      <Input type="number" defaultValue="30" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Maximum Failed Login Attempts</label>
                      <Input type="number" defaultValue="5" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">External APIs</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'Weather Service API', status: 'Connected', lastSync: '2024-01-15 09:30' },
                      { name: 'Traffic Data API', status: 'Connected', lastSync: '2024-01-15 09:25' },
                      { name: 'Emergency Services', status: 'Disconnected', lastSync: 'Never' }
                    ].map((api, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h5 className="font-medium text-sm">{api.name}</h5>
                          <p className="text-xs text-gray-500">Last sync: {api.lastSync}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={api.status === 'Connected' ? 'success' : 'destructive'}>
                            {api.status}
                          </Badge>
                          <Button size="sm" variant="outline">Configure</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'backup' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Backup Schedule</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Backup Frequency</label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Backup Time</label>
                      <Input type="time" defaultValue="02:00" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Retention Period (days)</label>
                      <Input type="number" defaultValue="30" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Recent Backups</h4>
                  <div className="space-y-2">
                    {[
                      { date: '2024-01-15 02:00', size: '1.2 GB', status: 'Success' },
                      { date: '2024-01-14 02:00', size: '1.1 GB', status: 'Success' },
                      { date: '2024-01-13 02:00', size: '1.0 GB', status: 'Failed' }
                    ].map((backup, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded">
                        <div>
                          <span className="text-sm">{backup.date}</span>
                          <span className="text-xs text-gray-500 ml-2">({backup.size})</span>
                        </div>
                        <Badge variant={backup.status === 'Success' ? 'success' : 'destructive'}>
                          {backup.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end space-x-2 mt-8 pt-6 border-t">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// User History Component
const UserHistory: React.FC = () => {
  const [complaints] = useState([
    { 
      id: 'UCH-001', 
      title: 'Broken streetlight on Oak Street',
      category: 'Street Lighting', 
      status: 'Resolved',
      priority: 'Medium',
      date: '2024-01-10',
      resolvedDate: '2024-01-15',
      location: 'Oak St & 2nd Ave'
    },
    { 
      id: 'UCH-002', 
      title: 'Pothole causing vehicle damage',
      category: 'Road Issues', 
      status: 'In Progress',
      priority: 'High',
      date: '2024-01-12',
      location: 'Main St & 5th Ave'
    },
    { 
      id: 'UCH-003', 
      title: 'Water leak in park area',
      category: 'Water Issues', 
      status: 'Open',
      priority: 'Low',
      date: '2024-01-14',
      location: 'Central Park'
    }
  ]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <HistoryIcon />
          <span className="ml-3">Complaint History</span>
        </h1>
        <p className="text-gray-600">Track all your submitted complaints and their status</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-gray-600">Total Complaints</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">1</p>
              <p className="text-sm text-gray-600">Resolved</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">1</p>
              <p className="text-sm text-gray-600">In Progress</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">1</p>
              <p className="text-sm text-gray-600">Open</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Complaints List */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold">Your Complaints</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complaints.map((complaint) => (
              <div key={complaint.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold">{complaint.id}</h4>
                      <Badge variant={complaint.priority === 'High' ? 'destructive' : complaint.priority === 'Medium' ? 'warning' : 'secondary'}>
                        {complaint.priority}
                      </Badge>
                    </div>
                    <p className="font-medium text-gray-800">{complaint.title}</p>
                    <p className="text-sm text-gray-600">{complaint.category} • {complaint.location}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>Submitted: {complaint.date}</span>
                      {complaint.resolvedDate && <span>Resolved: {complaint.resolvedDate}</span>}
                    </div>
                  </div>
                  <Badge variant={
                    complaint.status === 'Open' ? 'destructive' : 
                    complaint.status === 'In Progress' ? 'default' : 'success'
                  }>
                    {complaint.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Main App Component
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showLogin, setShowLogin] = useState(false);
  const [currentUser] = useState({
    name: 'John Smith',
    email: 'john.smith@city.gov',
    role: 'Administrator'
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'map':
        return <InteractiveMap />;
      case 'ai-report':
        return <AIReport />;
      case 'lighting':
        return <StreetLighting />;
      case 'roads':
        return <RoadManagement />;
      case 'water':
        return <WaterIssues />;
      case 'users':
        return <UserManagement />;
      case 'settings':
        return <Settings />;
      case 'history':
        return <UserHistory />;
      default:
        return <Dashboard />;
    }
  };

  // Show landing page if not authenticated and not showing login
  if (!isAuthenticated && !showLogin) {
    return <LandingPage onShowLogin={() => setShowLogin(true)} />;
  }

  // Show login modal with light blue background
  if (!isAuthenticated && showLogin) {
    return (
      <div>
        <LandingPage onShowLogin={() => setShowLogin(true)} />
        <LoginModal onLogin={handleLogin} onClose={() => setShowLogin(false)} />
      </div>
    );
  }

  // Show authenticated app
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
      />
      <div className="flex-1 flex flex-col">
        <Header 
          currentUser={currentUser}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
        <div className="flex-1 overflow-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}