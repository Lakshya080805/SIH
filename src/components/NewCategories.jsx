import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Plus, Tag } from 'lucide-react';

export default function NewCategories({ onLogout }) {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle category creation
    console.log('Creating category:', { categoryName, description });
    setCategoryName('');
    setDescription('');
  };

  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <Plus className="h-8 w-8 mr-3 text-green-600" />
              New Categories
            </h1>
            <p className="text-gray-600">Create and manage new issue categories</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Category</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="categoryName">Category Name</Label>
                    <Input
                      id="categoryName"
                      value={categoryName}
                      onChange={(e) => setCategoryName(e.target.value)}
                      placeholder="Enter category name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe this category"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Tag className="h-4 w-4 mr-2" />
                    Create Category
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Existing Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium">Road Issues</h4>
                    <p className="text-sm text-gray-600">Potholes, road damage, traffic issues</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium">Water & Utilities</h4>
                    <p className="text-sm text-gray-600">Water leaks, utility outages</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium">Street Lighting</h4>
                    <p className="text-sm text-gray-600">Broken or missing street lights</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}