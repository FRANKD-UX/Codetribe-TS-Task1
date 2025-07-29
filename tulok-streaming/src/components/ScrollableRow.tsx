import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface ScrollableRowProps {
  title: string;
  movies: Movie[];
  showNumbers?: boolean;
}

const ScrollableRow: React.FC<ScrollableRowProps> = ({ 
  title, 
  movies, 
  showNumbers = false 
}) => (
  <div className="mb-12">
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
      <div className="flex-shrink-0 w-48 flex flex-col justify-between">
        <div>
          <h2 className="text-red-500 text-2xl font-bold tracking-wide mb-4">{title}</h2>
          <div className="flex items-center text-gray-400 text-sm cursor-pointer hover:text-white">
            <span className="mr-2">DRAG TO NEXT</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
      {movies.map((movie, index) => (
        <MovieCard 
          key={movie.id} 
          movie={movie} 
          showNumber={showNumbers}
          number={index + 1}
        />
      ))}
    </div>
  </div>
);

export default ScrollableRow;
