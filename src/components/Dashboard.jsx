import React from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  MapPin,
  Filter,
  Calendar,
  MoreHorizontal
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const statsCards = [
  {
    title: 'Total Reports',
    value: '1,234',
    change: '+5.2%',
    trend: 'up',
    color: 'bg-orange-100 text-orange-700',
    icon: TrendingUp
  },
  {
    title: 'Active Issues',
    value: '200',
    change: 'Past 7 days report',
    trend: 'down',
    color: 'bg-red-100 text-red-700',
    icon: AlertTriangle
  },
  {
    title: 'In Progress',
    value: '89',
    change: '5 More to resolve',
    trend: 'up',
    color: 'bg-blue-100 text-blue-700',
    icon: Clock
  },
  {
    title: 'Resolved',
    value: '911',
    change: '15% Resolved rate',
    trend: 'up',
    color: 'bg-green-100 text-green-700',
    icon: CheckCircle
  }
];

const chartData = [
  { name: 'Jan', reports: 65, resolved: 45 },
  { name: 'Feb', reports: 75, resolved: 52 },
  { name: 'Mar', reports: 85, resolved: 58 },
  { name: 'Apr', reports: 70, resolved: 48 },
  { name: 'May', reports: 90, resolved: 65 },
  { name: 'Jun', reports: 95, resolved: 70 }
];

const pieData = [
  { name: 'Road Issues', value: 35, color: '#ef4444' },
  { name: 'Water Issues', value: 25, color: '#3b82f6' },
  { name: 'Lighting', value: 15, color: '#f59e0b' },
  { name: 'Waste Management', value: 15, color: '#10b981' },
  { name: 'Other', value: 10, color: '#8b5cf6' }
];

const recentReports = [
  {
    id: '10-81-13-005',
    category: 'Road Issues',
    location: 'Main St & 3rd Ave',
    reporter: 'Jane Park',
    status: 'Open',
    priority: 'High',
    assignee: 'Alex'
  },
  {
    id: '10-81-13-006',
    category: 'Water Issues',
    location: '5th Park Ln',
    reporter: 'Sarah Wilson',
    status: 'In Progress',
    priority: 'Medium',
    assignee: 'Lisa'
  },
  {
    id: '10-81-13-007',
    category: 'Street Light',
    location: 'Central Plaza',
    reporter: 'Edwin Hayes',
    status: 'Resolved',
    priority: 'Low',
    assignee: 'Tom'
  }
];

const departmentWorkload = [
  { name: 'Public Works', assigned: 45, capacity: 60, color: 'bg-blue-500' },
  { name: 'Parks & Recreation', assigned: 32, capacity: 40, color: 'bg-green-500' },
  { name: 'Utilities', assigned: 28, capacity: 35, color: 'bg-yellow-500' },
  { name: 'Transportation', assigned: 15, capacity: 25, color: 'bg-purple-500' }
];

export default function Dashboard({ onLogout }) {
  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">Dashboard Overview</h1>
            <p className="text-gray-600">Track, drive insights and solve issue reporting and resolution</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
                        <p className="text-2xl font-semibold">{stat.value}</p>
                        <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                      </div>
                      <div className={`p-3 rounded-lg ${stat.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Status Trends Chart */}
            <Card className="col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Status Trends</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Last 30 days
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Line 
                        type="monotone" 
                        dataKey="reports" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        name="New Reports"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="resolved" 
                        stroke="#10b981" 
                        strokeWidth={2}
                        name="Resolved"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Category Distribution</CardTitle>
                <p className="text-sm text-gray-600">Report by report category</p>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-4">
                  {pieData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{item.name}</span>
                      </div>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Reports */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Reports</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm">View All Reports</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">{report.id}</p>
                          <p className="text-sm text-gray-600">{report.category}</p>
                          <p className="text-sm text-gray-500">{report.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={report.status === 'Open' ? 'destructive' : report.status === 'In Progress' ? 'default' : 'secondary'}
                          className="mb-1"
                        >
                          {report.status}
                        </Badge>
                        <p className="text-sm text-gray-600">{report.priority}</p>
                        <p className="text-sm text-gray-500">{report.assignee}</p>
                      </div>
                    </div>
                  ))}
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
                <div className="space-y-6">
                  {departmentWorkload.map((dept) => (
                    <div key={dept.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{dept.name}</span>
                        <span className="text-sm text-gray-600">{dept.assigned}/{dept.capacity} capacity</span>
                      </div>
                      <Progress 
                        value={(dept.assigned / dept.capacity) * 100} 
                        className="h-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{dept.assigned} assigned</span>
                        <span>{((dept.assigned / dept.capacity) * 100).toFixed(0)}% capacity</span>
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
  );
}