import heroCoderImg from '../assets/images/hero_3d_coder_1791184212844.jpg';
import avatarWavingImg from '../assets/images/avatar_waving_3d_1791184224697.jpg';
import eduCapBooksImg from '../assets/images/education_cap_books_1791184235637.jpg';
import contactStudentImg from '../assets/images/contact_3d_student_1791184244978.jpg';
import projectManagexImg from '../assets/images/project_managex_1791184273257.jpg';
import projectEcotrackImg from '../assets/images/project_ecotrack_1791184285221.jpg';
import projectTuneflowImg from '../assets/images/project_tuneflow_1791184297648.jpg';
import blogFullstackImg from '../assets/images/blog_fullstack_1791184308516.jpg';
import blogJavascriptImg from '../assets/images/blog_javascript_1791184320202.jpg';
import blogProductivityImg from '../assets/images/blog_productivity_1791184329949.jpg';

export const portfolioImages = {
  heroCoder: heroCoderImg,
  avatarWaving: avatarWavingImg,
  eduCapBooks: eduCapBooksImg,
  contactStudent: contactStudentImg,
  projectManagex: projectManagexImg,
  projectEcotrack: projectEcotrackImg,
  projectTuneflow: projectTuneflowImg,
  blogFullstack: blogFullstackImg,
  blogJavascript: blogJavascriptImg,
  blogProductivity: blogProductivityImg,
};

export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile & Tools';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  features: string[];
  metrics: string;
}

export interface Skill {
  name: string;
  shortName: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  color: string;
  bgLight: string;
  borderColor: string;
  level: string;
  experience: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  iconType: 'trophy' | 'hackathon' | 'code';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  icon: 'grad' | 'college' | 'school';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatarText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  snippet: string;
  content: string[];
  image: string;
  tags: string[];
}

export const personalInfo = {
  name: "Tayyab Rajpoot",
  title: "CS Student | Aspiring Software Developer 🎓",
  headlineGreeting: "Hi, I'm",
  subheading: "I build creative & responsive web applications and love turning ideas into real-world solutions.",
  about: {
    greeting: "Get to know me!",
    description: "I'm a passionate 20-year-old student developer who loves coding, problem solving and exploring new technologies. I enjoy building projects that make life easier and more productive.",
    name: "Tayyab Rajpoot",
    age: "20",
    location: "Dhair Shahdara Town, Lahore, Pakistan",
    email: "tayyabshah7564@gmail.com",
    phone: "03247564792",
    whatsapp: "03247564792",
    languages: "Urdu, Punjabi, English",
  },
  stats: [
    { label: "Projects Completed", value: "15+", icon: "folder", color: "purple" },
    { label: "Years of Learning", value: "3+", icon: "graduation", color: "blue" },
    { label: "Certifications", value: "5", icon: "certificate", color: "amber" },
    { label: "Technologies", value: "10+", icon: "layers", color: "indigo" },
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    leetcode: "https://leetcode.com",
    whatsapp: "https://wa.me/923247564792",
  },
};

export const skillsData: Skill[] = [
  { name: "HTML5", shortName: "HTML5", category: "frontend", color: "#E34F26", bgLight: "#FFF5F2", borderColor: "#FED7D2", level: "Advanced", experience: "3+ Years" },
  { name: "CSS3", shortName: "CSS3", category: "frontend", color: "#1572B6", bgLight: "#F0F7FF", borderColor: "#BAE6FD", level: "Advanced", experience: "3+ Years" },
  { name: "JavaScript", shortName: "JS", category: "frontend", color: "#EAB308", bgLight: "#FEFCE8", borderColor: "#FEF08A", level: "Advanced", experience: "2.5+ Years" },
  { name: "React.js", shortName: "React", category: "frontend", color: "#06B6D4", bgLight: "#ECFEFF", borderColor: "#A5F3FC", level: "Advanced", experience: "2+ Years" },
  { name: "Node.js", shortName: "Node.js", category: "backend", color: "#22C55E", bgLight: "#F0FDF4", borderColor: "#BBF7D0", level: "Intermediate", experience: "1.5+ Years" },
  { name: "Java", shortName: "Java", category: "backend", color: "#EA580C", bgLight: "#FFF7ED", borderColor: "#FED7AA", level: "Intermediate", experience: "2+ Years" },
  { name: "Python", shortName: "Python", category: "backend", color: "#3B82F6", bgLight: "#EFF6FF", borderColor: "#BFDBFE", level: "Intermediate", experience: "1.5+ Years" },
  { name: "MySQL", shortName: "MySQL", category: "database", color: "#0284C7", bgLight: "#F0F9FF", borderColor: "#BAE6FD", level: "Intermediate", experience: "2+ Years" },
  { name: "Git & GitHub", shortName: "Git", category: "tools", color: "#1F2937", bgLight: "#F8FAFC", borderColor: "#E2E8F0", level: "Advanced", experience: "3+ Years" },
  { name: "Figma", shortName: "Figma", category: "tools", color: "#A855F7", bgLight: "#FAF5FF", borderColor: "#E9D5FF", level: "Intermediate", experience: "1+ Year" },
];

