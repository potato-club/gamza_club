import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/app/_components/ui/carousel';
import { Skeleton } from '@/app/_components/ui/skeleton';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';

const Loading = () => {
  return (
    <Carousel className="w-[750px]">
      <CarouselContent>
        <CarouselItem>
          <div className="flex flex-wrap gap-6 h-[650px] border border-stone-200 bg-white rounded-3xl mt-6 py-6 px-10">
            <SkeletonCardUI />
            <SkeletonCardUI />
            <SkeletonCardUI />
            <SkeletonCardUI />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Loading;

const SkeletonCardUI = () => {
  return (
    <Card className="p-5 flex-col w-[322px] h-[288px] hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.1)]">
      <CardHeader className="p-0">
        <CardTitle>
          <Skeleton className="h-6 w-40 rounded-xl" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-6 w-20 rounded-xl" />
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-y-3 p-0">
        <Skeleton className="h-4 w-full rounded-xl" />
        <Skeleton className="h-4 w-[50%] rounded-xl" />
        <Skeleton className="h-4 w-[70%] rounded-xl" />
        <Skeleton className="h-4 w-[90%] rounded-xl" />
      </CardContent>

      <CardFooter className="gap-x-3 p-0">
        <Skeleton className="h-11 w-[70px] rounded-md" />
        <Skeleton className="h-11 w-[70px] rounded-md" />
      </CardFooter>
    </Card>
  );
};
