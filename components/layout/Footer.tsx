import Link from "next/link";
import { Sparkles, Github, Twitter, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { name: "AI Tax Research", href: "/tax-research" },
    { name: "Client Letters", href: "/all-tools/client-letter-generator" },
    { name: "Tax Calculators", href: "/all-tools" },
    { name: "IRS Notice Response", href: "/all-tools/irs-notice-response" },
    { name: "All AI Tools", href: "/all-tools" },
  ],
  resources: [
    { name: "Tax Code Research", href: "/tax-research" },
    { name: "IRS Publications", href: "/irs-publications" },
    { name: "Tax Law Updates", href: "/tax-law-updates" },
    { name: "Practice Guides", href: "/practice-guides" },
  ],
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-conditions" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Supatax
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              AI-powered tax research and document generation for CPAs, Enrolled Agents, 
              and tax professionals. Deliver higher-value client service.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com/supatax"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-500 hover:border-blue-200 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/supatax"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:support@supatax.ai"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-red-500 hover:border-red-200 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Supatax.ai. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Not a substitute for professional tax advice. Consult regulations for your jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
}
