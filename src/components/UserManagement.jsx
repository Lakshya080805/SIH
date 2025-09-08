import React from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { UserCog } from 'lucide-react';

export default function UserManagement({ onLogout }) {
  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <UserCog className="h-8 w-8 mr-3 text-indigo-600" />
              User Management
            </h1>
            <p className="text-gray-600">Manage system users and permissions</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>User Management Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">User management and permissions interface will be displayed here.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}