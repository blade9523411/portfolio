// ─────────────────────────────────────────────────────────────────────────────
// Portfolio content — edit this file to update everything on the site.
// ─────────────────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  github?: string    // link to GitHub repo
  demo?: string      // link to live demo
  imageSrc?: string  // uncomment and set to e.g. '/images/project-name.png'
  imageAlt: string
}

export interface ExperienceItem {
  id: string
  role: string
  org: string
  period: string
  location: string
  bullets: string[]
  tags: string[]
}

export interface SkillCategory {
  label: string
  items: string[]
}

// ── Personal info ──────────────────────────────────────────────────────────────

export const personal = {
  name: 'Jayanth Lalukota',
  role: 'CS student building software, ML systems, and developer tools.',
  // Edit the intro paragraph shown in the hero section.
  heroBio:
    'I’ve worked on multi-agent RL in constrained environments and recently shifted toward infrastructure, building tools like a Kubernetes ML training controller and data-driven scoring systems.',
  // Edit the about section bio.
  aboutBio: `I'm a computer science student at UW-Madison with a focus on systems programming, machine learning infrastructure, and developer tooling.

Outside of code, I've taught computing to seniors and children in my community, worked on a humanoid robot, and cooking good food.`,
  github: 'https://github.com/blade9523411',
  linkedin: 'https://linkedin.com/in/jlalukota', 
  resume: '/resume.pdf',
  email: 'jlalukota@gmail.com',
  profileImageSrc: '${import.meta.env.BASE_URL}/images/profile.jpg', // uncomment when you have a photo
  profileImageAlt: 'Jayanth Lalukota — profile photo',
}

// ── Skills ─────────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  { label: 'Languages',    items: ['Python', 'Java', 'C++', 'Go'] },
  { label: 'Frontend',     items: ['React', 'TypeScript', 'HTML/CSS'] },
  { label: 'Infra & DevOps', items: ['Kubernetes', 'Docker', 'Git'] },
  { label: 'ML / AI',      items: ['PyTorch', 'TensorFlow'] },
]

// ── Projects ───────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'k8s-ml-controller',
    title: 'Kubernetes ML Training Controller',
    description:
      'A Kubernetes operator written in Go that orchestrates distributed ML training jobs with fault tolerance, auto-scaling, and resource-aware scheduling.',
    tags: ['Go', 'Kubernetes', 'Operators', 'ML Ops', 'Docker'],
    github: 'https://github.com/blade9523411/ml-training-controller', // TODO: update to specific repo
    imageSrc: '${import.meta.env.BASE_URL}/images/imagek8.png',
    imageAlt: 'Kubernetes ML Training Controller — architecture diagram',
  },
  {
    id: 'detour-rl',
    title: 'Multi-Agent RL for Constrained Traffic Systems (AFRL)',
    description:
      'Worked on reinforcement learning in large-scale graph-based environments with constraints like limited capacity, delayed rewards, and restricted actions. Focused on analyzing system behavior under adversarial or non-ideal conditions.',
    tags: ['Python', 'PyTorch', 'Reinforcement Learning', 'Simulation'],
    imageSrc: '${import.meta.env.BASE_URL}/images/pemssf.jpg', 
    imageAlt: 'DETOUR — RL agent controlling a traffic grid',
  },
  {
    id: 'pmf-finder',
    title: 'PMF Finder - Agentic Scoring Engine',
    description:
      'A tool that helps early-stage startups surface leading indicators of product–market fit from user behaviour and survey data.',
    tags: ['Python', 'React', 'PostgreSQL', 'Data Analysis'],
    github: 'https://github.com/blade9523411/middleware_scoring', // TODO: update to specific repo
    imageSrc: '${import.meta.env.BASE_URL}/images/pmf.jpg', 
    imageAlt: 'PMF Finder — dashboard screenshot',
  },
  {
    id: 'stock-trading-sim',
    title: 'Stock Trading Simulation Environment',
    description:
      'Developed a custom OpenAI Gym trading environment with a random forest regression baseline, incorporating 20+ technical indicators on 5+ years of historical data to model and evaluate strategy performance.',
    tags: ['Python', 'NumPy', 'Simulation', 'Finance'],
    github: 'https://github.com/blade9523411/gabejaystock', // TODO: update to specific repo
    imageSrc: '${import.meta.env.BASE_URL}/images/stock.jpg', 
    imageAlt: 'Stock Trading Simulation — portfolio performance chart',
  },
  {
    id: 'marine-robotics-rl',
    title: 'Humanoids-Legs RL',
    description:
      'Worked on developing model predictive controllers for underwater robots.',
    tags: ['Python', 'PyTorch', 'Robotics', 'RL', 'Sim-to-Real'],
    github: 'https://github.com/jlalukota', // TODO: update to specific repo
    imageSrc: '${import.meta.env.BASE_URL}/images/marine-robotics.jpg',
    imageAlt: 'Marine robotics RL — simulated underwater robot',
  },
]

// ── Experience ─────────────────────────────────────────────────────────────────

export const experience: ExperienceItem[] = [
  {
    id: 'afrl',
    role: 'AI Research Intern',
    org: 'Air Force Research Laboratory',
    period: '2025',
    location: 'Rome, NY',
    bullets: [
      'Designed a graph-based multi-agent traffic simulation (3,000-node network, 1,000+ agents) to study behavior under constrained and adversarial conditions.',
      'Trained and evaluated reinforcement learning policies (shared vs independent) to optimize routing and evade detection under system constraints.',
      'Generated 12M+ state–action samples to train time-series classifiers for incident detection and pattern recognition.',
    ],
    tags: ['Machine Learning','Reinforcement Learning','Systems', 'Research'],
  },
  {
    id: 'marine-robotics-lab',
    role: 'Research Assistant',
    org: 'Marine Robotics Lab',
    period: '2026 – present',
    location: 'University of Wisconsin--Madison',
    bullets: [
      'Contributed to control system development for underwater robotic platforms, focusing on stability and actuation in constrained environments',
      
    ],
    tags: ['Robotics', 'Controllers', 'Research'],
  },
  {
    id: 'safebeat',
    role: 'Software Engineering Intern',
    org: 'SafeBeat Rx',
    period: '2024 – 2025',
    location: 'San Francisco, CA',
    bullets: [
      'Engineered automation workflows for sales operations, eliminating repetitive manual processes and improving team efficiency by 96%.',
      'Maintained and optimized CRM data pipelines across 300+ hospital records to support targeted outreach',
      
    ],
    tags: ['Data Engineering', 'Automation', 'Data Pipelines', 'CRM Systems'],
  },
  {
    id: 'community-computing',
    role: 'Founder & President',
    org: 'Community Computing CP',
    period: '2022 – present',
    location: 'Clifton Park, NY',
    bullets: [
      'Led a community program teaching programming and digital skills to 500+ students and seniors through structured workshops and 1:1 sessions',
      'Built partnerships with schools, libraries, and senior centers to run recurring programs and expand reach.',
    ],
    tags: ['Education', 'Leadership', 'Community Service'],
  },
  
]
