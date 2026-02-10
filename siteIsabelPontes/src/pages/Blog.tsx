import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import type { BlogCategory } from '@/types/blog';

const categories: { value: BlogCategory; label: string }[] = [
  { value: 'tutorial', label: 'Tutorial' },
  { value: 'behind-the-scenes', label: 'Behind the Scenes' },
  { value: 'inspiration', label: 'Inspiração' },
  { value: 'news', label: 'Notícias' },
  { value: 'técnica', label: 'Técnica' },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const otherPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-96 overflow-hidden bg-black">
        <video
          src="./hero/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-20 text-white">
            <h1 className="text-5xl font-bold leading-tight">Blog</h1>
            <p className="mt-4 text-lg text-white/90">
              Reflexões sobre fotografia, direção criativa e a jornada artística
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === null
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === cat.value
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-bold">Em Destaque</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 transition-transform hover:scale-105"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-semibold text-gray-500">
                      {categories.find((c) => c.value === post.category)?.label}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-black">{post.title}</h3>
                    <p className="mt-3 text-gray-700">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      <span>{post.readTime} min de leitura</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="mb-8 text-3xl font-bold">Todos os Artigos</h2>
          <div className="space-y-8">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group block border-b pb-8 transition-all hover:pl-4"
              >
                <div className="flex gap-6">
                  <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-lg bg-gray-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-gray-500">
                      {categories.find((c) => c.value === post.category)?.label}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-black">{post.title}</h3>
                    <p className="mt-3 text-gray-700">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      <span>{post.readTime} min de leitura</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
