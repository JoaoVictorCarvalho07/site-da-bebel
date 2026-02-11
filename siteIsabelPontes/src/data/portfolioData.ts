import type { PortfolioProject } from '@/types/portfolio';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'afrodite',
    title: 'Afrodite',
    description: 'Uma exploração artística dos arquétipos femininos modernos',
    category: 'editorial',
    image: '/cards/Milena.jpg',
    photoshoots: [
      {
        id: 'afrodite-1',
        title: 'Ensaio Afrodite - Parte 1',
        description:
          'Primeiras imagens da série Afrodite com foco em graça e poder feminino',
        concept: 'Deusa mitológica na modernidade',
        date: '2024-01-10',
        location: 'Manaus, AM',
        images: ['/cards/Milena.jpg', '/cards/Director.jpg'],
        models: [
          {
            id: 'model-1',
            name: 'Milena Silva',
            role: 'model',
            image: '/cards/Milena.jpg',
            instagram: '@milenasilvaa',
            portfolio: 'https://portfolio.com/milena',
          },
        ],
        helpers: [
          {
            id: 'helper-1',
            name: 'Ana Costa',
            role: 'makeup',
            image: '/cards/Director.jpg',
            instagram: '@anacostamakeup',
          },
          {
            id: 'helper-2',
            name: 'Lucas Ferreira',
            role: 'assistant',
            image: '/cards/Director.jpg',
          },
        ],
        featured: true,
      },
    ],
  },
  {
    id: 'midia-kit',
    title: 'Mídia Kit & Creator',
    description:
      'Conteúdo autêntico com estética elevada para criadores digitais',
    category: 'direção-criativa',
    image: '/cards/MidiaKit.jpg',
    photoshoots: [
      {
        id: 'midia-1',
        title: 'Mídia Kit - Sessão 01',
        description:
          'Fotografia de qualidade cinema para criadores de conteúdo',
        concept: 'Autenticidade com produção profissional',
        date: '2023-12-15',
        location: 'Estúdio Isabel Pontes',
        images: ['/cards/MidiaKit.jpg'],
        models: [
          {
            id: 'model-2',
            name: 'Juliana Oliveira',
            role: 'model',
            image: '/cards/MidiaKit.jpg',
            instagram: '@julianaoliveiracreatora',
          },
        ],
        helpers: [
          {
            id: 'helper-3',
            name: 'Maria Estilista',
            role: 'stylist',
            image: '/cards/MidiaKit.jpg',
            instagram: '@mariaestilo',
          },
        ],
        featured: true,
      },
    ],
  },
  {
    id: 'direcao-criativa',
    title: 'Direção Criativa',
    description: 'Storytelling, direção de arte e identidade visual',
    category: 'conceitual',
    image: '/cards/Director.jpg',
    photoshoots: [
      {
        id: 'criativa-1',
        title: 'Direção Criativa - Série Mulheres',
        description: 'Documentação visual de histórias de mulheres amazônicas',
        concept: 'Força e resistência feminina',
        date: '2023-11-20',
        location: 'Manaus, AM',
        images: ['/cards/Director.jpg', '/cards/Milena.jpg'],
        models: [
          {
            id: 'model-3',
            name: 'Paula Gomes',
            role: 'model',
            image: '/cards/Director.jpg',
            instagram: '@paulagomesfoto',
          },
          {
            id: 'model-4',
            name: 'Carla Ribeiro',
            role: 'model',
            image: '/cards/Milena.jpg',
            instagram: '@carlaribeirofoto',
          },
        ],
        helpers: [
          {
            id: 'helper-4',
            name: 'Tiago Silva',
            role: 'producer',
            image: '/cards/Director.jpg',
          },
          {
            id: 'helper-5',
            name: 'Beatriz Hair',
            role: 'hair',
            image: '/cards/Milena.jpg',
            instagram: '@beatrizhairstudio',
          },
          {
            id: 'helper-6',
            name: 'Carlos Luz',
            role: 'assistant',
            image: '/cards/Director.jpg',
          },
        ],
        featured: true,
      },
    ],
  },
];
