import type {
  PersonalInfo,
  Project,
  SkillCategory,
  Achievement,
  EducationItem,
  CertificationItem,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Pendela Guru Vishnu',
  title: 'AI & Machine Learning Developer',
  subDescriptor: 'AI / ML • Software Development • Problem Solving',
  location: 'Ananthapur, Andhra Pradesh, India',
  email: 'pendyalaguruvishnu@gmail.com',
  phone: '+91 8919978143',
  linkedin: 'linkedin.com/in/pendela-guru-vishnu',
  linkedinUrl: 'https://linkedin.com/in/pendela-guru-vishnu',
  github: 'github.com/guruvishnu0501',
  githubUrl: 'https://github.com/guruvishnu0501',
  summary:
    'Motivated Computer Science undergraduate with strong foundations in Python, OOP, Machine Learning, Web Development, and DBMS. Hands-on experience in developing real-world Machine Learning and software projects using modern technologies. Strong problem-solving skills with a passion for learning emerging technologies and building practical solutions.',
  availability: 'Open to opportunities',
  currentRole: 'B.Tech in Computer Science (IoT) — Malla Reddy Engineering College',
  cgpa: '8.76 / 10',
};

export const capabilityBlocks = [
  {
    num: '01',
    title: 'Artificial Intelligence',
    description:
      'Designing intelligent systems, rule engines, and agentic workflows that transform raw inputs into autonomous decision models.',
    iconName: 'Cpu',
    accent: 'cyan',
  },
  {
    num: '02',
    title: 'Machine Learning',
    description:
      'Building predictive classification pipelines, data preprocessing routines, and addressing real-world challenges like extreme data imbalance.',
    iconName: 'Sparkles',
    accent: 'violet',
  },
  {
    num: '03',
    title: 'Software Development',
    description:
      'Architecting responsive web applications, object-oriented software, and robust database architectures using Python, modern Web tech, and DBMS.',
    iconName: 'Code',
    accent: 'emerald',
  },
  {
    num: '04',
    title: 'Problem Solving',
    description:
      'Algorithmic rigor, data structure optimization, and rapid prototype delivery proven under high-pressure competitive hackathons.',
    iconName: 'Binary',
    accent: 'amber',
  },
];

