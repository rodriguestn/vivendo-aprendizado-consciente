import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
        featured ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "h-48 md:h-56 lg:h-full" : "h-44 md:h-48"}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4">
          <span className="px-2 py-1 md:px-3 bg-blue-600 text-white text-xs font-semibold rounded-full">
            {post.category}
          </span>
        </div>

        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-3 right-3 md:top-4 md:right-4">
            <span className="px-2 py-1 md:px-3 bg-amber-500 text-white text-xs font-semibold rounded-full">
              Destaque
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
            <span>{new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 md:w-4 md:h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 ${
          featured ? "text-lg md:text-xl lg:text-2xl" : "text-base md:text-lg"
        }`}>
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className={`text-gray-600 mb-3 md:mb-4 line-clamp-2 md:line-clamp-3 ${featured ? "text-sm md:text-base" : "text-xs md:text-sm"}`}>
          {post.excerpt}
        </p>

        {/* Tags - Hidden on mobile for non-featured */}
        <div className={`flex-wrap gap-2 mb-3 md:mb-4 ${featured ? "flex" : "hidden md:flex"}`}>
          {post.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Author & CTA */}
        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white text-xs font-bold">
              BC
            </div>
            <div>
              <p className="text-xs md:text-sm font-medium text-gray-900">Blau</p>
            </div>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-blue-600 font-medium text-xs md:text-sm hover:gap-2 transition-all"
          >
            Ler mais
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
