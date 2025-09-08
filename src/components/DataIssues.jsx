import React from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Database, AlertTriangle, CheckCircle } from 'lucide-react';

export default function DataIssues({ onLogout }) {
  const dataIssues = [
    {
      id: 1,
      title: 'Missing Location Data',
      description: 'Several reports missing GPS coordinates',
      severity: 'High',
      status: 'Open',
      count: 23
    },
    {
      id: 2,
      title: 'Duplicate Reports',
      description: 'Multiple reports for same issue',
      severity: 'Medium',
      status: 'In Progress',
      count: 12
    },
    {
      id: 3,
      title: 'Incomplete User Information',
      description: 'Reports with missing contact details',
      severity: 'Low',
      status: 'Resolved',
      count: 8
    }
  ];

  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <Database className="h-8 w-8 mr-3 text-blue-600" />
              Data Issues
            </h1>
            <p className="text-gray-600">Monitor and resolve data quality issues</p>
          </div>

          <div className="space-y-6">
            {dataIssues.map((issue) => (
              <Card key={issue.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        issue.severity === 'High' ? 'bg-red-100 text-red-700' :
                        issue.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        <AlertTriangle className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{issue.title}</h3>
                        <p className="text-gray-600 mb-3">{issue.description}</p>
                        <div className="flex items-center space-x-4">
                          <Badge variant={issue.severity === 'High' ? 'destructive' : 'default'}>
                            {issue.severity}
                          </Badge>
                          <Badge variant="outline">
                            {issue.status}
                          </Badge>
                          <span className="text-sm text-gray-500">{issue.count} affected records</span>
                        </div>
                      </div>
                    </div>
                    <Button>
                      Resolve Issue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Data Quality Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                  <p className="text-gray-600">Data Completeness</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
                  <p className="text-gray-600">Data Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">12</div>
                  <p className="text-gray-600">Issues Detected</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}