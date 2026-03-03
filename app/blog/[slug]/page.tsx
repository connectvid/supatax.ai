import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Calendar, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "@/lib/content/articles";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return { title: "Article Not Found" };
  }
  
  return {
    title: `${article.title} — Supatax`,
    description: article.description,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishDate,
      modifiedTime: article.modifiedDate,
      authors: [article.author.name],
      tags: article.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);

  // Convert markdown-like content to HTML (simplified)
  const contentHtml = article.content
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-6">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-12 mb-4 text-slate-900">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-3 text-slate-800">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2">$1</li>')
    .replace(/(<li.*<\/li>\n)+/g, '<ul class="mb-6">$&</ul>')
    .replace(/^(?!<[hlu])(.*$)/gim, '<p class="mb-4 leading-relaxed text-slate-700">$1</p>')
    .replace(/<p class="mb-4"><\/p>/g, '')
    .replace(/---/g, '<hr class="my-8 border-slate-200" />');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl">Supatax</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/blog">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Guides
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Article Header */}
        <section className="py-12 bg-white border-b">
          <div className="container max-w-4xl">
            <div className="mb-6">
              <Badge className={article.category === "pillar" ? "bg-sky-100 text-sky-800" : "bg-slate-100 text-slate-800"}>
                {article.category === "pillar" ? "Pillar Guide" : "Specialized Topic"}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">{article.title}</h1>
            <p className="text-xl text-slate-600 mb-8">{article.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-500">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-sky-100 text-sky-800">
                    {article.author.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-slate-900">{article.author.name}</p>
                  <p className="text-sm">{article.author.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Updated {new Date(article.modifiedDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container max-w-4xl">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              {/* Main Content */}
              <article 
                className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Author Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">About the Author</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-sky-100 text-sky-800">
                          {article.author.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{article.author.name}</p>
                        <p className="text-sm text-slate-500">{article.author.title}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">{article.author.bio}</p>
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedArticles.map((related) => (
                          <Link key={related.slug} href={`/blog/${related.slug}`} className="block group">
                            <h4 className="font-medium text-slate-900 group-hover:text-sky-600 transition-colors">
                              {related.title}
                            </h4>
                            <p className="text-sm text-slate-500 line-clamp-2">{related.description}</p>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* CTA */}
                <Card className="bg-gradient-to-br from-sky-500 to-blue-600 text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Try Our AI Tools</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Put this knowledge into practice with our specialized tax AI tools.
                    </p>
                    <Link href="/all-tools">
                      <Button variant="secondary" className="w-full">
                        Explore Tools
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </aside>
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
