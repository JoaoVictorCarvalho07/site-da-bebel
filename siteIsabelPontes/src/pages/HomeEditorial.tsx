import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/ui/item';
import { Link } from 'react-router';

type EditorialCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const cards: EditorialCard[] = [
  {
    title: 'Fotografia artística',
    description: 'Ensaios conceituais e direção de pessoas.',
    image: '/cards/Milena.jpg',
    href: '/fotografia',
  },
  {
    title: 'Mídia kit & creator',
    description: 'Conteúdo autêntico com estética elevada.',
    image: '/cards/MidiaKit.jpg',
    href: 'https://xn--isabelpontesportflio-r8b.com.br/',
  },
  {
    title: 'Direção criativa',
    description: 'Storytelling, direção de arte e identidade visual.',
    image: '/cards/Director.jpg',
    href: '/direcao-criativa',
  },
];

export default function HomeEditorial() {
  return (
    <main className="bg-background text-foreground ">
      {/* HERO */}
      <section className="relative h-[80vh] min-h-140 overflow-hidden">
        <img
          src="./public/hero/hero.jpg"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover object-center md:object-[40%_30%]"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-20 text-white">
            <h1 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              Bem-vindo(a) ao meu universo
            </h1>
            <p className="mt-4 max-w-md text-white/90">
              Direção criativa, fotografia artística e storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* CARDS EDITORIAIS */}
      <section className="mx-auto max-w-full px-6 py-24 ">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <a key={card.title} href={card.href} className="group block">
              <Card className="relative h-[520px] overflow-hidden rounded-3xl border-none">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />

                <div className="relative z-10 flex h-full items-end p-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/90">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* SOBRE MIM */}
      <section className="mx-auto max-w-6xl px-6 pb-32 md:px-24">
        {/* <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-4xl font-semibold leading-tight">Sobre mim</h2>

          <div>
            <p className="text-lg text-muted-foreground">
              Diretora criativa e fotógrafa artística. Trabalho com imagem como
              linguagem, narrativa e experiência.
            </p>

            <p className="mt-4 text-lg text-muted-foreground">
              Vou te contar como cheguei até aqui, minha trajetória e como
              transformo ideias em projetos visuais.
            </p>

            <a
              href="/sobre"
              className="mt-6 inline-block text-lg font-medium text-primary underline-offset-4 hover:underline"
            >
              Minha trajetória →
            </a>
          </div>
        </div> */}

        <Item className="border  border-neutral-600">
          <ItemContent className="grow-3 items-center">
            <ItemTitle className="">Sobre Mim</ItemTitle>

            <ItemDescription>
              Diretora criativa e fotógrafa artística. Tarabalho com imagem como
              linguagem, narrativa e experiência.
            </ItemDescription>
          </ItemContent>
          <ItemActions className="max-w-[30%] ">
            <Button
              className="w-auto max-w-full whitespace-break-spaces max-h-full h-auto bg-accent text-accent-foreground"
              variant={'outline'}
            >
              <Link to="/sobre">Minha trajetória →</Link>
            </Button>
          </ItemActions>
        </Item>

        <Item className="border  border-neutral-600 mt-10">
          <ItemContent className="grow-3 items-center">
            <ItemTitle className="">Contato</ItemTitle>
            <ItemDescription>
              Quer trabalhar comigo ou tem alguma dúvida? Entre em contato!
            </ItemDescription>
          </ItemContent>
          <ItemActions className="max-w-[30%]">
            <Button
              className="w-auto max-w-full whitespace-break-spaces max-h-full h-auto  bg-accent text-accent-foreground"
              variant={'default'}
            >
              <Link to="/contato">Fale comigo →</Link>
            </Button>
          </ItemActions>
        </Item>
        <Item className="border  border-border mt-10">
          <ItemContent className="grow-3 items-center">
            <ItemTitle className="">Contato</ItemTitle>
            <ItemDescription>
              Quer trabalhar comigo ou tem alguma dúvida? Entre em contato!
            </ItemDescription>
          </ItemContent>
          <ItemActions className="max-w-[30%]">
            <Button
              className="w-auto max-w-full whitespace-break-spaces max-h-full h-auto"
              variant={'default'}
            >
              <Link to="/contato">Fale comigo →</Link>
            </Button>
          </ItemActions>
        </Item>
        <Item className="border  border-border mt-10">
          <ItemContent className="grow-3 items-center">
            <ItemTitle className="">Contato</ItemTitle>
            <ItemDescription>
              Quer trabalhar comigo ou tem alguma dúvida? Entre em contato!
            </ItemDescription>
          </ItemContent>
          <ItemActions className="max-w-[30%]">
            <Button
              className="w-auto max-w-full whitespace-break-spaces max-h-full h-auto"
              variant={'default'}
            >
              <Link to="/contato">Fale comigo →</Link>
            </Button>
          </ItemActions>
        </Item>
      </section>
    </main>
  );
}
