import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

type Image = {
  src: string;
  alt?: string;
  title?: string;
};

type Props = {
  items: Image[];
  className?: string;
  gridof?: boolean;
};

export function CarouselSpacing({ items, className, gridof }: Props) {
  return (
    <Carousel
      className={cn(className, 'w-full mx-5 max-w-full ml-0')}
      opts={{ align: 'start', loop: true }}
    >
      <CarouselContent className="ml-1">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className={`p-1 ${gridof ? 'basis-1/1 md:basis-1/2 lg:basis-1/3' : 'basis-1/3 md:basis-1/3 lg:basis-1/4'}`}
          >
            <div className="p-1">
              <Card className="rounded-xl  ">
                <CardContent className="flex aspect-square items-center justify-center p-0  m-0 rounded-xl ">
                  <img
                    src={`${item.src}`}
                    alt={item.alt}
                    className="w-full rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="sm:left-10 left-1/200 " />
      <CarouselNext className="sm:right-10 right-1/200" />
    </Carousel>
  );
}
