import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  showNumber?: boolean;
  number?: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ 
  movie, 
  showNumber = false, 
  number 
}) => (
  <div className="relative group cursor-pointer flex-shrink-0">
    <div className="relative w-48 h-72 bg-gray-800 rounded-lg overflow-hidden">
      <img 
        src={movie.image} 
        alt={movie.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {showNumber && (
        <div className="absolute bottom-2 right-2 text-6xl font-bold text-white opacity-80">
          {number}
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white font-bold text-sm mb-1">{movie.title}</h3>
        {movie.genre && (
          <p className="text-gray-300 text-xs">{movie.genre}</p>
        )}
      </div>
    </div>
  </div>
);

export default MovieCard;
