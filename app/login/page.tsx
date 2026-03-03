"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Mail, Lock, Github, Chrome, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-slate-600" />
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Supatax
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border-slate-200 shadow-xl">
            <CardHeader className="space-y-1 text-center pb-6">
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
              <CardDescription>
                Sign in to access your tax research workspace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <Chrome className="h-4 w-4 mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-500">Or continue with</span>
                </div>
              </div>

              {/* Email Form */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@firm.com"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium" htmlFor="password">
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800">
                  Sign In
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="text-center text-sm">
                <span className="text-slate-600">Don't have an account? </span>
                <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                  Start free trial
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Supatax.ai. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-900">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-slate-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
