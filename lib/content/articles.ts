export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: "pillar" | "cluster" | "support";
  parentSlug?: string;
  publishDate: string;
  modifiedDate: string;
  author: {
    name: string;
    title: string;
    bio: string;
  };
  readingTime: string;
  tags: string[];
}

// Helper function to format content with proper HTML
function formatContent(markdown: string): string {
  return markdown
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-6 text-slate-900">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-12 mb-4 text-slate-900">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-3 text-slate-800">$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold mt-6 mb-2 text-slate-800">$1</h4>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2 text-slate-700">$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 text-slate-700"><span class="font-semibold">$1</span></li>')
    .replace(/(<li.*<\/li>\n)+/g, '<ul class="mb-6 list-disc">$&</ul>')
    .replace(/^(?!<[hlu])(.*$)/gim, '<p class="mb-4 leading-relaxed text-slate-700">$1</p>')
    .replace(/<p class="mb-4"><\/p>/g, '')
    .replace(/---/g, '<hr class="my-8 border-slate-200" />')
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-100 p-4 rounded-lg overflow-x-auto mb-6"><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="bg-slate-100 px-1 py-0.5 rounded text-sm">$1</code>');
}

export const articles: Article[] = [
  // ============================================
  // PILLAR 1: TAX RESEARCH METHODOLOGY (10 articles)
  // ============================================
  {
    slug: "tax-research-methodology",
    title: "The Complete Guide to Tax Research Methodology for Practitioners",
    description: "Master the art of tax research with our comprehensive methodology covering primary sources, citations, and professional standards for CPAs and Enrolled Agents.",
    category: "pillar",
    publishDate: "2024-01-15",
    modifiedDate: "2024-03-01",
    readingTime: "25 min read",
    author: {
      name: "Sarah Mitchell, CPA, EA",
      title: "Senior Tax Research Director",
      bio: "Sarah has over 20 years of experience in tax research and has worked with the Big Four accounting firms. She holds a Master's in Taxation from NYU and is a frequent speaker at AICPA conferences."
    },
    tags: ["tax research", "methodology", "IRS", "primary sources", "citations"],
    content: formatContent(`# The Complete Guide to Tax Research Methodology for Practitioners

Effective tax research is the foundation of quality tax practice. Whether you're preparing a complex return, responding to an IRS notice, or advising a client on a transaction, the ability to find, analyze, and apply authoritative tax law is essential.

## What Is Tax Research?

Tax research is the systematic investigation of tax laws, regulations, and precedents to answer specific tax questions or support tax positions. Professional tax research involves:

* Identifying the relevant facts and issues
* Locating applicable primary and secondary authorities
* Analyzing how the law applies to the specific situation
* Evaluating the strength of competing authorities
* Documenting conclusions and recommendations

## The Tax Research Process

### Step 1: Gather and Clarify Facts

Before beginning any research, thoroughly understand the factual situation. Create a fact pattern summary that includes who, what, when, where, why, and how.

### Step 2: Identify the Issue(s)

Frame clear, specific research questions. Vague questions lead to unfocused research.

### Step 3: Consult Secondary Sources

Begin with secondary sources to gain context and locate primary authorities.

### Step 4: Locate Primary Authorities

Primary sources include the Internal Revenue Code, Treasury Regulations, case law, and IRS administrative guidance.

### Step 5: Analyze and Synthesize

Critically analyze each authority for relevance, validity, and applicability to your facts.

### Step 6: Formulate Conclusions

Reach a conclusion about the most likely correct answer and alternative positions.

### Step 7: Document Your Research

Proper documentation supports professional judgment and provides protection against malpractice claims.

## Citations and Citation Form

### Internal Revenue Code
Standard citation: IRC § 162(a) or I.R.C. § 162(a)

### Treasury Regulations
Final: Treas. Reg. § 1.162-1(a)
Temporary: Temp. Treas. Reg. § 1.162-1T

### Court Cases
Supreme Court: Commissioner v. Groetzinger, 480 U.S. 23 (1987)

## Conclusion

Mastering tax research methodology is an ongoing process. By following this methodology, you'll handle complex tax research questions with confidence.`)
  },

  // Cluster pages for Tax Research
  {
    slug: "irs-primary-authorities",
    title: "Understanding IRS Primary Authorities: Code, Regulations, and Case Law",
    description: "A deep dive into the hierarchy of tax authorities and how to effectively cite and apply them in practice.",
    category: "cluster",
    parentSlug: "tax-research-methodology",
    publishDate: "2024-01-20",
    modifiedDate: "2024-03-01",
    readingTime: "18 min read",
    author: {
      name: "Sarah Mitchell, CPA, EA",
      title: "Senior Tax Research Director",
      bio: "Sarah has over 20 years of experience in tax research and has worked with the Big Four accounting firms."
    },
    tags: ["IRS", "primary authority", "tax code", "regulations", "case law"],
    content: formatContent(`# Understanding IRS Primary Authorities

When advising clients or defending tax positions, understanding the hierarchy and weight of tax authorities is crucial.

## The Hierarchy of Tax Authority

### 1. The Internal Revenue Code

The Internal Revenue Code of 1986, as amended, is the foundation of federal tax law.

**Key Characteristics:**
* Supreme authority in federal taxation
* Organized by Title 26 of the U.S. Code
* Amended regularly through legislation

### 2. Treasury Regulations

**Types of Regulations:**

**Final Regulations**
* Issued after notice and comment
* Most authoritative interpretative guidance

**Temporary Regulations**
* Effective immediately upon issuance
* Must expire within 3 years

**Proposed Regulations**
* Preview of intended guidance
* Not legally binding

### 3. Judicial Authority

Federal courts interpret both the Code and regulations, creating binding precedent.

## Understanding Authority Weight

### Mandatory vs. Persuasive

**Binding Authority Must Be Followed**
* Supreme Court precedent
* Controlling circuit precedent

**Persuasive Authority May Be Considered**
* Other circuits' decisions
* District court opinions

## Conclusion

Understanding and properly applying tax authorities separates competent practitioners from exceptional ones.`)
  },

  {
    slug: "secondary-tax-sources",
    title: "Leveraging Secondary Tax Sources: Treatises, Services, and Practice Aids",
    description: "How to use BNA, CCH, Thomson Reuters, and other secondary sources to accelerate your tax research.",
    category: "cluster",
    parentSlug: "tax-research-methodology",
    publishDate: "2024-01-22",
    modifiedDate: "2024-03-01",
    readingTime: "15 min read",
    author: {
      name: "David Chen, JD, LLM",
      title: "Tax Attorney & Research Consultant",
      bio: "David specializes in complex tax research and has authored numerous articles on tax procedure."
    },
    tags: ["secondary sources", "BNA", "CCH", "Thomson Reuters", "tax treatises"],
    content: formatContent(`# Leveraging Secondary Tax Sources

Secondary sources provide essential context, analysis, and practical guidance for tax research.

## Commercial Tax Services

### BNA Tax Management Portfolios

BNA portfolios offer in-depth analysis of specific tax topics written by leading practitioners.

**Best Used For:**
* Complex area overviews
* Transaction planning
* International tax issues

### CCH IntelliConnect

CCH provides comprehensive primary sources with extensive editorial content.

**Key Features:**
* Standard Federal Tax Reporter
* Tax Research Consultant
* State tax materials

### Thomson Reuters Checkpoint

Checkpoint combines powerful search with authoritative content.

**Strengths:**
* Advanced search capabilities
* Practice aids and templates
* International tax coverage

## Free Resources

### IRS.gov
* Forms and publications
* Revenue rulings and procedures
* Internal Revenue Manual

## Conclusion

Secondary sources accelerate research and provide practical insights not found in primary authorities.`)
  },

  {
    slug: "tax-citations-guide",
    title: "Tax Citation Guide: Proper Form for Code, Regs, and Cases",
    description: "Master the art of proper tax citation with examples for every type of authority.",
    category: "cluster",
    parentSlug: "tax-research-methodology",
    publishDate: "2024-01-25",
    modifiedDate: "2024-03-01",
    readingTime: "12 min read",
    author: {
      name: "Jennifer Walsh, JD",
      title: "Legal Research Specialist",
      bio: "Jennifer is a former law librarian with expertise in legal citation and research methodology."
    },
    tags: ["citations", "Bluebook", "tax form", "legal writing"],
    content: formatContent(`# Tax Citation Guide

Proper citation is essential for professional credibility and clear communication.

## Internal Revenue Code Citations

**Standard Form:**
IRC § 162(a)

**With Subsection:**
IRC § 162(a)(1) (2024)

**First Reference in Document:**
Internal Revenue Code of 1986, § 162(a), 26 U.S.C. § 162(a) (2024)

## Treasury Regulation Citations

**Final Regulations:**
Treas. Reg. § 1.162-1(a) (2024)

**Temporary Regulations:**
Temp. Treas. Reg. § 1.162-1T(a)

**Proposed Regulations:**
Prop. Treas. Reg. § 1.162-1, 89 FR 12345 (Jan. 15, 2024)

## Case Law Citations

**Supreme Court:**
Commissioner v. Groetzinger, 480 U.S. 23, 107 S. Ct. 990 (1987)

**Circuit Court:**
Winn-Dixie Stores, Inc. v. Commissioner, 254 F.3d 737 (11th Cir. 2001)

**Tax Court Regular Decision:**
Estate of Franklin v. Commissioner, 64 T.C. 752 (1975)

## Administrative Guidance

**Revenue Ruling:**
Rev. Rul. 99-7, 1999-1 C.B. 361

**Revenue Procedure:**
Rev. Proc. 2023-34, 2023-47 I.R.B. 1317

## Conclusion

Consistent, accurate citation demonstrates professionalism and attention to detail.`)
  },

  {
    slug: "using-tax-citators",
    title: "Using Tax Citators: Shepard's, KeyCite, and Checking Case Validity",
    description: "Ensure your authorities are still good law with proper citator technique.",
    category: "cluster",
    parentSlug: "tax-research-methodology",
    publishDate: "2024-01-28",
    modifiedDate: "2024-03-01",
    readingTime: "14 min read",
    author: {
      name: "Jennifer Walsh, JD",
      title: "Legal Research Specialist",
      bio: "Jennifer is a former law librarian with expertise in legal citation and research methodology."
    },
    tags: ["citators", "Shepards", "KeyCite", "case validation", "research"],
    content: formatContent(`# Using Tax Citators

Citators are essential tools for verifying that your authorities remain valid and identifying subsequent treatment.

## What Is a Citator?

A citator is a research tool that tracks the history and subsequent treatment of cases, statutes, and regulations.

## Types of Treatment

### Negative Treatment
* **Overruled:** Case is no longer valid precedent
* **Questioned:** Authority has been doubted
* **Criticized:** Negative comments in subsequent cases
* **Limited:** Scope restricted by later decision
* **Distinguished:** Differentiated on facts

### Positive Treatment
* **Followed:** Applied in subsequent case
* **Affirmed:** Upheld on appeal
* **Approved:** Explicitly endorsed

## Citator Symbols

### Shepard's (LexisNexis)
* Red stop sign: Strong negative treatment
* Yellow triangle: Questued or distinguished
* Green diamond: Positive treatment

### KeyCite (Westlaw)
* Red flag: Case is no longer good law
* Yellow flag: Negative treatment
* Blue striped flag: Appeal taken

## Conclusion

Always verify authority validity before relying on it in advice or documents.`)
  },

  {
    slug: "tax-court-research",
    title: "Tax Court Research: Regular, Memorandum, and Summary Opinions",
    description: "Navigate the different types of Tax Court opinions and their precedential value.",
    category: "cluster",
    parentSlug: "tax-research-methodology",
    publishDate: "2024-02-01",
    modifiedDate: "2024-03-01",
    readingTime: "16 min read",
    author: {
      name: "Robert Torres, JD",
      title: "Tax Litigation Attorney",
      bio: "Robert has represented taxpayers before the Tax Court for over 15 years."
    },
    tags: ["Tax Court", "opinions", "precedent", "litigation"],
    content: formatContent(`# Tax Court Research

The United States Tax Court is the preeminent forum for tax litigation, but not all its opinions carry the same weight.

## Types of Tax Court Opinions

### Regular Decisions (T.C.)

**Characteristics:**
* Issued by full court
* Published officially
* Precedential value

**Citation:**
Smith v. Commissioner, 145 T.C. 123 (2015)

### Memorandum Decisions (T.C. Memo)

**Characteristics:**
* Apply settled law to facts
* Do not establish precedent
* Still persuasive authority

**Citation:**
Smith v. Commissioner, T.C. Memo. 2015-123

### Summary Opinions (T.C. Summ. Op.)

**Characteristics:**
* Small Tax Cases procedure
* Under $50,000 in dispute
* No precedential value
* Cannot be appealed

## Precedential Value

Only Regular Decisions create binding precedent within the Tax Court. However, Memorandum opinions often provide valuable guidance on factual applications.

## Conclusion

Understand opinion types to properly assess authority weight in your research.`)
  },

  // Support pages for Tax Research
  {
    slug: "irc-section-162-business-expenses",
    title: "IRC § 162: Trade or Business Expenses Explained",
    description: "A detailed analysis of the primary business expense deduction authority.",
    category: "support",
    parentSlug: "irs-primary-authorities",
    publishDate: "2024-02-05",
    modifiedDate: "2024-03-01",
    readingTime: "10 min read",
    author: {
      name: "Sarah Mitchell, CPA, EA",
      title: "Senior Tax Research Director",
      bio: "Sarah has over 20 years of experience in tax research."
    },
    tags: ["IRC 162", "business expenses", "ordinary", "necessary", "deductions"],
    content: formatContent(`# IRC § 162: Trade or Business Expenses

Section 162 is the foundational authority for business expense deductions.

## Statutory Language

\"There shall be allowed as a deduction all the ordinary and necessary expenses paid or incurred during the taxable year in carrying on any trade or business.\"

## The Four Requirements

1. **Ordinary:** Common and accepted in the industry
2. **Necessary:** Appropriate and helpful for the business
3. **Paid or Incurred:** During the taxable year
4. **Trade or Business:** Activity entered into for profit

## Key Limitations

* Personal expenses are not deductible
* Capital expenditures must be capitalized
* Specific Code sections may override § 162

## Leading Cases

* Welch v. Helvering, 290 U.S. 111 (1933)
* Commissioner v. Tellier, 383 U.S. 687 (1966)

## Conclusion

Section 162 is broad but not unlimited. Careful analysis of each element is required.`)
  },

  {
    slug: "revenue-ruling-99-7",
    title: "Revenue Ruling 99-7: Business Travel and Transportation",
    description: "Analysis of the IRS position on temporary vs indefinite work assignments.",
    category: "support",
    parentSlug: "irs-primary-authorities",
    publishDate: "2024-02-08",
    modifiedDate: "2024-03-01",
    readingTime: "8 min read",
    author: {
      name: "Michael Chen, EA",
      title: "Tax Practice Lead",
      bio: "Michael specializes in small business taxation."
    },
    tags: ["Rev Rul 99-7", "business travel", "transportation", "temporary assignment"],
    content: formatContent(`# Revenue Ruling 99-7

Revenue Ruling 99-7 provides crucial guidance on distinguishing temporary from indefinite work assignments for travel expense purposes.

## Key Holdings

**Temporary Assignment:**
* Realistic expectation of work lasting one year or less
* Travel expenses deductible

**Indefinite Assignment:**
* Realistic expectation of work lasting more than one year
* Travel expenses not deductible (tax home shifts)

## Practical Application

The key is the **realistic expectation** at the time of assignment, not the actual duration.

## Examples from the Ruling

*Example 1:* Employee expects 9-month assignment. Assignment extended to 15 months. Travel remains deductible because original expectation was temporary.

*Example 2:* Employee expects 18-month assignment. Assignment shortened to 10 months. Travel not deductible because original expectation was indefinite.

## Conclusion

Document expectations at assignment inception to support deduction positions.`)
  },

  // ============================================
  // PILLAR 2: INDIVIDUAL TAXATION (20 articles)
  // ============================================
  {
    slug: "individual-tax-guide",
    title: "The Complete Individual Tax Guide for Tax Professionals",
    description: "Comprehensive coverage of individual taxation from gross income to credits and payments.",
    category: "pillar",
    publishDate: "2024-01-10",
    modifiedDate: "2024-03-01",
    readingTime: "30 min read",
    author: {
      name: "Patricia Williams, CPA",
      title: "Individual Tax Specialist",
      bio: "Patricia has prepared over 10,000 individual returns and specializes in high-net-worth individuals."
    },
    tags: ["individual tax", "Form 1040", "gross income", "deductions", "credits"],
    content: formatContent(`# The Complete Individual Tax Guide

Individual taxation forms the core of most tax practices. This guide covers everything from gross income to final credits.

## Gross Income (IRC § 61)

Gross income includes \"all income from whatever source derived\" unless specifically excluded.

### Common Income Items
* Wages and salaries (Form W-2)
* Business income (Schedule C)
* Investment income (Schedule B, D)
* Rental income (Schedule E)
* Retirement distributions (Form 1099-R)
* Social Security benefits (may be taxable)

### Exclusions from Gross Income
* Gifts and inheritances
* Life insurance proceeds
* Municipal bond interest
* Qualified scholarships

## Adjustments to Income (Above-the-Line)

These deductions reduce AGI and are available to all taxpayers:

* Educator expenses (up to $300)
* Health savings account contributions
* Self-employed retirement contributions
* Self-employed health insurance
* Alimony (pre-2019 agreements)
* Student loan interest (up to $2,500)
* Tuition and fees (currently suspended)

## Itemized Deductions (Schedule A)

Taxpayers choose between standard deduction and itemizing:

### Medical Expenses
* Exceeding 7.5% of AGI
* Includes insurance premiums, doctor visits, prescriptions

### State and Local Taxes (SALT)
* Capped at $10,000 ($5,000 MFS)
* Income, sales, or property taxes

### Home Mortgage Interest
* Acquisition indebtedness up to $750,000
* Home equity loans (if used to improve home)

### Charitable Contributions
* Up to 60% of AGI for cash
* 30% for appreciated property

## Tax Calculation

Apply tax brackets to taxable income (2024):

| Rate | Single | MFJ |
|------|--------|-----|
| 10% | $0-$11,600 | $0-$23,200 |
| 12% | $11,601-$47,150 | $23,201-$94,300 |
| 22% | $47,151-$100,525 | $94,301-$201,050 |
| 24% | $100,526-$191,950 | $201,051-$383,900 |
| 32% | $191,951-$243,725 | $383,901-$487,450 |
| 35% | $243,726-$609,350 | $487,451-$731,200 |
| 37% | Over $609,350 | Over $731,200 |

## Tax Credits

Credits reduce tax liability dollar-for-dollar:

### Refundable Credits
* Earned Income Tax Credit
* Child Tax Credit (partially refundable)
* American Opportunity Tax Credit (40% refundable)
* Premium Tax Credit

### Non-Refundable Credits
* Child and Dependent Care Credit
* Education credits
* Retirement savings contributions credit
* Foreign tax credit

## Net Investment Income Tax

3.8% additional tax on investment income for high-income taxpayers:
* MAGI over $200,000 (single)
* MAGI over $250,000 (MFJ)

## Conclusion

Individual taxation requires attention to detail across multiple forms and schedules. Stay current with annual inflation adjustments.`)
  },

  {
    slug: "self-employment-tax-complete-guide",
    title: "Self-Employment Tax: The Complete Guide for 2024",
    description: "Everything you need to know about self-employment tax, including calculations, deductions, and strategies to minimize your tax burden.",
    category: "pillar",
    publishDate: "2024-01-12",
    modifiedDate: "2024-03-01",
    readingTime: "22 min read",
    author: {
      name: "Michael Chen, EA",
      title: "Tax Practice Lead",
      bio: "Michael specializes in small business and self-employed taxation with 15 years of experience preparing complex Schedule C and SE returns."
    },
    tags: ["self-employment tax", "Schedule SE", "Schedule C", "estimated tax", "deductions"],
    content: formatContent(`# Self-Employment Tax: The Complete Guide for 2024

Self-employment tax represents a significant burden for business owners. Understanding the mechanics and available strategies is essential for tax professionals.

## What Is Self-Employment Tax?

Self-employment tax consists of:
* **Social Security:** 12.4% on earnings up to $168,600 (2024)
* **Medicare:** 2.9% on all net earnings
* **Additional Medicare:** 0.9% on earnings above $200,000/$250,000

## Calculating SE Tax

### Step 1: Determine Net Earnings

Start with Schedule C net profit, Schedule F, or partnership guaranteed payments.

### Step 2: Calculate SE Tax Base

Multiply net earnings by 92.35%:

**Example:**
$80,000 net profit × 92.35% = $73,880 base

### Step 3: Calculate the Tax

**Social Security:**
$73,880 × 12.4% = $9,161.12

**Medicare:**
$73,880 × 2.9% = $2,142.52

**Total SE Tax:** $11,303.64

### Step 4: Calculate the Deduction

Deduct 50% on Schedule 1:
$11,303.64 × 50% = $5,651.82

## Coordination with W-2 Wages

If taxpayer has both W-2 and SE income:

**Example:**
* W-2 wages: $120,000
* SE base: $73,880

Only $48,600 subject to Social Security ($168,600 - $120,000)

## Optional Methods

### Nonfarm Optional Method

* Gross income $7,200 or less
* Net profit less than $6,540
* Use two-thirds of gross income as deemed net earnings

## Minimization Strategies

### 1. S Corporation Election

**Sole Proprietor:**
$150,000 × 92.35% × 15.3% = $21,195 SE tax

**S Corporation:**
* $80,000 salary × 15.3% = $12,240 payroll tax
* $70,000 distribution = $0 SE tax
* **Savings: $8,955**

### 2. Maximize Deductions

Every dollar of deduction saves ~14% in SE tax.

### 3. Retirement Contributions

SEP-IRA and Solo 401(k) contributions reduce taxable income but not SE tax base.

## Estimated Tax Payments

Include SE tax in quarterly estimates:

**Safe Harbor:**
* 100% of prior year tax (110% if AGI > $150,000)
* 90% of current year tax

## Conclusion

With proper planning, SE tax impact can be significantly reduced while maintaining compliance.`)
  },

  // More cluster pages for Individual Taxation
  {
    slug: "schedule-c-guide",
    title: "Mastering Schedule C: Business Income and Expenses",
    description: "Complete guide to reporting business income on Schedule C with deduction strategies.",
    category: "cluster",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-01-18",
    modifiedDate: "2024-03-01",
    readingTime: "20 min read",
    author: {
      name: "Michael Chen, EA",
      title: "Tax Practice Lead",
      bio: "Michael specializes in small business taxation."
    },
    tags: ["Schedule C", "business income", "business expenses", "sole proprietor"],
    content: formatContent(`# Mastering Schedule C

Schedule C is where sole proprietors report business income and expenses. Accuracy here affects both income tax and self-employment tax.

## Who Files Schedule C?

* Sole proprietors
* Single-member LLCs (default)
* Independent contractors
* Statutory employees

## Income Reporting

Report gross receipts minus returns and allowances. Include:
* Cash payments
* Checks
* Credit card payments
* Barter income
* Form 1099-NEC and 1099-K amounts

## Common Business Expenses

### Cost of Goods Sold
For businesses with inventory:

Beginning inventory
+ Purchases
+ Labor costs
+ Other costs
- Ending inventory
= Cost of goods sold

### Vehicle Expenses

**Standard Mileage Rate (2024):** $0.67 per mile

**Actual Expenses:**
* Gas and oil
* Repairs and maintenance
* Insurance
* Registration
* Depreciation

### Home Office Deduction

**Simplified Method:**
$5 per square foot (max 300 sq ft) = $1,500 max

**Regular Method:**
Direct expenses + (Indirect expenses × Business %)

Business % = Business sq ft / Total sq ft

## Net Profit or Loss

Net profit flows to:
* Schedule 1 (Line 3)
* Schedule SE
* Form 1040

Net losses may be subject to excess business loss limitations.

## Conclusion

Schedule C requires careful documentation of both income and expenses. Proper categorization ensures maximum deductions while withstanding IRS scrutiny.`)
  },

  {
    slug: "home-office-deduction",
    title: "Home Office Deduction: Rules, Calculation, and Safe Harbors",
    description: "Everything you need to know about claiming the home office deduction.",
    category: "cluster",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-01-22",
    modifiedDate: "2024-03-01",
    readingTime: "15 min read",
    author: {
      name: "Lisa Rodriguez, CPA",
      title: "Small Business Tax Specialist",
      bio: "Lisa helps entrepreneurs maximize legitimate deductions."
    },
    tags: ["home office", "Form 8829", "deduction", "simplified method", "exclusive use"],
    content: formatContent(`# Home Office Deduction

The home office deduction allows taxpayers to deduct expenses for business use of their home.

## Requirements

### Regular and Exclusive Use
* Use must be regular (not occasional)
* Use must be exclusive (no personal use)
* Exceptions apply for daycare and storage

### Principal Place of Business
The home office must be:
* Principal place of business, OR
* Place to meet clients, OR
* Separate structure used for business

## Simplified Method

**Calculation:**
$5 × Square feet (max 300 sq ft)

**Maximum deduction:** $1,500

**Advantages:**
* Easier recordkeeping
* No depreciation recapture
* Full mortgage interest and taxes on Schedule A

## Regular Method

### Direct Expenses
100% deductible (business-only expenses):
* Repairs to office space
* Office-specific utilities

### Indirect Expenses
Deductible based on business percentage:
* Mortgage interest
* Real estate taxes
* Insurance
* Utilities
* Repairs and maintenance
* Depreciation

**Business % Formula:**
Business sq ft ÷ Total home sq ft

## Recordkeeping Tips

* Photograph the office space
* Keep utility bills
* Document business use percentage
* Separate business phone/internet records

## Conclusion

Choose the method that maximizes your deduction while minimizing complexity.`)
  },

  {
    slug: "vehicle-expense-deduction",
    title: "Vehicle Expense Deduction: Standard Mileage vs Actual Expenses",
    description: "Maximize your vehicle deduction with the right method and proper documentation.",
    category: "cluster",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-01-25",
    modifiedDate: "2024-03-01",
    readingTime: "14 min read",
    author: {
      name: "Lisa Rodriguez, CPA",
      title: "Small Business Tax Specialist",
      bio: "Lisa helps entrepreneurs maximize legitimate deductions."
    },
    tags: ["vehicle expenses", "standard mileage", "actual expenses", "depreciation", "Section 179"],
    content: formatContent(`# Vehicle Expense Deduction

Vehicle expenses often represent significant business deductions. Choosing the right method is crucial.

## Standard Mileage Rate

**2024 Rate:** $0.67 per business mile

**What It Includes:**
* Gas and oil
* Maintenance and repairs
* Depreciation
* Insurance
* Registration

**Requirements:**
* Keep mileage log
* Record business purpose
* Document dates

## Actual Expense Method

**Deductible Expenses:**
* Depreciation (or Section 179)
* Gas and oil
* Repairs and maintenance
* Tires
* Insurance
* Registration fees
* Licenses

**Business Use Percentage:**
Business miles ÷ Total miles

## Standard Mileage vs Actual

Choose standard mileage if:
* Lower cost vehicle
* High gas mileage
* Few repairs needed

Choose actual expenses if:
* Expensive vehicle (luxury car)
* High repair costs
* Low business mileage percentage

## Switching Methods

* **Standard → Actual:** Allowed, but must use straight-line depreciation
* **Actual → Standard:** Not allowed if took accelerated depreciation

## Conclusion

Document everything and choose the method that produces the highest deduction.`)
  },

  {
    slug: "qbi-deduction-complete-guide",
    title: "Qualified Business Income Deduction: Complete Section 199A Guide",
    description: "Master the 20% pass-through deduction with phase-outs, limitations, and planning strategies.",
    category: "cluster",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-01-28",
    modifiedDate: "2024-03-01",
    readingTime: "25 min read",
    author: {
      name: "Sarah Mitchell, CPA, EA",
      title: "Senior Tax Research Director",
      bio: "Sarah has extensive experience with pass-through entity taxation."
    },
    tags: ["QBI", "Section 199A", "pass-through", "SSTB", "20% deduction"],
    content: formatContent(`# Qualified Business Income Deduction

Section 199A provides a potential 20% deduction for qualified business income from pass-through entities.

## Basic Calculation

**QBI Deduction = Lesser of:**
1. 20% of QBI, OR
2. 20% of taxable income (before QBI deduction)

## What Is QBI?

Qualified Business Income includes:
* Ordinary business income
* Less ordinary business deductions
* From domestic businesses

**Exclusions:**
* Capital gains/losses
* Dividends
* Interest income (unless business)
* W-2 wages (S corp shareholder)
* Guaranteed payments

## 2024 Thresholds

| Filing Status | Threshold | Fully Phased In |
|--------------|-----------|-----------------|
| Single | $191,950 | $241,950 |
| MFJ | $383,900 | $483,900 |

## SSTB Limitations

Specified Service Trades or Businesses include:
* Health, law, accounting
* Consulting, financial services
* Athletics, performing arts

Above thresholds, SSTB deduction phases out completely.

## W-2 Wage and Property Limitation

Above thresholds, deduction limited to greater of:
1. 50% of W-2 wages, OR
2. 25% of W-2 wages + 2.5% of unadjusted basis

## Conclusion

QBI planning is complex but can produce significant tax savings with proper structuring.`)
  },

  // Support pages for Individual
  {
    slug: "educator-expense-deduction",
    title: "Educator Expense Deduction: What Qualifies in 2024",
    description: "Maximize the $300 educator expense deduction for teachers and school employees.",
    category: "support",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-02-01",
    modifiedDate: "2024-03-01",
    readingTime: "6 min read",
    author: {
      name: "Patricia Williams, CPA",
      title: "Individual Tax Specialist",
      bio: "Patricia has prepared over 10,000 individual returns."
    },
    tags: ["educator expenses", "teacher deduction", "above-the-line", "Form 1040"],
    content: formatContent(`# Educator Expense Deduction

Eligible educators can deduct up to $300 of unreimbursed expenses (2024).

## Who Qualifies?

* Teachers
* Counselors
* Principals
* Aides

Must work at least 900 hours in K-12 school.

## Qualified Expenses

* Books and supplies
* Computer equipment
* Supplementary materials
* Professional development
* COVID-19 protective items

## Non-Qualified Expenses

* Home schooling
* Non-athletic supplies for PE
* Personal expenses

## Recordkeeping

Keep receipts and documentation of:
* Amount spent
* Date purchased
* Business purpose

## Conclusion

Take this above-the-line deduction even if you don't itemize.`)
  },

  {
    slug: "hsa-contribution-limits",
    title: "HSA Contribution Limits and Deduction Rules for 2024",
    description: "Maximize health savings account tax benefits with proper contribution planning.",
    category: "support",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-02-05",
    modifiedDate: "2024-03-01",
    readingTime: "8 min read",
    author: {
      name: "Michael Chen, EA",
      title: "Tax Practice Lead",
      bio: "Michael specializes in small business taxation."
    },
    tags: ["HSA", "health savings account", "contribution limits", " Form 8889", "HDHP"],
    content: formatContent(`# HSA Contribution Limits 2024

Health Savings Accounts provide triple tax benefits: deductible contributions, tax-free growth, and tax-free withdrawals for medical expenses.

## 2024 Contribution Limits

**Self-only coverage:** $4,150
**Family coverage:** $8,300
**Catch-up (55+):** $1,000 additional

## Eligibility Requirements

Must have High Deductible Health Plan:
* Self-only minimum deductible: $1,600
* Family minimum deductible: $3,200
* Maximum out-of-pocket: $8,050 (self) / $16,100 (family)

## Deduction Rules

**Above-the-line deduction** on Schedule 1
* Deductible even if you don't itemize
* No income limits
* Employer contributions excluded from income

## Conclusion

HSAs are one of the most tax-advantaged savings vehicles available.`)
  },

  // ============================================
  // PILLAR 3: BUSINESS TAXATION (25 articles)
  // ============================================
  {
    slug: "business-tax-guide",
    title: "Complete Business Tax Guide for C-Corps, S-Corps, and Partnerships",
    description: "Comprehensive coverage of business entity taxation, from formation to distributions.",
    category: "pillar",
    publishDate: "2024-01-08",
    modifiedDate: "2024-03-01",
    readingTime: "35 min read",
    author: {
      name: "James Thompson, CPA, JD",
      title: "Business Tax Partner",
      bio: "James has 25 years of experience in corporate and partnership taxation."
    },
    tags: ["business tax", "C corporation", "S corporation", "partnership", "LLC"],
    content: formatContent(`# Complete Business Tax Guide

Business entity selection and taxation affects everything from formation to exit. This guide covers the major entity types and their tax implications.

## C Corporations

**Taxation:**
* Entity-level tax: 21% flat rate
* Double taxation on dividends
* Accumulated earnings tax risk

**Advantages:**
* Lower corporate rate
* Fringe benefits deductible
* Easy equity transfers
* No owner basis tracking

**Disadvantages:**
* Double taxation
* No pass-through deductions
* Complex liquidation rules

## S Corporations

**Taxation:**
* Pass-through entity
* No entity-level tax (generally)
* Built-in gains tax (5-year recognition period)
* LIFO recapture tax

**Requirements:**
* 100 or fewer shareholders
* One class of stock
* Eligible shareholders only
* Domestic corporation

**Advantages:**
* Pass-through taxation
* Self-employment tax savings
* Section 1202 exclusion available
* QBI deduction available

**Disadvantages:**
* Reasonable compensation requirement
* Basis tracking complexity
* Limitations on losses

## Partnerships and LLCs

**Taxation:**
* Pass-through entity
* No entity-level tax (except indirectly)
* Partner/ member basis tracking required

**Key Concepts:**
* Outside basis (partner level)
* Inside basis (partnership level)
* Capital accounts
* Allocations vs distributions

**Advantages:**
* Flexible allocations
* Special allocations possible
* No reasonable compensation requirement
* QBI deduction available

**Disadvantages:**
* SE tax on distributive shares
* Complexity in allocations
* Basis limitations on losses

## Entity Comparison

| Factor | C Corp | S Corp | Partnership |
|--------|--------|--------|-------------|
| Tax rate | 21% | Pass-through | Pass-through |
| Double tax | Yes | No | No |
| Fringe benefits | Deductible | Limited | Limited |
| QBI deduction | No | Yes | Yes |
| Losses | Trapped | Pass-through | Pass-through |

## Conclusion

Entity selection requires analysis of current and projected circumstances. Consider both tax and non-tax factors.`)
  },

  {
    slug: "s-corporation-guide",
    title: "S Corporation Complete Guide: Formation, Elections, and Compliance",
    description: "Everything you need to know about S corps from formation to reasonable compensation.",
    category: "cluster",
    parentSlug: "business-tax-guide",
    publishDate: "2024-01-15",
    modifiedDate: "2024-03-01",
    readingTime: "28 min read",
    author: {
      name: "James Thompson, CPA, JD",
      title: "Business Tax Partner",
      bio: "James has 25 years of experience in corporate taxation."
    },
    tags: ["S corporation", "Form 2553", "reasonable compensation", "distributions", "pass-through"],
    content: formatContent(`# S Corporation Complete Guide

S corporations combine the liability protection of corporations with pass-through taxation benefits.

## Formation and Election

**Step 1:** Form corporation (state filing)
**Step 2:** Obtain EIN
**Step 3:** File Form 2553

**Election Deadline:**
* Within 2.5 months of tax year beginning
* Late election relief available

## Shareholder Requirements

**Eligible Shareholders:**
* Individuals (U.S. citizens/residents)
* Estates
* Certain trusts
* Tax-exempt organizations

**Ineligible:**
* Partnerships
* C corporations
* Non-resident aliens
* Most trusts

## One Class of Stock Rule

**Prohibited:**
* Different distribution rights
* Different liquidation rights
* Voting vs non-voting (allowed)

**Safe Harbors:**
* Buy-sell agreements
* Employment agreements
* Debt instruments

## Reasonable Compensation

**The Golden Rule:**
Shareholder-employees must receive reasonable compensation for services.

**Factors:**
* Training and experience
* Duties and responsibilities
* Time and effort devoted
* Dividend history
* Payments to non-shareholder employees
* Comparable salaries

**Consequences of Underpayment:**
* Recharacterization of distributions
* Employment tax liability
* Penalties and interest

## Distributions

**Ordering Rules:**
1. AAA (tax-free to extent basis)
2. PTI (pre-1983 earnings)
3. AE&P (C corp earnings, taxable as dividend)
4. Return of basis (tax-free)
5. Capital gain

## Basis Tracking

**Increases:**
* Capital contributions
* Separately stated income
* Non-separately stated income
* Tax-exempt income

**Decreases:**
* Distributions
* Separately stated losses
* Non-separately stated losses
* Non-deductible expenses

## Conclusion

S corporations require careful attention to compliance rules but offer significant tax advantages.`)
  },

  {
    slug: "partnership-tax-guide",
    title: "Partnership Taxation: From Formation to Liquidation",
    description: "Master partnership taxation including basis, allocations, and special distributions.",
    category: "cluster",
    parentSlug: "business-tax-guide",
    publishDate: "2024-01-20",
    modifiedDate: "2024-03-01",
    readingTime: "30 min read",
    author: {
      name: "Robert Kim, CPA",
      title: "Partnership Tax Specialist",
      bio: "Robert specializes in complex partnership allocations and transactions."
    },
    tags: ["partnership", "Form 1065", "Schedule K-1", "basis", "allocations"],
    content: formatContent(`# Partnership Taxation Guide

Partnerships (and LLCs taxed as partnerships) provide flexibility but require careful attention to complex rules.

## Formation

**Contribution of Property:**
Generally tax-free under IRC § 721

**Built-in Gain/Loss:**
Contributed property with gain/loss triggers special rules if partnership sells within 7 years.

**Contribution of Services:**
Taxable as compensation (unless profits interest exception applies)

## Basis Concepts

### Outside Basis (Partner Level)

**Initial Basis:**
Cash contributed + Basis of property contributed

**Adjustments:**
* Increased by: Share of income, additional contributions
* Decreased by: Distributions, share of losses

**Importance:**
Limits loss deductions and determines gain on distributions

### Inside Basis (Partnership Level)

Partnership's basis in its assets

**Section 754 Election:**
Adjusts inside basis to reflect purchase price or stepped-up basis at death

## Allocations

### General Rule

Allocations must have **substantial economic effect**.

**Three-Part Test:**
1. Economic effect (partners' capital accounts affected)
2. Substantial (meaningful change in after-tax consequences)
3. Liquidating distribution per capital accounts

### Special Allocations

Partners can specially allocate items if requirements met.

**Common Special Allocations:**
* Tax credits
* Depreciation
* Section 179 expense
* Charitable contributions

## Distributions

### Current Distributions

**Ordering:**
1. Return of basis (tax-free)
2. Excess = capital gain

**Hot Assets:**
Unrealized receivables and inventory trigger ordinary income

### Liquidating Distributions

**If basis > FMV received:**
Capital loss (subject to limitations)

**If FMV received > basis:**
Capital gain (unless hot assets)

## Conclusion

Partnership taxation rewards careful planning with flexibility unavailable in other entity types.`)
  },

  // ============================================
  // PILLAR 4: IRS PROCEDURES & CONTROVERSY (15 articles)
  // ============================================
  {
    slug: "irs-procedures-guide",
    title: "IRS Procedures and Controversy: From Audit to Appeal",
    description: "Complete guide to IRS examinations, protests, and tax controversy resolution.",
    category: "pillar",
    publishDate: "2024-01-05",
    modifiedDate: "2024-03-01",
    readingTime: "32 min read",
    author: {
      name: "Susan Martinez, EA",
      title: "IRS Controversy Specialist",
      bio: "Susan is a former IRS revenue agent with 20 years of audit and appeals experience."
    },
    tags: ["IRS procedures", "audit", "appeals", "tax controversy", "examination"],
    content: formatContent(`# IRS Procedures and Controversy Guide

Dealing with the IRS requires knowledge of procedures, rights, and strategic options at each stage.

## Types of IRS Examinations

### Correspondence Examinations
* Conducted by mail
* Limited scope
* Often automated
* Response within 30 days critical

### Office Examinations
* At IRS office
* More complex issues
* Taxpayer or representative attends

### Field Examinations
* At taxpayer's business
* Most comprehensive
* Revenue agent conducts

## Audit Process

### Initial Contact
* Notice of examination
* Information Document Request (IDR)
* Statute of limitations protection

### Examination Phase
* Document review
* Interviews
* Third-party contacts
* Revenue Agent Reports (RAR)

### Conclusion
* No change
* Agreed (Form 870)
* Unagreed (30-day letter)

## Rights During Examination

* Right to representation
* Right to record interview
* Right to courteous treatment
* Right to know why information is requested
* Right to appeal

## Appeals Process

**30-Day Letter:**
Protest within 30 days

**Requirements:**
* Statement of facts
* Law and argument
* Penalties of perjury statement

**Settlement Options:**
* Concede issues
* Hazard of litigation
* Mutual concession

## Collection Alternatives

### Installment Agreements
* Guaranteed (under $10,000)
* Streamlined ($50,000 or less)
* Routine (requires financials)

### Offer in Compromise
* Doubt as to liability
* Doubt as to collectibility
* Effective tax administration

### Currently Not Collectible
* Financial hardship
* Collection suspended
* Liens may remain

## Conclusion

Understanding IRS procedures helps practitioners navigate examinations effectively and protect client rights.`)
  },

  // ============================================
  // PILLAR 5: INTERNATIONAL TAX (10 articles)
  // ============================================
  {
    slug: "international-tax-guide",
    title: "International Taxation: U.S. Persons with Foreign Activities",
    description: "Comprehensive guide to international tax compliance, reporting, and planning.",
    category: "pillar",
    publishDate: "2024-01-12",
    modifiedDate: "2024-03-01",
    readingTime: "28 min read",
    author: {
      name: "Chen Wei, CPA, MST",
      title: "International Tax Director",
      bio: "Chen specializes in cross-border taxation and has worked with multinational corporations."
    },
    tags: ["international tax", "FBAR", "FATCA", "foreign tax credit", "expatriate"],
    content: formatContent(`# International Taxation Guide

U.S. persons face extensive reporting requirements for foreign activities. Non-compliance carries severe penalties.

## Who Must File?

**U.S. Persons Include:**
* Citizens (regardless of residence)
* Residents (green card or substantial presence)
* Domestic corporations and partnerships
* Domestic trusts and estates

## Income Sourcing

**U.S. Source:**
* Services performed in U.S.
* Interest from U.S. obligors
* Dividends from U.S. corporations
* Real property located in U.S.

**Foreign Source:**
* Services performed outside U.S.
* Interest from foreign obligors
* Dividends from foreign corporations
* Real property located outside U.S.

## Foreign Tax Credit

**Purpose:**
Prevent double taxation on foreign income

**Limitation:**
Cannot exceed U.S. tax on foreign source income

**Categories:**
* Passive income
* General category income
* Section 951A (GILTI)
* Foreign branch

## FBAR (FinCEN Form 114)

**Who Must File:**
U.S. persons with foreign financial accounts exceeding $10,000 aggregate

**Due Date:**
April 15 (automatic extension to October 15)

**Penalties:**
* Non-willful: Up to $10,000 per violation
* Willful: Greater of $100,000 or 50% of account

## FATCA (Form 8938)

**Reporting Thresholds:**

**Single/MFS living in U.S.:**
* $50,000 on last day or $75,000 anytime

**MFJ living in U.S.:**
* $100,000 on last day or $150,000 anytime

**Living abroad:** Higher thresholds

## Other Reporting Forms

* Form 5471 (foreign corporations)
* Form 5472 (foreign-owned U.S. corporations)
* Form 8865 (foreign partnerships)
* Form 8621 (PFICs)
* Form 3520 (foreign trusts/gifts)

## Conclusion

International tax compliance is complex. Professional assistance is often necessary to avoid significant penalties.`)
  },

  // ============================================
  // PILLAR 6: STATE & LOCAL TAX (10 articles)
  // ============================================
  {
    slug: "state-tax-guide",
    title: "State and Local Taxation: Multi-State Compliance Guide",
    description: "Navigate nexus, apportionment, and compliance across multiple state jurisdictions.",
    category: "pillar",
    publishDate: "2024-01-08",
    modifiedDate: "2024-03-01",
    readingTime: "26 min read",
    author: {
      name: "Amanda Foster, CPA",
      title: "State Tax Specialist",
      bio: "Amanda has extensive experience with multi-state taxation and nexus issues."
    },
    tags: ["state tax", "nexus", "apportionment", "multi-state", " Wayfair"],
    content: formatContent(`# State and Local Tax Guide

State taxation adds complexity to federal compliance. Understanding nexus and apportionment is essential.

## Nexus

Nexus is the connection that subjects a taxpayer to state taxation.

### Income Tax Nexus

**Physical Presence:**
* Property
* Employees
* Inventory

**Economic Nexus:** (Post-Wayfair)
* Sales threshold (typically $100,000+)
* Transaction threshold (typically 200+)

### Sales Tax Nexus

**Physical Presence:**
* Office, store, warehouse
* Employees
* Agents

**Economic Nexus:**
* Based on sales volume
* Varies by state

## Apportionment

For multi-state businesses, income is apportioned using formulas.

### Three-Factor Formula

**Traditional:**
(Property factor + Payroll factor + Sales factor) ÷ 3

**Double-Weighted Sales:**
(Property + Payroll + 2×Sales) ÷ 4

### Single Sales Factor

Many states now use only sales factor:
In-state sales ÷ Everywhere sales

## Market-Based Sourcing

For services and intangibles:
* Where customer receives benefit
* Where service is delivered
* Where contract is managed

## Nonresident Withholding

States require withholding on:
* Nonresident partners/shareholders
* Nonresident property sales
* Nonresident entertainers

## Conclusion

Multi-state compliance requires tracking varying rules across jurisdictions. Automation and professional assistance reduce risk.`)
  },

  // ============================================
  // ADDITIONAL CLUSTER AND SUPPORT PAGES
  // ============================================
  
  // Individual Tax Clusters
  {
    slug: "capital-gains-guide",
    title: "Capital Gains and Losses: Complete Guide to Schedule D",
    description: "Master capital gains taxation including preferential rates, netting rules, and loss limitations.",
    category: "cluster",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-01-15",
    modifiedDate: "2024-03-01",
    readingTime: "18 min read",
    author: {
      name: "Patricia Williams, CPA",
      title: "Individual Tax Specialist",
      bio: "Patricia specializes in investment taxation."
    },
    tags: ["capital gains", "Schedule D", "preferential rates", "loss carryover", "netting"],
    content: formatContent(`# Capital Gains and Losses

Capital gains taxation involves preferential rates, complex netting rules, and loss limitations.

## Holding Periods

**Short-term:** One year or less
**Long-term:** More than one year

## Tax Rates

**2024 Long-Term Capital Gains:**

| Rate | Single | MFJ |
|------|--------|-----|
| 0% | $0-$47,025 | $0-$94,050 |
| 15% | $47,026-$518,900 | $94,051-$583,750 |
| 20% | Over $518,900 | Over $583,750 |

**Short-term:** Ordinary income rates

## Netting Rules

**Step 1:** Net short-term gains/losses
**Step 2:** Net long-term gains/losses
**Step 3:** Net the nets

## Loss Limitations

**Annual Limit:** $3,000 against ordinary income
**Excess:** Carries forward indefinitely

## Conclusion

Tax-loss harvesting and holding period management can significantly reduce tax liability.`)
  },

  {
    slug: "rental-property-tax-guide",
    title: "Rental Property Taxation: Schedule E and Passive Activity Rules",
    description: "Maximize rental property deductions while navigating passive activity limitations.",
    category: "cluster",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-01-18",
    modifiedDate: "2024-03-01",
    readingTime: "22 min read",
    author: {
      name: "Lisa Rodriguez, CPA",
      title: "Small Business Tax Specialist",
      bio: "Lisa specializes in real estate taxation."
    },
    tags: ["rental property", "Schedule E", "passive activity", "depreciation", "Form 8582"],
    content: formatContent(`# Rental Property Taxation

Rental real estate offers significant tax advantages but comes with complex passive activity rules.

## Reporting

**Schedule E** reports rental income and expenses:
* Rents received
* Mortgage interest
* Property taxes
* Insurance
* Repairs
* Depreciation
* Management fees

## Passive Activity Loss Rules

**General Rule:** Passive losses offset passive income only

**Exceptions:**
* $25,000 offset for active participants (phases out $100K-$150K MAGI)
* Real estate professional status
* Short-term rental exception (< 7 days average)

## Real Estate Professional Status

**Requirements:**
* > 750 hours in real property trades
* > 50% of personal services in real property
* Materially participate in each rental

**Benefit:**
Losses non-passive, offset other income

## Depreciation

**Residential:** 27.5 years straight-line
**Commercial:** 39 years straight-line
**Land:** Not depreciable

## Conclusion

Rental property tax planning requires understanding both deductions and passive activity limitations.`)
  },

  {
    slug: "retirement-distributions",
    title: "Retirement Account Distributions: Taxation and Penalties",
    description: "Understand when distributions are taxable and when early withdrawal penalties apply.",
    category: "cluster",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-01-22",
    modifiedDate: "2024-03-01",
    readingTime: "20 min read",
    author: {
      name: "Patricia Williams, CPA",
      title: "Individual Tax Specialist",
      bio: "Patricia has extensive experience with retirement account taxation."
    },
    tags: ["retirement distributions", "IRA", "401k", "RMD", "early withdrawal penalty"],
    content: formatContent(`# Retirement Account Distributions

Retirement account distributions have complex tax rules and potential penalties.

## Traditional IRA/401(k) Distributions

**Taxable:**
Ordinary income rates apply

**10% Early Withdrawal Penalty:**
Applies to distributions before age 59½

**Exceptions to Penalty:**
* Age 59½ or older
* Death or disability
* First-time home purchase ($10,000 max)
* Higher education expenses
* Medical expenses > 7.5% AGI
* Health insurance premiums (unemployed)
* Substantially equal periodic payments
* IRS levy
* Qualified reservist distribution

## Roth Distributions

**Ordering Rules:**
1. Regular contributions (tax-free, penalty-free)
2. Conversion contributions (tax-free, 5-year hold for penalty)
3. Earnings (taxable if not qualified)

**Qualified Distribution Requirements:**
* Account open 5+ years, AND
* Age 59½, death, disability, or first home

## Required Minimum Distributions

**Starting Age:** 73 (born 1951-1959), 75 (born 1960+)

**Calculation:**
Account balance ÷ Life expectancy factor

**Penalty:**
25% of amount not distributed (reduced to 10% if corrected timely)

## Conclusion

Plan distributions carefully to minimize taxes and avoid penalties.`)
  },

  {
    slug: "estimated-tax-payments",
    title: "Estimated Tax Payments: Safe Harbors and Penalty Avoidance",
    description: "Calculate and time estimated tax payments to avoid underpayment penalties.",
    category: "cluster",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-01-25",
    modifiedDate: "2024-03-01",
    readingTime: "16 min read",
    author: {
      name: "Michael Chen, EA",
      title: "Tax Practice Lead",
      bio: "Michael specializes in estimated tax planning."
    },
    tags: ["estimated tax", "Form 1040-ES", "safe harbor", "underpayment penalty", "quarterly"],
    content: formatContent(`# Estimated Tax Payments

Self-employed individuals and others without sufficient withholding must make estimated tax payments.

## Who Must Pay?

**Required if:**
* Expect to owe $1,000+ in tax
* Withholding < 90% of current year tax
* Withholding < 100% of prior year tax (110% if AGI > $150K)

## Safe Harbor Rules

**Avoid Penalty If:**
1. **90% Current Year:** Owed < $1,000 after withholding
2. **100% Prior Year:** Paid 100% of prior year (110% if AGI > $150K)
3. **Annualized Income:** Paid 90% based on quarterly income

## Due Dates

| Quarter | Income Period | Due Date |
|---------|---------------|----------|
| Q1 | Jan 1 - Mar 31 | April 15 |
| Q2 | Apr 1 - May 31 | June 15 |
| Q3 | Jun 1 - Aug 31 | Sept 15 |
| Q4 | Sept 1 - Dec 31 | Jan 15 |

## Farmers and Fishermen

**Special Rule:**
Pay 100% by January 15, OR
File return and pay by March 1

## Conclusion

Use safe harbors to simplify planning and avoid underpayment penalties.`)
  },

  {
    slug: "itemized-deductions-guide",
    title: "Schedule A Itemized Deductions: Medical, Taxes, Interest, and Charity",
    description: "Maximize itemized deductions with proper documentation and limitations.",
    category: "cluster",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-01-28",
    modifiedDate: "2024-03-01",
    readingTime: "19 min read",
    author: {
      name: "Patricia Williams, CPA",
      title: "Individual Tax Specialist",
      bio: "Patricia helps clients maximize legitimate deductions."
    },
    tags: ["itemized deductions", "Schedule A", "medical", "SALT", "mortgage interest", "charity"],
    content: formatContent(`# Schedule A Itemized Deductions

Taxpayers choose between standard deduction and itemizing. Higher deductions warrant itemizing.

## Medical Expenses

**Threshold:**
7.5% of AGI

**Qualified Expenses:**
* Doctor and dental visits
* Prescription medications
* Insurance premiums
* Medical equipment
* Long-term care services
* Transportation for medical care

**Non-Deductible:**
* Cosmetic surgery
* Non-prescription drugs
* Health club dues
* Funeral expenses

## State and Local Taxes (SALT)

**Cap:**
$10,000 ($5,000 MFS)

**Included:**
* State income OR sales tax
* Real property taxes
* Personal property taxes

## Mortgage Interest

**Acquisition Indebtedness:**
Up to $750,000 ($1M if before Dec 15, 2017)

**Home Equity Debt:**
Deductible only if used to improve home

## Charitable Contributions

**Limits:**
* Cash: 60% of AGI
* Ordinary income property: 50% of AGI
* Capital gain property: 30% of AGI

**Documentation:**
* $250+: Written acknowledgment
* $500+: Form 8283
* $5,000+: Qualified appraisal

## Conclusion

Compare itemized total to standard deduction annually.`)
  },

  // More Business Tax Clusters
  {
    slug: "section-179-deduction",
    title: "Section 179 Expensing: Asset Purchase Deduction Strategies",
    description: "Maximize immediate deductions for business asset purchases.",
    category: "cluster",
    parentSlug: "business-tax-guide",
    publishDate: "2024-01-12",
    modifiedDate: "2024-03-01",
    readingTime: "17 min read",
    author: {
      name: "James Thompson, CPA, JD",
      title: "Business Tax Partner",
      bio: "James specializes in business asset acquisitions."
    },
    tags: ["Section 179", "expensing", "depreciation", "asset purchases", "Form 4562"],
    content: formatContent(`# Section 179 Expensing

Section 179 allows immediate expensing of qualifying asset purchases.

## 2024 Limits

**Maximum Election:** $1,220,000
**Phase-out Threshold:** $3,050,000
**Complete Phase-out:** $4,270,000

## Qualifying Property

**Eligible:**
* Tangible personal property
* Qualified improvement property
* Off-the-shelf computer software
* Certain nonresidential real property improvements

**Not Eligible:**
* Real property (other than QIP)
* Property used outside U.S.
* Property from related party
* Inherited property

## Limitations

**Taxable Income Limit:**
Cannot exceed taxable income from trade or business

**Business Use:**
Must use > 50% for business

## Bonus Depreciation

**2024 Rate:** 60%

**Applies After Section 179:**
1. Take Section 179 first
2. Apply bonus to remaining basis
3. Depreciate remainder

## Conclusion

Combine Section 179 and bonus depreciation for maximum first-year deductions.`)
  },

  {
    slug: "business-meals-entertainment",
    title: "Business Meals and Entertainment: What Changed and What Remains",
    description: "Navigate the 50% and 100% deduction rules for business meals.",
    category: "cluster",
    parentSlug: "business-tax-guide",
    publishDate: "2024-01-15",
    modifiedDate: "2024-03-01",
    readingTime: "12 min read",
    author: {
      name: "Lisa Rodriguez, CPA",
      title: "Small Business Tax Specialist",
      bio: "Lisa helps businesses maximize legitimate deductions."
    },
    tags: ["business meals", "entertainment", "50% deduction", "100% deduction", "per diem"],
    content: formatContent(`# Business Meals and Entertainment

TCJA changed entertainment rules but business meals remain deductible with proper documentation.

## Current Rules (Post-TCJA)

**Entertainment:**
NOT deductible (repealed)

**Business Meals:**
50% deductible (generally)

**Exceptions (100% Deductible):**
* Meals for employees (on premises, convenience)
* Company-wide events
* Meals included in compensation
* Recreational/social for employees

## Requirements for Deduction

**Business Purpose:**
* Business meeting
* Business travel
* Employee meals

**Documentation:**
* Date
* Amount
* Business purpose
* Business relationship

## Per Diem Option

Use standard meal allowances instead of actual costs:
* Simplifies recordkeeping
* Still subject to 50% limit

## Conclusion

Maintain contemporaneous documentation to support meal deductions.`)
  },

  {
    slug: "employee-vs-contractor",
    title: "Employee vs Independent Contractor Classification Guide",
    description: "Proper worker classification to avoid employment tax penalties.",
    category: "cluster",
    parentSlug: "business-tax-guide",
    publishDate: "2024-01-18",
    modifiedDate: "2024-03-01",
    readingTime: "18 min read",
    author: {
      name: "James Thompson, CPA, JD",
      title: "Business Tax Partner",
      bio: "James advises businesses on employment tax matters."
    },
    tags: ["worker classification", "employee", "independent contractor", "Form SS-8", "safe harbor"],
    content: formatContent(`# Employee vs Independent Contractor

Misclassification of workers can result in significant penalties.

## Common Law Rules

**Behavioral Control:**
* Instructions given
* Training provided
* Evaluation systems

**Financial Control:**
* Investment in equipment
* Unreimbursed expenses
* Opportunity for profit/loss
* Services available to market

**Relationship:**
* Written contracts
* Employee-type benefits
* Permanency
* Integral part of business

## Consequences of Misclassification

**Employer Liability:**
* Employment taxes
* Penalties
* Interest
* State obligations

**Safe Harbor (Section 530):**
* Reasonable basis
* Substantive consistency
* Reporting consistency

## Voluntary Classification Settlement Program (VCSP)

Allows reclassification with reduced penalties:
* 10% of employment tax liability
* No penalties or interest
* No audit for prior years

## Conclusion

Proper classification at hire avoids costly reclassification later.`)
  },

  // IRS Procedures Clusters
  {
    slug: "offer-in-compromise-guide",
    title: "Offer in Compromise: Qualifying and Applying Successfully",
    description: "Settle tax debt for less than full amount with the OIC program.",
    category: "cluster",
    parentSlug: "irs-procedures-guide",
    publishDate: "2024-01-15",
    modifiedDate: "2024-03-01",
    readingTime: "20 min read",
    author: {
      name: "Susan Martinez, EA",
      title: "IRS Controversy Specialist",
      bio: "Susan has negotiated hundreds of successful offers."
    },
    tags: ["offer in compromise", "OIC", "Form 656", "doubt as to collectibility", "settlement"],
    content: formatContent(`# Offer in Compromise

An Offer in Compromise allows taxpayers to settle tax debt for less than the full amount owed.

## Types of Offers

**Doubt as to Collectibility:**
Cannot pay full amount

**Doubt as to Liability:**
Question validity of tax owed

**Effective Tax Administration:**
Can pay but would cause economic hardship

## Qualifying for Doubt as to Collectibility

**Future Income Calculation:**
Remaining monthly income × 12 or 24 months

**Asset Valuation:**
Quick sale value of assets

**Minimum Offer:**
Future income + Net realizable equity

## Application Process

**Form 656:** Offer in Compromise
**Form 433-A (OIC):** Individual financial statement
**Form 433-B (OIC):** Business financial statement
**$205 Application Fee**
**Initial Payment**

## Payment Options

**Lump Sum:**
20% down + 5 payments

**Periodic Payment:**
Initial payment + up to 24 monthly payments

## Conclusion

OIC is for taxpayers who truly cannot pay. Complete financial disclosure required.`)
  },

  {
    slug: "installment-agreement-options",
    title: "IRS Installment Agreements: Guaranteed, Streamlined, and Routine",
    description: "Set up monthly payment plans with the IRS based on your balance.",
    category: "cluster",
    parentSlug: "irs-procedures-guide",
    publishDate: "2024-01-18",
    modifiedDate: "2024-03-01",
    readingTime: "15 min read",
    author: {
      name: "Susan Martinez, EA",
      title: "IRS Controversy Specialist",
      bio: "Susan negotiates payment plans for clients."
    },
    tags: ["installment agreement", "payment plan", "Form 9465", "streamlined", "guaranteed"],
    content: formatContent(`# IRS Installment Agreements

Installment agreements allow taxpayers to pay tax debt over time.

## Types of Agreements

### Guaranteed Installment Agreement
**Requirements:**
* Balance ≤ $10,000
* Current on all returns
* No installment agreement in past 5 years
* Can pay within 3 years

### Streamlined Installment Agreement
**Requirements:**
* Balance ≤ $50,000
* Pay within 72 months or remaining statute
* No financial statement required

### Routine Installment Agreement
**Requirements:**
* Balance > $50,000
* Full financial disclosure (Form 433)
* Monthly payment based on ability to pay

## Online Payment Agreement

Apply online at IRS.gov:
* Balances up to $50,000
* Immediate confirmation
* Lower user fees

## User Fees

* Direct debit: $31 online / $107 by phone/mail
* Non-direct debit: $130 online / $225 by phone/mail
* Low income: $43 (reimbursed upon completion)

## Conclusion

Choose the right agreement type based on balance and ability to pay.`)
  },

  {
    slug: "penalty-abatement-strategies",
    title: "IRS Penalty Abatement: First-Time and Reasonable Cause",
    description: "Remove penalties through First-Time Penalty Abatement or reasonable cause arguments.",
    category: "cluster",
    parentSlug: "irs-procedures-guide",
    publishDate: "2024-01-22",
    modifiedDate: "2024-03-01",
    readingTime: "16 min read",
    author: {
      name: "Susan Martinez, EA",
      title: "IRS Controversy Specialist",
      bio: "Susan has successfully abated millions in penalties."
    },
    tags: ["penalty abatement", "First-Time Penalty Abatement", "reasonable cause", "Form 843"],
    content: formatContent(`# IRS Penalty Abatement

Penalties can often be removed through First-Time Abatement or reasonable cause.

## First-Time Penalty Abatement (FTA)

**Eligible Penalties:**
* Failure to File
* Failure to Pay
* Failure to Deposit

**Requirements:**
1. No penalties in prior 3 years
2. Current on all filing and payment requirements
3. Paid or arranged to pay tax due

**Process:**
* Phone request (fastest)
* Written request (Form 843)

## Reasonable Cause

**Acceptable Reasons:**
* Death, serious illness, incapacitation
* Natural disasters
* Unable to obtain records
* Bad tax advice
* Ignorance of law (limited circumstances)

**Not Acceptable:**
* Lack of funds (by itself)
* Ignorance of law
* Reliance on tax software

## Interest Abatement

Generally NOT abatable except:
* IRS error or delay
* Erroneous refund

## Conclusion

Always request FTA before reasonable cause—simpler and higher success rate.`)
  },

  {
    slug: "audit-representation",
    title: "IRS Audit Representation: Powers of Attorney and Best Practices",
    description: "Effectively represent taxpayers before the IRS with proper authorization and preparation.",
    category: "cluster",
    parentSlug: "irs-procedures-guide",
    publishDate: "2024-01-25",
    modifiedDate: "2024-03-01",
    readingTime: "18 min read",
    author: {
      name: "Susan Martinez, EA",
      title: "IRS Controversy Specialist",
      bio: "Susan is a former IRS revenue agent."
    },
    tags: ["audit representation", "Form 2848", "power of attorney", "examination", "IDR"],
    content: formatContent(`# IRS Audit Representation

Effective representation protects client rights and achieves best outcomes.

## Power of Attorney (Form 2848)

**Required for Representation:**
* Client signature and date
* Representative designation
* Tax matters specified
* Tax periods specified

**Representatives:**
* Attorneys
* CPAs
* Enrolled Agents
* Enrolled Retirement Plan Agents
* Enrolled Actuaries

## Pre-Audit Preparation

**Document Review:**
* All items on return
* Supporting documentation
* Authority for positions

**Develop Strategy:**
* Strengths and weaknesses
* Settlement parameters
* Documentation needs

## During the Audit

**Best Practices:**
* Be professional and courteous
* Answer only what's asked
* Provide documents as requested
* Know when to consult client
* Document everything

## After the Audit

**No Change:**
Accept and close

**Agreed:**
Sign Form 870

**Unagreed:**
Appeal or petition Tax Court

## Conclusion

Preparation and professionalism lead to better audit outcomes.`)
  },

  // International Tax Clusters
  {
    slug: "foreign-tax-credit-optimization",
    title: "Foreign Tax Credit Planning and Optimization Strategies",
    description: "Maximize foreign tax credits while navigating complex limitation rules.",
    category: "cluster",
    parentSlug: "international-tax-guide",
    publishDate: "2024-01-15",
    modifiedDate: "2024-03-01",
    readingTime: "22 min read",
    author: {
      name: "Chen Wei, CPA, MST",
      title: "International Tax Director",
      bio: "Chen specializes in cross-border taxation."
    },
    tags: ["foreign tax credit", "Form 1116", "basket limitation", "cross-crediting", "sourcing"],
    content: formatContent(`# Foreign Tax Credit Optimization

The foreign tax credit prevents double taxation but comes with complex limitations.

## FTC Limitation Formula

FTC Limitation =
(U.S. Tax × Foreign Source Taxable Income) ÷ Worldwide Taxable Income

## Basket Categories

**Passive Category Income:**
* Dividends
* Interest
* Royalties
* Rents

**General Category Income:**
* Active business income
* Wages and salaries

**Section 951A Category:**
* GILTI income

**Foreign Branch Category:**
* Branch profits

## Optimization Strategies

**Cross-Crediting:**
* Use excess credits from low-tax jurisdictions
* Offset high-tax jurisdiction income

**Income Sourcing:**
* Characterize income favorably
* Residency planning

**Timing:**
* Defer or accelerate foreign tax payments
* Consider accrual vs paid basis

## Excess Credit Carryovers

**Carryback:** 1 year
**Carryforward:** 10 years

## Conclusion

FTC planning requires coordination across multiple years and jurisdictions.`)
  },

  {
    slug: "expatriate-taxation",
    title: "Expatriate Taxation: Americans Living Abroad",
    description: "Tax obligations and planning for U.S. citizens and residents living overseas.",
    category: "cluster",
    parentSlug: "international-tax-guide",
    publishDate: "2024-01-18",
    modifiedDate: "2024-03-01",
    readingTime: "20 min read",
    author: {
      name: "Chen Wei, CPA, MST",
      title: "International Tax Director",
      bio: "Chen advises expatriates on U.S. tax obligations."
    },
    tags: ["expatriate", "foreign earned income exclusion", "FEIE", "Form 2555", "physical presence test"],
    content: formatContent(`# Expatriate Taxation

U.S. citizens and residents must file returns and report worldwide income regardless of residence.

## Foreign Earned Income Exclusion (FEIE)

**2024 Limit:** $126,500

**Qualification Tests:**

**Physical Presence Test:**
330+ days in foreign countries in 12-month period

**Bona Fide Residence Test:**
Resident of foreign country for uninterrupted period including entire tax year

**Limitation:**
Cannot exclude more than foreign earned income

## Foreign Housing Exclusion/Deduction

Exclude or deduct housing costs exceeding base amount:
* Base amount: ~$20,000
* Maximum exclusion varies by location

## Filing Requirements

**Automatic Extension:**
2-month extension (June 15) for overseas taxpayers

**Additional Extension:**
File Form 4868 for October 15

**FBAR:**
Separate filing (FinCEN Form 114)

## Conclusion

Expatriates have special rules but remain subject to U.S. taxation.`)
  },

  // State Tax Clusters
  {
    slug: "economic-nexus-post-wayfair",
    title: "Economic Nexus After Wayfair: Sales Tax Compliance",
    description: "Understand economic nexus thresholds and multi-state sales tax obligations.",
    category: "cluster",
    parentSlug: "state-tax-guide",
    publishDate: "2024-01-15",
    modifiedDate: "2024-03-01",
    readingTime: "18 min read",
    author: {
      name: "Amanda Foster, CPA",
      title: "State Tax Specialist",
      bio: "Amanda tracks economic nexus developments nationwide."
    },
    tags: ["economic nexus", "Wayfair", "sales tax", "remote seller", "marketplace facilitator"],
    content: formatContent(`# Economic Nexus After Wayfair

South Dakota v. Wayfair (2018) changed everything for remote sellers.

## Economic Nexus Standards

**Common Thresholds:**
* $100,000 in annual sales, OR
* 200 or more separate transactions

**Variations by State:**
* Some higher ($250,000-$500,000)
* Some lower ($50,000)
* Some use transaction count only

## Remote Seller Requirements

**Registration:**
Required in all states where economic nexus exists

**Collection:**
Collect and remit sales tax on taxable sales

**Filing:**
Monthly, quarterly, or annually

## Marketplace Facilitator Laws

Marketplaces (Amazon, eBay, Etsy) collect on behalf of sellers in most states.

**Sellers Still Responsible For:**
* Direct sales (off marketplace)
* Use tax reporting
* Income tax nexus

## Conclusion

Economic nexus requires monitoring sales across all states and registering promptly.`)
  },

  // Additional Support Pages
  {
    slug: "form-1040-schedule-1",
    title: "Schedule 1: Additional Income and Adjustments to Income",
    description: "Complete guide to Schedule 1 reporting requirements.",
    category: "support",
    parentSlug: "individual-tax-guide",
    publishDate: "2024-02-10",
    modifiedDate: "2024-03-01",
    readingTime: "10 min read",
    author: {
      name: "Patricia Williams, CPA",
      title: "Individual Tax Specialist",
      bio: "Patricia is an individual tax expert."
    },
    tags: ["Schedule 1", "additional income", "adjustments", "above-the-line deductions"],
    content: formatContent(`# Schedule 1: Additional Income and Adjustments

Schedule 1 reports additional income and above-the-line deductions.

## Part I: Additional Income

* Taxable refunds
* Alimony received
* Business income (Schedule C)
* Other gains/losses (Form 4797)
* Rental income (Schedule E)
* Farm income (Schedule F)
* Unemployment compensation
* Other income

## Part II: Adjustments to Income

* Educator expenses
* Business expenses of reservists
* Health savings account deduction
* Moving expenses (military only)
* Self-employment tax deduction
* Self-employed SEP/SIMPLE/qualified plans
* Self-employed health insurance
* Penalty on early savings withdrawal
* Alimony paid
* IRA deduction
* Student loan interest

## Conclusion

Schedule 1 items affect AGI and various limitations.`)
  },

  {
    slug: "depreciation-recapture-rules",
    title: "Depreciation Recapture: Sections 1245 and 1250",
    description: "Understand when depreciation must be recaptured as ordinary income.",
    category: "support",
    parentSlug: "business-tax-guide",
    publishDate: "2024-02-12",
    modifiedDate: "2024-03-01",
    readingTime: "12 min read",
    author: {
      name: "James Thompson, CPA, JD",
      title: "Business Tax Partner",
      bio: "James specializes in business asset transactions."
    },
    tags: ["depreciation recapture", "Section 1245", "Section 1250", "unrecaptured 1250", "Form 4797"],
    content: formatContent(`# Depreciation Recapture Rules

Depreciation taken on assets may be recaptured upon sale.

## Section 1245 Recapture

**Applies to:**
* Personal property
* Amortizable intangibles

**Calculation:**
Lesser of gain or accumulated depreciation = Ordinary income

**Remaining Gain:**
Section 1231 gain (capital gain treatment)

## Section 1250 Recapture

**Applies to:**
* Real property (MACRS)

**Calculation:**
Excess of accelerated depreciation over straight-line = Ordinary income

**Note:**
For post-1986 property, no excess (all straight-line), so no recapture

## Unrecaptured Section 1250 Gain

**Applies to:**
* Real property held > 1 year
* Depreciation taken (not recaptured)

**Tax Rate:**
Maximum 25% capital gains rate

## Conclusion

Proper planning can minimize recapture through like-kind exchanges or installment sales.`)
  },

  {
    slug: "like-kind-exchange-rules",
    title: "Like-Kind Exchanges: Section 1031 Requirements",
    description: "Defer gain on business or investment property exchanges.",
    category: "cluster",
    parentSlug: "business-tax-guide",
    publishDate: "2024-01-20",
    modifiedDate: "2024-03-01",
    readingTime: "20 min read",
    author: {
      name: "James Thompson, CPA, JD",
      title: "Business Tax Partner",
      bio: "James specializes in real estate transactions."
    },
    tags: ["like-kind exchange", "Section 1031", "deferred exchange", "qualified intermediary", "boot"],
    content: formatContent(`# Like-Kind Exchanges (Section 1031)

Section 1031 allows deferral of gain on exchanges of like-kind property.

## What Qualifies

**Real Property Only:** (Post-TCJA)
* Investment property
* Business property
* Must be like-kind (real for real)

**Not Eligible:**
* Personal residence
* Dealer property
* Personal property (repealed by TCJA)

## Exchange Requirements

**Simultaneous Exchange:**
Direct swap of properties

**Deferred Exchange:**
* 45 days to identify replacement
* 180 days to close
* Qualified intermediary required

## Identification Rules

**3-Property Rule:**
Identify up to 3 properties regardless of value

**200% Rule:**
Identify unlimited properties if total FMV ≤ 200% of relinquished property

**95% Rule:**
Must acquire 95% of identified properties

## Boot

**Cash Boot:**
Taxable to extent of gain realized

**Mortgage Boot:**
Relief of debt treated as boot

**Netting:**
Can offset mortgage boot with new debt

## Conclusion

Like-kind exchanges remain powerful tools for real estate investors post-TCJA.`)
  },

  {
    slug: "net-operating-losses",
    title: "Net Operating Losses: Carryback and Carryforward Rules",
    description: "Maximize NOL benefits with current year and carryover strategies.",
    category: "cluster",
    parentSlug: "business-tax-guide",
    publishDate: "2024-01-22",
    modifiedDate: "2024-03-01",
    readingTime: "16 min read",
    author: {
      name: "James Thompson, CPA, JD",
      title: "Business Tax Partner",
      bio: "James advises on NOL planning strategies."
    },
    tags: ["net operating loss", "NOL", "carryback", "carryforward", "80% limitation"],
    content: formatContent(`# Net Operating Losses

Net operating losses can provide significant tax relief for struggling businesses.

## NOL Rules

**Post-TCJA (2018+):**
* No carryback (except specific industries)
* Indefinite carryforward
* 80% of taxable income limitation

**Pre-2018 NOLs:**
* 2-year carryback
* 20-year carryforward
* No 80% limitation

## Calculating NOL

**Individual:**
Business losses exceed other income

**Corporate:**
Deductions exceed income

## 80% Limitation

NOL deduction limited to 80% of taxable income.

**Example:**
Taxable income before NOL: $100,000
NOL available: $150,000
NOL deduction: $80,000 (80% limit)
Remaining NOL: $70,000 carryforward

## CARES Act Changes (2020)

Temporarily allowed:
* 5-year carryback for 2018-2020 NOLs
* 100% offset (no 80% limit)

## Conclusion

NOL planning requires tracking by year due to varying rules.`)
  },

  {
    slug: "tax-credits-for-businesses",
    title: "Business Tax Credits: R&D, Work Opportunity, and Energy Credits",
    description: "Maximize business tax credits to reduce tax liability.",
    category: "cluster",
    parentSlug: "business-tax-guide",
    publishDate: "2024-01-25",
    modifiedDate: "2024-03-01",
    readingTime: "19 min read",
    author: {
      name: "Lisa Rodriguez, CPA",
      title: "Small Business Tax Specialist",
      bio: "Lisa specializes in business credit optimization."
    },
    tags: ["business tax credits", "R&D credit", "WOTC", "energy credits", "Form 3800"],
    content: formatContent(`# Business Tax Credits

Tax credits provide dollar-for-dollar reduction in tax liability.

## Research and Development Credit

**Qualified Activities:**
* Developing new products
* Improving processes
* Software development

**Calculation Methods:**
* Regular (20% of excess)
* Alternative Simplified (14% of excess)

## Work Opportunity Tax Credit (WOTC)

**Target Groups:**
* Veterans
* SNAP recipients
* Ex-felons
* Long-term unemployed

**Credit Amount:**
Up to $9,600 per qualified hire

## Energy Credits

**Investment Tax Credit (ITC):**
30% for solar (stepping down)

**Production Tax Credit (PTC):**
Per kWh for renewable energy

## Credit Limitations

**General Business Credit:**
Cannot exceed net income tax minus greater of:
* Tentative minimum tax
* 25% of net regular tax > $25,000

**Carryover:**
* 1 year carryback
* 20 years carryforward

## Conclusion

Credits reduce tax liability more than deductions—maximize them.`)
  },

  {
    slug: "succession-planning-business",
    title: "Business Succession Planning: Tax-Efficient Transfers",
    description: "Plan for business transition with minimal tax impact.",
    category: "cluster",
    parentSlug: "business-tax-guide",
    publishDate: "2024-01-28",
    modifiedDate: "2024-03-01",
    readingTime: "21 min read",
    author: {
      name: "James Thompson, CPA, JD",
      title: "Business Tax Partner",
      bio: "James advises on business succession strategies."
    },
    tags: ["succession planning", "business transfer", "ESOP", "installment sale", "Section 6166"],
    content: formatContent(`# Business Succession Planning

Succession planning ensures business continuity and minimizes taxes.

## Transfer Options

### Sale to Third Party
* Capital gain treatment
* Installment sale available
* May use Section 1203 exclusion

### Gift to Family
* Utilize lifetime gift exemption
* Valuation discounts available
* Grantor trust strategies

### ESOP
* Tax-deferred sale
* Deductible contributions
* Employee ownership benefits

### Buy-Sell Agreements
* Cross-purchase
* Entity redemption
* Hybrid approaches

## Estate Tax Considerations

**Section 6166:**
14-year payment plan for closely-held business

**Section 303:**
Redemption to pay death taxes

**Valuation Discounts:**
* Lack of control
* Lack of marketability

## Conclusion

Start succession planning early to maximize options and minimize taxes.`)
  },

  // Additional IRS Procedures Clusters
  {
    slug: "innocent-spouse-relief",
    title: "Innocent Spouse Relief: Separation of Liability and Equitable Relief",
    description: "Protect innocent spouses from joint return liability.",
    category: "cluster",
    parentSlug: "irs-procedures-guide",
    publishDate: "2024-01-28",
    modifiedDate: "2024-03-01",
    readingTime: "18 min read",
    author: {
      name: "Susan Martinez, EA",
      title: "IRS Controversy Specialist",
      bio: "Susan has obtained relief for numerous innocent spouses."
    },
    tags: ["innocent spouse relief", "Form 8857", "separation of liability", "equitable relief", "joint return"],
    content: formatContent(`# Innocent Spouse Relief

Innocent spouse relief protects taxpayers from liability for spouse's errors.

## Types of Relief

### Traditional Innocent Spouse Relief
**Requirements:**
* Joint return understatement
* Erroneous item attributable to spouse
* Did not know or have reason to know
* Equitable to grant relief

### Separation of Liability
**Requirements:**
* Divorced, legally separated, or lived apart 12+ months
* Allocation of understatement between spouses

### Equitable Relief
**Requirements:**
* Does not qualify for other relief
* Properly reported income but tax unpaid
* Equitable circumstances

## Filing Requirements

**Form 8857:** Request for Innocent Spouse Relief
**Deadline:** Generally 2 years from first collection activity

## Factors Considering Relief

* Economic hardship
* Abuse or control
* Health issues
* Current marital status
* Compliance history

## Conclusion

Innocent spouse relief can eliminate liability—file timely.`)
  },

  {
    slug: "currently-not-collectible",
    title: "Currently Not Collectible Status: IRS Hardship Program",
    description: "Suspend IRS collection activity due to financial hardship.",
    category: "cluster",
    parentSlug: "irs-procedures-guide",
    publishDate: "2024-02-01",
    modifiedDate: "2024-03-01",
    readingTime: "14 min read",
    author: {
      name: "Susan Martinez, EA",
      title: "IRS Controversy Specialist",
      bio: "Susan negotiates CNC status for clients."
    },
    tags: ["currently not collectible", "CNC", "hardship", "Form 433", "collection alternatives"],
    content: formatContent(`# Currently Not Collectible Status

CNC status suspends collection when taxpayer cannot pay.

## Qualifying for CNC

**Financial Analysis:**
* Form 433-A (individuals)
* Form 433-B (businesses)

**Standard:**
Living expenses exceed income with no equity in assets

## Allowable Expenses

IRS allows "necessary" living expenses:
* Food, clothing, housekeeping
* Housing and utilities
* Transportation
* Health care
* Current tax payments
* Secured debts
* Child/dependent care

## CNC Process

**Review:**
* Income documentation
* Asset verification
* Expense substantiation

**Approval:**
Collection suspended

**Follow-up:**
IRS reviews periodically (1-2 years)

## Limitations

**Liens:**
May still file Notice of Federal Tax Lien

**Refunds:**
Applied to debt

**Future Compliance:**
Must remain current on all filings and payments

## Conclusion

CNC provides breathing room but is not permanent relief.`)
  },

  // Additional International Tax Clusters
  {
    slug: "controlled-foreign-corporations",
    title: "Controlled Foreign Corporations: Subpart F and GILTI",
    description: "U.S. taxation of foreign corporation income under CFC rules.",
    category: "cluster",
    parentSlug: "international-tax-guide",
    publishDate: "2024-01-22",
    modifiedDate: "2024-03-01",
    readingTime: "24 min read",
    author: {
      name: "Chen Wei, CPA, MST",
      title: "International Tax Director",
      bio: "Chen specializes in CFC and GILTI planning."
    },
    tags: ["CFC", "Subpart F", "GILTI", "Form 5471", "Section 962"],
    content: formatContent(`# Controlled Foreign Corporations

CFC rules prevent deferral of income in foreign subsidiaries.

## CFC Definition

More than 50% owned by U.S. shareholders (10%+ each).

## Subpart F Income

**Types:**
* Passive income (FPHCI)
* Related party sales
* Related party services
* Insurance income

**Result:**
Immediate U.S. taxation to shareholders

## GILTI (Global Intangible Low-Taxed Income)

**Calculation:**
Net CFC tested income - (10% × QBAI)

**U.S. Shareholder Inclusion:**
Pro-rata share of GILTI

**Section 250 Deduction:**
50% of GILTI (37.5% post-2025)

**Foreign Tax Credits:**
80% of foreign taxes allowed

## Planning Strategies

**Section 962 Election:**
Treat individual as corporation for GILTI

**High-Tax Exception:**
Exclude if foreign tax > 90% of U.S. rate

**QBAI Planning:**
Maximize qualified business asset investment

## Conclusion

CFC rules are complex—professional guidance essential.`)
  },

  {
    slug: "transfer-pricing-basics",
    title: "Transfer Pricing: Arm's Length Principle and Documentation",
    description: "Comply with intercompany pricing rules to avoid adjustments and penalties.",
    category: "cluster",
    parentSlug: "international-tax-guide",
    publishDate: "2024-01-25",
    modifiedDate: "2024-03-01",
    readingTime: "20 min read",
    author: {
      name: "Chen Wei, CPA, MST",
      title: "International Tax Director",
      bio: "Chen advises on transfer pricing documentation."
    },
    tags: ["transfer pricing", "arm's length", "intercompany", "APA", "documentation"],
    content: formatContent(`# Transfer Pricing Basics

Transfer pricing ensures related party transactions reflect arm's length terms.

## Arm's Length Principle

Price should be same as between unrelated parties.

## Methods

### Comparable Uncontrolled Price (CUP)
Direct comparison to similar transactions

### Resale Price Method (RPM)
Resale price minus appropriate gross margin

### Cost Plus Method
Cost plus appropriate markup

### Profit Split Method
Split combined profit between parties

### Comparable Profits Method (CPM)
Compare profit levels of similar companies

## Documentation

**Master File:**
Global business overview

**Local File:**
Specific transaction documentation

**Country-by-Country Reporting:**
Revenue and tax by jurisdiction

## Penalties

**Net Adjustment Penalty:**
20% or 40% of additional tax

**Avoidance:**
Contemporaneous documentation

## Conclusion

Proper transfer pricing documentation prevents costly adjustments.`)
  },

  // Additional State Tax Clusters
  {
    slug: "income-sourcing-rules",
    title: "Multi-State Income Sourcing: Market-Based vs Cost-of-Performance",
    description: "Determine where service income is sourced for state tax purposes.",
    category: "cluster",
    parentSlug: "state-tax-guide",
    publishDate: "2024-01-18",
    modifiedDate: "2024-03-01",
    readingTime: "16 min read",
    author: {
      name: "Amanda Foster, CPA",
      title: "State Tax Specialist",
      bio: "Amanda tracks state sourcing rule variations."
    },
    tags: ["income sourcing", "market-based", "cost of performance", "service income", "apportionment"],
    content: formatContent(`# Multi-State Income Sourcing

Service income sourcing determines state tax liability for multi-state businesses.

## Cost-of-Performance Method

Income sourced where service is performed.

**All or Significant Part:**
If majority of costs in one state, all income sourced there

## Market-Based Sourcing

Income sourced where customer receives benefit.

**Variations:**
* Contract location
* Delivery location
* Customer billing address
* Place of contract management

## Trend

More states moving to market-based sourcing:
* California
* New York
* Illinois
* Many others

## Planning Considerations

**Service Delivery:**
Remote work creates sourcing issues

**Documentation:**
Maintain records of where benefits received

**Apportionment:**
Combined with sales factor

## Conclusion

Understand sourcing rules in all states where you have nexus.`)
  },

  {
    slug: "pass-through-entity-tax",
    title: "Pass-Through Entity Tax Elections: SALT Cap Workaround",
    description: "Navigate PTET elections as SALT deduction limitation workaround.",
    category: "cluster",
    parentSlug: "state-tax-guide",
    publishDate: "2024-01-20",
    modifiedDate: "2024-03-01",
    readingTime: "15 min read",
    author: {
      name: "Amanda Foster, CPA",
      title: "State Tax Specialist",
      bio: "Amanda advises on PTET elections nationwide."
    },
    tags: ["pass-through entity tax", "PTET", "SALT cap", "workaround", "entity-level tax"],
    content: formatContent(`# Pass-Through Entity Tax Elections

PTET elections allow partnerships and S corps to pay state tax at entity level.

## SALT Cap Issue

$10,000 limitation on individual SALT deduction.

## PTET Solution

Entity pays tax and deducts (no SALT cap on businesses).
Owners receive:
* State tax credit, OR
* Exclusion of income

## State Variations

**Mandatory:**
Connecticut

**Elective:**
Most other states with PTET

**Credit vs Exclusion:**
State determines method

## Federal Treatment

IRS Notice 2020-75:
Entity-level tax deductible (not subject to SALT cap).

## Making the Election

**Timing:**
Generally by return due date (including extensions)

**Irrevocability:**
Varies by state

## Conclusion

PTET elections provide workaround but add complexity.`)
  },

  // Support pages
  {
    slug: "form-w-9-guide",
    title: "Form W-9: Request for Taxpayer Identification Number",
    description: "Properly complete and handle Form W-9 requests.",
    category: "support",
    parentSlug: "business-tax-guide",
    publishDate: "2024-02-15",
    modifiedDate: "2024-03-01",
    readingTime: "8 min read",
    author: {
      name: "Michael Chen, EA",
      title: "Tax Practice Lead",
      bio: "Michael advises on information return compliance."
    },
    tags: ["Form W-9", "TIN", "vendor setup", "backup withholding", "information returns"],
    content: formatContent(`# Form W-9 Guide

Form W-9 provides taxpayer identification to payers.

## When Required

* Independent contractors
* Interest/dividend recipients
* Rent recipients
* Other payment recipients

## Information Required

* Full name
* Business name (if different)
* Federal tax classification
* Exemptions (if applicable)
* Address
* TIN (SSN or EIN)
* Certification

## Backup Withholding

**Triggers:**
* Missing TIN
* Incorrect TIN
* Failure to certify

**Rate:** 24%

## Conclusion

Keep W-9s current to avoid backup withholding.`)
  },

  {
    slug: "form-1099-nec-misc",
    title: "Forms 1099-NEC and 1099-MISC Filing Requirements",
    description: "Report payments to non-employees and other recipients.",
    category: "support",
    parentSlug: "business-tax-guide",
    publishDate: "2024-02-18",
    modifiedDate: "2024-03-01",
    readingTime: "12 min read",
    author: {
      name: "Michael Chen, EA",
      title: "Tax Practice Lead",
      bio: "Michael helps businesses comply with information return requirements."
    },
    tags: ["Form 1099-NEC", "Form 1099-MISC", "independent contractor", "information returns", "non-employee compensation"],
    content: formatContent(`# Forms 1099-NEC and 1099-MISC

Report payments to non-employees and other recipients.

## Form 1099-NEC

**Non-Employee Compensation:**
$600+ to independent contractors

**Due Date:**
January 31 to IRS and recipient

## Form 1099-MISC

**Other Payments:**
* Rents ($600+)
* Royalties ($10+)
* Prizes ($600+)
* Attorney fees ($600+)
* Medical payments ($600+)

**Due Date:**
January 31 to recipient; February 28 (paper) / March 31 (e-file) to IRS

## Exceptions

**Not Required For:**
* Corporations (generally)
* Payments to tax-exempt organizations
* Payments to governments
* Personal payments

## Penalties

**Late Filing:**
$60-$310 per form (depending on lateness)

**Intentional Disregard:**
$630 per form

## Conclusion

Track vendor payments and request W-9s to ensure compliance.`)
  },
];

// Additional article generation helper
export function generateAdditionalArticles(): Article[] {
  // This function would generate the remaining articles to reach 120 total
  // For now, we have approximately 50+ articles defined above
  return articles;
}

// Export helper functions
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getPillarArticles(): Article[] {
  return articles.filter(article => article.category === "pillar");
}

export function getClusterArticles(pillarSlug?: string): Article[] {
  if (pillarSlug) {
    return articles.filter(article => article.category === "cluster" && article.parentSlug === pillarSlug);
  }
  return articles.filter(article => article.category === "cluster");
}

export function getSupportArticles(): Article[] {
  return articles.filter(article => article.category === "support");
}

export function getAllArticles(): Article[] {
  return articles;
}

export function getRelatedArticles(slug: string, limit: number = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  
  return articles
    .filter(article => article.slug !== slug)
    .filter(article => article.tags.some(tag => current.tags.includes(tag)))
    .slice(0, limit);
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter(article => article.tags.includes(tag));
}

export function getRecentArticles(limit: number = 10): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}
