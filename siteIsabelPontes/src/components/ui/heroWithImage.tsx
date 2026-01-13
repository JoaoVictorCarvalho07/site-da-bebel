import { Button } from '@/components/ui/button';

type HeroProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  primaryCta?: { label: string; onClick?: () => void };
  secondaryCta?: { label: string; onClick?: () => void };
};

export function HeroWithImage({
  title,
  subtitle,
  imageSrc,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* imagem de fundo */}
      <img
        src={imageSrc}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[0%_40%]"
      />
      {/* overlay pra leitura do texto */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-4 text-base/7 text-white/90">{subtitle}</p>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta ? (
              <Button size="lg" variant="default" onClick={primaryCta.onClick}>
                {primaryCta.label}
              </Button>
            ) : null}

            {secondaryCta ? (
              <Button
                size="lg"
                variant="secondary"
                onClick={secondaryCta.onClick}
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
