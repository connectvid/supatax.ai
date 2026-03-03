import Link from "next/link";
import { Sparkles, Github, Twitter, Mail } from "lucide-react";

const footerLinks = {
  tools: [
    { name: "Paystub Generator", href: "/all-tools/paystub-generator" },
    { name: "Cover Letter Generator", href: "/all-tools/cover-letter-generator" },
    { name: "Tax Calculators", href: "/all-tools" },
    { name: "All AI Tools", href: "/all-tools" },
  ],
  resources: [
    { name: "Tax Software Reviews", href: "/tax-software" },
    { name: "Self-Employment Tax", href: "/self-employment-tax" },
    { name: "Tax Deductions Guide", href: "/small-business-tax-deductions" },
    { name: "FreeTaxUSA Review", href: "/freetaxusa-review" },
  ],
  company: [
    { name: "About Us", href: "/about-us" },
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
              AI-powered tax tools and expert guides for freelancers, 1099 contractors, and self-employed professionals. File with confidence.
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

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900">AI Tools</h3>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
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
            <h3 className="font-semibold mb-4 text-slate-900">Tax Guides</h3>
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
            Not tax advice. Consult a professional for your specific situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
