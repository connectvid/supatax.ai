import Link from "next/link";
import { Sparkles, Github, Twitter } from "lucide-react";

const footerLinks = {
  tools: [
    { name: "Paystub Generator", href: "/all-tools/paystub-generator" },
    { name: "Cover Letter Generator", href: "/all-tools/cover-letter-generator" },
    { name: "Tax Calculators", href: "/all-tools" },
    { name: "All Tools", href: "/all-tools" },
  ],
  resources: [
    { name: "Tax Guides", href: "/blog" },
    { name: "Self-Employment Tax", href: "/self-employment-tax" },
    { name: "Tax Deductions", href: "/small-business-tax-deductions" },
    { name: "Tax Software Reviews", href: "/tax-software" },
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
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Supatax</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              AI-powered tax tools and expert guides for freelancers, 1099 contractors, and self-employed professionals. File with confidence.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com/supatax"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/supatax"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Supatax.ai. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Not tax advice. Consult a professional for your specific situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
