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
    link: "https://github.com/SatyaKapardi/boAt.git"
  },
  {
    name: "Banking Application",
    techStack: ["Java", "Spring boot", "MySQL", "Spring Security"],
    description: "Microservices-based banking application",
    link: "https://github.com/SatyaKapardi/Banking-Application.git"
  },
  {
    name: "Health Insurance Claim Fraud Detection",
    techStack: ["Random Forest", "Support Vector Machine", "Logistic Regression"],
    description: "ML model to identify fraudulent insurance claims",
    link: "https://github.com/SatyaKapardi/Health-Insurance-Claim-Fraud-Detection.git"
  }
];

export const publications: Publication[] = [
  {
    title: "A study about Content-Based image Retrieval using features from Deep Neural Networks",
    conference: "IEEE ICCSAI 2023",
    year: "2023",
    abstract: "This paper compares traditional content-based image retrieval (CBIR) methods with deep convolutional neural network (CNN) models for feature extraction, demonstrating that pre-trained CNNs, particularly VGG16, significantly improve retrieval precision. The proposed approach achieved an average precision of 86.73%, outperforming conventional hand-crafted feature-based methods by 13.48%.",
    link: "https://ieeexplore.ieee.org/document/10421161"
  },
  {
    title: "A study of Deep Learning Algorithm for Brain Computer Interface Cinematics",
    conference: "IEEE IC3I 2022",
    year: "2022",
    abstract: "This research explores a deep learning model using EEG sensors to analyze audience emotional responses to film previews, achieving 85% accuracy in predicting viewer emotions to aid filmmakers in pre-release adjustments.",
    link: "https://ieeexplore.ieee.org/document/10072540"
  }
];


export const mediaList: Media[] = [
  // Anime
  {
    title: "Attack on Titan",
    type: "anime",
    imdbRating: 9.0,
    personalRating: 9.5,
    link: "https://www.imdb.com/title/tt2560140/",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Death Note",
    type: "anime",
    imdbRating: 9.0,
    personalRating: 9.3,
    link: "https://www.imdb.com/title/tt0877057/",
    image: "https://images.unsplash.com/photo-1612178537253-bccd437b730e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Naruto",
    type: "anime",
    imdbRating: 8.7,
    personalRating: 9.0,
    link: "https://www.imdb.com/title/tt0409591/",
    image: "https://images.unsplash.com/photo-1578632767837-990eb3b7275b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Jujutsu Kaisen",
    type: "anime",
    imdbRating: 8.8,
    personalRating: 9.2,
    link: "https://www.imdb.com/title/tt12343534/",
    image: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Demon Slayer",
    type: "anime",
    imdbRating: 8.7,
    personalRating: 9.1,
    link: "https://www.imdb.com/title/tt9335498/",
    image: "https://images.unsplash.com/photo-1614583225683-69db8b9965e4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "One Punch Man",
    type: "anime",
    imdbRating: 8.8,
    personalRating: 9.0,
    link: "https://www.imdb.com/title/tt4508902/",
    image: "https://images.unsplash.com/photo-1614583225792-b8e7cb6b3b1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Solo Leveling",
    type: "anime",
    imdbRating: 8.9,
    personalRating: 9.4,
    link: "https://www.imdb.com/title/tt17777156/",
    image: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sakamoto Days",
    type: "anime",
    imdbRating: 8.5,
    personalRating: 8.8,
    link: "https://www.imdb.com/title/tt21358866/",
    image: "https://images.unsplash.com/photo-1614583225683-69db8b9965e4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Haikyu!!",
    type: "anime",
    imdbRating: 8.7,
    personalRating: 9.2,
    link: "https://www.imdb.com/title/tt3398540/",
    image: "https://images.unsplash.com/photo-1614583225792-b8e7cb6b3b1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Kuroko's Basketball",
    type: "anime",
    imdbRating: 8.3,
    personalRating: 8.9,
    link: "https://www.imdb.com/title/tt2408606/",
    image: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hunter x Hunter",
    type: "anime",
    imdbRating: 8.9,
    personalRating: 9.3,
    link: "https://www.imdb.com/title/tt2098220/",
    image: "https://images.unsplash.com/photo-1614583225683-69db8b9965e4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Suzume",
    type: "anime",
    imdbRating: 7.8,
    personalRating: 8.5,
    link: "https://www.imdb.com/title/tt16428256/",
    image: "https://images.unsplash.com/photo-1614583225792-b8e7cb6b3b1d?auto=format&fit=crop&q=80&w=800"
  },
  
  // TV Shows
  {
    title: "The Office",
    type: "TV Shows",
    imdbRating: 8.9,
    personalRating: 9.4,
    link: "https://www.imdb.com/title/tt0386676/",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Friends",
    type: "TV Shows",
    imdbRating: 8.9,
    personalRating: 9.2,
    link: "https://www.imdb.com/title/tt0108778/",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Formula 1",
    type: "TV Shows",
    imdbRating: 8.8,
    personalRating: 9.5,
    link: "https://www.imdb.com/title/tt8289930/",
    image: "https://images.unsplash.com/photo-1504817343863-5092a923803e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Suits",
    type: "TV Shows",
    imdbRating: 8.5,
    personalRating: 9.0,
    link: "https://www.imdb.com/title/tt1632701/",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Breaking Bad",
    type: "TV Shows",
    imdbRating: 9.5,
    personalRating: 9.7,
    link: "https://www.imdb.com/title/tt0903747/",
    image: "https://images.unsplash.com/photo-1562159278-1253a58da141?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Young Sheldon",
    type: "TV Shows",
    imdbRating: 7.6,
    personalRating: 8.5,
    link: "https://www.imdb.com/title/tt6226232/",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Better Call Saul",
    type: "TV Shows",
    imdbRating: 9.0,
    personalRating: 9.3,
    link: "https://www.imdb.com/title/tt3032476/",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Dexter",
    type: "TV Shows",
    imdbRating: 8.6,
    personalRating: 9.0,
    link: "https://www.imdb.com/title/tt0773262/",
    image: "https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Brooklyn Nine-Nine",
    type: "TV Shows",
    imdbRating: 8.4,
    personalRating: 9.1,
    link: "https://www.imdb.com/title/tt2467372/",
    image: "https://images.unsplash.com/photo-1533470192478-9897d90d5461?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Dynasty",
    type: "TV Shows",
    imdbRating: 7.3,
    personalRating: 8.0,
    link: "https://www.imdb.com/title/tt6128300/",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Succession",
    type: "TV Shows",
    imdbRating: 8.9,
    personalRating: 9.4,
    link: "https://www.imdb.com/title/tt7660850/",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Game of Thrones",
    type: "TV Shows",
    imdbRating: 9.3,
    personalRating: 9.5,
    link: "https://www.imdb.com/title/tt0944947/",
    image: "https://images.unsplash.com/photo-1600776ead6d9e9d4d2f5c0d7b202c9a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Avatar: The Last Airbender",
    type: "TV Shows",
    imdbRating: 9.3,
    personalRating: 9.6,
    link: "https://www.imdb.com/title/tt0417299/",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800"
  }
];

