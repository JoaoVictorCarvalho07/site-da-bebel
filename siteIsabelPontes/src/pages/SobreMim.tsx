import { ImageWithWrappedText } from '@/components/ImageWithWrappedText';
import { CarouselSpacing } from '@/components/CarouselSpacing';

export default function SobreMim() {
  const itens = [
    { src: '/cards/Director.jpg', alt: 'Director 1' },
    { src: '/cards/Director.jpg', alt: 'Director 2' },
    { src: '/cards/Director.jpg', alt: 'Director 3' },
    { src: '/cards/Director.jpg', alt: 'Director 3' },
    { src: '/cards/Director.jpg', alt: 'Director 3' },
    { src: '/cards/Director.jpg', alt: 'Director 3' },
    { src: '/cards/Director.jpg', alt: 'Director 3' },
  ];
  return (
    <>
      <div className="px-10 pt-10">
        <ImageWithWrappedText />
      </div>
      <div>
        <CarouselSpacing className="max-w-full" items={itens} />
        <p className="text-primary p-10 pt-0">
          Em manaus isa era... e depois simEm manaus isa era... e depois simEm
          manaus isa era... e depois simEm manaus isa era... e depois simEm
          manaus isa era... e depois simEm manaus isa era... e depois simEm
          manaus isa era... e depois sim
        </p>
      </div>
      <div className="px-10 pt-10">
        <ImageWithWrappedText ImageClassName="float-right ml-4" />
      </div>
    </>
  );
}
