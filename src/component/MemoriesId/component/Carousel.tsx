import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

type CarouselItemProp = {
  images: string[] | undefined;
}

export default function CarouselContainer({ images }: CarouselItemProp) {
  return (
    <Carousel>
      <CarouselContent>
        {images?.map((image, index) => (
          <CarouselItem key={index} className='basis-[100%]'>
            <img src={image} alt={`Image ${index+1}`} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute left-4 top-1/2 z-10'/>
      <CarouselNext className='absolute right-4 top-1/2 z-10'/>
    </Carousel>
  )
}