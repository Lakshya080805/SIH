import React from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Droplets } from 'lucide-react';

export default function WaterIssues({ onLogout }) {
  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <Droplets className="h-8 w-8 mr-3 text-blue-500" />
              Water & Utilities Issues
            </h1>
            <p className="text-gray-600">Water system and utility infrastructure management</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Water & Utilities Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Water and utility issues management will be displayed here.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}