import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import React from 'react';

interface Props {
  title: string;
  desc: string;
  content: string;
  footer: string;
}

const ProjectItem = ({ ...props }) => {
  return (
    <Card className="flex-col w-[322px] h-[288px] ">
      <CardHeader>
        <CardTitle>{props.item.id}</CardTitle>
        <CardDescription>상태 : 완료</CardDescription>
      </CardHeader>
      <CardContent>
        Henein은 아직 개발중이므로....
        <br />
        나는 열심히 개발중입니다...
        <br />
        개미는 뚠뚠... 오늘도 뚠뚠...
      </CardContent>
      <CardFooter className="flex justify-between">
        <span>2024.01.01 ~ 2024.07.22</span>
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
