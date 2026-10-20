import { ProjectCaseStudy, ExperienceItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Shivani Kapoor',
  title: 'Full Stack Software Engineer',
  tagline: 'Building High-Concurrency Backend Engines & High-Performance Interactive Web Apps',
  bio: 'Full Stack Software Engineer with deep hands-on expertise building production systems with Node.js, TypeScript, React, PostgreSQL, Redis, and WebGL. Experienced in architecting distributed backend services, real-time WebSockets, time-series telemetry pipelines, and interactive canvas-based web applications.',
  email: 'shivanikapoor5588@gmail.com',
  workEmail: 'shivani.kapoor@oodles.io',
  location: 'Gurugram, India',
  availability: 'Actively interviewing for Full Stack, Backend, or Frontend roles',
  linkedin: 'https://www.linkedin.com/in/shivani-kapoor-0aa99a244',
  github: 'https://github.com/shivaniKapoor-Dev',
  resumeUrl: '#resume',
};

export const HIGHLIGHT_STATS = [
  { label: 'Production Projects Delivered', value: '4+', detail: 'Enterprise & gaming web apps' },
  { label: 'API Response Latency', value: '<80ms', detail: 'Optimized with Redis caching' },
  { label: 'Interactive Canvas Rendering', value: '60 FPS', detail: 'WebGL & Pixi.js acceleration' },
  { label: 'Automated Job Ingestion', value: '10k+', detail: 'Telemetry & real-time scrapers' },
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'safari-word-hunt-backend',
    title: 'Safari World Hunt — Distributed Game Backend & Simulation Engine',
    subtitle: 'High-throughput Node.js/TypeScript backend powering real-time multiplayer map exploration and simulation rules.',
    category: 'backend',
    featured: true,
    role: 'Backend Architect & Core Engineer',
    timeline: '2024 - Present',
    githubUrl: 'https://github.com/shivaniKapoor-Dev',
    summary: 'Architected and built the complete backend infrastructure for a high-concurrency game platform featuring procedural map generation, versioned live environments, Redis rate-limiting, and automated map simulation verification.',
    problemStatement: 'The game required instant letter-path validation, synchronized multi-ecosystem assets, and strict map generation integrity while maintaining sub-100ms latency under high player concurrency.',
    architectureOverview: 'Event-driven Express 5 architecture built with TypeScript, Prisma ORM, PostgreSQL connection pools, BullMQ distributed background queues, and Redis for rate-limiting and session caching. Integrated AWS S3 for secure asset streaming and Pino for structured logging.',
    codeSnippetPreview: {
      filename: 'simulation-engine.ts',
      language: 'typescript',
      code: `// Deterministic path verification & rate-limited map engine
export async function validateConnectedPath(
  mapId: string, 
  userPath: Coordinate[], 
  sessionToken: string
): Promise<ValidationResult> {
  // Check Redis distributed lock to prevent double-claim race conditions
  const lock = await redisClient.set(\`lock:session:\${sessionToken}\`, "1", "NX", "EX", 5);
  if (!lock) throw new RateLimitException("Concurrent request rejected");

  const liveMap = await prisma.mapVersion.findUnique({
    where: { id: mapId, status: "LIVE" },
    include: { nodes: true, challenges: true }
  });

  return runPathSimulation(liveMap, userPath);
}`
    },
    techStack: [
      { name: 'Node.js & TypeScript', category: 'backend', why: 'Provides type safety across domain models and high I/O throughput.' },
      { name: 'PostgreSQL & Prisma ORM', category: 'database', why: 'Strict relational integrity for map node graphs and versioned releases.' },
      { name: 'Redis & BullMQ', category: 'backend', why: 'Offloaded heavy map layout calculations and enforced distributed rate limits.' },
      { name: 'Socket.io', category: 'backend', why: 'Real-time two-way synchronization of player progression and live game state.' },
      { name: 'AWS S3', category: 'devops', why: 'Scalable cloud storage for dynamic ecosystem audio and visual assets.' },
      { name: 'Zod & Helmet', category: 'backend', why: 'Runtime payload schema validation and enterprise-grade HTTP security headers.' }
    ],
    keyChallenges: [
      {
        title: 'Preventing Race Conditions on Live Game Sessions',
        problem: 'Simultaneous path-completion submissions from the client caused duplicate scoring and inconsistencies in map progression.',
        solution: 'Implemented atomic distributed locks using Redis (NX/EX flags) combined with PostgreSQL transaction isolation levels.',
        engineeringTakeaway: 'Always treat incoming high-frequency game events as idempotent transactions.'
      },
      {
        title: 'Map Layout Simulation & Zero-Downtime Releases',
        problem: 'Publishing updated game maps risked breaking ongoing player sessions if layout coordinates differed.',
        solution: 'Created an immutable versioning system (Draft -> Simulation Test -> LIVE -> Legacy Published Sync) with automated CI map simulation test suites.',
        engineeringTakeaway: 'Decoupling active runtime state from published schema versions guarantees zero downtime.'
      }
    ],
    metrics: [
      { label: 'API Response Time', value: '<75ms', description: 'Average response time across game endpoints' },
      { label: 'Test Suite Reliability', value: '100%', description: 'Comprehensive map simulation test coverage' },
      { label: 'Concurrent Operations', value: '5,000+', description: 'Stress-tested with zero deadlocks' }
    ],
    keyTakeaways: [
      'Designed end-to-end RESTful APIs with Swagger/OpenAPI documentation',
      'Configured BullMQ workers for background data seeding and layout compilation',
      'Enforced single-live-map safety constraints at the database level'
    ],
    interviewQnA: [
      {
        question: 'Why did you choose PostgreSQL with Prisma instead of a NoSQL database for the game map?',
        answer: 'Game maps are relational graphs: themes own maps, maps have versions, and versions contain interconnected letter nodes with spatial coordinates. Prisma provided strict type safety between backend TypeScript and database schemas, while PostgreSQL transactions ensured map versions could be published atomically without orphaned nodes.'
      },
      {
        question: 'How do you handle heavy background tasks like map generation without blocking user requests?',
        answer: 'I separated map generation from request-response cycles using BullMQ and Redis. When an admin requests a new procedural map, the API returns a job ID immediately. A worker process computes layout matrices and seeds the database asynchronously, alerting the client via WebSockets upon completion.'
      }
    ]
  },
  {
    id: 'safari-admin-studio',
    title: 'Safari Studio — WebGL & Canvas Interactive Map Admin Panel',
    subtitle: 'Next-gen admin control platform built with React 19, Pixi.js 2D WebGL canvas, and interactive node workflow graphs.',
    category: 'frontend',
    featured: true,
    role: 'Lead Frontend Developer',
    timeline: '2024 - Present',
    liveUrl: 'https://admin-panel-frontend-nine-wine.vercel.app',
    githubUrl: 'https://github.com/shivaniKapoor-Dev',
    summary: 'Engineered a high-performance visual editor allowing game designers to inspect, manipulate, and publish hundreds of interconnected game nodes in real time on a 60 FPS 2D WebGL canvas.',
    problemStatement: 'Standard DOM rendering struggled when visualizing complex map graphs with hundreds of animated letter nodes, resulting in UI freezes and dropped frames during panning and zooming.',
    architectureOverview: 'Built with React 19 and Vite for instant build cycles. Integrated Pixi.js for WebGL GPU-accelerated rendering of the map grid, alongside @xyflow/react for node logic workflows. Managed global selection state and version comparisons via Redux Toolkit and TanStack Table.',
    codeSnippetPreview: {
      filename: 'MapCanvasViewport.tsx',
      language: 'typescript',
      code: `// High-performance Pixi.js WebGL viewport with instantaneous hit-testing
export const MapCanvasViewport = ({ mapNodes, onSelectNode }: ViewportProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pixiApp = usePixiRenderer(containerRef);

  useEffect(() => {
    if (!pixiApp) return;
    // Batch render nodes directly on GPU stage
    const stage = pixiApp.stage;
    stage.removeChildren();

    mapNodes.forEach(node => {
      const sprite = createInteractiveNodeSprite(node, () => onSelectNode(node.id));
      stage.addChild(sprite);
    });
  }, [mapNodes, pixiApp]);

  return <div ref={containerRef} className="w-full h-[650px] relative overflow-hidden" />;
};`
    },
    techStack: [
      { name: 'React 19 & Vite', category: 'frontend', why: 'State-of-the-art reactivity, sub-second HMR, and optimal bundle size.' },
      { name: 'Pixi.js (WebGL)', category: 'frontend', why: 'GPU-accelerated 2D rendering for hundreds of interactive nodes at a solid 60 FPS.' },
      { name: '@xyflow/react', category: 'frontend', why: 'Extensible node-based visual workflow editor for path connections.' },
      { name: 'Redux Toolkit', category: 'frontend', why: 'Predictable state management for complex editor undo/redo and node selections.' },
      { name: 'TanStack Table v8', category: 'frontend', why: 'Headless, virtualization-ready table for filtering thousands of game assets.' },
      { name: 'Tailwind CSS', category: 'frontend', why: 'Modern utility-first styling with dark mode and crisp glassmorphic aesthetics.' }
    ],
    keyChallenges: [
      {
        title: 'DOM Bottlenecks When Rendering Large Graphs',
        problem: 'Rendering 500+ DOM elements with SVGs caused UI stuttering and frame drops below 20 FPS during pan/zoom.',
        solution: 'Migrated the map canvas layer to Pixi.js WebGL rendering, keeping only metadata panels and control sidebars in standard React DOM.',
        engineeringTakeaway: 'Offload high-volume visual objects to GPU canvases while keeping state synchronized with React.'
      },
      {
        title: 'Instant Node Selection with Complex Reactive State',
        problem: 'Clicking a node triggered full-tree re-renders, causing noticeable click latency.',
        solution: 'Optimized Redux state with memoized Reselect selectors and decoupled the hover/selection interaction loop from high-level state.',
        engineeringTakeaway: 'Granular selector subscriptions prevent unnecessary component re-evaluations.'
      }
    ],
    metrics: [
      { label: 'Canvas Frame Rate', value: '60 FPS', description: 'Smooth GPU-accelerated panning and zooming' },
      { label: 'Node Selection Latency', value: '<16ms', description: 'Instantaneous UI feedback on node clicks' },
      { label: 'Bundle Efficiency', value: '45% smaller', description: 'Optimized tree-shaking and dynamic code-splitting' }
    ],
    keyTakeaways: [
      'Deployed live production builds to Vercel with automated preview pipelines',
      'Implemented full role-based access control (RBAC) for designers and admins',
      'Engineered interactive path simulators to preview game rules before publishing'
    ],
    interviewQnA: [
      {
        question: 'Why did you use Pixi.js instead of standard SVG or Canvas 2D context?',
        answer: 'Standard SVG introduces heavy DOM nodes that drag down the browser layout engine as element count scales. HTML5 Canvas 2D works on the CPU. Pixi.js leverages WebGL to batch-draw sprites directly on the GPU, allowing smooth 60 FPS pan/zoom interactions and custom shader effects without frame drops.'
      },
      {
        question: 'How do you keep Pixi.js synchronized with React state?',
        answer: 'I wrap the Pixi viewport in a custom React hook that manages the Pixi Application lifecycle. React props supply the immutable map data; whenever props change, the hook updates the WebGL display list incrementally while firing React callback dispatches on user click events.'
      }
    ]
  },
  {
    id: 'aqua-advisor-telemetry',
    title: 'AquaAdvisor — Industrial IoT Telemetry & Security Platform',
    subtitle: 'Enterprise telemetry management platform with TimescaleDB hypertables and HashiCorp Vault field-level encryption.',
    category: 'fullstack',
    featured: true,
    role: 'Full Stack Engineer',
    timeline: '2024',
    githubUrl: 'https://github.com/shivaniKapoor-Dev',
    summary: 'Engineered an enterprise IoT telemetry ingestion system supporting industrial protocols (MQTT, Modbus, OPC-UA) with TimescaleDB time-series storage, automated continuous aggregation, and cryptographic erasure compliance.',
    problemStatement: 'High-frequency sensor telemetry created database write saturation, and regulatory compliance required strict cryptographic erasure of sensitive asset IP addresses and credentials.',
    architectureOverview: 'Built with NestJS and TypeScript for a clean modular backend architecture, paired with Next.js for dashboard visualization. Leveraged TimescaleDB Hypertables with automated chunk compression and data retention policies. Integrated HashiCorp Vault Transit Engine for field-level encryption.',
    codeSnippetPreview: {
      filename: 'vault-transit-crypto.service.ts',
      language: 'typescript',
      code: `// Field-level encryption using HashiCorp Vault Transit Secrets Engine
@Injectable()
export class VaultEncryptionService {
  constructor(private readonly vaultClient: VaultClient) {}

  async encryptSensitiveField(plaintext: string): Promise<string> {
    const base64Data = Buffer.from(plaintext).toString('base64');
    const response = await this.vaultClient.write(
      'transit/encrypt/asset-telemetry-key', 
      { plaintext: base64Data }
    );
    return response.data.ciphertext; // e.g. "vault:v1:..."
  }

  // Cryptographic erasure: Revoking the key immediately invalidates all associated ciphertexts
}`
    },
    techStack: [
      { name: 'NestJS & TypeScript', category: 'backend', why: 'Enterprise architectural patterns (Dependency Injection, modular providers, guards).' },
      { name: 'Next.js & React', category: 'frontend', why: 'Server-side rendered telemetry analytics and real-time visualization widgets.' },
      { name: 'TimescaleDB (PostgreSQL)', category: 'database', why: 'Hypertable partitioning, continuous aggregates (cagg), and timeseries compression.' },
      { name: 'HashiCorp Vault', category: 'devops', why: 'Transit Secrets Engine for field-level encryption and zero-knowledge cryptographic erasure.' },
      { name: 'MQTT / OPC-UA / Modbus', category: 'architecture', why: 'Industrial protocol connectors for continuous machine telemetry ingestion.' },
      { name: 'Mongoose & MongoDB', category: 'database', why: 'Flexible schema storage for unstructured IoT sensor configuration metadata.' }
    ],
    keyChallenges: [
      {
        title: 'High-Volume Timeseries Ingestion & Aggregation',
        problem: 'Raw sensor queries over millions of telemetry points led to slow dashboard load times and high CPU utilization.',
        solution: 'Implemented TimescaleDB continuous aggregates (cagg) with automated materialized views refreshed on a rolling schedule.',
        engineeringTakeaway: 'Pre-aggregating timeseries data at the database layer reduces dashboard read latency by 90%.'
      },
      {
        title: 'Cryptographic Erasure Compliance Without Table Re-writes',
        problem: 'GDPR compliance required permanent deletion of sensitive IP addresses without expensive DELETE operations on billions of rows.',
        solution: 'Encrypted sensitive fields using distinct keys per tenant via HashiCorp Vault. Deleting the Vault key renders historical ciphertext cryptographically unrecoverable instantly.',
        engineeringTakeaway: 'Cryptographic erasure provides guaranteed privacy compliance without degrading timeseries storage performance.'
      }
    ],
    metrics: [
      { label: 'Telemetry Throughput', value: '10,000/sec', description: 'Peak ingested sensor data points per second' },
      { label: 'Query Speedup', value: '12x Faster', description: 'Via TimescaleDB continuous aggregates' },
      { label: 'Data Compression', value: '85% Savings', description: 'Automated hypertable chunk compression' }
    ],
    keyTakeaways: [
      'Wrote automated telemetry archival and retention scripts with dry-run support',
      'Configured Docker Compose environments for local development with HashiCorp Vault and TimescaleDB',
      'Implemented WebSocket streaming for live industrial sensor monitoring'
    ],
    interviewQnA: [
      {
        question: 'What is cryptographic erasure and why did you use it with HashiCorp Vault?',
        answer: 'Cryptographic erasure involves encrypting sensitive data with a key managed by a secure Key Management System (HashiCorp Vault). To "delete" the data across millions of immutable timeseries rows, you destroy the encryption key. Without the key, the ciphertext cannot be decrypted, achieving instantaneous compliance without executing expensive database mutations.'
      },
      {
        question: 'How does TimescaleDB differ from standard PostgreSQL for IoT?',
        answer: 'TimescaleDB partitions large tables into "hypertables" across time and space. Each chunk is an independent PostgreSQL table. This keeps B-tree indexes small enough to fit into RAM, preventing write performance degradation as datasets grow into hundreds of gigabytes.'
      }
    ]
  },
  {
    id: 'talentflow-ai-job-scraper',
    title: 'TalentFlow — AI Job Intelligence & Semantic Matcher',
    subtitle: 'Automated job discovery engine with anti-bot bypass, semantic embeddings, and candidate-job matching.',
    category: 'ai-automation',
    featured: false,
    role: 'Full Stack & Automation Developer',
    timeline: '2024',
    githubUrl: 'https://github.com/shivaniKapoor-Dev/JobScrapper_Talent_Flow',
    summary: 'Built an end-to-end job intelligence system that automatically scrapes, processes, and matches developer job listings using NLP embeddings, Puppeteer automation, and MongoDB.',
    problemStatement: 'Manual job hunting is time-consuming, and keyword matching frequently misses relevant roles that use different terminology.',
    architectureOverview: 'Full stack architecture comprising a Node.js scraper service utilizing Puppeteer stealth wrappers, paired with Python/NLP semantic embedding models to score resume-to-job similarity. Backed by MongoDB and Redis cache.',
    codeSnippetPreview: {
      filename: 'scraper-pipeline.js',
      language: 'javascript',
      code: `// Resilient scraping with stealth fingerprinting and Redis caching
async function scrapeJobBoard(keyword, location) {
  const cacheKey = \`jobs:\${keyword}:\${location}\`;
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  const browser = await puppeteerRealBrowser.connect({
    headless: "auto",
    fingerprint: true,
  });

  const page = await browser.newPage();
  await page.setUserAgent(getRotatedUserAgent());
  const jobs = await extractStructuredJobCards(page);
  
  await redis.set(cacheKey, JSON.stringify(jobs), 'EX', 3600);
  return jobs;
}`
    },
    techStack: [
      { name: 'Node.js & Express', category: 'backend', why: 'Lightweight asynchronous API service for managing scrapers and alerts.' },
      { name: 'Puppeteer Real-Browser', category: 'architecture', why: 'Evades bot detection mechanisms and solves JavaScript-rendered SPAs.' },
      { name: 'Python & NLP', category: 'architecture', why: 'Vector embeddings and semantic cosine similarity scoring.' },
      { name: 'MongoDB', category: 'database', why: 'Document model accommodates variable job schemas from different job boards.' },
      { name: 'Redis', category: 'backend', why: 'Caches query results to prevent redundant web scraping operations.' }
    ],
    keyChallenges: [
      {
        title: 'Bypassing Anti-Bot Rate Limiting',
        problem: 'Frequent requests triggered Cloudflare CAPTCHAs and temporary IP blocks.',
        solution: 'Implemented browser fingerprint randomization, human-like mouse movement delays, and request throttling with backoff retry algorithms.',
        engineeringTakeaway: 'Robust scrapers require stochastic timing and dynamic browser signatures.'
      }
    ],
    metrics: [
      { label: 'Scraped Jobs Processed', value: '15,000+', description: 'Clean structured postings indexed' },
      { label: 'Matching Accuracy', value: '88%', description: 'Semantic relevance over plain keyword search' },
      { label: 'Automation Savings', value: '10+ hrs/wk', description: 'Automated daily search & candidate alert workflow' }
    ],
    keyTakeaways: [
      'Engineered an intuitive frontend dashboard to review matched listings',
      'Configured automated cron jobs with email notifications via Nodemailer',
      'Applied text cleaning and tokenization pipelines for NLP evaluation'
    ],
    interviewQnA: [
      {
        question: 'Why did you use semantic embeddings instead of simple keyword matching?',
        answer: 'Keyword matching fails with synonyms—for example, searching for "Full Stack" might miss a posting titled "Web Application Engineer" that requires Node.js and React. By converting descriptions and resumes into high-dimensional vector embeddings, we calculate mathematical cosine similarity, capturing contextual meaning rather than exact word overlap.'
      }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend & System Architecture',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & Express 5', level: 'Advanced', context: 'High-throughput APIs, middleware architecture, routing' },
      { name: 'TypeScript', level: 'Advanced', context: 'Strict typing, DTOs, generics, clean interface design' },
      { name: 'NestJS', level: 'Proficient', context: 'Dependency injection, modular architectures, microservices' },
      { name: 'RESTful API Design', level: 'Advanced', context: 'OpenAPI/Swagger documentation, versioned endpoints' },
      { name: 'WebSockets (Socket.io)', level: 'Advanced', context: 'Real-time state synchronization, game events' },
      { name: 'BullMQ & Queues', level: 'Proficient', context: 'Distributed job processing, background workers' }
    ]
  },
  {
    title: 'Frontend & Interactive Canvas',
    iconName: 'Layout',
    skills: [
      { name: 'React 19 & Next.js', level: 'Advanced', context: 'Hooks, custom state pipelines, SSR, modular architecture' },
      { name: 'Pixi.js (2D WebGL)', level: 'Advanced', context: 'GPU-accelerated canvas rendering, interactive node maps' },
      { name: '@xyflow/react', level: 'Proficient', context: 'Interactive node graph editors, workflow canvases' },
      { name: 'Redux Toolkit', level: 'Advanced', context: 'Predictable global state, slices, memoized selectors' },
      { name: 'Tailwind CSS', level: 'Advanced', context: 'Responsive designs, modern UI, dark mode styling' },
      { name: 'TanStack Table v8', level: 'Proficient', context: 'Headless data virtualization and complex data grids' }
    ]
  },
  {
    title: 'Databases & Performance Caching',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL & Prisma ORM', level: 'Advanced', context: 'Relational modeling, migrations, connection pooling' },
      { name: 'Redis', level: 'Advanced', context: 'Distributed locks, rate limiting, session store, caching' },
      { name: 'TimescaleDB', level: 'Proficient', context: 'Hypertables, continuous aggregates, timeseries retention' },
      { name: 'MongoDB & Mongoose', level: 'Proficient', context: 'NoSQL document modeling, aggregation pipelines' }
    ]
  },
  {
    title: 'DevOps, Security & Tools',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'HashiCorp Vault', level: 'Proficient', context: 'Transit secrets engine, field-level encryption' },
      { name: 'Docker & Docker Compose', level: 'Proficient', context: 'Multi-container local services, reproducible environments' },
      { name: 'AWS (S3 & Cloud services)', level: 'Proficient', context: 'Cloud storage, asset streaming, CDN integration' },
      { name: 'Git & GitLab / GitHub', level: 'Advanced', context: 'Branching workflows, code reviews, CI/CD pipelines' },
      { name: 'Postman & Swagger', level: 'Advanced', context: 'API testing, automated endpoint collections' },
      { name: 'Puppeteer / Web Automation', level: 'Proficient', context: 'Browser automation, stealth scraping, data pipelines' }
    ]
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Oodles Technologies',
    role: 'Software Engineer (Full Stack)',
    period: '2024 - Present',
    location: 'Gurugram, India',
    workType: 'Full-time',
    description: 'Core software engineer developing high-scale backend services, gaming platforms, and interactive canvas admin systems.',
    achievements: [
      'Architected and implemented core backend services for Safari World Hunt, managing map layouts, simulation tests, and live releases using Node.js, Prisma, and PostgreSQL.',
      'Built a high-performance interactive map editing studio using React 19, Pixi.js (WebGL), and Redux Toolkit, achieving 60 FPS graphics rendering.',
      'Implemented distributed caching and rate-limiting using Redis and BullMQ, reducing average API response times to under 80ms.',
      'Developed industrial IoT telemetry ingestion pipelines with TimescaleDB continuous aggregates and HashiCorp Vault cryptographic security.'
    ],
    techUsed: ['Node.js', 'TypeScript', 'React 19', 'Pixi.js', 'PostgreSQL', 'Prisma', 'Redis', 'NestJS', 'Docker', 'AWS S3']
  }
];

