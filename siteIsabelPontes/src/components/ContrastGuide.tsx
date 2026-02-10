/**
 * GUIDE: How to use adaptive text colors in this project
 *
 * There are multiple approaches to handle text color based on background:
 */

import { ContrastText, ContrastHeading } from './ContrastText';

export function ContrastGuide() {
  return (
    <div className="space-y-8 p-8">
      {/* Approach 1: Using CSS classes (simplest) */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Abordagem 1: CSS Utilities (Recomendado)</h2>

        {/* Light background with dark text */}
        <div className="mb-4 rounded-lg bg-white p-6 text-on-light">
          <h3 className="text-xl font-bold">Texto em fundo claro</h3>
          <p>Texto escuro com sombra clara para contraste</p>
        </div>

        {/* Dark background with light text */}
        <div className="rounded-lg bg-black p-6 text-on-dark">
          <h3 className="text-xl font-bold">Texto em fundo escuro</h3>
          <p>Texto claro com sombra escura para contraste</p>
        </div>
      </div>

      {/* Approach 2: Using ContrastText component */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Abordagem 2: ContrastText Component</h2>

        <div className="mb-4 rounded-lg bg-gradient-to-r from-blue-900 to-blue-600 p-6">
          <ContrastHeading level={3} className="text-xl font-bold mb-2">
            Título com contraste automático
          </ContrastHeading>
          <ContrastText className="text-base">
            Este texto se adapta automaticamente ao fundo
          </ContrastText>
        </div>

        <div className="rounded-lg bg-yellow-300 p-6">
          <ContrastHeading level={3} className="text-xl font-bold mb-2">
            Fundo claro
          </ContrastHeading>
          <ContrastText>O texto será escuro neste fundo</ContrastText>
        </div>
      </div>

      {/* Approach 3: Using Tailwind classes with images */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Abordagem 3: Com imagens de fundo</h2>

        <div
          className="relative rounded-lg p-8 text-on-dark"
          style={{
            backgroundImage: 'url(/5.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10 rounded-lg bg-black/40 p-6 text-on-dark">
            <h3 className="text-2xl font-bold">Texto sobre imagem</h3>
            <p>Usando overlay escuro para melhor legibilidade</p>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="rounded-lg bg-gray-900 p-6 text-on-dark">
        <h2 className="mb-4 text-2xl font-bold">Exemplos de Código</h2>

        <div className="space-y-4 text-sm">
          <div>
            <p className="mb-2 font-mono text-yellow-300">CSS Utilities:</p>
            <pre className="rounded bg-black/50 p-3 text-white">
{`<div className="bg-black p-6 text-on-dark">
  <h1>Título em fundo preto</h1>
  <p>Texto branco automático</p>
</div>`}
            </pre>
          </div>

          <div>
            <p className="mb-2 font-mono text-yellow-300">ContrastText Component:</p>
            <pre className="rounded bg-black/50 p-3 text-white">
{`<div className="bg-gradient-to-r from-purple-900 to-pink-600 p-6">
  <ContrastHeading>Título</ContrastHeading>
  <ContrastText>Parágrafo</ContrastText>
</div>`}
            </pre>
          </div>

          <div>
            <p className="mb-2 font-mono text-yellow-300">Contrast Function:</p>
            <pre className="rounded bg-black/50 p-3 text-white">
{`import { getContrastTextColor } from '@/lib/contrast';

const textColor = getContrastTextColor('rgb(0, 0, 0)');
// Returns: 'text-white' or 'text-black'`}
            </pre>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="rounded-lg border-2 border-blue-500 p-6">
        <h2 className="mb-4 text-2xl font-bold">Melhores Práticas</h2>
        <ul className="space-y-2 text-base">
          <li className="flex gap-3">
            <span className="font-bold">✓</span>
            <span>
              Use <code className="bg-gray-200 px-2 py-1 font-mono">text-on-light</code> e{' '}
              <code className="bg-gray-200 px-2 py-1 font-mono">text-on-dark</code> para backgrounds
              sólidos
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">✓</span>
            <span>
              Use <code className="bg-gray-200 px-2 py-1 font-mono">ContrastText</code> para cores
              dinâmicas ou gradientes
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">✓</span>
            <span>Sempre adicione um overlay escuro/claro sobre imagens de fundo</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">✓</span>
            <span>Use text-shadow para aumentar legibilidade em backgrounds complexos</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
