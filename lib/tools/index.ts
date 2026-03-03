export interface ToolInput {
  id: string;
  label: string;
  type: "text" | "textarea" | "select" | "number" | "email";
  placeholder?: string;
  required: boolean;
  options?: { value: string; label: string }[];
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  category: "research" | "documents" | "calculators" | "communication" | "image";
  inputs: ToolInput[];
  systemPrompt: string;
  exampleOutput?: string;
}

export const tools: Tool[] = [
  {
    id: "tax-research",
    name: "Tax Research Assistant",
    description: "Get AI-powered answers to complex tax questions with IRS citations and authoritative sources.",
    shortDescription: "AI tax research with IRS citations",
    icon: "FileText",
    category: "research",
    inputs: [
      {
        id: "question",
        label: "Your Tax Question",
        type: "textarea",
        placeholder: "e.g., What are the requirements for deducting home office expenses for a partnership?",
        required: true,
      },
      {
        id: "context",
        label: "Additional Context (Optional)",
        type: "textarea",
        placeholder: "Any specific facts or circumstances...",
        required: false,
      },
    ],
    systemPrompt: `You are an expert tax research AI assistant for CPAs and tax professionals. Provide responses with specific IRC sections, Treasury Regulations, IRS Publications, and relevant case law citations. Include practical application for tax professionals.`,
  },

  {
    id: "client-letter",
    name: "Client Letter Generator",
    description: "Generate professional client communications and advisory letters.",
    shortDescription: "Professional client communications",
    icon: "PenTool",
    category: "communication",
    inputs: [
      {
        id: "letterType",
        label: "Letter Type",
        type: "select",
        required: true,
        options: [
          { value: "engagement", label: "Engagement Letter" },
          { value: "advisory", label: "Tax Advisory Letter" },
          { value: "response", label: "Response to Client Inquiry" },
          { value: "planning", label: "Tax Planning Recommendation" },
        ],
      },
      {
        id: "clientName",
        label: "Client Name",
        type: "text",
        placeholder: "e.g., ABC Corporation",
        required: true,
      },
      {
        id: "topic",
        label: "Subject Matter",
        type: "textarea",
        placeholder: "Describe the tax issue or topic...",
        required: true,
      },
    ],
    systemPrompt: `Create professional client letters for accounting firms. Include proper formatting, clear purpose, organized content, specific recommendations, and professional disclaimers.`,
  },

  {
    id: "irs-notice-response",
    name: "IRS Notice Response Generator",
    description: "Generate professional responses to IRS notices and examination correspondence.",
    shortDescription: "Professional IRS response letters",
    icon: "Shield",
    category: "documents",
    inputs: [
      {
        id: "noticeType",
        label: "IRS Notice Type",
        type: "select",
        required: true,
        options: [
          { value: "CP2000", label: "CP2000 - Proposed Changes" },
          { value: "CP501", label: "CP501/502 - Balance Due" },
          { value: "audit", label: "Examination/audit letter" },
        ],
      },
      {
        id: "taxpayerName",
        label: "Taxpayer Name",
        type: "text",
        required: true,
      },
      {
        id: "responsePosition",
        label: "Your Position/Response",
        type: "textarea",
        placeholder: "Explain the factual and legal basis...",
        required: true,
      },
    ],
    systemPrompt: `Create professional IRS response letters with proper formatting, issue-by-issue responses, legal authority citations, and respectful tone.`,
  },

  {
    id: "tax-memo",
    name: "Tax Memo Generator",
    description: "Generate comprehensive tax memorandums with full legal analysis.",
    shortDescription: "Comprehensive tax memorandums",
    icon: "FileText",
    category: "documents",
    inputs: [
      {
        id: "to",
        label: "To",
        type: "text",
        placeholder: "e.g., File",
        required: true,
      },
      {
        id: "re",
        label: "Re: Subject",
        type: "text",
        placeholder: "e.g., Deductibility of...",
        required: true,
      },
      {
        id: "facts",
        label: "Facts",
        type: "textarea",
        placeholder: "Describe relevant facts...",
        required: true,
      },
    ],
    systemPrompt: `Create professional tax memorandums with TO/FROM/DATE/RE header, Facts, Issues, Conclusion, and Analysis sections with proper citations.`,
  },
];

export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id);
}

export function getToolsByCategory(category: Tool["category"]): Tool[] {
  return tools.filter((tool) => tool.category === category);
}
