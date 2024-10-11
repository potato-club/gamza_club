import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/_components/ui/carousel';
import ProjectItem from './ProjectItem';
import { List } from '@/app/_types/main';

const Projects = () => {
  const list: List = React.use(getdata());

  return (
    <Carousel className="w-[750px]">
      <CarouselContent>
        {Array.from({ length: Math.ceil(list.contents.length / 4) }).map(
          (_, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-wrap gap-6 h-[650px] border border-stone-200 bg-white rounded-3xl mt-6 py-6 px-10">
                {list.contents.slice(index * 4, index * 4 + 4).map((item) => (
                  <ProjectItem key={item.id} {...item} />
                ))}
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Projects;

const getdata = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/project/list`, {
      next: { revalidate: 10 },
    });

    return res.json();
  } catch (err) {
    console.log(err);
  }
};
