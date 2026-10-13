import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Calendar, 
  Clock, 
  ChevronRight, 
  X, 
  Share2, 
  BookOpen, 
  ExternalLink 
} from 'lucide-react';
import { newsArticles, newsCategories } from '../data/news';

export default function NewsListView({ onBackToHome, onNavigateShop }) {
  const [selectedCategory, setSelectedCategory] = useState('All News');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  // Filter articles based on category and search query
  const filteredArticles = useMemo(() => {
    let list = newsArticles;

    if (selectedCategory !== 'All News') {
      list = list.filter((a) => a.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.publication.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  // Featured article is the first in the list
  const featuredArticle = newsArticles[0];

  return (
    <div className="py-6 sm:py-10 bg-gray-50/70 min-h-screen">
      <div className="container mx-auto">
        
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <nav className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-gray-500">
            <button 
              onClick={onBackToHome} 
              className="hover:text-brand-900 font-medium cursor-pointer transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-brand-900 font-bold">Nu Skin In The News</span>
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#511B57] hover:text-[#3D1442] bg-white px-3.5 py-1.5 rounded-md border border-gray-200 shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Section Header Pill: — Nu Skin In The News — */}
        <div className="flex items-center justify-center my-6 sm:my-8">
          <div className="inline-flex items-center justify-center px-6 sm:px-12 py-2 sm:py-3 bg-brand-900 text-white font-black text-lg sm:text-2xl rounded-xl shadow-sm">
            <span className="w-4 sm:w-8 h-0.5 bg-white mr-2.5 sm:mr-3"></span>
            <span className="tracking-wide text-center">Nu Skin In The News</span>
            <span className="w-4 sm:w-8 h-0.5 bg-white ml-2.5 sm:mr-3"></span>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
            Press & Media Coverage
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Discover the latest press features, media mentions, product awards, and global publications highlighting Nu Skin's science, devices, and humanitarian initiatives.
          </p>
        </div>

        {/* Featured Top Story Banner (Spotlight Card) */}
        {selectedCategory === 'All News' && !searchQuery && (
          <div 
            onClick={() => setActiveArticle(featuredArticle)}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group mb-10 grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Left Image: 7 columns */}
            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-gray-100">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-brand-900 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded shadow-xs">
                Featured Story
              </span>
            </div>

            {/* Right Info: 5 columns */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-3 text-xs text-gray-400 font-semibold mb-3">
                  <span className="text-[#511B57] font-bold uppercase tracking-wider">
                    {featuredArticle.publication}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-gray-900 group-hover:text-brand-900 transition-colors leading-snug mb-3">
                  {featuredArticle.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="flex items-center text-xs sm:text-sm font-bold text-brand-900 group-hover:text-brand-950 transition-colors pt-4 border-t border-gray-100">
                <span>Read Full Article</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        )}

        {/* Filters & Search Toolbar */}
        <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 mb-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {newsCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#511B57] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input for News */}
          <div className="relative shrink-0 w-full md:w-64">
            <input
              type="text"
              placeholder="Search news or publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-gray-50 border border-gray-200 rounded-lg pl-8 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#511B57]"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* News Grid */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center my-6">
            <div className="w-16 h-16 bg-purple-50 text-brand-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-[#511B57]" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              No articles found
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-6">
              We couldn't find any news articles matching "{searchQuery}". Try selecting another category or clear your search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All News');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#511B57] hover:bg-[#3D1442] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              View All News
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="aspect-16/10 w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                      {article.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    {/* Publication & Meta */}
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 font-semibold mb-2">
                      <span className="text-[#511B57] font-bold">
                        {article.publication}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    {/* Headline Title */}
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-brand-900 transition-colors leading-snug line-clamp-2 mb-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer read link */}
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-brand-900 font-bold">
                  <span className="text-gray-400 font-normal text-[11px] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                  <div className="flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    <span>Read Story</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setActiveArticle(null)}
          />

          {/* Modal Container */}
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-8 animate-scaleUp">
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Publication & Date Header */}
            <div className="flex items-center gap-2.5 text-xs text-gray-500 font-medium mb-3">
              <span className="bg-purple-100 text-brand-900 font-bold px-2.5 py-0.5 rounded text-[11px]">
                {activeArticle.publication}
              </span>
              <span>•</span>
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug mb-4">
              {activeArticle.title}
            </h2>

            {/* Main Image */}
            <div className="w-full aspect-16/9 rounded-xl overflow-hidden bg-gray-100 mb-6">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Editorial Body Content */}
            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  setActiveArticle(null);
                  if (onNavigateShop) onNavigateShop();
                }}
                className="px-5 py-2.5 bg-brand-900 hover:bg-brand-950 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                Explore Featured Products
              </button>

              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