export const financeResources: FinanceResource[] = [
  // Books
  {
    name: "The Psychology of Money",
    type: "book",
    description: "Timeless lessons on wealth, greed, and happiness",
    link: "https://www.goodreads.com/book/show/41881472-the-psychology-of-money",
    category: "reading",
    author: "Morgan Housel"
  },
  {
    name: "The Intelligent Investor",
    type: "book",
    description: "The definitive book on value investing",
    link: "https://www.goodreads.com/book/show/106835.The_Intelligent_Investor",
    category: "reading",
    author: "Benjamin Graham"
  },
  {
    name: "The Dhandho Investor",
    type: "book",
    description: "Low-risk value method to high returns",
    link: "https://www.goodreads.com/book/show/500514.The_Dhandho_Investor",
    category: "reading",
    author: "Mohnish Pabrai"
  },
  {
    name: "Diamonds in the Dust",
    type: "book",
    description: "Consistent compounding for extraordinary wealth creation",
    link: "https://www.goodreads.com/book/show/58505700-diamonds-in-the-dust",
    category: "reading",
    author: "Aswath Damodaran"
  },
  {
    name: "The Little Book of Valuation",
    type: "book",
    description: "How to value a company, pick a stock, and profit",
    link: "https://www.goodreads.com/book/show/10303670-the-little-book-of-valuation",
    category: "reading",
    author: "Aswath Damodaran"
  },
  {
    name: "Principles for Dealing with the Changing World Order",
    type: "book",
    description: "Why nations succeed and fail",
    link: "https://www.goodreads.com/book/show/56829094-principles-for-dealing-with-the-changing-world-order",
    category: "reading",
    author: "Ray Dalio"
  },
  {
    name: "Richer, Wiser, Happier",
    type: "book",
    description: "How the world's greatest investors win in markets and life",
    link: "https://www.goodreads.com/book/show/54898389-richer-wiser-happier",
    category: "reading",
    author: "William Green"
  },

  // Articles
  {
    name: "Berkshire Hathaway Shareholder Letters",
    type: "article",
    description: "Warren Buffett's annual letters to shareholders",
    link: "https://www.berkshirehathaway.com/letters/letters.html",
    category: "reading",
    author: "Warren Buffett"
  },
  {
    name: "Nomad Investment Partnership Letters",
    type: "article",
    description: "Investment insights and philosophy",
    link: "https://www.valuewalk.com/nomad-investment-partnership/",
    category: "reading",
    author: "Nicholas Sleep"
  },
  {
    name: "Amazon Annual Shareholder Letters",
    type: "article",
    description: "Jeff Bezos's vision and business principles",
    link: "https://ir.aboutamazon.com/annual-reports-proxies-and-shareholder-letters/default.aspx",
    category: "reading",
    author: "Jeff Bezos"
  },

  // YouTube Channels
  {
    name: "Mohnish Pabrai",
    type: "youtube",
    description: "Value investing wisdom and investment strategies",
    link: "https://www.youtube.com/@MohnishPabrai",
    category: "reading",
    subscribers: "100K+"
  },
  {
    name: "New Money",
    type: "youtube",
    description: "Modern financial education and investment strategies",
    link: "https://www.youtube.com/@NewMoney",
    category: "reading",
    subscribers: "1M+"
  },
  {
    name: "Hamish Hodder",
    type: "youtube",
    description: "Value investing analysis and stock deep dives",
    link: "https://www.youtube.com/@HamishHodder",
    category: "reading",
    subscribers: "50K+"
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

  // Tracking Tools
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
  image: "https://github.com/SatyaKapardi/Portfolio/raw/main/src/myphoto.jpeg",
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
