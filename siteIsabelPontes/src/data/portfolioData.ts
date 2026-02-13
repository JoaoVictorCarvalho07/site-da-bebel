import type {
  PortfolioProject,
  Photoshoot,
  TeamMember,
} from '@/types/portfolio';
import { slugify } from '@/utils/slugify';

const DEFAULT_PROJECT_ID = 'independentes';
// ✅ Raw types (sem id)
type TeamMemberInput = Omit<TeamMember, 'id'>;
type PhotoshootInput = Omit<Photoshoot, 'id' | 'models' | 'helpers'> & {
  models: TeamMemberInput[];
  helpers: TeamMemberInput[];
};
type PortfolioProjectInput = Omit<PortfolioProject, 'id' | 'photoshoots'> & {
  photoshoots: PhotoshootInput[];
};

// ✅ Seus dados “preenchíveis” (sem id)
const rawPortfolio: PortfolioProjectInput[] = [
  {
    title: 'Afrodite',
    description: 'Uma exploração artística dos arquétipos femininos modernos',
    category: 'editorial',
    image: '/cards/Milena.jpg',
    photoshoots: [
      {
        title: 'Ensaio Afrodite - Parte 1',
        description:
          'Primeiras imagens da série Afrodite com foco em graça e poder feminino',
        concept: 'Deusa mitológica na modernidade',
        date: '2024-01-10',
        location: 'Manaus, AM',
        images: [
          '/cards/Milena.jpg',
          '/cards/Director.jpg',
          '/cards/Milena.jpg',
        ],
        models: [
          {
            name: 'Milena Silva',
            role: 'model',
            image: '/cards/Milena.jpg',
            instagram: '@milenasilvaa',
            portfolio: 'https://portfolio.com/milena',
          },
        ],
        helpers: [
          {
            name: 'Ana Costa',
            role: 'makeup',
            image: '/cards/Director.jpg',
            instagram: '@anacostamakeup',
          },
          {
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
    title: 'Independentes',
    description:
      'Projetos autorais e experimentais que refletem minha visão artística sem restrições comerciais.',
    category: 'conceitual',
    image: '/cards/Director.jpg',
    photoshoots: [
      {
        title: 'Ensaio Independente - Parte 1',
        description:
          'Exploração de temas pessoais e estéticos sem briefing comercial.',
        concept: 'Liberdade criativa total',
        date: '2024-03-15',
        location: 'Manaus, AM',
        images: [
          '/cards/Director.jpg',
          '/cards/Director.jpg',
          '/cards/Director.jpg',
          '/cards/Director.jpg',
        ],
        models: [
          {
            name: 'Carlos Silva',
            role: 'model',
            image: '/cards/Director.jpg',
            instagram: '@carlossilva',
          },
        ],
        helpers: [],
        featured: false,
      },
    ],
  },
];

// ✅ Geração automática de IDs (final)
function memberId(m: TeamMemberInput) {
  return `${slugify(m.name)}-${m.role}`;
}

function shootId(projectTitle: string, shootTitle: string, index: number) {
  // garante unicidade por projeto + ordem
  return `${slugify(projectTitle)}-${slugify(shootTitle)}-${index + 1}`;
}

export const portfolioProjects: PortfolioProject[] = rawPortfolio.map(
  (project) => {
    const projectId = slugify(project.title);

    return {
      ...project,
      id: projectId,
      photoshoots: project.photoshoots.map((shoot, i) => ({
        ...shoot,
        id: shootId(project.title, shoot.title, i),
        models: shoot.models.map((m) => ({ ...m, id: memberId(m) })),
        helpers: shoot.helpers.map((h) => ({ ...h, id: memberId(h) })),
      })),
    };
  },
);
