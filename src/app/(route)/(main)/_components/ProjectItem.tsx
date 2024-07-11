import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import React from 'react';
import LogWatch from './LogWatch';
import ModifyButton from './ModifyRoute';

interface Props {
  title: string;
  desc: string;
  content: string;
  footer: string;
}

const ProjectItem = ({ ...props }) => {
  return (
    <Card className="flex-col w-[322px] h-[288px] hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.1)]">
      <CardHeader>
        <CardTitle>{props.item.title}</CardTitle>
        <CardDescription>상태 : 완료</CardDescription>
      </CardHeader>
      <CardContent>
        Henein은 아직 개발중이므로....
        <br />
        나는 열심히 개발중입니다...
        <br />
        개미는 뚠뚠... 오늘도 뚠뚠...
        <br />
        <span>프로젝트 : 2024.01.01 ~ 2024.07.22</span>
      </CardContent>
      <CardFooter className="gap-x-3">
        <LogWatch {...props.item} />
        <ModifyButton id={props.item.id} />
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
