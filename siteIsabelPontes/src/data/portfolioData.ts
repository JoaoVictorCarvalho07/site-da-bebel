import type { Partner } from '@/types/partner';
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

const rawPartners: Record<string, TeamMemberInput> = {
  milena: {
    name: 'Milena Silva',
    image: '/cards/Milena.jpg',
    role: 'model',
    instagram: '@milenasilvaa',
  },
  // outros...
};

// ✅ Seus dados “preenchíveis” (sem id)
const rawPortfolio: PortfolioProjectInput[] = [
  {
    title: 'Afrodite',
    description: 'Uma exploração artística dos arquétipos femininos modernos',
    category: 'editorial',
    image: '/Projetos/afrodite/capa/Milena.jpg',
    photoshoots: [
      {
        title: 'Ensaio Afrodite - Parte 1',
        description:
          'Primeiras imagens da série Afrodite com foco em graça e poder feminino',
        concept: 'Deusa mitológica na modernidade',
        date: '2024-01-10',
        location: 'Curitiba, PR',

        images: [
          '/Projetos/afrodite/ensaios/ensaio1/Milena.jpg',
          '/Projetos/afrodite/ensaios/ensaio1/Milena.jpg',
          '/Projetos/afrodite/ensaios/ensaio1/Milena.jpg',
        ],
        models: [rawPartners.milena],
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
      {
        title: 'Ensaio Afrodite - Parte 2',
        description:
          'Segundas imagens da série Afrodite com foco em graça e poder feminino',
        concept: 'Deusa mitológica na modernidade',
        date: '2024-01-15',
        location: 'Curitiba, PR',
        images: [
          '/Projetos/afrodite/ensaios/ensaio2/tally.jpg',
          '/Projetos/afrodite/ensaios/ensaio2/isa.jpg',
          '/Projetos/afrodite/ensaios/ensaio2/tally.jpg',
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
        featured: false,
      },
    ],
  },
  {
    title: 'Renascentistas',
    description:
      'Projetos voltados para a expressão e contemplação do tema renscentista glorificando a beleza feminina em suas diversas formas.',
    category: 'Ensaios',
    image: '/Projetos/renascentista/capa/Anna_Julia.png',
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
  {
    title: 'Temáticos',
    description:
      'Conjunto de ensaios tematicos baseados em conceitos e inspirações pessoais das modelos e/ou da produção',
    category: 'conceitual',
    image: '/Projetos/tematicos/capa/keshy.png',
    photoshoots: [],
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
