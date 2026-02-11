export type BlogCategory =
  | 'tutorial'
  | 'behind-the-scenes'
  | 'inspiration'
  | 'news'
  | 'técnica';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: BlogCategory;
  image: string;
  date: string;
  readTime: number;
  featured: boolean;
}
