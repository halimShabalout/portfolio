export const profile = {
  name: "Halim Shabalout",
  title: "Software Engineer",
  subtitle: "Full-Stack Developer",
  location: "Jeddah, Saudi Arabia",
  email: "halim.codes@gmail.com",
  phone: "+966 504 615 016",
  yearsOfExperience: "4+ years",
  github: "https://github.com/halimShabalout",
  linkedin: "https://www.linkedin.com/in/halim-shabalout-372a24215/",
  summary:
    "Full-Stack Software Engineer with 4+ years of experience building scalable web applications using TypeScript, Next.js, React, Node.js, and NestJS. Experienced in designing RESTful APIs, implementing clean architecture, and developing modern, high-performance web applications. Passionate about AI-powered solutions, developer tools, and delivering production-ready software. Currently seeking Full-Stack Software Engineer or AI-focused development opportunities.",
  tagline:
    "Building modern web applications with Next.js, NestJS & TypeScript.",
  heroBio:
    "Software engineer passionate about building scalable web applications, AI-powered products, and intuitive user experiences. From backend architecture to modern frontend interfaces, I enjoy transforming ideas into production-ready software.",
  status: "Open to work",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      "TypeScript",
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "Redux",
      "SSR",
      "SSG",
    ],
  },
  {
    category: "Backend",
    items: ["NestJS", "Node.js", "Laravel", "RESTful APIs"],
  },
  {
    category: "Database & ORM",
    items: ["PostgreSQL", "MySQL", "Prisma", "TypeORM"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "CI/CD", "Vercel", "Git"],
  },
  {
    category: "Practices",
    items: [
      "Clean Architecture",
      "SOLID Principles",
      "Jest",
      "React Testing Library",
      "WordPress",
    ],
  },
  {
    category: "Other",
    items: ["AI-Augmented Development", "Prompt Engineering", "Agile / Scrum"],
  },
];

