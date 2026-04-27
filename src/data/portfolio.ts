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
  // imageSrc?: string  // uncomment and set to e.g. '/images/project-name.png'
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
  resume: '/resume.pdf', // place your PDF in the public/ folder
  email: 'jlalukota@gmail.com',
  profileImageSrc: '/images/profile.jpg', // uncomment when you have a photo
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
    imageAlt: 'Kubernetes ML Training Controller — architecture diagram',
  },
  {
    id: 'detour-rl',
    title: 'DETOUR RL Traffic Occupancy',
    description:
      'A reinforcement learning environment for learning traffic signal control policies that minimise road occupancy and improve throughput.',
    tags: ['Python', 'PyTorch', 'Reinforcement Learning', 'Simulation'],
    github: 'https://github.com/jlalukota', // TODO: update to specific repo
    imageAlt: 'DETOUR — RL agent controlling a traffic grid',
  },
  {
    id: 'pmf-finder',
    title: 'PMF Finder - Agentic Scoring Engine',
    description:
      'A tool that helps early-stage startups surface leading indicators of product–market fit from user behaviour and survey data.',
    tags: ['Python', 'React', 'PostgreSQL', 'Data Analysis'],
    github: 'https://github.com/blade9523411/middleware_scoring', // TODO: update to specific repo
    imageSrc: '/images/pmf.jpg', 
    imageAlt: 'PMF Finder — dashboard screenshot',
  },
  {
    id: 'stock-trading-sim',
    title: 'Stock Trading Simulation Environment',
    description:
      'Developed a custom OpenAI Gym trading environment with a random forest regression baseline, incorporating 20+ technical indicators on 5+ years of historical data to model and evaluate strategy performance.',
    tags: ['Python', 'NumPy', 'Simulation', 'Finance'],
    github: 'https://github.com/blade9523411/gabejaystock', // TODO: update to specific repo
    imageSrc: '/images/stock.jpg', 
    imageAlt: 'Stock Trading Simulation — portfolio performance chart',
  },
  {
    id: 'marine-robotics-rl',
    title: 'Humanoids-Legs RL',
    description:
      'Team effort on reinforcement learning policies for underwater and humanoid robotic platforms, focusing on locomotion in unstructured environments.',
    tags: ['Python', 'PyTorch', 'Robotics', 'RL', 'Sim-to-Real'],
    github: 'https://github.com/jlalukota', // TODO: update to specific repo
    imageAlt: 'Marine robotics RL — simulated underwater robot',
  },
]

// ── Experience ─────────────────────────────────────────────────────────────────

export const experience: ExperienceItem[] = [
  {
    id: 'afrl',
    role: 'Software Engineering Intern',
    org: 'Air Force Research Laboratory',
    period: '2024',
    location: 'Rome, NY',
    bullets: [
      'TODO: add what you built / owned at AFRL.',
      'TODO: quantify impact where possible.',
    ],
    tags: ['Systems', 'Research'],
  },
  {
    id: 'marine-robotics-lab',
    role: 'Research Assistant',
    org: 'Marine Robotics Lab',
    period: '2026 – present',
    location: 'University of Wisconsin--Madison',
    bullets: [
      'Assists in controller work on underwater and robotic platforms.',
      
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
      'Assists in controller work on underwater and robotic platforms.',
      'Assists in controller work on underwater and robotic platforms.',
      
    ],
    tags: ['Robotics', 'Controllers', 'Research'],
  },
  {
    id: 'community-computing',
    role: 'Founder & President',
    org: 'Community Computing CP',
    period: '2022 – present',
    location: 'Clifton Park, NY',
    bullets: [
      'Founded and run a programme teaching programming fundamentals to students',
      'TODO: add enrolment numbers, curriculum details, or outcomes.',
    ],
    tags: ['Education', 'Leadership'],
  },
  
]
