import { Card } from '../components/ui/card';
import { useState } from 'react';

export default function Portfolio() {
  const [modalInfo, setModalInfo] = useState<null | EditorialCard>(null);

  type EditorialCard = {
    title: string;
    description: string;
    image: string;
  };

  const cards: EditorialCard[] = [
    {
      title: 'Afrodite',
      description: 'Ensaios conceituais e direção de pessoas.',
      image: '/cards/Milena.jpg',
    },
    {
      title: 'Mídia kit & creator4',
      description: 'Conteúdo autêntico com estética elevada.',
      image: '/cards/MidiaKit.jpg',
    },
    {
      title: 'Direção criativa3',
      description: 'Storytelling, direção de arte e identidade visual.',
      image: '/cards/Director.jpg',
    },
    {
      title: 'Afrodite5',
      description: 'Ensaios conceituais e direção de pessoas.',
      image: '/cards/Milena.jpg',
    },
    {
      title: 'Mídia kit & creator9',
      description: 'Conteúdo autêntico com estética elevada.',
      image: '/cards/MidiaKit.jpg',
    },
    {
      title: 'Direção criativa1',
      description: 'Storytelling, direção de arte e identidade visual.',
      image: '/cards/Director.jpg',
    },
  ];

  return (
    <>
      <main className="">
        <section className="relative h-[80vh] min-h-140 overflow-hidden">
          <video
            src="./hero/hero_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center md:object-[40%_30%]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full items-end">
            <div className="mx-auto w-full max-w-6xl px-6 pb-20 text-white">
              <h1 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                Portfólio de Trabalhos
              </h1>
              <p className="mt-4 max-w-md text-white/90">
                Direção criativa, fotografia artística e storytelling.
              </p>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-full px-2 md:px-6  py-12 md:py-24  ">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
            {cards.map((card) => (
              <button
                key={card.title}
                onClick={() => {
                  setModalInfo(card);
                }}
                className="group block"
              >
                <Card className="relative h-[40vh] overflow-hidden rounded-3xl border-none">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 proportional-nums"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />

                  <div className="relative z-10 flex h-full items-end p-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              </button>
            ))}
          </div>
        </section>
      </main>
      {modalInfo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setModalInfo(null)}
        >
          <div
            className="max-h-full w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-3xl font-bold">{modalInfo.title}</h2>
            <img
              src={modalInfo.image}
              alt={modalInfo.title}
              className="mb-4 w-full rounded-lg"
            />
            <p className="text-lg">{modalInfo.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
