import { Movie, Genre, HeroMovie } from '../types';

export const heroMovie: HeroMovie = {
  title: "JYOTSNA",
  subtitle: "BEDER MEYE",
  year: "2023",
  duration: "2h 7m",
  language: "Multi Language",
  genre: "Sci-fi/Adventure",
  description: "In the depths of a remote mountain village, young girl encounters ancient mysteries that soon becomes a terrifying experience.",
  image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=450&fit=crop"
};

export const latestReleases: Movie[] = [
  { id: 1, title: "SABOO", image: "https://images.unsplash.com/photo-1489599510086-7c6b5ad6e814?w=200&h=300&fit=crop", genre: "ULTIMATE SOLDIER" },
  { id: 2, title: "VIKINGS", image: "https://images.unsplash.com/photo-1635863138275-d9864d32b7d4?w=200&h=300&fit=crop" },
  { id: 3, title: "Trikon Premier Goppo", image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=200&h=300&fit=crop" },
  { id: 4, title: "CRACKITT", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop" }
];

export const topTrending: Movie[] = [
  { id: 1, title: "Gladiator", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200&h=300&fit=crop" },
  { id: 2, title: "DMPM", image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=200&h=300&fit=crop" },
  { id: 3, title: "ASTECTET", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=300&fit=crop" },
  { id: 4, title: "ROYAL", image: "https://images.unsplash.com/photo-1594736797933-d0d9a14d05d0?w=200&h=300&fit=crop" }
];

export const genres: Genre[] = [
  { name: "ROMANTIC", color: "bg-red-600" },
  { name: "THRILLER", color: "bg-purple-600" },
  { name: "COMEDY", color: "bg-teal-500" },
  { name: "ADVENTURE", color: "bg-orange-500" }
];
