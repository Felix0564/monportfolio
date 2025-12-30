
export type Category = 'AI' | 'Data Science' | 'BI' | 'Mobile' | 'Web';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: Category;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  role: string;
  period: string;
  ecole: string;
  
  //description: string[];
}