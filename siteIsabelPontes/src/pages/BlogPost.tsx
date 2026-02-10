import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-2xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-black">Artigo não encontrado</h1>
          <p className="mt-4 text-gray-700">Desculpe, este artigo não existe.</p>
          <Link to="/blog" className="mt-8 inline-block">
            <Button>Voltar ao Blog</Button>
          </Link>
        </section>
      </main>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.id === id);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <section className="h-[60vh] min-h-96 overflow-hidden">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
      </section>

      {/* Content */}
      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 border-b pb-8">
          <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
            <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
            <span>•</span>
            <span>{post.readTime} min de leitura</span>
          </div>
          <h1 className="text-4xl font-bold text-black">{post.title}</h1>
          <div className="mt-6 flex items-center gap-4">
            <div>
              <p className="font-semibold text-black">{post.author}</p>
              <p className="text-sm text-gray-600">Fotógrafa e Diretora Criativa</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-8 text-lg leading-relaxed text-gray-800">{post.content}</p>

          {/* Additional content sections */}
          <div className="my-12 rounded-lg bg-gray-50 p-8">
            <h2 className="mb-4 text-2xl font-bold">Principais Pontos</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-black">•</span>
                <span>A qualidade técnica e criatividade andam de mãos dadas na fotografia artística</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black">•</span>
                <span>A direção de pessoas é tão importante quanto a direção da câmera</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black">•</span>
                <span>Cada projeto é uma oportunidade de contar uma história única</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        {(previousPost || nextPost) && (
          <div className="mt-16 border-t pt-12">
            <h3 className="mb-8 text-xl font-bold">Leia Próximo</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {previousPost && (
                <Link
                  to={`/blog/${previousPost.id}`}
                  className="group block rounded-lg bg-gray-50 p-6 transition-all hover:bg-gray-100"
                >
                  <p className="text-sm text-gray-600">Artigo Anterior</p>
                  <h4 className="mt-2 font-semibold text-black group-hover:underline">
                    {previousPost.title}
                  </h4>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.id}`}
                  className="group block rounded-lg bg-gray-50 p-6 transition-all hover:bg-gray-100"
                >
                  <p className="text-sm text-gray-600">Próximo Artigo</p>
                  <h4 className="mt-2 font-semibold text-black group-hover:underline">
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-12">
          <Link to="/blog">
            <Button variant="outline">← Voltar ao Blog</Button>
          </Link>
        </div>
      </article>
    </main>
  );
}