export const projectsData: Project[] = [
  {
    id: "student-managex",
    title: "Student ManageX",
    category: "Full Stack",
    description: "A web application to manage student records, attendance, and performance.",
    longDescription: "A comprehensive institutional management system tailored for universities and colleges. Features real-time grade calculations, automated attendance tracking via QR codes, and automated report card generation with role-based access control for professors, students, and admins.",
    image: portfolioImages.projectManagex,
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com/student-managex",
    featured: true,
    features: [
      "Role-Based Access Control for Students and Faculty",
      "Dynamic Attendance Tracking & Percentage Alert System",
      "Automated Semester Transcript Generation (PDF)",
      "Secure JWT Authentication and RESTful APIs"
    ],
    metrics: "Reduced manual reporting overhead by 65%"
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    category: "Frontend",
    description: "Track your daily carbon footprint and get tips to live a greener life.",
    longDescription: "An interactive sustainability assistant that calculates household and commute emissions. Provides actionable, personalized micro-habits and displays interactive data visualizations of tree offsets and carbon saving milestones.",
    image: portfolioImages.projectEcotrack,
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com/ecotrack",
    featured: true,
    features: [
      "Interactive Carbon Emission Calculator for transport & energy",
      "Weekly Sustainability Habit Streaks with gamification",
      "Local recycling center finder and eco-living checklist",
      "Zero-dependency pure vanilla JavaScript data engine"
    ],
    metrics: "Over 1,200 simulated active lifestyle audits"
  },
  {
    id: "tuneflow",
    title: "TuneFlow",
    category: "Full Stack",
    description: "A music streaming web app with playlists, authentication and modern UI.",
    longDescription: "A modern Spotify-inspired audio player equipped with custom audio equalizers, collaborative playlists, seamless background playback, and persistent user library synced through Firebase Firestore.",
    image: portfolioImages.projectTuneflow,
    tags: ["React", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com/tuneflow",
    featured: true,
    features: [
      "Custom HTML5 Audio API wrapper with crossfade & queueing",
      "Real-time collaborative playlists powered by Firestore",
      "Responsive glassmorphism UI with audio visualizer",
      "Instant fuzzy search across artists, albums, and tracks"
    ],
    metrics: "Ultra-low latency audio buffering < 80ms"
  },
  {
    id: "devquizzer",
    title: "DevQuizzer",
    category: "Frontend",
    description: "Interactive coding quiz app for CS students prepping for tech interviews.",
    longDescription: "A timed trivia application covering DSA, system design, and language intricacies with detailed explanations and community leaderboards.",
    image: portfolioImages.projectManagex,
    tags: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com/devquizzer",
    featured: false,
    features: [
      "500+ curated MCQ problems across algorithms & web technologies",
      "Detailed step-by-step explanations and complexity breakdowns",
      "Local storage streak caching and progress tracking"
    ],
    metrics: "4.9/5 star feedback from student peers"
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "codequest",
    title: "CodeQuest 2.0 Winner",
    organization: "Won 1st prize in inter-college coding competition.",
    date: "2024",
    description: "Competed against 45+ collegiate engineering teams solving algorithmic optimization challenges in under 3 hours.",
    iconType: "trophy",
  },
  {
    id: "hackathon",
    title: "Hackathon Participant",
    organization: "Participated in 24H Hackathon by DevSoc.",
    date: "2023",
    description: "Built a disaster management response prototype in 24 hours with emergency SMS gateway integration.",
    iconType: "hackathon",
  },
  {
    id: "problem-solver",
    title: "Problem Solver",
    organization: "Solved 500+ problems on LeetCode.",
    date: "Active",
    description: "Consistent problem solving in Data Structures and Algorithms with a focus on Dynamic Programming, Graphs, and Trees.",
    iconType: "code",
  },
];

export const educationData: EducationItem[] = [
  {
    id: "navttc",
    degree: "Certified Web & Software Development",
    institution: "NAVTTC (National Vocational & Technical Training)",
    period: "2023 - 2024",
    score: "Grade A+",
    scoreLabel: "Result",
    icon: "grad",
  },
  {
    id: "bsit",
    degree: "B.Sc. Information Technology / Computer Science",
    institution: "Govt. College / University, Lahore",
    period: "2022 - 2026",
    score: "3.72 / 4.0",
    scoreLabel: "CGPA",
    icon: "college",
  },
  {
    id: "ics",
    degree: "Intermediate (ICS - Computer Science)",
    institution: "BISE Lahore Board",
    period: "2020 - 2022",
    score: "85.40%",
    scoreLabel: "Percentage",
    icon: "school",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote: "Tayyab is a dedicated learner and a great team player. He actively participates in technical projects, grasps complex concepts quickly, and consistently delivers quality work.",
    author: "Prof. Sir Yasir",
    role: "Senior Instructor & Mentor",
    organization: "NAVTTC",
    avatarText: "SY",
  },
  {
    id: "2",
    quote: "Great problem solver with a strong understanding of web concepts and a clean code approach. Tayyab shows genuine passion for building impactful software.",
    author: "Prof. Tayyab Khushi",
    role: "Professor of Computer Science",
    organization: "Department of IT",
    avatarText: "TK",
  },
  {
    id: "3",
    quote: "Demonstrated phenomenal curiosity and rapid development capabilities during our software sprint. An outstanding young talent with a bright future.",
    author: "Aniket Kulkarni",
    role: "Hackathon Coordinator",
    organization: "Dev Community",
    avatarText: "AK",
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: "full-stack-journey",
    title: "My Journey into Full Stack Development",
    date: "May 15, 2024",
    readTime: "4 min read",
    snippet: "Sharing my learning path, challenges and experiences as an MCA student.",
    content: [
      "Transitioning from academic theory to hands-on software engineering can be overwhelming. When I first embarked on full-stack development, the sheer number of frameworks and libraries felt like an endless labyrinth.",
      "The pivotal moment came when I stopped tutorial-hopping and committed to building one real-world product end-to-end: Student ManageX. Solving authentication edge cases, database indexing, and responsive layouts taught me ten times more than watching passive courses.",
      "To any fellow student: pick one stack (like MERN or React with Node), build genuine applications that you or your peers actually use, and don't shy away from reading the official documentation."
    ],
    image: portfolioImages.blogFullstack,
    tags: ["Career", "Full Stack", "Learning"],
  },
  {
    id: "javascript-concepts",
    title: "Top 5 JavaScript Concepts You Must Know",
    date: "Apr 25, 2024",
    readTime: "5 min read",
    snippet: "Closures, Promises, Hoisting and more - explained simply.",
    content: [
      "JavaScript powers the modern web, but its quirky asynchronous nature and prototype model trip up many newcomers.",
      "In this breakdown, we examine Closures (functions bundled with references to their lexical environment), the Event Loop (macrotasks vs microtasks), Promises & Async/Await, Hoisting semantics with let/const vs var, and prototypical inheritance.",
      "Mastering these fundamental concepts provides the mental clarity required to write performant React applications without mysterious re-renders."
    ],
    image: portfolioImages.blogJavascript,
    tags: ["JavaScript", "Web Dev", "Tutorial"],
  },
  {
    id: "student-productivity",
    title: "How I Stay Productive as a Student Developer",
    date: "Apr 10, 2024",
    readTime: "3 min read",
    snippet: "Tips and tools that help me manage time, study and build projects.",
    content: [
      "Balancing university MCA coursework, lab submissions, exam preparation, and personal open-source projects requires ruthless prioritization.",
      "My daily setup revolves around three tenets: Time-blocking high cognitive load coding tasks in the early morning, using minimalist Kanban boards for sprint tasks, and avoiding burnout through regular gym workouts.",
      "Consistency over intensity: dedicating 90 uninterrupted minutes every single day compounds faster than erratic weekend marathons."
    ],
    image: portfolioImages.blogProductivity,
    tags: ["Productivity", "Mindset", "Tips"],
  },
];
