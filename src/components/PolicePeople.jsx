import React from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users } from 'lucide-react';

export default function PolicePeople({ onLogout }) {
  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <Users className="h-8 w-8 mr-3 text-blue-600" />
              Police & People Issues
            </h1>
            <p className="text-gray-600">Public safety and community-related incident reports</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Public Safety Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Public safety reports and community issues will be displayed here.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}