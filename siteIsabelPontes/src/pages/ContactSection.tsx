import { useMemo, useState } from 'react';

/**
 * ContactSection.jsx
 * - Tailwind only (sem shadcn obrigatório)
 * - Layout: esquerda (copy + botões) / direita (form)
 * - FAQ com accordion simples
 * - CTA principal: WhatsApp
 *
 * 👉 Troque os placeholders (seu número, insta e email) abaixo.
 */

export default function ContactSection() {
  // ====== EDITE AQUI ======
  const WHATSAPP_NUMBER_E164 = '554191977011'; // 55 + DDD + número (sem +, sem espaços)
  const INSTAGRAM_URL = 'https://instagram.com/isapontesfoto';
  const EMAIL = 'isabelpontesfotografia@gmail.com';
  const CITY = 'Curitiba, PR';
  const RESPONSE_TIME = 'em até 24h úteis';
  // ========================

  const waText = encodeURIComponent(
    'Oi! Vim pelo seu site ✨\n\nQuero falar sobre: (ensaio / evento / UGC)\nData/cidade: \nReferências (se tiver): \n',
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${waText}`;
  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    'Contato pelo site',
  )}&body=${encodeURIComponent('Oi! Vim pelo seu site ✨\n\nQuero falar sobre:\n')}`;

  return (
    <section id="contato" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 ">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Contato
          </h2>
          <p className="mt-2 text-base md:text-lg text-muted-foreground">
            Me chama por onde for melhor — eu respondo {RESPONSE_TIME}. 🤍
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ContactCard
            title="WhatsApp"
            description="Mais rápido para orçamento e disponibilidade."
            href={whatsappHref}
            cta="Chamar no WhatsApp"
            highlight
          />

          <ContactCard
            title="Instagram"
            description="Bate-papo, referências e bastidores."
            href={INSTAGRAM_URL}
            cta="Abrir Instagram"
          />

          <ContactCard
            title="E-mail"
            description="Para propostas, marcas e demandas formais."
            href={mailtoHref}
            cta="Enviar e-mail"
          />
        </div>

        {/* Info extra */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-2xl border bg-background/60 backdrop-blur p-6">
            <h3 className="text-lg font-semibold">Como falar comigo</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-foreground font-medium">•</span>
                <span>Me diga o que você procura (ensaio / evento / UGC).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground font-medium">•</span>
                <span>
                  Se tiver, mande tema + referências (Pinterest/prints).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground font-medium">•</span>
                <span>Data e cidade ajudam a eu te responder mais rápido.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-muted/30 p-6">
            <h3 className="text-lg font-semibold">Atendimento</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Base em{' '}
              <span className="text-foreground font-medium">{CITY}</span>.
              Outros locais sob consulta.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full border text-sm">
                Ensaios artísticos
              </span>
              <span className="px-3 py-1 rounded-full border text-sm">
                Direção de arte
              </span>
              <span className="px-3 py-1 rounded-full border text-sm">
                Conteúdo / UGC
              </span>
            </div>
          </div>
        </div>

        {/* Rodapé pequeno */}
        <p className="mt-8 text-xs text-muted-foreground">
          Dica: se preferir, pode mandar só “vim pelo site” que eu te guio com
          as perguntas ✨
        </p>
      </div>
    </section>
  );
}

interface ContactCardProps {
  title: string;
  description: string;
  href: string;
  cta: string;
  highlight?: boolean;
}

function ContactCard({
  title,
  description,
  href,
  cta,
  highlight,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={
        href.startsWith('http') || href.startsWith('https')
          ? '_blank'
          : undefined
      }
      rel={
        href.startsWith('http') || href.startsWith('https')
          ? 'noopener noreferrer'
          : undefined
      }
      className={[
        'group rounded-2xl border p-6 transition',
        'hover:bg-muted/40',
        highlight
          ? `${window.matchMedia('(prefers-color-scheme: dark)').matches ? 'hover:**:text-gold hover:border-gold ' : 'hover:**:text-accent hover:border-accent'} ` +
            'bg-foreground text-background hover:opacity-95 hover:border '
          : 'bg-background',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4 ">
        <div>
          <h3
            className={[
              'text-lg font-semibold',
              highlight ? 'text-background ' : '',
            ].join(' ')}
          >
            {title}
          </h3>
          <p
            className={[
              'mt-2 text-sm',
              highlight ? 'text-background/80' : 'text-muted-foreground',
            ].join(' ')}
          >
            {description}
          </p>
        </div>

        <span
          className={[
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border transition',
            highlight ? 'border-background/30' : 'border-muted-foreground/20',
            'group-hover:translate-x-0.5',
          ].join(' ')}
          aria-hidden="true"
        >
          →
        </span>
      </div>

      <div
        className={[
          'mt-5 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border transition',
          highlight
            ? 'border-background/30 text-background'
            : 'border-muted-foreground/20 text-foreground',
          'group-hover:bg-background/10',
        ].join(' ')}
      >
        {cta}
      </div>
    </a>
  );
}