export const projectsData: Project[] = [
  {
    id: 'fraud-detection',
    slug: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection System',
    tagline: 'High-precision ML classification engineered for highly imbalanced financial transaction data.',
    category: 'Machine Learning',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    problem:
      'In financial transactions, fraudulent operations make up less than 0.2% of total traffic. Standard machine learning models heavily favor the majority class, causing severe false negatives where critical fraudulent transactions slip through undetected.',
    approach: [
      'Conducted in-depth exploratory data analysis and feature distribution inspection on transaction streams.',
      'Addressed extreme class skewness using targeted data balancing and feature scaling strategies.',
      'Trained and evaluated multiple classification models tailored for anomaly boundary isolation.',
      'Optimized precision-recall curves and decision thresholds to minimize costly false positives without missing fraud.',
    ],
    techStack: [
      { name: 'Python', role: 'Core runtime & mathematical computation' },
      { name: 'Scikit-learn', role: 'Model training, hyperparameter tuning & evaluation metrics' },
      { name: 'Pandas', role: 'Feature engineering, matrix cleaning & manipulation' },
      { name: 'NumPy', role: 'Vectorized mathematical transformations' },
    ],
    outcome:
      'Delivered a robust fraud screening pipeline capable of scoring transactions with significantly elevated precision and a dramatic reduction in false alarms.',
    resumeBullets: [
      'Developed a machine learning model to detect fraudulent credit card transactions.',
      'Performed data preprocessing, feature analysis, and handling of imbalanced transaction data.',
      'Trained and evaluated classification models to identify fraudulent transactions.',
      'Applied performance evaluation techniques to improve fraud detection and reduce false positives.',
    ],
    architectureSteps: [
      {
        label: 'Transaction Stream',
        subtext: 'Incoming PCA-transformed features, timestamps & transaction amounts',
        icon: 'CreditCard',
      },
      {
        label: 'Data Preprocessing',
        subtext: 'Robust scaling, outlier mitigation & class imbalance handling',
        icon: 'Filter',
      },
      {
        label: 'ML Model Inference',
        subtext: 'Classification pipeline scoring risk probabilities',
        icon: 'Cpu',
      },
      {
        label: 'Threshold Tuning',
        subtext: 'Precision-recall threshold optimization to curb false alarms',
        icon: 'Sliders',
      },
      {
        label: 'Decision & Alerting',
        subtext: 'Flagged transaction verdict with actionable risk categorization',
        icon: 'ShieldAlert',
      },
    ],
    visualType: 'fraud-network',
    status: 'Completed',
    repoStatus: 'Repository coming soon',
  },
  {
    id: 'personalized-learning',
    slug: 'ai-personalized-learning-platform',
    title: 'AI-based Personalized Learning Platform',
    tagline: 'Adaptive educational platform analyzing student telemetry to generate customized learning trajectories.',
    category: 'Web & AI',
    tags: ['Python', 'Machine Learning', 'Web'],
    problem:
      'Conventional online education delivers identical curricula to all students regardless of individual retention rates, creating knowledge deficits for struggling learners and disengagement for advanced students.',
    approach: [
      'Designed an adaptive assessment pipeline analyzing real-time student quiz metrics and latency patterns.',
      'Formulated machine learning algorithms to map conceptual weaknesses and dynamically adjust pacing.',
      'Built interactive web interfaces for quizzes, immediate formative feedback, and progress analytics.',
      'Structured personalized curriculum paths that dynamically unlock revision modules for targeted mastery.',
    ],
    techStack: [
      { name: 'Python', role: 'Backend recommendation engine & learner modeling' },
      { name: 'Machine Learning', role: 'Adaptive learning path generation & mastery clustering' },
      { name: 'Web (HTML/CSS/JS)', role: 'Interactive student portal, progress graphs & quizzes' },
      { name: 'DBMS', role: 'Persistent learner profile and performance history storage' },
    ],
    outcome:
      'Created an engaging, data-driven learning ecosystem that personalizes study pacing and boosts student knowledge retention.',
    resumeBullets: [
      'Developed a machine learning-based platform to deliver personalized study recommendations.',
      'Built models to analyze user performance and generate adaptive learning paths.',
      'Integrated quizzes and progress tracking to enhance engagement and learning outcomes.',
    ],
    architectureSteps: [
      {
        label: 'Learner Telemetry',
        subtext: 'Diagnostic responses, quiz scores & session completion speed',
        icon: 'GraduationCap',
      },
      {
        label: 'Skill Matrix Analytics',
        subtext: 'Aggregated topic comprehension vectors & gap identification',
        icon: 'BarChart2',
      },
      {
        label: 'ML Adaptation Engine',
        subtext: 'Predictive ranking of optimal review materials & difficulty stages',
        icon: 'GitBranch',
      },
      {
        label: 'Custom Curriculum Path',
        subtext: 'Dynamic module ordering tailored to individual mastery pace',
        icon: 'Compass',
      },
      {
        label: 'Interactive Portal',
        subtext: 'Live student dashboard with formative quizzes and progress telemetry',
        icon: 'Layout',
      },
    ],
    visualType: 'learning-matrix',
    status: 'Completed',
    repoStatus: 'Repository coming soon',
  },
  {
    id: 'facial-music-recommendation',
    slug: 'music-recommendation-facial-expressions',
    title: 'Music Recommendation System using Facial Expressions',
    tagline: 'Real-time computer vision system correlating biometric emotion cues with dynamic musical queues.',
    category: 'Computer Vision',
    tags: ['Python', 'Computer Vision', 'Machine Learning'],
    problem:
      'Selecting music that fits one’s present state of mind often requires tedious manual playlist searching. Static playlists fail to adapt dynamically to instantaneous psychological and emotional shifts.',
    approach: [
      'Captured live camera video feeds and segmented facial regions of interest using computer vision.',
      'Preprocessed facial expressions to extract spatial landmark contours and key emotional indicators.',
      'Trained machine learning classification models to map visual features into distinct emotion categories.',
      'Constructed a dynamic audio recommendation mapping associating emotional states with acoustic profiles.',
    ],
    techStack: [
      { name: 'Python', role: 'End-to-end CV capture and classification runtime' },
      { name: 'Computer Vision', role: 'Real-time video frame parsing, face detection & cropping' },
      { name: 'Machine Learning', role: 'Multiclass facial emotion categorization models' },
      { name: 'Audio Mapping Engine', role: 'Dynamic acoustic profile alignment and mood playlisting' },
    ],
    outcome:
      'Achieved hands-free, mood-responsive music curation driven purely by natural, real-time facial expressions.',
    resumeBullets: [
      'Developed a real-time facial emotion recognition system using computer vision techniques.',
      'Classified user emotions using machine learning models.',
      'Recommended music dynamically based on detected emotions for a personalized experience.',
    ],
    architectureSteps: [
      {
        label: 'Vision Stream Input',
        subtext: 'Live video capture with automated face ROI segmentation',
        icon: 'Camera',
      },
      {
        label: 'Landmark Extraction',
        subtext: 'Spatial contour isolation across eyes, brow, and mouth geometry',
        icon: 'Eye',
      },
      {
        label: 'Emotion Classification',
        subtext: 'ML models predicting affective states (Joy, Calm, Focus, Energy)',
        icon: 'Smile',
      },
      {
        label: 'Acoustic Alignment',
        subtext: 'Associating valence & arousal targets to matching song profiles',
        icon: 'Music',
      },
      {
        label: 'Dynamic Playback',
        subtext: 'Real-time streaming curation tailored to instantaneous mood',
        icon: 'Headphones',
      },
    ],
    visualType: 'emotion-camera',
    status: 'Completed',
    repoStatus: 'Repository coming soon',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI / ML & Data Science',
    description: 'Core intelligence stack for predictive modeling, data analysis, and mathematical computing.',
    icon: 'Sparkles',
    skills: [
      { name: 'Artificial Intelligence', applicationContext: 'Conceptual reasoning, intelligent system design & heuristic search', highlight: true },
      { name: 'Machine Learning', applicationContext: 'Classification, adaptive recommendation & pattern recognition pipelines', highlight: true },
      { name: 'Scikit-learn', applicationContext: 'Model training, hyperparameter tuning & evaluation metrics in fraud detection', highlight: true },
      { name: 'Pandas', applicationContext: 'High-performance tabular data manipulation and preprocessing routines' },
      { name: 'NumPy', applicationContext: 'Multidimensional array operations and vectorized mathematical computations' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    description: 'Foundational programming languages used for systems, scripting, and application logic.',
    icon: 'Terminal',
    skills: [
      { name: 'Python', applicationContext: 'Primary language for ML, CV, data science pipelines, and backend services', highlight: true },
      { name: 'Java Fundamentals', applicationContext: 'Strong grasp of static typing, JVM architecture, and core language semantics' },
    ],
  },
  {
    id: 'core',
    title: 'Computer Science Core',
    description: 'Fundamental principles guiding efficient, scalable software and algorithm architecture.',
    icon: 'Binary',
    skills: [
      { name: 'Object-Oriented Programming', applicationContext: 'Encapsulation, inheritance, polymorphism, and modular domain architecture', highlight: true },
      { name: 'Data Structures', applicationContext: 'Arrays, linked lists, stacks, queues, trees, graphs, and hash structures' },
      { name: 'Algorithms', applicationContext: 'Sorting, searching, recursion, divide-and-conquer, and time-space optimization' },
      { name: 'Problem Solving', applicationContext: 'Rapid algorithmic deduction proven in high-intensity competitive hackathons', highlight: true },
    ],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    description: 'Modern markup, styling, and client-side scripting for responsive interactive platforms.',
    icon: 'Globe',
    skills: [
      { name: 'HTML', applicationContext: 'Accessible, semantic document structure and SEO compliance' },
      { name: 'CSS', applicationContext: 'Responsive layouts, grid systems, flexbox, and modern CSS variables' },
      { name: 'JavaScript', applicationContext: 'DOM interaction, asynchronous requests, and dynamic client-side logic' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Relational and document storage solutions for structured and unstructured project telemetry.',
    icon: 'Database',
    skills: [
      { name: 'MySQL', applicationContext: 'Relational schema modeling, normalization, and structured SQL querying' },
      { name: 'MongoDB', applicationContext: 'NoSQL document modeling, JSON-like schemas, and flexible data collections' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Development Environment',
    description: 'Version control, collaborative workflows, and modern developer tooling.',
    icon: 'Wrench',
    skills: [
      { name: 'Git', applicationContext: 'Local version control, branching workflows, commits, and merge management' },
      { name: 'GitHub', applicationContext: 'Remote repository management, collaboration, pull requests, and releases' },
      { name: 'VS Code', applicationContext: 'Primary integrated development environment with extensions and debuggers' },
    ],
  },
];

export const achievementsData: Achievement[] = [
  {
    id: 'web-a-thon-2025',
    rankBadge: '03',
    title: '3rd Place — Web-a-thon 2025',
    organization: 'IoT Essence Community',
    year: '2025',
    type: 'Podium Finish',
    description:
      'Secured 3rd place in a competitive technical web-a-thon by designing and deploying an innovative software solution under strict judging criteria.',
    tag: 'Web & IoT Innovation',
  },
  {
    id: '2f2h-hackathon-2025',
    rankBadge: '04',
    title: '4th Place — 2F2H Hackathon 2025',
    organization: 'GDSC SIT Pune',
    year: '2025',
    type: 'Podium Finish',
    description:
      'Achieved 4th place in the 2F2H Hackathon hosted by Google Developer Student Clubs SIT Pune, showcasing problem solving, rapid engineering, and product execution.',
    tag: 'GDSC Hackathon',
  },
  {
    id: 'agentic-ai-hackathon',
    rankBadge: '36H',
    title: 'Participant — 36-hour Agentic AI Hackathon',
    organization: 'Guinness World Record Event',
    year: '2025',
    type: 'National Record Hackathon',
    description:
      'Built autonomous AI agent prototypes during an intense 36-hour non-stop hackathon recognized as an official Guinness World Record Event.',
    tag: 'Guinness World Record',
  },
  {
    id: 'national-hackathons',
    rankBadge: 'EXT',
    title: 'National & Inter-College Technical Events',
    organization: 'Various Technical Institutions',
    year: '2023 – 2025',
    type: 'Technical Competition',
    description:
      'Active participant across multiple regional and national collegiate hackathons, collaborating in cross-functional teams to build practical technology solutions.',
    tag: 'Competitive Engineering',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'btech-iot',
    period: '2023 – Present',
    degree: 'B.Tech in Computer Science (Internet of Things)',
    institution: 'Malla Reddy Engineering College',
    score: '8.76 / 10',
    scoreLabel: 'CGPA',
    status: 'In Progress (Undergraduate)',
    details:
      'Focusing on Computer Science fundamentals, Machine Learning, Data Structures & Algorithms, Database Management Systems, and IoT systems integration.',
    keyCoursework: [
      'Machine Learning Foundations',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'IoT Sensor Systems & Computing',
    ],
  },
  {
    id: 'class-xii',
    period: '2023',
    degree: 'Class XII (Senior Secondary)',
    institution: 'Narayana Junior College',
    score: '92.5%',
    scoreLabel: 'Score',
    status: 'Completed',
    details:
      'Rigorous foundation in Mathematics, Physics, and analytical problem-solving, graduating with exceptional distinction.',
  },
  {
    id: 'class-x',
    period: '2021',
    degree: 'Class X (Secondary School)',
    institution: 'Good Children English Medium High School',
    score: '100%',
    scoreLabel: 'Score',
    status: 'Completed',
    details:
      'Achieved a perfect academic record of 100%, demonstrating long-standing dedication to academic excellence and disciplined learning.',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-azure-ai',
    name: 'Microsoft Certified: Azure AI Fundamentals',
    issuerOrType: 'Microsoft',
    credentialTag: 'Cloud AI Certification',
    category: 'Cloud',
  },
  {
    id: 'cert-python-ds',
    name: 'Python for Data Science',
    issuerOrType: 'Data Science Specialization',
    credentialTag: 'Professional Training',
    category: 'Data Science',
  },
  {
    id: 'cert-git-github',
    name: 'Git and GitHub',
    issuerOrType: 'Version Control Mastery',
    credentialTag: 'Developer Tools',
    category: 'Development',
  },
  {
    id: 'cert-web-dev',
    name: 'Web Development Bootcamp',
    issuerOrType: 'Full-Stack Foundations',
    credentialTag: 'Hands-on Bootcamp',
    category: 'Development',
  },
  {
    id: 'cert-aiml-workshop',
    name: 'AI/ML Workshop',
    issuerOrType: 'Machine Learning Intensive',
    credentialTag: 'Technical Workshop',
    category: 'AI / ML',
  },
  {
    id: 'cert-python-workshop',
    name: 'Python Workshop',
    issuerOrType: 'Core Programming Intensive',
    credentialTag: 'Programming Workshop',
    category: 'Development',
  },
];
