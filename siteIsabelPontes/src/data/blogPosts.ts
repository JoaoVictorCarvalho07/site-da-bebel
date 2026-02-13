import { slugify } from '../utils/slugify';
import type { BlogPost } from '../types/blog';

type BlogPostInput = Omit<BlogPost, 'id'>;

const rawPosts: BlogPostInput[] = [
  {
    title: 'Técnica de Flash no Parque',
    excerpt: '...',
    content: '...',
    author: 'Isabel Pontes',
    category: 'técnica',
    image: '/blog/tecnica-flash-parque.jpg',
    date: '2026-02-12',
    readTime: 5,
    featured: true,
  },
  // ...
];

export const blogPosts: BlogPost[] = rawPosts.map((p) => ({
  ...p,
  id: slugify(p.title),
}));
