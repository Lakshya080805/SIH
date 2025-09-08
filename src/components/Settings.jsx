import React from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Settings as SettingsIcon } from 'lucide-react';

export default function Settings({ onLogout }) {
  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <SettingsIcon className="h-8 w-8 mr-3 text-gray-600" />
              Settings
            </h1>
            <p className="text-gray-600">System configuration and preferences</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">System settings and configuration options will be displayed here.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}