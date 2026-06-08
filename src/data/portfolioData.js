export const portfolioData = {
    name: "Ashis Barik",

    role: "Senior Software Engineer",

    summary:
        "Full Stack Engineer with 10+ years of IT experience and strong expertise in building scalable web applications. 8+ years in frontend development (React.js, Redux Toolkit, modern JavaScript), including 2 years of full-stack experience using React.js and Node.js. Proficient in the React ecosystem, state management, REST API development/integration, and application optimization. Hands-on experience with microservices architecture and micro frontend (Module Federation). Experienced with CI/CD, Git, and Agile methodologies. Leverages Generative AI tools (OpenAI Codex, GitHub Copilot) to accelerate development through code generation, debugging, and refactoring.",

    experience: "10+",
    projects: "25+",
    technologies: "15+",
    companies: "5+",

    techStack: [
        "React JS",
        "Next.js",
        "Redux Toolkit",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Firebase",
        "GraphQL",
        "MongoDB",
        "MySQL",
        "MUI",
        "SCSS",
        "Azure DevOps",
    ],

    skills: [
        {
            category: "Frontend",
            items: [
                { name: "React JS / Next.js", level: 95 },
                { name: "JavaScript (ES6+)", level: 95 },
                { name: "TypeScript", level: 88 },
                { name: "HTML5 / CSS3 / SCSS", level: 90 },
                { name: "Material UI / MUI", level: 88 },
            ],
        },
        {
            category: "Backend & Database",
            items: [
                { name: "Node.js / Express.js", level: 78 },
                { name: "REST APIs / GraphQL", level: 85 },
                { name: "Firebase Firestore", level: 82 },
                { name: "MySQL", level: 72 },
                { name: "MongoDB", level: 65 },
            ],
        },
        {
            category: "DevOps & Tools",
            items: [
                { name: "Azure DevOps / CI/CD", level: 80 },
                { name: "Git / Bitbucket", level: 88 },
                { name: "Micro Frontend (Module Federation)", level: 80 },
                { name: "JWT / RBAC", level: 85 },
            ],
        },
    ],

    projectsData: [
        {
            id: 1,
            title: "MedTel SurgiScript",
            description:
                "Surgical care coordination platform streamlining processes and enhancing communication across physician practices, surgical facilities, and teams. Features RBAC, microservices architecture, and micro frontend with Module Federation.",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
            tech: [
                "React",
                "TypeScript",
                "Redux Toolkit",
                "Material UI",
                "Micro Frontend",
                "Azure DevOps",
            ],
            github: "#",
            live: "#",
        },
        {
            id: 2,
            title: "OTSY – Social Travel Platform",
            description:
                "Scalable admin panel for a social travel platform supporting 350,000+ experiences across 170+ countries. Features user management, experience and booking administration, content moderation, and real-time API integration.",
            image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
            tech: [
                "Next.js",
                "TypeScript",
                "Redux Toolkit",
                "GraphQL",
                "Material UI",
                "Azure DevOps",
            ],
            github: "#",
            live: "#",
        },
        {
            id: 3,
            title: "ProcedureSite (MedTel)",
            description:
                "Scalable and secure admin panel for managing medical procedures, users, and system workflows. Implements RBAC, dynamic data management, real-time updates, and optimized API integrations.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            tech: [
                "React",
                "TypeScript",
                "Redux Toolkit",
                "Node.js",
                "Firebase",
                "MUI",
            ],
            github: "#",
            live: "#",
        },
        {
            id: 4,
            title: "CPM-ELS eBook Licensing System",
            description:
                "eBook license management solution for CPM Educational Program staff and faculty. Supports license utilization tracking, district/school/class management, and three role-based workflows: Parent, Teacher, and District Admin.",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
            tech: [
                "React JS",
                "Redux",
                "Material UI",
                "SCSS",
                "Circle CI",
                "Bitbucket",
            ],
            github: "#",
            live: "#",
        },
        {
            id: 5,
            title: "iPost – Enterprise Email Platform",
            description:
                "Enterprise Email Service Provider (ESP) solution with custom analytics (Conversion, Funnel, and Page Tracking), RSS feed configuration, calendar scheduling, and Facebook Lead Ads API integration.",
            image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
            tech: [
                "React JS",
                "Node.js",
                "Express.js",
                "MySQL",
                "SCSS",
                "Webpack",
            ],
            github: "#",
            live: "#",
        },
    ],

    experienceData: [
        {
            id: 1,
            company: "NextGen Invent Pvt. Ltd.",
            role: "Senior Software Engineer",
            duration: "November 2022 – Present",
            description:
                "Lead a cross-functional team driving sprint execution, code quality, and release management. Own technical decision-making, mentor team members, and architect scalable frontend/backend solutions using microservices and micro frontend (Module Federation).",
            achievements: [
                "Led daily stand-ups, sprint planning, and stakeholder status updates",
                "Established and enforced code quality standards via PR reviews",
                "Implemented micro frontend architecture with Module Federation",
                "Identified performance bottlenecks and improved application efficiency",
                "Delivered MedTel SurgiScript, ProcedureSite, OTSY, and PlantOPS projects",
            ],
        },
        {
            id: 2,
            company: "Tech Tammina Pvt. Ltd.",
            role: "Senior Software Engineer",
            duration: "May 2020 – October 2022",
            description:
                "Worked on high-volume online services using Agile and Scrum principles. Handled requirements gathering, performance optimization, third-party API integrations, and new API endpoint development for distributed web applications.",
            achievements: [
                "Reduced average response time through critical code improvements",
                "Integrated third-party services and external APIs for SPAs",
                "Delivered CPM-ELS and OIC Payroll Automation projects",
                "Implemented Redux architecture for scalable state management",
            ],
        },
        {
            id: 3,
            company: "ClickMail Solutions Pvt. Ltd.",
            role: "Software Engineer",
            duration: "April 2018 – March 2020",
            description:
                "Developed enterprise email marketing modules with a custom analytics system, RSS feed configuration, calendar scheduling, and Facebook Lead Ads API integration.",
            achievements: [
                "Built custom analytics system using Google Analytics",
                "Developed React Full Calendar with custom configurations",
                "Integrated Facebook Lead Ads API into the marketing platform",
                "Implemented RSS feed customization for email content",
            ],
        },
        {
            id: 4,
            company: "Muvi Entertainment Pvt. Ltd.",
            role: "Software Engineer",
            duration: "August 2016 – March 2018",
            description:
                "Developed and maintained a PaaS-based OTT video streaming platform. Implemented scripts, transactional/analytical data structures, and customer order management systems.",
            achievements: [
                "Enhanced user experience through custom CMS scripts",
                "Designed transactional and analytical data structures",
                "Implemented customer order management systems",
                "Maintained and extended existing streaming platform features",
            ],
        },
        {
            id: 5,
            company: "AH Web Solutions Pvt. Ltd.",
            role: "Software Engineer",
            duration: "January 2016 – August 2016",
            description:
                "Developed and maintained PHP-based platforms. Responsible for back-end technology development, core functionality implementation, and CMS front-end programming.",
            achievements: [
                "Coded 10+ websites end-to-end",
                "Developed reusable code and core functionality modules",
                "Handled iterative testing, debugging, and code reviews",
            ],
        },
    ],
};