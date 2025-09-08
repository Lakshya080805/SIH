import React from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Lightbulb, MapPin, Clock, Users } from 'lucide-react';

export default function StreetLighting({ onLogout }) {
  const lightingIssues = [
    {
      id: 'SL-001',
      location: 'Main Street & 5th Ave',
      reportedBy: 'Sarah Johnson',
      issue: 'Street light completely out',
      priority: 'High',
      status: 'Open',
      reportedDate: '2024-01-10'
    },
    {
      id: 'SL-002',
      location: 'Park Avenue',
      reportedBy: 'Mike Chen',
      issue: 'Flickering street light',
      priority: 'Medium',
      status: 'In Progress',
      reportedDate: '2024-01-08'
    },
    {
      id: 'SL-003',
      location: 'Oak Street',
      reportedBy: 'Emily Davis',
      issue: 'Dim lighting - needs bulb replacement',
      priority: 'Low',
      status: 'Scheduled',
      reportedDate: '2024-01-05'
    }
  ];

  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <Lightbulb className="h-8 w-8 mr-3 text-yellow-600" />
              Street Lighting Issues
            </h1>
            <p className="text-gray-600">Manage and track street lighting maintenance requests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Issues</p>
                    <p className="text-2xl font-semibold">24</p>
                  </div>
                  <Lightbulb className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Open Issues</p>
                    <p className="text-2xl font-semibold">8</p>
                  </div>
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Resolved This Month</p>
                    <p className="text-2xl font-semibold">16</p>
                  </div>
                  <Users className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Lighting Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lightingIssues.map((issue) => (
                  <div key={issue.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Lightbulb className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium">{issue.id}</h4>
                          <Badge 
                            variant={
                              issue.priority === 'High' ? 'destructive' :
                              issue.priority === 'Medium' ? 'default' : 'secondary'
                            }
                          >
                            {issue.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {issue.location}
                        </p>
                        <p className="text-sm text-gray-500">{issue.issue}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">
                        {issue.status}
                      </Badge>
                      <p className="text-sm text-gray-500">Reported by {issue.reportedBy}</p>
                      <p className="text-sm text-gray-500">{issue.reportedDate}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button>View All Lighting Issues</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}