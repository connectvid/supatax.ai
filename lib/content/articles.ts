export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: "pillar" | "cluster" | "support";
  parentSlug?: string; // For cluster/support pages
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

export const articles: Article[] = [
  // === PILLAR PAGES (6) ===
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
    content: `# The Complete Guide to Tax Research Methodology for Practitioners

Effective tax research is the foundation of quality tax practice. Whether you're preparing a complex return, responding to an IRS notice, or advising a client on a transaction, the ability to find, analyze, and apply authoritative tax law is essential. This comprehensive guide covers everything tax professionals need to know about conducting thorough research.

## What Is Tax Research?

Tax research is the systematic investigation of tax laws, regulations, and precedents to answer specific tax questions or support tax positions. Professional tax research involves:

- Identifying the relevant facts and issues
- Locating applicable primary and secondary authorities
- Analyzing how the law applies to the specific situation
- Evaluating the strength of competing authorities
- Documenting conclusions and recommendations

## The Tax Research Process

### Step 1: Gather and Clarify Facts

Before beginning any research, thoroughly understand the factual situation. The same legal provision can have vastly different applications depending on specific facts. Create a fact pattern summary that includes:

- Who is involved (taxpayer, related parties)
- What transactions or events occurred
- When the events took place
- Where the activities occurred
- Why certain decisions were made
- How the transactions were structured

### Step 2: Identify the Issue(s)

Frame clear, specific research questions. Vague questions lead to unfocused research. Instead of asking "Can my client deduct this?" ask "Does IRC § 162(a) permit a business expense deduction for home office expenses when the space is used exclusively for administrative activities but the taxpayer also has a principal place of business?"

### Step 3: Consult Secondary Sources

Begin with secondary sources to gain context and locate primary authorities:

**Tax Treatises and Services**
- BNA Tax Management Portfolios
- CCH AnswerBooks
- Thomson Reuters Checkpoint
- Tax Analysts Tax Notes

**Professional Publications**
- The Tax Adviser (AICPA)
- Journal of Accountancy
- Tax Law Review

**Commercial Tax Services**
- CCH IntelliConnect
- Thomson Reuters Checkpoint
- Bloomberg Tax
- Wolters Kluwer

### Step 4: Locate Primary Authorities

Primary sources are the law itself, listed in order of authority:

**1. Internal Revenue Code**
The Code is the supreme tax authority. Organized by subtitle, chapter, subchapter, part, section, subsection, paragraph, subparagraph, clause, and subclause. Citations follow this hierarchy (e.g., IRC § 162(a)(1)).

**2. Treasury Regulations**
Regulations interpret the Code and carry significant weight:
- Final Regulations: Most authoritative
- Temporary Regulations: Equal weight to final (must expire within 3 years)
- Proposed Regulations: Notice of intent, not binding but persuasive

**3. Case Law**
Court decisions interpret both the Code and regulations:
- Supreme Court: Binding on all courts
- Circuit Courts of Appeals: Binding within their circuits
- Tax Court: Specialized expertise but appealable to circuit courts
- District Courts and Court of Federal Claims: General jurisdiction

**4. IRS Administrative Guidance**
- Revenue Rulings: Official interpretation for general situations
- Revenue Procedures: IRS administrative practices
- Private Letter Rulings: Specific to requesting taxpayer
- Technical Advice Memoranda: Internal guidance on completed transactions
- Chief Counsel Advice: Legal advice to IRS field offices

### Step 5: Analyze and Synthesize

Once you've gathered authorities, analyze them critically:

**For Each Authority:**
- What does it actually say? (Not what you hope it says)
- Is it still good law? (Check citators for negative treatment)
- How does it apply to your facts?
- What's the weight of authority? (Mandatory vs. persuasive)

**Synthesis Considerations:**
- Are there conflicting authorities?
- Is there a split in circuit court opinions?
- How have courts treated similar fact patterns?
- What's the government's litigation position?

### Step 6: Formulate Conclusions

Based on your analysis, reach a conclusion about:
- The most likely correct answer
- Alternative positions with reasonable basis
- The level of confidence in each position
- Recommended course of action

### Step 7: Document Your Research

Proper documentation serves multiple purposes:
- Supports your professional judgment
- Provides a trail for future reference
- Demonstrates due diligence
- Protects against malpractice claims

## Citations and Citation Form

### Internal Revenue Code
Standard citation: IRC § 162(a) or I.R.C. § 162(a)
Full citation: IRC § 162(a) (2024)

### Treasury Regulations
Final: Treas. Reg. § 1.162-1(a)
Temporary: Temp. Treas. Reg. § 1.162-1T
Proposed: Prop. Treas. Reg. § 1.162-1

### Court Cases
Supreme Court: Commissioner v. Groetzinger, 480 U.S. 23 (1987)
Circuit Court: Winn-Dixie Stores, Inc. v. Commissioner, 254 F.3d 737 (11th Cir. 2001)
Tax Court: Estate of Franklin v. Commissioner, 64 T.C. 752 (1975)

### Revenue Rulings and Procedures
Rev. Rul. 99-7, 1999-1 C.B. 361
Rev. Proc. 2023-34, 2023-47 I.R.B. 1317

## Research Databases and Tools

### Commercial Services

**Thomson Reuters Checkpoint**
- Comprehensive primary and secondary sources
- Advanced search capabilities
- Citator checking
- Practice aids and templates

**CCH IntelliConnect**
- CCH explanations and annotations
- Primary sources with editorial content
- State tax materials
- Client letters and practice tools

**Bloomberg Tax**
- Strong international tax coverage
- Daily tax news and analysis
- Portfolio analysis tools

**Wolters Kluwer**  
- CCH AnswerConnect
- State and local tax focus
- Compliance tools

### Free Resources

**IRS.gov**
- Forms and publications
- Revenue rulings and procedures
- Internal Revenue Manual
- Tax maps and topic indexes

**Tax Court**
- Opinions and orders
- Rules of practice and procedure
- Calendar and hearing information

**Google Scholar**
- Federal and state case law
- Legal scholarship
- Free citator features

## Evaluating Authority Weight

### Mandatory vs. Persuasive Authority

**Mandatory Authority:**
- Binding within the same jurisdiction
- Must be followed unless clearly erroneous
- Includes controlling Supreme Court, circuit court, and Tax Court precedent

**Persuasive Authority:**
- Other circuits' decisions
- District court opinions
- State court decisions
- Legal treatises and law reviews
- Administrative guidance

### The Golsen Rule

In Golsen v. Commissioner, 54 T.C. 742 (1970), the Tax Court established that it will follow the precedent of the circuit court to which a case is appealable. This means:
- Tax Court decisions may vary by circuit
- Always check which circuit applies to your client
- Circuit splits create planning opportunities and uncertainties

## Common Research Mistakes

1. **Starting with the answer**: Confirmation bias leads to finding only supporting authorities
2. **Ignoring contrary authority**: Professional ethics require disclosure of contrary authorities
3. **Relying on outdated sources**: Always verify current law status
4. **Overlooking state implications**: Federal research doesn't address state tax consequences
5. **Poor documentation**: Failing to preserve the research trail
6. **Misunderstanding facts**: Applying law to incorrect or incomplete facts

## Professional Standards

Circular 230 § 10.34 establishes standards for written advice:
- Base conclusions on reasonable assumptions
- Consider all relevant facts
- Relate applicable law to facts
- Not rely on unreasonable factual representations

The AICPA Statements on Standards for Tax Services (SSTS) provide additional guidance on:
- Tax return positions (SSTS No. 1)
- Answers to questions on returns (SSTS No. 2)
- Knowledge of error (SSTS No. 6)
- Form and content of advice to taxpayers (SSTS No. 7)

## Advanced Research Strategies

### When Standard Research Fails

Sometimes the research question has no clear answer. In these cases:

1. **Consider private letter ruling**: Request IRS guidance for the specific situation
2. **Analyze analogous areas**: Look to similar but settled areas of law
3. **Review legislative history**: Committee reports and floor debates
4. **Examine administrative practice**: How has IRS treated similar situations?
5. **Consult experts**: Reach out to specialists in the area

### Using Citators

Citators like Shepard's or KeyCite are essential for:
- Verifying current validity of cases
- Finding subsequent history
- Locating citing references
- Identifying overruled or questioned authority

Always check that your primary authorities haven't been:
- Overruled
- Questioned
- Distinguished
- Superseded by statute or regulation

## Conclusion

Mastering tax research methodology is an ongoing process. Tax law changes constantly, and new court decisions regularly shift interpretations. The most effective tax professionals develop research habits that:

- Systematically approach each question
- Rely on authoritative sources
- Consider all relevant facts and competing authorities
- Document findings thoroughly
- Remain current with changes in the law

By following the methodology outlined in this guide, you'll be equipped to handle even the most complex tax research questions with confidence and professional competence.

---

*This guide is for educational purposes and does not constitute tax advice. Consult current authorities and consider client-specific facts before applying any research conclusions.*`
  },
  
  // === CLUSTER PAGES (74) - Sample of key ones ===
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
    content: `# Understanding IRS Primary Authorities

When advising clients or defending tax positions, understanding the hierarchy and weight of tax authorities is crucial. This guide breaks down the primary sources of federal tax law.

## The Hierarchy of Tax Authority

### 1. The Internal Revenue Code

The Internal Revenue Code of 1986, as amended, is the foundation of federal tax law. It represents the statutory authority enacted by Congress and signed by the President.

**Key Characteristics:**
- Supreme authority in federal taxation
- Organized by Title 26 of the U.S. Code
- Amended regularly through legislation
- Interpreted by Treasury, courts, and IRS

**Citation Format:**
- Standard: IRC § 162(a)
- Alternative: I.R.C. § 162(a)
- With year: IRC § 162(a) (2024)

**Research Tips:**
- Always use the most current version
- Check for recent legislation
- Review committee reports for legislative intent
- Cross-reference related sections

### 2. Treasury Regulations

Treasury Regulations provide the official interpretation of the Code and carry substantial weight in tax practice.

**Types of Regulations:**

**Final Regulations**
- Issued after notice and comment
- Most authoritative interpretative guidance
- Binding on taxpayers and IRS

**Temporary Regulations**
- Effective immediately upon issuance
- Must expire within 3 years
- Carry same weight as final regulations

**Proposed Regulations**
- Preview of intended guidance
- Not legally binding
- Reflect government's position

**Citation Format:**
- Final: Treas. Reg. § 1.162-1(a)
- Temporary: Temp. Treas. Reg. § 1.162-1T(a)
- Proposed: Prop. Treas. Reg. § 1.162-1, 89 FR 12345

### 3. Judicial Authority

Federal courts interpret both the Code and regulations, creating binding precedent.

**Supreme Court**
- Highest authority
- Binding on all federal courts
- Limited tax docket

**Circuit Courts of Appeals**
- Binding within their circuits
- Create circuit splits
- Appeals from Tax Court and district courts

**Tax Court**
- Specializes in tax cases
- National jurisdiction
- Small case procedures for under $50,000

**District Courts**
- General jurisdiction
- Jury trials available
- Refund suits only

**Court of Federal Claims**
- Refund jurisdiction
- Judges, no jury
- Different procedural rules

## Understanding Authority Weight

### Binding vs. Persuasive

**Binding Authority Must Be Followed:**
- Supreme Court precedent
- Controlling circuit precedent
- Tax Court precedent (in non-acquiesced areas)

**Persuasive Authority May Be Considered:**
- Other circuits' decisions
- Tax Court memorandum opinions
- State court decisions
- Administrative guidance

### The Golsen Rule

The Tax Court follows the precedent of the circuit to which a case is appealable (Golsen v. Commissioner, 54 T.C. 742 (1970)). This creates:
- Circuit-specific Tax Court precedent
- Strategic forum shopping considerations
- Complex research requirements

## Working with Case Law

### Reading Tax Cases

**Standard Case Structure:**
1. Facts - The relevant circumstances
2. Issue - The question presented
3. Holding - The court's decision
4. Reasoning - Why the court decided this way
5. Disposition - Final outcome

**Key Elements to Analyze:**
- Facts vs. holding ratio
- Precedential value
- Subsequent treatment
- Dissents and concurrences

### Using Citators

Citators track case history and treatment:

**Negative Treatment:**
- Overruled
- Questioned
- Criticized
- Limited
- Distinguished

**Always verify** that your cited case remains good law.

## IRS Administrative Guidance

### Revenue Rulings

Official interpretations applying law to specific fact patterns:
- Binding on IRS
- Persuasive to courts
- Can be revoked or modified

### Revenue Procedures

IRS internal practices and procedures:
- How to comply with tax laws
- Filing and submission procedures
- Automatic changes and relief provisions

### Private Letter Rulings

Responses to specific taxpayer requests:
- Binding only on requesting taxpayer
- Publicly available (redacted)
- Cost: $30,000+ filing fee

### Technical Advice Memoranda

IRS internal guidance on completed transactions:
- Issued to field offices
- Complex technical issues
- Reflects Chief Counsel position

## Practical Application

### Building Authority Chains

Strong positions rely on multiple authorities:

**Example Strong Chain:**
1. IRC § 162(a) - Statutory basis
2. Treas. Reg. § 1.162-1 - Regulatory interpretation
3. Welch v. Helvering, 290 U.S. 111 (1933) - Supreme Court precedent
4. Rev. Rul. 99-7 - IRS acquiescence

**When Authorities Conflict:**
1. Follow binding authority
2. Disclose contrary authority
3. Document your reasoning
4. Consider disclosure requirements

## Common Citation Mistakes

1. **Wrong section numbers**: Code vs. regulations
2. **Outdated versions**: Not checking for amendments
3. **Incorrect reporters**: Wrong volume or page
4. **Missing parallel cites**: Required for some courts
5. **Wrong year**: Tax law changes annually

## Best Practices

1. **Start with the Code**: Always verify statutory language
2. **Check regulations**: Official interpretation is critical
3. **Research case law**: How have courts applied the law?
4. **Verify current status**: Use citators
5. **Document thoroughly**: Preserve your research trail
6. **Consider state law**: Federal research is just the beginning

## Conclusion

Understanding and properly applying tax authorities separates competent practitioners from exceptional ones. By mastering the hierarchy, weight, and citation of authorities, you'll provide better client service while protecting yourself from professional liability.

Remember: Tax research is not about finding support for a desired conclusion—it's about finding the correct answer based on applicable authority.`
  },
  
  // More articles will continue...
  {
    slug: "self-employment-tax-complete-guide",
    title: "Self-Employment Tax: The Complete Guide for 2024",
    description: "Everything you need to know about self-employment tax, including calculations, deductions, and strategies to minimize your tax burden.",
    category: "pillar",
    publishDate: "2024-01-10",
    modifiedDate: "2024-03-01",
    readingTime: "22 min read",
    author: {
      name: "Michael Chen, EA",
      title: "Tax Practice Lead",
      bio: "Michael specializes in small business and self-employed taxation with 15 years of experience preparing complex Schedule C and SE returns."
    },
    tags: ["self-employment tax", "Schedule SE", "Schedule C", "estimated tax", "deductions"],
    content: `# Self-Employment Tax: The Complete Guide for 2024

Self-employment tax catches many new business owners by surprise. Unlike employees who split FICA taxes with their employers, self-employed individuals pay both portions—resulting in a 15.3% tax on net earnings. This comprehensive guide covers everything from calculations to minimization strategies.

## What Is Self-Employment Tax?

Self-employment tax consists of two components:
- **Social Security**: 12.4% on earnings up to the wage base ($168,600 for 2024)
- **Medicare**: 2.9% on all net earnings
- **Additional Medicare**: 0.9% on earnings above thresholds ($200K single, $250K MFJ)

### Who Must Pay?

You're subject to self-employment tax if:
- You carry on a trade or business as a sole proprietor
- You're a member of a partnership (including LLCs taxed as partnerships)
- You're otherwise in business for yourself

Net earnings of $400 or more trigger the requirement to file Schedule SE.

## Calculating Self-Employment Tax

### Step 1: Determine Net Earnings

Start with your business profit from Schedule C, Schedule K-1 (Form 1065), or Schedule F.

**Example:**
- Schedule C net profit: $80,000

### Step 2: Calculate Self-Employment Tax Base

Multiply net earnings by 92.35% to get the amount subject to SE tax.

**Why 92.35%?**
This adjustment accounts for the deductible portion of self-employment tax (explained below).

**Calculation:**
$80,000 × 0.9235 = $73,880

### Step 3: Calculate the Tax

**Social Security portion:**
$73,880 × 12.4% = $9,161.12

**Medicare portion:**
$73,880 × 2.9% = $2,142.52

**Total SE Tax:**
$9,161.12 + $2,142.52 = $11,303.64

### Step 4: Calculate the Deduction

You can deduct the employer-equivalent portion:
$11,303.64 × 50% = $5,651.82

This deduction is taken on Schedule 1 (Form 1040), not as a business expense.

## The 2024 Wage Base Limit

For 2024, the Social Security wage base is $168,600. If you have both W-2 wages and self-employment income:

**Example:**
- W-2 wages: $120,000
- Schedule C profit: $80,000

Only $48,600 of SE income ($168,600 - $120,000) is subject to Social Security tax.

**Calculation:**
- SE base: $73,880
- Social Security taxable: $48,600 × 12.4% = $6,026.40
- Medicare taxable: $73,880 × 2.9% = $2,142.52
- Total SE tax: $8,168.92

## Optional Methods

### Nonfarm Optional Method

If your actual net earnings are low, you may use the optional method to:
- Earn Social Security credits
- Qualify for earned income credit
- Increase refundable credits

**Requirements:**
- Gross nonfarm income: $7,200 or less
- Regular net profit: Less than $6,540
- No prior use of optional method > 5 years

**Calculation:**
Two-thirds of gross income are your deemed net earnings.

### Farm Optional Method

Similar rules apply for farmers with specific thresholds based on farm gross income.

## Minimization Strategies

### 1. S Corporation Election

Converting to S corp status can reduce SE tax liability:

**Before (Sole Proprietor):**
- $150,000 profit × 92.35% = $138,525 base
- SE tax: $21,195

**After (S Corp):**
- Salary: $80,000 (subject to FICA)
- Distribution: $70,000 (not subject to SE tax)
- Payroll tax on salary: $12,240
- **Savings: $8,955**

**Important:** You must pay yourself "reasonable compensation" for services rendered.

### 2. Maximize Deductions

Every dollar of deduction reduces SE tax by approximately 14%:

**Qualified Business Income Deduction (20%)**
- Doesn't reduce SE income base
- But reduces overall tax liability

**Above-the-Line Deductions**
- Self-employed health insurance
- Retirement plan contributions
- Deductible portion of SE tax

### 3. Retirement Plan Contributions

SEP-IRA and Solo 401(k) contributions:
- Reduce taxable income
- Don't reduce SE tax base
- Provide current tax savings

**Example:**
- $100,000 SE income
- $20,000 SEP contribution
- SE tax still based on $100,000
- Income tax on $80,000

### 4. Health Insurance Deduction

Self-employed health insurance premiums are deductible:
- Above-the-line deduction (Schedule 1)
- Doesn't reduce SE tax base
- Available even if you don't itemize

### 5. Hire Your Children

Wages paid to your children under 18:
- Not subject to FICA (if sole proprietorship)
- Deductible business expense
- May be taxed at child's lower rate

## Estimated Tax Payments

Self-employment tax must be paid quarterly along with income tax.

### Safe Harbor Rules

Avoid underpayment penalties by paying:
- 100% of prior year tax (110% if AGI > $150,000), OR
- 90% of current year tax

### Quarterly Due Dates
- Q1: April 15
- Q2: June 15  
- Q3: September 15
- Q4: January 15 (following year)

### Calculation Example

**Projected 2024:**
- SE profit: $100,000
- SE tax base: $92,350
- SE tax: $14,128
- Income tax (22% bracket): ~$15,000
- Total tax: $29,128
- Less withholding: $0
- Required quarterly: $7,282

## Special Situations

### Multiple Businesses

Combine all self-employment income on one Schedule SE:
- Offset losses against profits
- One wage base limit across all activities

### Community Property States

For spouses in community property states:
- Each reports half of community income
- Each files separate Schedule SE

### Ministers and Clergy

Special rules apply:
- Exempt from FICA with Form 4361
- Subject to SE tax on housing allowance
- Complex ministerial tax treatment

### Nonresident Aliens

Generally not subject to SE tax unless covered by totalization agreement.

## Common Mistakes

1. **Missing the deduction**: Forgetting to deduct employer-equivalent portion
2. **Double taxation**: Including SE tax deduction as business expense
3. **Wage base errors**: Not coordinating with W-2 wages
4. **Estimated payment shortfall**: Not accounting for SE tax in quarterly estimates
5. **Optional method confusion**: Using when not beneficial
6. **S corp distributions**: Treating as SE income when properly structured

## Filing Requirements

**Schedule SE:** Required if net earnings ≥ $400
**Schedule C:** Report business income and expenses
**Schedule 1:** Deductible portion of SE tax (Line 15)
**Form 1040:** Carry deductions to AGI

### When to File

Same deadline as Form 1040:
- April 15 (or next business day)
- Extension to October 15 available
- Estimated payments still due April 15, June 15, Sept 15, Jan 15

## Record Keeping

Maintain documentation for:
- All business income
- Deductible expenses
- Estimated tax payments
- Health insurance premiums
- Retirement contributions

**Retention period:** 3 years from filing date (6 years if income understated > 25%)

## Conclusion

Self-employment tax is a significant burden for business owners, but with proper planning, you can minimize the impact. Key strategies include:

1. Consider S corporation structure for higher incomes
2. Maximize legitimate business deductions
3. Make quarterly estimated payments to avoid penalties
4. Take advantage of above-the-line deductions
5. Maintain excellent records

Understanding these rules helps you provide better advice to clients while ensuring compliance with tax law.`
  },
];

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

export function getRelatedArticles(slug: string, limit: number = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  
  return articles
    .filter(article => article.slug !== slug)
    .filter(article => article.tags.some(tag => current.tags.includes(tag)))
    .slice(0, limit);
}
