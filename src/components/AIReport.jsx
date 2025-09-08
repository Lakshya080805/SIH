import React from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FileText, Brain, TrendingUp, AlertCircle } from 'lucide-react';

export default function AIReport({ onLogout }) {
  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <Brain className="h-8 w-8 mr-3 text-blue-600" />
              AI Report Analysis
            </h1>
            <p className="text-gray-600">AI-powered insights and automated report generation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Automated Report Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Generate comprehensive reports using AI analysis of civic data.</p>
                <Button className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate New Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trend Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">AI-powered analysis of issue patterns and trends.</p>
                <Button variant="outline" className="w-full">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Trend Analysis
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent AI Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium">Monthly Trend Analysis</h4>
                    <p className="text-sm text-gray-600">AI-generated analysis of issue trends</p>
                  </div>
                  <Badge>Generated</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium">Resource Optimization Report</h4>
                    <p className="text-sm text-gray-600">Recommendations for resource allocation</p>
                  </div>
                  <Badge variant="outline">Processing</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}