export const experience = [
  {
    role: "Freelance Software Developer & Independent Projects",
    company: "Freelance",
    website: null,
    location: "Jeddah, Saudi Arabia",
    dates: "September 2024 – Present",

    projects: [],

    points: [
      "Designed and developed full-stack web applications, from requirements analysis and technical architecture design to development, testing, and deployment.",
      "Used AI tools, large language models (LLMs), and prompt engineering to improve software development workflows, accelerate feature development, and assist with debugging and technical research.",
      "Developed Imaginov, an independent AI-powered SaaS project, using NestJS for the backend and Next.js for the frontend.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Aarti Muhendislik",
    website: "https://aartimuhendislik.com/index-en.html",
    location: "Mersin, Türkiye",
    dates: "October 2023 – September 2024",

    projects: [
      {
        name: "Intel 50001",
        description:
          "An energy management software system based on the ISO 50001 standard, enabling organizations to monitor energy consumption, analyze data, and identify opportunities to improve efficiency and reduce costs.",
        url: null,
        type: "private",
      },
    ],

    points: [
      "Developed an energy management system for Esan, a subsidiary of the Eczacıbaşı Group, by building RESTful APIs with Laravel and interactive dashboards using React.js and Redux.",
      "Configured the development environment with Docker, helping reduce environment setup issues and accelerate the onboarding of new developers.",
      "Designed and implemented new features that improved monitoring system performance and the reliability of industrial energy data.",
    ],
  },
  {
    role: "Software Project Manager",
    company: "Paracim",
    website: "https://paracim.com.tr/",
    location: "Konya, Türkiye",
    dates: "May 2023 – September 2023",

    projects: [
      {
        name: "Tahsilate",
        description:
          "An electronic payment collection platform providing online payment solutions, including Virtual POS.",
        url: "https://tahsilate.com/",
        type: "product",
      },
    ],

    points: [
      "Led the software development effort and contributed to rebuilding the Virtual POS platform from the ground up using Laravel and Vue.js, through to the launch of the new version.",
      "Organized and distributed development tasks among team members and monitored their execution, while coordinating technical requirements and project development milestones.",
      "Contributed to developing APIs and integrating them with payment services, as well as testing the system and resolving issues to ensure stability.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Logical Defense",
    website: "https://www.logdef.com/",
    location: "Elazığ, Türkiye",
    dates: "April 2022 – April 2023",

    projects: [],

    points: [
      "Designed and developed a comprehensive e-learning platform for managing lessons, exams, and assignments, using Laravel 8 for the backend and Angular 14 for the frontend.",
      "Designed and documented RESTful APIs to support real-time content delivery and track user progress.",
      "Delivered website projects for clients using WordPress, developing custom themes and integrating the required plugins.",
    ],
  },
];

export const projects = [
  {
    name: "Jeddah Marble",
    description:
      "A comprehensive digital platform for a marble supply company, built with Next.js, NestJS, PostgreSQL, and Prisma. It includes a custom content and product management system, responsive interfaces, and communication integrations that make it easier to receive customer inquiries.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    href: "https://jeddahmarble.com/",
    status: "Live",
  },
  {
    name: "Etimad Point",
    description:
      "An integrated business platform designed and developed with Next.js, NestJS, and MySQL, featuring responsive user interfaces, RESTful APIs, and a scalable backend architecture to support digital content and business workflows.",
    tags: ["Next.js", "NestJS", "MySQL", "REST API", "Arabic / English"],
    href: "https://etimadpoint.cloud/ar",
    status: "Live",
  },
  {
    name: "Makkah Orthodontist",
    description:
      "A website for a specialized orthodontic center, developed with Next.js and support for Arabic and English. It includes service and doctor information pages, visual content, and SEO and performance optimizations to help patients access information and services.",
    tags: ["Next.js", "Responsive Design", "SEO", "Arabic / English"],
    href: "https://makkahorthodontist.com/ar",
    status: "Live",
  },
  {
    name: "Bonian Al Fakh amah",
    description:
      "A complete website for a company operating in the construction and real estate sectors, including website design and development and content management system integration.",
    tags: ["WordPress", "Full-Stack"],
    href: "https://bonianalfakhamah.com/",
    status: "Live",
  },
  {
    name: "PixelForge",
    description:
      "An open-source image editor that runs directly in the browser, built with Next.js. It focuses on efficient client-side image processing using the HTML Canvas API, with ongoing improvements to editing capabilities and user experience.",
    tags: ["Next.js", "Canvas API", "Open Source"],
    href: "https://pixelforge-eta-gray.vercel.app/",
    status: "Active Development",
  },
  {
    name: "Imaginov",
    description:
      "An AI-powered SaaS platform being independently designed and developed with Next.js and NestJS. It focuses on integrating AI technologies, building a scalable software architecture, and developing modern productivity tools for developers. The project is private and remains under development.",
    tags: ["Next.js", "NestJS", "AI Integration"],
    href: null,
    status: "Private",
  },
];

export const achievements = [
  {
    text: "Contributed to the development and launch of web applications in the education, energy management, and payment systems sectors.",
  },
  {
    text: "Developed full-stack web applications using Next.js, NestJS, React, and Laravel.",
  },
  {
    text: "Delivered digital projects and collaborated with clients and companies in Saudi Arabia and Türkiye.",
  },
  {
    text: "Participated in various stages of software development, from requirements analysis and solution design to development, testing, and deployment.",
  },
  {
    text: "Explored and applied AI technologies and integrated large language models (LLMs) into web applications.",
  },
];


export const education = {
  school: "Firat University — Elazig, Turkiye",
  degree: "Bachelor of Science in Software Engineering",
  dates: "2018 – 2022",
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "Turkish", level: "Fluent" },
  { name: "English", level: "Professional" },
  { name: "German", level: "Basic (A1)" },
];
