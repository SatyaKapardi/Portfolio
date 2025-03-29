import { Experience, Project, Publication, Media, FinanceResource, AboutMe } from './types';

export const experiences: Experience[] = [
  {
    company: "Oracle",
    role: "Software Engineer Intern",
    duration: "January 2024 - July 2024",
    description: [
      "🚀 Optimized data workflows at Oracle's Opower, automating migrations & transforming millions of customer records! 📊⚡"
    ]
  },
  {
    company: "Scale.AI",
    role: "Freelance Competitive Coder AI Trainer",
    duration: "July 2023 - December 2023",
    description: [
      "🤖 Trained AI at Scale.AI, crafting algorithms to boost LLM performance by 25%! 🚀📈"
    ]
  },
  {
    company: "Ignitus",
    role: "Machine Learning Intern",
    duration: "March 2023 - June 2023",
    description: [
      "🔍🧠 Leveraged ML at Ignitus to segment customers & predict churn, reducing churn rate by 15% with data-driven retention strategies! 📊🚀"
    ]
  }
];

export const projects: Project[] = [
  {
    name: "boAt",
    techStack: ["Javascript", "Node.js", "Sanity", "Stripe"],
    description: "A web application to buy and sell headphones",
    link: "https://github.com/yourusername/boat"
  },
  {
    name: "Banking Application",
    techStack: ["Java", "Spring boot", "MySQL", "Spring Security"],
    description: "Microservices-based banking application",
    link: "https://github.com/yourusername/banking-app"
  },
  {
    name: "Health Insurance Claim Fraud Detection",
    techStack: ["Random Forest", "Support Vector Machine", "Logistic Regression"],
    description: "ML model to identify fraudulent insurance claims",
    link: "https://github.com/yourusername/fraud-detection"
  }
];

export const publications: Publication[] = [
  {
    title: "A study about Content-Based image Retrieval using features from Deep Neural Networks",
    conference: "IEEE ICCSAI 2023",
    year: "2023",
    abstract: "This paper compares traditional content-based image retrieval (CBIR) methods with deep convolutional neural network (CNN) models for feature extraction, demonstrating that pre-trained CNNs, particularly VGG16, significantly improve retrieval precision. The proposed approach achieved an average precision of 86.73%, outperforming conventional hand-crafted feature-based methods by 13.48%.",
    link: "https://example.com/paper1"
  },
  {
    title: "A study of Deep Learning Algorithm for Brain Computer Interface Cinematics",
    conference: "IEEE IC3I 2022",
    year: "2022",
    abstract: "This research explores a deep learning model using EEG sensors to analyze audience emotional responses to film previews, achieving 85% accuracy in predicting viewer emotions to aid filmmakers in pre-release adjustments.",
    link: "https://example.com/paper2"
  }
];

export const mediaList: Media[] = [
  {
    title: "Attack on Titan",
    type: "anime",
    imdbRating: 9.0,
    personalRating: 9.5,
    link: "https://www.imdb.com/title/tt2560140/",
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=800"
  }
];

export const financeResources: FinanceResource[] = [
  {
    name: "The Psychology of Money",
    type: "book",
    description: "Timeless lessons on wealth, greed, and happiness",
    link: "https://www.goodreads.com/book/show/41881472-the-psychology-of-money",
    category: "reading",
    author: "Morgan Housel"
  },
  {
    name: "The Plain Bagel",
    type: "youtube",
    description: "In-depth explanations of financial concepts and market analysis",
    link: "https://www.youtube.com/@ThePlainBagel",
    category: "reading",
    subscribers: "500K+"
  },
  {
    name: "Patrick Boyle",
    type: "youtube",
    description: "Professional insights into finance and investment strategies",
    link: "https://www.youtube.com/@PBoyle",
    category: "reading",
    subscribers: "250K+"
  },
  {
    name: "Ben Felix",
    type: "youtube",
    description: "Evidence-based investing and financial planning",
    link: "https://www.youtube.com/@BenFelix",
    category: "reading",
    subscribers: "300K+"
  },
  {
    name: "TradingView",
    type: "website",
    description: "Technical analysis platform for traders and investors",
    link: "https://www.tradingview.com",
    category: "tracking"
  }
];

export const aboutMe: AboutMe = {
  name: "Srisatya Kapardi Budi",
  title: "Software Engineer",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  bio: "Passionate software engineer with a strong foundation in CS, excelling in problem-solving, optimization, and scalable system design. Thrives on building efficient, impactful tech solutions. 🚀",
  expertise: ["React", "TypeScript", "Node.js", "Python", "AWS", "MongoDB", "Javascript", "C++", "Java", "Spring Boot"],
  softSkills: [
    "Leadership",
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Adaptability",
    "Time Management",
    "Critical Thinking"
  ],
  socials: {
    github: "https://github.com/SatyaKapardi/",
    linkedin: "https://www.linkedin.com/in/satyakapardi/",
    leetcode: "https://leetcode.com/u/bskapardi2002/"
  },
  hobbies: ["Anime", "Reading", "Personal Finance", "Movies", "TV Shows"]
};