export const INTERVIEW_CHEATSHEET = [
  {
    topic: 'System Design: How do you design high-throughput APIs?',
    points: [
      'Apply Redis caching for read-heavy operations with deterministic TTLs and cache invalidation hooks.',
      'Offload intensive background tasks (e.g. map generation, data indexing) to BullMQ asynchronous queues.',
      'Use connection pooling (pg-pool / Prisma connection limits) to prevent database exhaustion under spike loads.',
      'Implement Redis rate-limiting (e.g. rate-limit-redis) to protect services against malicious traffic spikes.'
    ]
  },
  {
    topic: 'Frontend Performance: Rendering 1,000+ interactive elements smoothly',
    points: [
      'Avoid bloating the DOM: offload heavy spatial visual objects to WebGL (Pixi.js) canvas layers.',
      'Keep React state shallow and use memoized selectors (Reselect / Redux Toolkit) to isolate renders.',
      'Virtualize data tables with TanStack Table to render only elements currently in the viewport.',
      'Use Web Workers or requestAnimationFrame for computationally expensive physics or path calculations.'
    ]
  },
  {
    topic: 'Data Integrity & Security: Race conditions & cryptographic protection',
    points: [
      'Use Redis atomic locks (SET NX EX) to serialize critical operations across concurrent requests.',
      'Rely on database transactions (PostgreSQL Serializable/Repeatable Read) for multi-table updates.',
      'Implement field-level encryption using HashiCorp Vault Transit engine for sensitive PII.',
      'Ensure zero-knowledge cryptographic erasure by deleting encryption keys rather than mutating immutable logs.'
    ]
  }
];
