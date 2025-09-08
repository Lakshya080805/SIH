import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  MapPin, 
  Filter, 
  Search, 
  Calendar, 
  Settings, 
  Layers,
  AlertTriangle,
  Droplets,
  Lightbulb,
  Navigation,
  Users,
  Zap
} from 'lucide-react';

const mapMarkers = [
  { id: 1, type: 'road', x: 25, y: 35, priority: 'high', status: 'open' },
  { id: 2, type: 'water', x: 45, y: 28, priority: 'medium', status: 'in-progress' },
  { id: 3, type: 'lighting', x: 65, y: 45, priority: 'low', status: 'resolved' },
  { id: 4, type: 'police', x: 30, y: 60, priority: 'high', status: 'open' },
  { id: 5, type: 'utilities', x: 70, y: 30, priority: 'medium', status: 'in-progress' },
  { id: 6, type: 'road', x: 55, y: 70, priority: 'low', status: 'open' },
  { id: 7, type: 'water', x: 35, y: 50, priority: 'high', status: 'resolved' },
  { id: 8, type: 'lighting', x: 80, y: 55, priority: 'medium', status: 'open' }
];

const issueCategories = [
  { name: 'Road Issues', icon: Navigation, color: 'bg-red-500', count: 12 },
  { name: 'Water & Utilities', icon: Droplets, color: 'bg-blue-500', count: 8 },
  { name: 'Street Lighting', icon: Lightbulb, color: 'bg-yellow-500', count: 6 },
  { name: 'Public Safety', icon: Users, color: 'bg-green-500', count: 4 },
  { name: 'Utilities', icon: Zap, color: 'bg-purple-500', count: 7 },
  { name: 'General Issues', icon: AlertTriangle, color: 'bg-orange-500', count: 3 }
];

const taskAssignments = [
  { 
    topic: 'Water Leak - Oak Avenue', 
    department: 'Public Works',
    priority: 'High',
    dueDate: '2024-01-15',
    notes: 'Major leak affecting multiple households'
  },
  {
    topic: 'Street Light Maintenance',
    department: 'Utilities',
    priority: 'Medium', 
    dueDate: '2024-01-18',
    notes: 'Replace bulbs on Main Street'
  },
  {
    topic: 'Road Pothole Repair',
    department: 'Transportation',
    priority: 'Low',
    dueDate: '2024-01-20',
    notes: 'Fill potholes on Highway 101'
  }
];

const departmentWorkload = [
  { name: 'Public Works', percentage: 85, color: 'bg-red-500' },
  { name: 'Parks & Recreation', percentage: 60, color: 'bg-green-500' },
  { name: 'Utilities', percentage: 75, color: 'bg-yellow-500' },
  { name: 'Transportation', percentage: 40, color: 'bg-purple-500' }
];

export default function InteractiveMap({ onLogout }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMarker, setSelectedMarker] = useState(null);

  const getMarkerIcon = (type) => {
    switch(type) {
      case 'road': return Navigation;
      case 'water': return Droplets;
      case 'lighting': return Lightbulb;
      case 'police': return Users;
      case 'utilities': return Zap;
      default: return MapPin;
    }
  };

  const getMarkerColor = (priority, status) => {
    if (status === 'resolved') return 'bg-green-500';
    if (priority === 'high') return 'bg-red-500';
    if (priority === 'medium') return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-semibold mb-2">City Issue Map</h1>
              <p className="text-gray-600">Interactive visualization of civic issues across the city</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Map Settings
              </Button>
              <Button variant="outline">
                <Layers className="h-4 w-4 mr-2" />
                All Categories
              </Button>
            </div>
          </div>

          {/* Categories Legend */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Issue Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {issueCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div key={category.name} className="flex items-center space-x-2 p-2 rounded-lg border">
                      <div className={`w-4 h-4 rounded-full ${category.color}`} />
                      <Icon className="h-4 w-4 text-gray-600" />
                      <div>
                        <p className="text-sm font-medium">{category.name}</p>
                        <p className="text-xs text-gray-500">{category.count} active</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Interactive Map */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>City Issue Map</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Issues</SelectItem>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: '500px' }}>
                  {/* Mock Map Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-gray-100">
                    {/* Mock Streets */}
                    <div className="absolute top-1/3 left-0 right-0 h-2 bg-gray-300"></div>
                    <div className="absolute top-2/3 left-0 right-0 h-2 bg-gray-300"></div>
                    <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-gray-300"></div>
                    <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-gray-300"></div>
                    
                    {/* Mock City Areas */}
                    <div className="absolute top-4 left-4 w-32 h-24 bg-green-200 rounded opacity-50 flex items-center justify-center text-xs">
                      Central Park
                    </div>
                    <div className="absolute bottom-4 right-4 w-40 h-32 bg-blue-200 rounded opacity-50 flex items-center justify-center text-xs">
                      Business District
                    </div>
                    <div className="absolute top-4 right-4 w-36 h-28 bg-yellow-200 rounded opacity-50 flex items-center justify-center text-xs">
                      Residential Area
                    </div>
                  </div>

                  {/* Issue Markers */}
                  {mapMarkers.map((marker) => {
                    const Icon = getMarkerIcon(marker.type);
                    const markerColor = getMarkerColor(marker.priority, marker.status);
                    
                    return (
                      <div
                        key={marker.id}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform`}
                        style={{ 
                          left: `${marker.x}%`, 
                          top: `${marker.y}%` 
                        }}
                        onClick={() => setSelectedMarker(marker)}
                      >
                        <div className={`w-8 h-8 ${markerColor} rounded-full flex items-center justify-center shadow-lg border-2 border-white`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        {marker.priority === 'high' && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    );
                  })}

                  {/* Selected Marker Info */}
                  {selectedMarker && (
                    <div 
                      className="absolute bg-white p-4 rounded-lg shadow-lg border z-10 max-w-xs"
                      style={{ 
                        left: `${selectedMarker.x + 5}%`, 
                        top: `${selectedMarker.y - 5}%` 
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Issue #{selectedMarker.id}</h4>
                        <button 
                          onClick={() => setSelectedMarker(null)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          ×
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Type: {selectedMarker.type}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant={selectedMarker.priority === 'high' ? 'destructive' : 'default'}>
                          {selectedMarker.priority}
                        </Badge>
                        <Badge variant="outline">
                          {selectedMarker.status}
                        </Badge>
                      </div>
                      <Button size="sm" className="w-full mt-3">
                        View Details
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Task Assignment */}
              <Card>
                <CardHeader>
                  <CardTitle>Task Assignment</CardTitle>
                  <p className="text-sm text-gray-600">Assign issues to departments and staff members</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Select Issue</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an issue" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="water-leak">Water Leak - Oak St</SelectItem>
                          <SelectItem value="pothole">Pothole - Main Ave</SelectItem>
                          <SelectItem value="lighting">Street Light Out</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Assign to Department</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public-works">Public Works</SelectItem>
                          <SelectItem value="utilities">Utilities</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Priority Level</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Set priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button className="w-full">
                      Assign Issue
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Department Workload */}
              <Card>
                <CardHeader>
                  <CardTitle>Department Workload</CardTitle>
                  <p className="text-sm text-gray-600">Current assignment distribution across departments</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departmentWorkload.map((dept) => (
                      <div key={dept.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{dept.name}</span>
                          <span className="text-sm text-gray-600">{dept.percentage}% capacity</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${dept.color}`}
                            style={{ width: `${dept.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}