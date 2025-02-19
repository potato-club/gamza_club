import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/_components/ui/carousel';
import ProjectItem from './ProjectItem';
import { Item } from '@/app/_types/main';
import { getAtFromRt } from '@/app/_utils/api/server/reissue.server';
import TokenSetWrapper from '@/app/_components/client/TokenSetWrapper';

const Projects = () => {
  // 메인페이지에는 accessToken이 없어도 접근이 가능 함
  const accessToken = React.use(getAtFromRt());
  const list = React.use(getdata(accessToken || ''));

  return (
    <TokenSetWrapper token={accessToken || ''}>
      <Carousel className="w-[750px]">
        <CarouselContent>
          {list?.contents?.length ? (
            Array.from({ length: Math.ceil(list.contents.length / 4) }).map(
              (_, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-wrap gap-6 h-[650px] border border-stone-200 bg-white rounded-3xl mt-6 py-6 px-10">
                    {list.contents
                      .slice(index * 4, index * 4 + 4)
                      .map((item: Item) => (
                        <ProjectItem key={item.id} {...item} />
                      ))}
                  </div>
                </CarouselItem>
              )
            )
          ) : (
            <CarouselItem>
              <div className="flex justify-center items-center w-full h-[650px] text-lg text-gray-500 border border-stone-200 bg-white rounded-3xl mt-6 py-6 px-10">
                등록된 프로젝트가 없습니다.
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </TokenSetWrapper>
  );
};

export default Projects;

const getdata = async (accessToken: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/list`, {
      cache: 'no-store',
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });

    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error('error');
  }
};
