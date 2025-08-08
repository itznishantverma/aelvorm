'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection({ userTier = 'free', isLoggedIn = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock data - replace with actual API calls
  const heroContent = {
    free: [
      {
        id: 1,
        title: "Understanding Climate Change: A Comprehensive Guide",
        excerpt: "Explore the science behind climate change and its global impact on our planet's future.",
        image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Environment",
        readTime: "8 min read",
        isPremium: false,
        isSponsored: false
      },
      {
        id: 2,
        title: "The Future of Artificial Intelligence in Healthcare",
        excerpt: "Discover how AI is revolutionizing medical diagnosis and treatment. Unlock the full article with Premium membership to learn about cutting-edge applications...",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Technology",
        readTime: "12 min read",
        isPremium: true,
        isSponsored: false
      }
    ],
    premium: [
      {
        id: 2,
        title: "The Future of Artificial Intelligence in Healthcare",
        excerpt: "Discover how AI is revolutionizing medical diagnosis and treatment, from predictive analytics to robotic surgery and personalized medicine.",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Technology",
        readTime: "12 min read",
        isPremium: true,
        isSponsored: false
      },
      {
        id: 3,
        title: "Advanced Quantum Computing: Breaking the Barriers",
        excerpt: "An in-depth analysis of quantum computing breakthroughs and their implications for cryptography, drug discovery, and financial modeling.",
        image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Science",
        readTime: "15 min read",
        isPremium: true,
        isSponsored: false
      }
    ]
  };

  const currentContent = userTier === 'premium' ? heroContent.premium : heroContent.free;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentContent.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const currentArticle = currentContent[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                {currentArticle.category}
              </span>
              {currentArticle.isPremium && (
                <span className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-medium rounded-full">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Premium
                </span>
              )}
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {currentArticle.readTime}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              {currentArticle.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {currentArticle.excerpt}
            </p>

            {/* Premium Teaser for Free Users */}
            {currentArticle.isPremium && userTier === 'free' && (
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-yellow-800 dark:text-yellow-200">Premium Content</span>
                </div>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-3">
                  Unlock the full article and access exclusive insights, detailed analysis, and expert commentary.
                </p>
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                  Upgrade to Premium
                </button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                Read Article
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Save for Later
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={currentArticle.image}
                alt={currentArticle.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Slide Indicators */}
            {currentContent.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {currentContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentSlide
                        ? 'bg-blue-600'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
}