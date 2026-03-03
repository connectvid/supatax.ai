import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, User, ArrowRight } from "lucide-react";
import { articles, getPillarArticles, getClusterArticles } from "@/lib/content/articles";

export const metadata = {
  title: "Tax Research Guides & Resources — Supatax",
  description: "Comprehensive tax research guides, calculators, and professional resources for CPAs, Enrolled Agents, and tax professionals.",
};

export default function BlogPage() {
  const pillarArticles = getPillarArticles();
  const clusterArticles = getClusterArticles();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl">Supatax</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/all-tools">
              <Button variant="ghost">AI Tools</Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50/50 to-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Tax Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Guides & Resources</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Professional tax guidance written by CPAs and Enrolled Agents. 
                From research methodology to specialized compliance topics.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b bg-white">
          <div className="container">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-sky-600">120+</div>
                <div className="text-slate-600">In-Depth Articles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-600">30+</div>
                <div className="text-slate-600">AI Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-600">50K+</div>
                <div className="text-slate-600">Professionals Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar Articles */}
        <section className="py-16">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Pillar Guides</h2>
              <p className="text-slate-600">Comprehensive foundational resources for tax professionals</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillarArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-sky-200">
                    <CardHeader>
                      <Badge className="w-fit mb-2 bg-sky-100 text-sky-800 hover:bg-sky-100">Pillar Guide</Badge>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readingTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author.name.split(",")[0]}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cluster Articles */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Specialized Topics</h2>
              <p className="text-slate-600">Deep dives into specific tax areas and practice issues</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clusterArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-sky-200">
                    <CardHeader>
                      <Badge className="w-fit mb-2 bg-slate-100 text-slate-800 hover:bg-slate-100">{article.tags[0]}</Badge>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readingTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author.name.split(",")[0]}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Put Knowledge Into Practice</h2>
              <p className="text-slate-400 mb-8">
                Our AI tools put these research methodologies and calculations into action.
                Try them free—no signup required.
              </p>
              <Link href="/all-tools">
                <Button size="lg" className="bg-sky-500 hover:bg-sky-600">
                  Explore AI Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold">Supatax</span>
            </div>
            <p className="text-slate-500 text-sm">© 2024 Supatax.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
