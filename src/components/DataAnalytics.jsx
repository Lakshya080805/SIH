import React from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart3 } from 'lucide-react';

export default function DataAnalytics({ onLogout }) {
  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <BarChart3 className="h-8 w-8 mr-3 text-purple-600" />
              Data Analytics
            </h1>
            <p className="text-gray-600">Advanced analytics and data insights</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Advanced analytics and reporting features will be displayed here.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}