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
      title: '1번 프로젝트',
    },
    {
      id: 2,
      title: '2번 프로젝트',
    },
    {
      id: 3,
      title: '3번 프로젝트',
    },
    {
      id: 4,
      title: '4번 프로젝트',
    },
    {
      id: 5,
      title: '5번 프로젝트',
    },
    {
      id: 6,
      title: '6번 프로젝트',
    },
    {
      id: 7,
      title: '7번 프로젝트',
    },
  ];

  return (
    <Carousel className="w-[750px]">
      <CarouselContent>
        {Array.from({ length: dummy.length / 4 + 1 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-wrap gap-6 h-[650px] border border-stone-200 bg-white rounded-3xl mt-6 py-6 px-10">
              {dummy.length ? (
                dummy
                  .slice(index * 4, index * 4 + 4)
                  .map((item, idx) => <ProjectItem key={idx} item={item} />)
              ) : (
                <span className="flex justify-center items-center font-bold w-full text-2xl">
                  등록된 프로젝트가 없습니다.
                </span>
              )}
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
