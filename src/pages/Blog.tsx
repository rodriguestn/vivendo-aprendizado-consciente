import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, BookOpen, TrendingUp, Users, Lightbulb } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/common/SEO";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts, getAllCategories, getFeaturedPosts } from "@/data/blogPosts";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts();

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = !selectedCategory || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const stats = [
    { icon: BookOpen, value: "25+", label: "Artigos Publicados" },
    { icon: Users, value: "10k+", label: "Leitores Mensais" },
    { icon: TrendingUp, value: "95%", label: "Satisfação" },
    { icon: Lightbulb, value: "100+", label: "Insights Práticos" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="Blog | Insights e Tendências"
        description="Artigos, tendências e melhores práticas sobre educação corporativa, liderança e desenvolvimento humano."
        canonical="/blog"
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium mb-6">
                  Blog Blau Consultoria
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                  Insights Para{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                    Transformar
                  </span>{" "}
                  Sua Empresa
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
                  Artigos especializados sobre educação corporativa, desenvolvimento de líderes e
                  formação de núcleos educacionais que geram resultados reais.
                </p>
              </motion.div>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Buscar artigos, temas ou tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white shadow-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                  />
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-3">
                      <stat.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-4 md:py-6 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-20 z-30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
              <div className="flex items-center gap-2 text-gray-500 shrink-0">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filtrar:</span>
              </div>

              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${!selectedCategory
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                Todos
              </button>

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {!searchTerm && !selectedCategory && (
          <section className="py-12 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Artigos em Destaque</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <BlogCard key={post.id} post={post} featured />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {selectedCategory ? selectedCategory : "Todos os Artigos"}
                </h2>
              </div>
              <span className="text-gray-500 text-sm">
                {filteredPosts.length} artigo{filteredPosts.length !== 1 ? "s" : ""} encontrado
                {filteredPosts.length !== 1 ? "s" : ""}
              </span>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum artigo encontrado</h3>
                <p className="text-gray-500">
                  Tente buscar por outros termos ou remova os filtros aplicados.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Receba Insights Exclusivos
                </h2>
                <p className="text-blue-100 mb-8">
                  Assine nossa newsletter e receba conteúdos exclusivos sobre educação corporativa
                  diretamente no seu e-mail.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 font-semibold rounded-full hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg"
                  >
                    Assinar
                  </button>
                </form>

                <p className="text-sm text-blue-200 mt-4">
                  Enviamos apenas conteúdo relevante. Sem spam, prometemos.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
