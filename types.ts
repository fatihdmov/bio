export enum Page {
  HOME = 'HOME',
  PROMPTS = 'PROMPTS',
  EDUCATION = 'EDUCATION',
  ABOUT = 'ABOUT',
}

export interface PromptItem {
  id: string;
  title: string;
  prompts: string[]; // Changed from string to string[] to support multiple prompts
  tags: string[];
  imageUrl?: string; // Optional placeholder image
  date: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}