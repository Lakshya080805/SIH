import React from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrendingUp } from 'lucide-react';

export default function AnalyticsReports({ onLogout }) {
  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <TrendingUp className="h-8 w-8 mr-3 text-green-600" />
              Analytics & Reports
            </h1>
            <p className="text-gray-600">Comprehensive reporting and analytics tools</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Reports Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Detailed reports and analytics will be displayed here.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}