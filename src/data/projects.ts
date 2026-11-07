export type Category = 'All' | 'AI Projects' | 'Web Development' | 'Full Stack';

export interface Project {
  title: string;
  badge?: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  demo?: string;
  github?: string;
  categories: Category[];
}

export const projects: Project[] = [
  {
    title: 'SAME-H — Proof-Bound Document Watermarking',
    badge: '📜 Patent Published',
    description:
      'Published Indian patent application (IN202641127062 A1). Co-invented a document-security system that traces a leaked copy back to the exact authorized access.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    tech: ['Circom', 'SnarkJS (Groth16)', 'Ethereum Smart Contracts', 'Node.js', 'Express', 'PostgreSQL', 'React', 'TypeScript'],
    features: [
      'One Poseidon hash binds the ZK access proof, watermark key and on-chain authorization record.',
      'Leak forensics traces a recovered file to its authorized access, with 5 explicit verdicts.',
      'AES-256-GCM at rest, Argon2id auth, on-chain replay/expiry checks and org-scoped RBAC.',
    ],
    categories: ['Full Stack'],
  },
  {
    title: 'Smart Autofill Assistant — Browser Extension',
    badge: '🚀 Live on Edge · 68 Users',
    description:
      'Privacy-first Chromium browser extension that eliminates repetitive job application forms by detecting fields dynamically and autofilling on demand from a locally encrypted vault.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    tech: ['TypeScript', 'Manifest V3', 'Web Crypto API', 'React', 'Vite', 'PDF.js'],
    features: [
      'Local AES-GCM encrypted vault powered by the browser native Web Crypto API.',
      'Zero server data egress with strict Content Security Policy and no remote code execution.',
      'Built-in security filter blocking passwords, OTPs, identity numbers, and payment inputs.',
    ],
    demo: 'https://microsoftedge.microsoft.com/addons/detail/aelekoeomibgicicopockedkjdcdlmoo',
    github: 'https://github.com/santhoshh005/Smart-Autofill-Assistant',
    categories: ['Web Development', 'Full Stack'],
  },
  {
    title: 'RoundsAI — Oncology Ward Copilot',
    badge: 'Health-a-thon 2026 · Top 150',
    description:
      'Clinical copilot built with a doctor from Victoria Hospital, BMCRI. Transcribes bedside voice dictation on-device with zero cloud audio leakage and automates CTCAE v5.0 toxicity grading.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tech: ['Next.js 15', 'FastAPI', 'Python', 'Gemini 2.5 Flash', 'Whisper AI', 'Supabase', 'TypeScript'],
    features: [
      'On-device Whisper STT (base-int8) with zero cloud audio leakage and $0 API cost.',
      'Multimodal Gemini Vision OCR extracting bedside lab printouts and CBC reports.',
      'Deterministic phonetic normalizer handling 120+ chemotherapy regimens and abbreviations.',
    ],
    demo: 'https://rounds-ai-umber.vercel.app/',
    github: 'https://github.com/santhoshh005/Rounds_AI',
    categories: ['AI Projects', 'Full Stack', 'Web Development'],
  },
  {
    title: 'PRPilot — Autonomous AI GitHub App',
    badge: 'Live GitHub App',
    description:
      'GitHub App that reviews pull requests in 1–2 minutes: unified diff chunking, security flaw detection and structured inline reviews with risk scores.',
    image:
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Gemini 3.8 Flash', 'Octokit', 'Vitest', 'Playwright'],
    features: [
      'Cryptographic HMAC-SHA256 GitHub webhook verification with delivery deduplication.',
      'Hybrid processing with Vercel waitUntil and scheduled GitHub Actions cron fallback.',
      'Robust security model with Supabase Row-Level Security and atomic rate limiters.',
    ],
    github: 'https://github.com/santhoshh005/PR_Pilot',
    categories: ['AI Projects', 'Full Stack', 'Web Development'],
  },
  {
    title: 'PayPilot AI — Conversational Commerce',
    badge: 'Agentic AI · Payments',
    description:
      'Autonomous conversational commerce platform where shoppers find products through natural language, compare technical specs side-by-side, and complete checkout through Razorpay.',
    image:
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80',
    tech: ['React 18', 'Express', 'TypeScript', 'Prisma ORM', 'Supabase', 'Gemini 2.5 Flash', 'Razorpay'],
    features: [
      'Gemini function calling powering natural language catalog search and comparisons.',
      'Razorpay Standard Checkout with HMAC-SHA256 signature verification and webhooks.',
      'Comprehensive automated test suite with 176/176 tests passing across 13 suites.',
    ],
    demo: 'https://paypilot-ai-two.vercel.app',
    github: 'https://github.com/santhoshh005/PayPilot_AI',
    categories: ['AI Projects', 'Full Stack', 'Web Development'],
  },
  {
    title: 'SkyGuard AI — Weather Anomaly Detection',
    badge: 'SIH 2026 · MoES / IMD',
    description:
      'Automated anomaly detection, telemetry correction, and sensor health platform engineered for the Indian Meteorological Department (IMD) Automatic Weather Stations.',
    image:
      'https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?auto=format&fit=crop&w=1200&q=80',
    tech: ['FastAPI', 'Python', 'React 18', 'Scikit-Learn', 'Isolation Forest', 'Autoencoder', 'Docker'],
    features: [
      '3-Channel ML Fusion model (QC + Isolation Forest + Autoencoder) with 94.94% F1-score.',
      'TreeSHAP explainability translating high-dimensional sensor deviations into plain English.',
      'Low-latency real-time WebSocket push stream (<2s) with fault simulation test harness.',
    ],
    github: 'https://github.com/santhoshh005/Sky_Guard_AI',
    categories: ['AI Projects', 'Full Stack'],
  },
];

// Some skill names differ from how a project lists the technology.
const SKILL_ALIASES: Record<string, string[]> = {
  'Gemini API': ['gemini'],
  SQL: ['sql', 'postgresql'],
  Autoencoders: ['autoencoder'],
  WebSockets: ['websocket', 'websockets'],
};

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** True when a project's title, tech stack or highlights mention the skill as a whole word. */
export const projectMatchesTech = (project: Project, skill: string) => {
  const haystack = [project.title, ...project.tech, ...project.features].join(' | ').toLowerCase();
  const keys = SKILL_ALIASES[skill] ?? [skill.toLowerCase()];
  return keys.some((key) => new RegExp(`(^|[^a-z0-9])${escapeRegExp(key)}([^a-z0-9]|$)`).test(haystack));
};
