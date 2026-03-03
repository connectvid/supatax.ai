# Supatax.ai

**AI-Powered Tax Tools for Freelancers & Self-Employed Professionals**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black)](https://ui.shadcn.com/)

## 🚀 Overview

Supatax.ai is a comprehensive tax resource platform featuring:
- **30+ Free AI Tools** — Document generators, tax calculators, writing assistants
- **120 SEO-Optimized Pages** — Tax guides, software reviews, form instructions
- **Modern Tech Stack** — Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **OpenRouter API** — GPT-4 and DALL-E 3 for AI generation

## 📁 Project Structure

```
my-app/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Marketing pages
│   │   ├── page.tsx              # Landing page
│   │   ├── about-us/
│   │   ├── pricing/
│   │   └── ...
│   ├── (tools)/                  # AI Tools
│   │   ├── all-tools/
│   │   └── tools/
│   ├── (blog)/                   # Blog content
│   ├── api/                      # API Routes
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── layout/                   # Header, Footer
│   └── tools/                    # Tool components
├── lib/                          # Utilities
├── public/                       # Static assets
└── content/                      # Blog content
```

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **AI API:** [OpenRouter](https://openrouter.ai/) (GPT-4, DALL-E 3)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Hosting:** [Vercel](https://vercel.com)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- OpenRouter API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/supatax.git
cd supatax/my-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your OpenRouter API key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔧 Environment Variables

Create a `.env.local` file:

```bash
# OpenRouter API Configuration
OPENROUTER_API_KEY=your_api_key_here

# Site Configuration
NEXT_PUBLIC_SITE_NAME=Supatax
NEXT_PUBLIC_SITE_URL=https://supatax.ai
NEXT_PUBLIC_SITE_DESCRIPTION="AI-powered tax tools for freelancers"
```

## 🤖 AI Tools

### Text Generators (21 tools)
- Paystub Generator
- Cover Letter Generator
- AI Paragraph Generator
- AI Poem Generator
- AI Progress Note Generator
- AI Thank You Note Generator
- AI Notes Generator
- AI Letter of Recommendation Generator
- AI Job Description Generator
- AI Fanfiction Generator
- AI Eulogy Generator
- AI Sermon Generator
- AI Reddit Story Generator
- Estimate Generator
- Quotation Generator
- Purchase Order Generator
- HTML Form Generator
- Alt Text Generator

### Image Generators (7 tools)
- AI Tattoo Generator
- AI Caricature Generator
- AI Fantasy Map Generator
- AI Storyboard Generator
- Birth Flower Bouquet Generator
- Bubble Letter Generator

### Tax Calculators (8 tools)
- Self-Employment Tax Calculator
- Quarterly Tax Calculator
- Tax Refund Calculator
- LLC Tax Calculator
- QBI Deduction Calculator
- Freelancer Tax Calculator
- Mileage Tracker
- Tax Bracket Calculator

## 📝 Content Strategy

### Pillar Pages (6)
1. Tax Software: The Complete Guide
2. Best Free Tax Software
3. Tax Software Comparison Hub
4. Self-Employment Tax: Complete Guide
5. Small Business Tax Deductions
6. AI Tax Software

### Total Pages: 120
- 6 Pillar pages
- 74 Cluster pages
- 40 Support pages

All content follows **Koray's Semantic SEO Framework**:
- Question-based H2 headings
- 40-word extractive answers
- EAV (Entity-Attribute-Value) triples
- Hub-and-spoke internal linking
- Schema markup (Article, FAQPage, HowTo)

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub:
```bash
git push origin main
```

2. Connect to Vercel:
   - Import project from GitHub
   - Set environment variables
   - Deploy

3. Custom Domain:
   - Add domain in Vercel dashboard
   - Configure DNS records
   - SSL automatically provisioned

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## 📊 SEO Implementation

- **Dynamic Sitemap:** Auto-generated at `/sitemap.xml`
- **robots.txt:** Configured for optimal crawling
- **Schema Markup:** JSON-LD for all page types
- **Meta Tags:** Open Graph, Twitter Cards
- **Canonical URLs:** Prevent duplicate content
- **Core Web Vitals:** Optimized for performance

## 📝 Content Templates

### Pillar Page Structure
```
H1: [Topic]: Complete Guide for [Audience] [Year]

H2: What Is [Topic]? (40-word answer)
H2: How Does [Topic] Work? (40-word answer)
H2: How Much Does [Topic] Cost? (40-word answer)
H2: Who Should Use [Topic]? (40-word answer)
H2: FAQ (Schema markup)
```

### Tool Page Structure
```
H1: [Tool Name]: [Benefit] in [Timeframe]

H2: What Is [Tool]? (40-word answer)
H2: How Does It Work? (40-word answer)
[Tool Interface]
H2: FAQ (Schema markup)
```

## 🛡️ Security

- API routes protected with rate limiting
- Environment variables for sensitive data
- No client-side API key exposure
- Input validation on all forms

## 📈 Performance Targets

- Page Load: < 2 seconds
- Lighthouse Score: > 90
- Core Web Vitals: Pass all metrics
- Uptime: > 99.9%

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

- Website: [https://supatax.ai](https://supatax.ai)
- Email: support@supatax.ai
- GitHub Issues: [Report a bug](https://github.com/yourusername/supatax/issues)

## 🙏 Acknowledgments

- [Koray Tuğberk Gübür](https://www.holisticseo.digital/) - SEO Framework
- [shadcn/ui](https://ui.shadcn.com/) - Component Library
- [OpenRouter](https://openrouter.ai/) - AI API
- [Vercel](https://vercel.com/) - Hosting

---

**Built with ❤️ for freelancers and self-employed professionals.**

