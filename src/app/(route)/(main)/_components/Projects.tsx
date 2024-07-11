import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/_components/ui/carousel';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const dummy = [
    {
      id: 1,
      cont: '1',
    },
    {
      id: 2,
      cont: '2',
    },
    {
      id: 3,
      cont: '3',
    },
    {
      id: 4,
      cont: '4',
    },
    {
      id: 5,
      cont: '5',
    },
    {
      id: 6,
      cont: '6',
    },
    {
      id: 7,
      cont: '7',
    },
  ];

  return (
    <Carousel className="w-[750px]">
      <CarouselContent>
        {Array.from({ length: dummy.length / 4 + 1 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-wrap gap-6 h-[650px] border border-stone-200 bg-white rounded-3xl mt-6 py-6 px-10">
              {dummy.slice(index * 4, index * 4 + 4).map((item, idx) => (
                <ProjectItem key={idx} item={item} />
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Projects;
