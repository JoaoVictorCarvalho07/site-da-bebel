import { HeroWithImage } from '@/components/ui/heroWithImage';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { ThreeClickableImages } from '@/components/ThreeClickableImages';
import { Button } from '@/components/ui/button';

export default function Inicio() {
  return (
    <>
      <>
        <HeroWithImage
          title="Isabel Pontes"
          subtitle="Conheça todos os meus trabalhos."
          imageSrc="/5.jpg"
        />
      </>

      <>
        <ThreeClickableImages
          className="mb-1"
          items={[
            { src: '/5.jpg', alt: 'Image 1', title: 'Image 1', href: '#' },
            { src: '/5.jpg', alt: 'Image 2', title: 'Image 2', href: '#' },
            { src: '/5.jpg', alt: 'Image 3', title: 'Image 3', href: '#' },
          ]}
        />
      </>
      <Item className="bg-foreground m-1 ">
        <ItemContent>
          <ItemTitle>Sobre Mim</ItemTitle>
          <ItemDescription>
            Item descos udfgas ijfha spkdfn asçkdfnb kasjfkç asdjngçkasdn
            fçasdnfkçjasnfç kas ndfçkja sdnfçkjasd asdas asdadasd asdasdsa
            asdasdasd asdasdasd asdasdasd asdadas
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant={'outline'}>Action</Button>
        </ItemActions>
      </Item>
      <>
        <Item className="bg-foreground m-1 ">
          <ItemContent>
            <ItemTitle>Contato</ItemTitle>
            <ItemDescription>
              Item descos udfgas ijfha spkdfn asçkdfnb kasjfkç asdjngçkasdn
              fçasdnfkçjasnfç kas ndfçkja sdnfçkjasd asdas asdadasd asdasdsa
              asdasdasd asdasdasd asdasdasd asdadas
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant={'default'}>Action</Button>
          </ItemActions>
        </Item>
      </>
    </>
  );
}
