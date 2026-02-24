import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  Tag,
  ChevronRight,
  BookOpen
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/common/SEO";
import { BlogCard } from "@/components/blog/BlogCard";
import { getPostBySlug, getRecentPosts, blogPosts } from "@/data/blogPosts";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <SEO title="Artigo não encontrado" />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artigo não encontrado</h1>
          <p className="text-gray-600 mb-8">O artigo que você está procurando não existe.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Get recent posts for sidebar
  const recentPosts = getRecentPosts(5).filter(p => p.id !== post.id);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": [{
      "@type": "Organization",
      "name": post.author,
      "url": "https://blauconsultoria.com.br"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Blau Consultoria",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blauconsultoria.com.br/assets/logo-blau.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        type="article"
        canonical={`/blog/${post.slug}`}
        jsonLd={articleJsonLd}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-xs md:text-sm text-gray-300 mb-4 md:mb-6 overflow-x-auto whitespace-nowrap"
              >
                <Link to="/" className="hover:text-white transition">Home</Link>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                <Link to="/blog" className="hover:text-white transition">Blog</Link>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                <span className="text-amber-400 truncate">{post.category}</span>
              </motion.div>

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs md:text-sm font-medium rounded-full mb-3 md:mb-4">
                  {post.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
              >
                {post.title}
              </motion.h1>

              {/* Meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 md:gap-6 text-sm md:text-base text-gray-300"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white text-sm md:text-base font-bold">
                    BC
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm md:text-base">{post.author}</p>
                    <p className="text-xs md:text-sm text-gray-400 hidden md:block">{post.authorRole}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs md:text-sm">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs md:text-sm">
                  <Clock className="w-3 h-3 md:w-4 md:h-4" />
                  <span>{post.readTime}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Main Content */}
              <article className="lg:col-span-8 order-2 lg:order-1">
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8 lg:p-12">
                  {/* Excerpt */}
                  <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 pb-6 md:pb-8 border-b border-gray-100">
                    {post.excerpt}
                  </p>

                  {/* Article Content */}
                  <div className="prose prose-sm md:prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/60 prose-blockquote:rounded-r-lg prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-blockquote:my-3 prose-blockquote:font-normal">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                  </div>

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-5 h-5 text-gray-400" />
                      <span className="font-medium text-gray-900">Tags</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Share2 className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-900">Compartilhar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="p-2 rounded-full bg-[#0077b5] text-white hover:opacity-90 transition"
                          aria-label="Compartilhar no LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="p-2 rounded-full bg-[#1da1f2] text-white hover:opacity-90 transition"
                          aria-label="Compartilhar no Twitter"
                        >
                          <Twitter className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleShare('facebook')}
                          className="p-2 rounded-full bg-[#4267B2] text-white hover:opacity-90 transition"
                          aria-label="Compartilhar no Facebook"
                        >
                          <Facebook className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Author Card */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white text-xl font-bold shrink-0">
                        BC
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{post.author}</h4>
                        <p className="text-sm text-blue-600 mb-2">{post.authorRole}</p>
                        <p className="text-gray-600 text-sm">
                          Especialistas em transformar empresas através da educação corporativa estratégica.
                          Com mais de 20 anos de experiência, ajudamos organizações a desenvolver seus
                          talentos e criar culturas de aprendizado contínuo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back to Blog */}
                <div className="mt-8">
                  <button
                    onClick={() => navigate('/blog')}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar ao Blog
                  </button>
                </div>
              </article>

              {/* Sidebar - CTA on mobile */}
              <aside className="lg:col-span-4 order-1 lg:order-2">
                <div className="lg:sticky lg:top-24 space-y-6 lg:space-y-8">
                  {/* CTA Card - Shows first on mobile */}
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl md:rounded-2xl shadow-lg p-5 md:p-6 text-white">
                    <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">
                      Quer Transformar Sua Empresa?
                    </h3>
                    <p className="text-blue-100 text-sm mb-4 md:mb-6">
                      Descubra como o Blau Mapa pode revelar oportunidades ocultas no seu negócio.
                    </p>
                    <Link
                      to="/diagnostico"
                      className="inline-block w-full text-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition"
                    >
                      Conhecer o Blau Mapa
                    </Link>
                  </div>

                  {/* Recent Posts - Hidden on mobile, visible on lg */}
                  <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <h3 className="font-bold text-gray-900">Artigos Recentes</h3>
                    </div>
                    <div className="space-y-4">
                      {recentPosts.slice(0, 4).map((recentPost) => (
                        <Link
                          key={recentPost.id}
                          to={`/blog/${recentPost.slug}`}
                          className="flex gap-3 group"
                        >
                          <img
                            src={recentPost.image}
                            alt={recentPost.title}
                            className="w-16 h-16 object-cover rounded-lg shrink-0"
                          />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition">
                              {recentPost.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{recentPost.readTime}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 md:py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Artigos Relacionados</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
