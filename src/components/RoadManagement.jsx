import React from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Navigation } from 'lucide-react';

export default function RoadManagement({ onLogout }) {
  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <Navigation className="h-8 w-8 mr-3 text-gray-600" />
              Road Management
            </h1>
            <p className="text-gray-600">Monitor and manage road maintenance and traffic issues</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Road Management Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Road management features and reports will be displayed here.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}