import { ProjectCaseStudy, ExperienceItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Shivani Kapoor',
  title: 'Full Stack Software Engineer',
  tagline: 'Building High-Concurrency Backend Engines, Scalable MERN Platforms & Interactive Web Apps',
  bio: 'Full Stack Software Engineer with deep hands-on expertise building production systems with Node.js, TypeScript, React, MongoDB, PostgreSQL, Redis, and WebGL. Experienced in architecting distributed backend services, multivendor e-commerce engines, web automation pipelines, and high-performance frontend interfaces.',
  email: 'shivanikapoor5588@gmail.com',
  workEmail: 'shivani.kapoor@oodles.io',
  location: 'Gurugram, India',
  availability: 'Actively interviewing for Full Stack, Backend, or Frontend roles',
  linkedin: 'https://www.linkedin.com/in/shivani-kapoor-0aa99a244',
  github: 'https://github.com/shivaniKapoor-Dev',
  resumeUrl: '#resume',
};

export const HIGHLIGHT_STATS = [
  { label: 'Public Repositories', value: '4+', detail: 'Full-stack MERN & distributed systems' },
  { label: 'API Response Latency', value: '<80ms', detail: 'Optimized queries & indexing' },
  { label: 'Automated Job Ingestion', value: '10k+', detail: 'Headless browser & cron pipelines' },
  { label: 'Interactive Canvas Rendering', value: '60 FPS', detail: 'WebGL & Pixi.js acceleration' },
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'multivendor-ecommerce-platform',
    title: 'Multivendor eCommerce Platform',
    subtitle: 'Full-stack MERN multivendor platform with vendor dashboards, product catalogs, cart, orders, and secure authentication.',
    category: 'fullstack',
    featured: true,
    role: 'Full Stack Developer',
    timeline: '2024 - Present',
    githubUrl: 'https://github.com/shivaniKapoor-Dev/multivendor-ecommerce-platform',
    summary: 'Architected and built a multi-tenant multivendor marketplace allowing independent vendors to manage inventories, process customer orders, and track revenue while providing customers a unified shopping experience with stateful cart synchronization.',
    problemStatement: 'Handling multi-vendor product catalogs with separate vendor permissions, real-time inventory adjustments, and secure role-based multi-user authentication without data leakage across vendors.',
    architectureOverview: 'Full-stack MERN architecture built with Express 5, Node.js, MongoDB (Mongoose 9), and React. Implemented JWT authentication with secure HTTP-only cookies, Multer multi-image uploads, bcrypt password hashing, and atomic MongoDB transactions for order processing.',
    codeSnippetPreview: {
      filename: 'orderController.js',
      language: 'javascript',
      code: `// Atomic order creation & multi-vendor inventory decrement
export const createOrder = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { items, shippingAddress, paymentInfo } = req.body;
    
    // Decrement stock atomically per vendor item
    for (const item of items) {
      const product = await Product.findOneAndUpdate(
        { _id: item.productId, stock: { $gte: item.quantity } },
        { $inc: { stock: -item.quantity } },
        { session, new: true }
      );
      if (!product) throw new Error(\`Insufficient stock for \${item.name}\`);
    }

    const order = await Order.create([{
      user: req.user._id,
      items,
      shippingAddress,
      paymentInfo,
      status: 'Processing'
    }], { session });

    await session.commitTransaction();
    res.status(201).json({ success: true, order: order[0] });
  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({ success: false, message: error.message });
  } finally {
    session.endSession();
  }
};`
    },
    techStack: [
      { name: 'Node.js & Express 5', category: 'backend', why: 'High-throughput RESTful routing and clean modular controller architecture.' },
      { name: 'MongoDB & Mongoose 9', category: 'database', why: 'Document model for dynamic product schemas, variant attributes, and atomic transactions.' },
      { name: 'React & Redux', category: 'frontend', why: 'State management for global shopping cart, user session, and vendor analytics.' },
      { name: 'JWT & Cookies', category: 'architecture', why: 'Stateless role-based authentication separating customers, vendors, and admins.' },
      { name: 'Multer', category: 'backend', why: 'Streamlined multi-file image uploads for product galleries and vendor banners.' },
      { name: 'Tailwind CSS', category: 'frontend', why: 'Responsive vendor control panels and high-conversion shopping storefronts.' }
    ],
    keyChallenges: [
      {
        title: 'Preventing Inventory Overselling During Concurrent Checkouts',
        problem: 'Simultaneous purchase requests for the last available item led to negative inventory levels.',
        solution: 'Implemented atomic MongoDB queries with condition checks ({ stock: { $gte: qty } }) within multi-document transaction sessions.',
        engineeringTakeaway: 'Always validate stock availability atomically at the database write layer rather than relying on application read cache.'
      },
      {
        title: 'Multi-Tenant Vendor Isolation & Security',
        problem: 'Vendors must only view and mutate their own products and order sub-items without accessing other vendors data.',
        solution: 'Engineered authorization middleware that enforces vendor ID scoping on every database query and mutator route.',
        engineeringTakeaway: 'Strict middleware-level tenant validation prevents unauthorized privilege escalation.'
      }
    ],
    metrics: [
      { label: 'Role Segregation', value: '100% Isolated', description: 'Strict customer vs vendor vs admin RBAC' },
      { label: 'Checkout Reliability', value: 'Zero Over-orders', description: 'Enforced via atomic database transactions' },
      { label: 'Image Upload Latency', value: '<250ms', description: 'Optimized with Multer streaming pipeline' }
    ],
    keyTakeaways: [
      'Engineered complete vendor onboarding and product lifecycle management',
      'Implemented robust form validation using express-validator and sanitized inputs',
      'Built responsive checkout workflows with stateful cart persistence'
    ],
    interviewQnA: [
      {
        question: 'How do you handle order fulfillment when a customer buys products from multiple vendors in a single cart?',
        answer: 'I model the checkout with a parent Order containing an array of vendor sub-orders. Each vendor sub-order possesses its own shipping status and payout ledger. When an order is placed, an atomic transaction decrements inventory across all vendor products and notifies each vendor individually via background events.'
      },
      {
        question: 'Why did you choose MongoDB over a relational database for this eCommerce platform?',
        answer: 'Products across diverse categories feature irregular attribute schemas (e.g. clothing has size/color variants, whereas electronics have wattage and tech specs). MongoDB flexible document structure allows storing variable attributes and embedded image galleries without costly database schema migrations.'
      }
    ]
  },
  {
    id: 'jobscrapper-talent-flow',
    title: 'JobScrapper TalentFlow — Upwork Job Tracker & Automation Engine',
    subtitle: 'Full-stack Upwork Job Tracker built with React, Node.js, Express, MongoDB, and Puppeteer with cursor pagination and automated cron controls.',
    category: 'ai-automation',
    featured: true,
    role: 'Full Stack & Automation Developer',
    timeline: '2024 - Present',
    githubUrl: 'https://github.com/shivaniKapoor-Dev/JobScrapper_Talent_Flow',
    summary: 'Engineered an automated job tracking pipeline that scrapes, indexes, and filters Upwork freelance postings in real time. Features automated 24-hour recency filters, cursor-based pagination for high-volume jobs, and start/stop cron scheduler controls.',
    problemStatement: 'Freelancers spend hours manually refreshing job boards. Standard scrapers trigger CAPTCHAs, and high-frequency scraping overwhelms database memory without cursor-based pagination.',
    architectureOverview: 'Full-stack automation architecture consisting of an Express 5 backend with Puppeteer for stealth headless scraping, paired with a React frontend for filtering and live tracking. Uses MongoDB for structured job card indexing and Winston for production observability.',
    codeSnippetPreview: {
      filename: 'scraperCronService.js',
      language: 'javascript',
      code: `// Resilient scraping scheduler with cursor pagination & recency filters
export class JobScraperService {
  static async runHourlySync() {
    const browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-blink-features=AutomationControlled'] 
    });
    
    try {
      const page = await browser.newPage();
      await page.setUserAgent(getRandomUserAgent());
      
      const rawJobs = await this.scrapeRecentPostings(page, { maxAgeHours: 24 });
      
      // Upsert to MongoDB with cursor index to eliminate duplicates
      const bulkOps = rawJobs.map(job => ({
        updateOne: {
          filter: { externalJobId: job.externalJobId },
          update: { $set: job },
          upsert: true
        }
      }));
      
      await JobModel.bulkWrite(bulkOps);
      logger.info(\`Successfully synced \${rawJobs.length} jobs.\`);
    } finally {
      await browser.close();
    }
  }
}`
    },
    techStack: [
      { name: 'Node.js & Express 5', category: 'backend', why: 'Asynchronous event loop for managing non-blocking browser scraper pipelines.' },
      { name: 'Puppeteer', category: 'architecture', why: 'Headless Chrome automation for extracting client-rendered SPA job feeds.' },
      { name: 'MongoDB & Mongoose', category: 'database', why: 'Cursor-based indexed pagination and bulk upsert operations for high-volume jobs.' },
      { name: 'React & Tailwind CSS', category: 'frontend', why: 'Real-time job dashboard with instant search, 24-hour filters, and scheduler controls.' },
      { name: 'Winston Logger', category: 'backend', why: 'Structured logging and failure alert telemetry across background cron executions.' }
    ],
    keyChallenges: [
      {
        title: 'Bypassing Headless Detection & Rate Limits',
        problem: 'Upwork dynamic pages detected automated headless instances, throwing CAPTCHA verification screens.',
        solution: 'Masked navigator.webdriver properties, randomized human-like scrolling intervals, and rotated user agents dynamically.',
        engineeringTakeaway: 'Reliable scrapers require stealth fingerprint spoofing and stochastic execution delays.'
      },
      {
        title: 'Cursor-Based Pagination for High-Volume Listings',
        problem: 'Offset-based pagination (skip/limit) caused severe performance degradation as indexed jobs reached tens of thousands.',
        solution: 'Migrated pagination to cursor-based queries using the indexed _id and postedAt timestamp.',
        engineeringTakeaway: 'Cursor-based pagination maintains O(1) query performance regardless of dataset depth.'
      }
    ],
    metrics: [
      { label: 'Job Listings Indexed', value: '15,000+', description: 'Clean structured postings captured' },
      { label: 'Pagination Speedup', value: '8x Faster', description: 'Via MongoDB cursor-based indexing' },
      { label: 'Manual Time Saved', value: '12+ hrs/wk', description: 'Automated 24/7 background job discovery' }
    ],
    keyTakeaways: [
      'Built custom start/pause/resume cron scheduler controls via API endpoints',
      'Configured 24-hour rolling job recency filters to prioritize fresh opportunities',
      'Implemented bulkWrite upsert pipelines to prevent duplicate records'
    ],
    interviewQnA: [
      {
        question: 'Why did you use cursor-based pagination instead of standard offset pagination?',
        answer: 'With traditional skip and limit, the database must scan through all previous skipped rows before returning results, degrading from O(1) to O(N). Cursor pagination uses a deterministic index comparison (e.g. _id < lastSeenId), allowing the database to jump directly to the target record via B-tree index in constant time.'
      },
      {
        question: 'How do you ensure scraper failures dont crash the backend application?',
        answer: 'I isolated scraping jobs in isolated asynchronous worker wrappers with comprehensive try/catch/finally blocks ensuring browser.close() is always invoked to prevent memory leaks. Failures are captured by Winston logger without interrupting the primary Express server.'
      }
    ]
  },
  {
    id: 'employee-management-system',
    title: 'Employee Management System (EMS)',
    subtitle: 'A full-stack Employee Management System built using the MERN stack with role-based authentication, department management, and rate limiting.',
    category: 'fullstack',
    featured: true,
    role: 'Full Stack Developer',
    timeline: '2024 - Present',
    githubUrl: 'https://github.com/shivaniKapoor-Dev/Employee-Management-System',
    summary: 'Built an enterprise internal management system featuring multi-tiered Role-Based Access Control (Admin vs Employee), employee record CRUD, department restructuring, attendance monitoring, and API security rate limiting.',
    problemStatement: 'Organizations need centralized employee records with strict data privacy so employees can view only their personal profile and salary records, while managers can manage departments without authorization loopholes.',
    architectureOverview: 'Full-stack MERN platform built with Express 5, MongoDB, Node.js, and React. Secured with JWT tokens, express-rate-limit to mitigate brute-force attacks, express-validator for robust DTO payload inspection, and Nodemailer for automated employee onboarding emails.',
    codeSnippetPreview: {
      filename: 'authMiddleware.js',
      language: 'javascript',
      code: `// Multi-tier Role-Based Access Control (RBAC) middleware
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: \`Role (\${req.user?.role || 'Guest'}) is not authorized to access this resource\`
      });
    }
    next();
  };
};`
    },
    techStack: [
      { name: 'Node.js & Express 5', category: 'backend', why: 'Fast asynchronous request pipeline and layered middleware authorization.' },
      { name: 'MongoDB & Mongoose 9', category: 'database', why: 'Referenced relational schema modeling between employees, departments, and payroll.' },
      { name: 'React', category: 'frontend', why: 'Interactive admin tables, employee profiles, and department hierarchy views.' },
      { name: 'JWT & BcryptJS', category: 'architecture', why: 'Cryptographic token generation and salted password hashing.' },
      { name: 'express-rate-limit', category: 'backend', why: 'Guards authentication endpoints against credential-stuffing and DDoS spikes.' },
      { name: 'express-validator', category: 'backend', why: 'Validates and sanitizes all incoming DTO requests prior to database operations.' }
    ],
    keyChallenges: [
      {
        title: 'Cascading Updates Upon Department Deletion',
        problem: 'Deleting or renaming a department left orphaned employee foreign keys across the database.',
        solution: 'Implemented Mongoose pre-remove middleware hooks that reassign employees to an unassigned holding pool or block deletion if active members exist.',
        engineeringTakeaway: 'Always enforce referential integrity rules at the application schema layer when using document stores.'
      },
      {
        title: 'Preventing Brute-Force Authentication Attacks',
        problem: 'Public login routes were susceptible to high-frequency password-guessing scripts.',
        solution: 'Configured express-rate-limit with sliding window thresholds (max 5 failed attempts per 15 minutes per IP).',
        engineeringTakeaway: 'Rate limiting is a foundational security requirement for public authentication vectors.'
      }
    ],
    metrics: [
      { label: 'Security Enforcement', value: 'RBAC Strict', description: 'Zero unauthorized horizontal privilege access' },
      { label: 'Brute-Force Guard', value: '5 req/15min', description: 'Rate-limited authentication protection' },
      { label: 'Input Validation', value: '100% Sanitized', description: 'Validated with express-validator schemas' }
    ],
    keyTakeaways: [
      'Engineered complete departmental hierarchy and organizational chart models',
      'Configured automated email credentials dispatch on new employee creation via Nodemailer',
      'Implemented clean modal dialogs and responsive data tables in React'
    ],
    interviewQnA: [
      {
        question: 'How do you prevent horizontal privilege escalation in the Employee Management System?',
        answer: 'Horizontal privilege escalation occurs when an employee accesses another employees record by altering the ID in the URL. I verify in the controller that the requested employee ID matches the authenticated user ID in the verified JWT payload, unless the requesting user possesses the Admin role.'
      },
      {
        question: 'How do you handle password storage and authentication securely?',
        answer: 'Passwords are never stored in plaintext. They are salted and hashed using bcryptjs with a cost factor of 10 prior to persistence. Upon login, bcrypt.compare verifies the hash. On successful validation, a signed JWT token is issued with a short expiration TTL.'
      }
    ]
  },
  {
    id: 'safari-world-hunt-studio',
    title: 'Safari World Hunt — Distributed Game Engine & WebGL Admin Studio',
    subtitle: 'High-throughput gaming backend and 60 FPS WebGL 2D canvas editor built with Node.js, TypeScript, PostgreSQL, Prisma, Redis, and React 19 + Pixi.js.',
    category: 'frontend',
    featured: false,
    role: 'Core Software Engineer (Oodles)',
    timeline: '2024 - Present',
    liveUrl: 'https://admin-panel-frontend-nine-wine.vercel.app',
    githubUrl: 'https://github.com/shivaniKapoor-Dev/portfolio',
    summary: 'Engineered an enterprise gaming backend and visual canvas editor for procedural maps. Features Redis distributed locks, versioned live releases, and GPU-accelerated Pixi.js 2D rendering for inspecting hundreds of interconnected game nodes at a steady 60 FPS.',
    problemStatement: 'Visualizing and manipulating 500+ interconnected spatial nodes in standard DOM caused severe frame drops and lagging click selection.',
    architectureOverview: 'Full-stack platform built with Node.js, TypeScript, Prisma, PostgreSQL, and Redis on the backend; paired with React 19, Pixi.js WebGL rendering, @xyflow/react, and Redux Toolkit on the frontend. Deployed live on Vercel.',
    codeSnippetPreview: {
      filename: 'MapCanvasViewport.tsx',
      language: 'typescript',
      code: `// High-performance Pixi.js WebGL viewport rendering 500+ interactive nodes
export const MapCanvasViewport = ({ mapNodes, onSelectNode }: ViewportProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pixiApp = usePixiRenderer(containerRef);

  useEffect(() => {
    if (!pixiApp) return;
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
      { name: 'React 19 & Vite', category: 'frontend', why: 'Blazingly fast HMR and optimized component lifecycle.' },
      { name: 'Pixi.js (WebGL)', category: 'frontend', why: 'GPU batch rendering for hundreds of interactive nodes at 60 FPS.' },
      { name: 'Node.js & TypeScript', category: 'backend', why: 'Type-safe domain logic and high I/O throughput.' },
      { name: 'PostgreSQL & Prisma', category: 'database', why: 'Relational map versions, spatial coordinates, and transactional rollouts.' },
      { name: 'Redis', category: 'backend', why: 'Distributed locks to eliminate session race conditions.' }
    ],
    keyChallenges: [
      {
        title: 'DOM Bottlenecks When Rendering Large Spatial Graphs',
        problem: 'Rendering hundreds of interactive SVG nodes caused frame rates to drop below 20 FPS during pan/zoom.',
        solution: 'Migrated map canvas to Pixi.js WebGL, rendering nodes directly on the GPU.',
        engineeringTakeaway: 'Offload high-volume visual graphics to GPU canvases while keeping metadata in React state.'
      }
    ],
    metrics: [
      { label: 'Canvas Rendering', value: '60 FPS', description: 'Smooth GPU-accelerated map exploration' },
      { label: 'API Latency', value: '<75ms', description: 'Cached with Redis key-value store' },
      { label: 'Live Deployed', value: 'Vercel Preview', description: 'Production-ready admin dashboard' }
    ],
    keyTakeaways: [
      'Live deployed on Vercel with automated continuous preview builds',
      'Configured role-based admin controls and live theme switching',
      'Eliminated game state race conditions via Redis atomic locks'
    ],
    interviewQnA: [
      {
        question: 'Why did you choose Pixi.js over standard SVG for the map editor?',
        answer: 'SVGs add heavy nodes to the browser DOM tree, causing layout re-calculations on every pan and zoom. Pixi.js utilizes WebGL to batch-draw sprites directly on the GPU framebuffer, maintaining a silky 60 FPS regardless of node count.'
      }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Full Stack & MERN Architecture',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & Express 5', level: 'Advanced', context: 'High-throughput APIs, middleware architecture, routing' },
      { name: 'React 19 & Redux Toolkit', level: 'Advanced', context: 'Component state, memoized selectors, custom hooks' },
      { name: 'MongoDB & Mongoose 9', level: 'Advanced', context: 'Document modeling, aggregation pipelines, transactions' },
      { name: 'RESTful API Design', level: 'Advanced', context: 'Clean DTOs, versioning, express-validator schemas' },
      { name: 'JWT & Role-Based Auth', level: 'Advanced', context: 'Multi-tenant authorization, salted passwords, security' },
      { name: 'TypeScript', level: 'Advanced', context: 'Strict typing, DTO interfaces, generic data utilities' }
    ]
  },
  {
    title: 'Frontend & Interactive Canvas',
    iconName: 'Layout',
    skills: [
      { name: 'React & Vite', level: 'Advanced', context: 'Modern SPAs, fast HMR, optimized production bundles' },
      { name: 'Pixi.js (2D WebGL)', level: 'Advanced', context: 'GPU-accelerated canvas rendering, interactive node maps' },
      { name: 'Tailwind CSS', level: 'Advanced', context: 'Modern responsive layouts, design token customization' },
      { name: '@xyflow/react', level: 'Proficient', context: 'Interactive node graph editors, workflow canvases' },
      { name: 'TanStack Table v8', level: 'Proficient', context: 'Headless data virtualization and complex data grids' }
    ]
  },
  {
    title: 'Databases, Caching & Automation',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB', level: 'Advanced', context: 'Cursor-based pagination, bulkWrite upserts, indexing' },
      { name: 'PostgreSQL & Prisma ORM', level: 'Advanced', context: 'Relational modeling, migrations, connection pooling' },
      { name: 'Redis', level: 'Advanced', context: 'Distributed locks, rate limiting, session store, caching' },
      { name: 'Puppeteer Automation', level: 'Advanced', context: 'Headless browser automation, stealth scraping, cron jobs' }
    ]
  },
  {
    title: 'DevOps, Security & Tools',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'Git & GitHub / GitLab', level: 'Advanced', context: 'Branching workflows, CI/CD actions, version control' },
      { name: 'express-rate-limit & Helmet', level: 'Advanced', context: 'Brute-force protection, HTTP header security' },
      { name: 'Postman & Swagger', level: 'Advanced', context: 'API testing, automated endpoint collections' },
      { name: 'Winston Logger & Nodemailer', level: 'Proficient', context: 'Production observability and automated email dispatches' }
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
    topic: 'MERN System Design: Scalable eCommerce & Inventory Consistency',
    points: [
      'Prevent overselling by wrapping stock decrements in atomic MongoDB queries within multi-document transaction sessions.',
      'Separate customer, vendor, and admin capabilities using secure Role-Based Access Control (RBAC) middleware.',
      'Enforce vendor data isolation by scoping every query to the authenticated vendor ID.',
      'Use stateful cart persistence synchronized with backend validation prior to payment capture.'
    ]
  },
  {
    topic: 'Web Scraping & Automation: Resilience and Cursor Pagination',
    points: [
      'Replace offset-based pagination (skip/limit) with cursor-based pagination (_id and timestamp) to maintain O(1) query time.',
      'Evade bot detection by randomizing human-like scrolling delays and spoofing navigator.webdriver properties in Puppeteer.',
      'Use bulkWrite operations to perform high-frequency upserts without creating duplicate records.',
      'Isolate browser instances in try/catch/finally blocks to ensure browser.close() executes, preventing memory leaks.'
    ]
  },
  {
    topic: 'API Security & Data Integrity: Authentication & Rate Limiting',
    points: [
      'Protect public authentication endpoints against brute-force attacks using express-rate-limit sliding windows.',
      'Verify authorization headers against JWT claims to prevent horizontal and vertical privilege escalation.',
      'Salt and hash passwords with bcryptjs (cost factor 10) and transmit auth tokens in secure HTTP-only cookies.',
      'Sanitize all incoming DTO payloads with express-validator schemas before passing data to service layers.'
    ]
  }
];
