import * as React from 'react';
import { cn } from '@/lib/utils';

type ClickableImage = {
  src: string;
  alt: string;
  title?: string;
  href?: string;
  onClick?: () => void;
};

type Props = {
  items: [ClickableImage, ClickableImage, ClickableImage];
  className?: string;
};

export function ThreeClickableImages({ items, className }: Props) {
  return (
    <section className={cn('mx-auto max-w-6xl px-2 md:px-2 mt-10', className)}>
      <div className="grid grid-cols-3 gap-4 w-full">
        {items.map((item, i) => {
          const content = (
            <div
              className="group relative overflow-hidden rounded-t-[10rem] rounded-b-2xl
             border bg-background shadow-sm"
            >
              {/* container com proporção fixa pra não “quebrar” */}
              <div className="relative aspect-[3/7] w-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
              </div>

              {item.title ? (
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="inline-flex max-w-full rounded-xl bg-black/55 px-3 py-2 text-sm font-medium text-white backdrop-blur">
                    {item.title}
                  </div>
                </div>
              ) : null}
            </div>
          );

          // Se tiver href, vira link. Se tiver onClick, vira botão clicável.
          if (item.href) {
            return (
              <a
                key={item.href + i}
                href={item.href}
                className="block focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-2xl"
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={item.alt + i}
              type="button"
              onClick={item.onClick}
              className="text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-2xl"
            >
              {content}
            </button>
          );
        })}
      </div>
    </section>
  );
}
