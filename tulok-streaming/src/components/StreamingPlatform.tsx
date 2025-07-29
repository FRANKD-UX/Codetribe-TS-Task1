import React, { useState } from 'react';
import { Search, Menu, Play, ChevronRight, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';
import { Movie, Genre } from '../types';
import { heroMovie, latestReleases, topTrending, genres } from '../data/mockData';
import ScrollableRow from './ScrollableRow';

const StreamingPlatform: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-black bg-opacity-50 fixed w-full top-0 z-10">
        <div className="flex items-center space-x-4">
          <Menu className="text-white cursor-pointer" size={24} />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="text-red-500 text-2xl font-bold">tulok</div>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="text-white cursor-pointer" size={24} />
          <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
            SUBSCRIBE
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${heroMovie.image})`,
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm text-gray-400 mb-2">STAR FOX ENTERTAINMENT PRESENTS</div>
            <div className="text-sm text-gray-400 mb-4">{heroMovie.subtitle}</div>
            <h1 className="text-6xl font-bold mb-6 tracking-wider">{heroMovie.title}</h1>
            
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-6">
              <span>{heroMovie.year}</span>
              <span>•</span>
              <span>{heroMovie.duration}</span>
              <span>•</span>
              <span>{heroMovie.language}</span>
              <span>•</span>
              <span>{heroMovie.genre}</span>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
              {heroMovie.description}
            </p>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
                <Play size={20} fill="white" />
                <span className="font-semibold">PLAY NOW</span>
              </button>
              <div className="text-sm text-gray-400">STREAMING NOW</div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-16 h-20 bg-gray-700 rounded overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=64&h=80&fit=crop`}
                  alt={`Scene ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button className="w-3 h-3 rounded-full bg-white"></button>
          <button className="w-3 h-3 rounded-full bg-gray-500"></button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ScrollableRow title="LATEST RELEASE" movies={latestReleases} />
        <ScrollableRow title="TOP TRENDING" movies={topTrending} showNumbers={true} />
        
        {/* Genre Selection */}
        <div className="mb-12">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
            <div className="flex-shrink-0 w-48 flex flex-col justify-between">
              <div>
                <h2 className="text-red-500 text-2xl font-bold tracking-wide mb-4">SELECT GENRE</h2>
                <div className="flex items-center text-gray-400 text-sm cursor-pointer hover:text-white">
                  <span className="mr-2">DRAG TO NEXT</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
            {genres.map((genre: Genre) => (
              <div
                key={genre.name}
                className={`${genre.color} w-48 h-72 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center flex-shrink-0`}
              >
                <h3 className="text-white text-xl font-bold text-center">{genre.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
            {/* Logo Section */}
            <div className="flex-shrink-0 w-48 flex flex-col">
              <div className="text-red-500 text-2xl font-bold mb-4">tulok</div>
              <div className="text-gray-400 text-sm space-y-2">
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>max007@example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+001 2345 67890</span>
                </div>
              </div>
            </div>
            
            {/* Company Section */}
            <div className="flex-shrink-0 w-48 flex flex-col">
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="cursor-pointer hover:text-white transition-colors">About Us</div>
                <div className="cursor-pointer hover:text-white transition-colors">Privacy Policy</div>
                <div className="cursor-pointer hover:text-white transition-colors">Contact Us</div>
              </div>
            </div>
            
            {/* Premium Movies Section */}
            <div className="flex-shrink-0 w-48 flex flex-col">
              <h4 className="text-white font-semibold mb-4">Premium Movies</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="cursor-pointer hover:text-white transition-colors">Pitmai</div>
                <div className="cursor-pointer hover:text-white transition-colors">Dead Evil</div>
                <div className="cursor-pointer hover:text-white transition-colors">Jigaal</div>
              </div>
            </div>
            
            {/* Quick Links Section */}
            <div className="flex-shrink-0 w-48 flex flex-col">
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="cursor-pointer hover:text-white transition-colors">Terms of Use</div>
                <div className="cursor-pointer hover:text-white transition-colors">Error</div>
                <div className="cursor-pointer hover:text-white transition-colors">Share Feedback</div>
              </div>
            </div>
            
            {/* Follow Us Section */}
            <div className="flex-shrink-0 w-48 flex flex-col">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="space-y-3 text-gray-400 text-sm mb-6">
                <div className="cursor-pointer hover:text-white transition-colors">Facebook</div>
                <div className="cursor-pointer hover:text-white transition-colors">YouTube</div>
                <div className="cursor-pointer hover:text-white transition-colors">Instagram</div>
                <div className="cursor-pointer hover:text-white transition-colors">Twitter</div>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors">
                  <Facebook size={16} className="text-white" />
                </div>
                <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors">
                  <Youtube size={16} className="text-white" />
                </div>
                <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors">
                  <Instagram size={16} className="text-white" />
                </div>
                <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors">
                  <Twitter size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2024 Tulok. All rights reserved. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StreamingPlatform;
