import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Facebook, Twitter, Chrome } from 'lucide-react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication - in real app, you'd validate credentials
    if (email && password) {
      onLogin();
    }
  };

  const handleSocialLogin = (provider) => {
    // Mock social login
    console.log(`Logging in with ${provider}`);
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-4">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-blue-600 font-bold">C</span>
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">CivicReport</h1>
          <p className="text-gray-600 mt-1">Sign in to your administrative dashboard</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Welcome Back 👋</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">📧 Enter your email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@civicreport.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-input-background border-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">🔒 Enter your Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-input-background border-0"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={setRememberMe}
                  />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>
                <button type="button" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </button>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                CONTINUE
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  or continue with
                </span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleSocialLogin('Facebook')}
                className="w-10 h-10"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleSocialLogin('Twitter')}
                className="w-10 h-10"
              >
                <Twitter className="h-5 w-5 text-sky-500" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleSocialLogin('Google')}
                className="w-10 h-10"
              >
                <Chrome className="h-5 w-5 text-red-500" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <button className="text-blue-600 hover:underline font-medium">
            Contact Administrator
          </button>
        </p>
      </div>
    </div>
  );
}