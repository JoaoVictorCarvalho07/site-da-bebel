export interface TeamMember {
  id: string;
  name: string;
  role: 'model' | 'stylist' | 'makeup' | 'assistant' | 'hair' | 'producer';
  image: string;
  instagram?: string;
  portfolio?: string;
}

export interface Photoshoot {
  id: string;
  title: string;
  description: string;
  concept: string;
  date: string;
  location: string;
  images: string[];
  models: TeamMember[];
  helpers: TeamMember[];
  featured: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category:
    | 'editorial'
    | 'direção-criativa'
    | 'mídia-kit'
    | 'conceitual'
    | 'independente';
  image: string;
  photoshoots: Photoshoot[];
}
