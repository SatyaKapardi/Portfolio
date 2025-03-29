export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Project {
  name: string;
  techStack: string[];
  description: string;
  link: string;
}

export interface Publication {
  title: string;
  conference: string;
  year: string;
  abstract: string;
  link: string;
}

export interface Media {
  title: string;
  type: 'TV Shows' | 'movie' | 'anime';
  imdbRating: number;
  personalRating: number;
  link: string;
  image: string;
}

export interface FinanceResource {
  name: string;
  type: 'article' | 'book' | 'website' | 'post' | 'youtube';
  description: string;
  link: string;
  category?: 'reading' | 'tracking';
  author?: string;
  date?: string;
  subscribers?: string;
}

export interface AboutMe {
  name: string;
  title: string;
  image: string;
  bio: string;
  expertise: string[];
  softSkills: string[];
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
  };
  hobbies: string[];
}