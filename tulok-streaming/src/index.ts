export interface Movie {
  id: number;
  title: string;
  image: string;
  year?: number;
  genre?: string;
  rating?: string;
}

export interface Genre {
  name: string;
  color: string;
}

export interface HeroMovie {
  title: string;
  subtitle: string;
  year: string;
  duration: string;
  language: string;
  genre: string;
  description: string;
  image: string;
}
