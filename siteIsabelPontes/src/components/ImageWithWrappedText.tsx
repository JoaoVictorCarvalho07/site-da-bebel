type ImageWithWrappedTextProps = {
  ImageClassName?: string;
};

export function ImageWithWrappedText({
  ImageClassName,
}: ImageWithWrappedTextProps) {
  return (
    <div className="text-foreground">
      <img
        src="/cards/Director.jpg"
        alt="Imagem"
        className={`float-left mr-4 mb-2 sm:w-[40%] w-[50%]  h-auto object-cover rounded-xl max-w-100 ${ImageClassName}`}
      />

      <p className=" text-sm sm:text-xl leading-relaxed">
        Esse texto vai ocupar o espaço ao lado da imagem e, quando não couber
        mais, ele continua abaixo automaticamente, igual no Word. Pode colocar
        bastante texto aqui pra ver funcionando. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur
        adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing
        elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem
      </p>

      {/* opcional: “limpa” o float pra garantir que nada depois fique do lado */}
      <div className="clear-both" />
    </div>
  );
}
