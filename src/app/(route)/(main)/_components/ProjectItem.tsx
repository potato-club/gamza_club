import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import { Item } from '@/app/_types/main';
import React from 'react';
import LogWatch from './LogWatch';
import ModifyButton from './ModifyRoute';

const ProjectItem = ({ ...props }: Item) => {
  return (
    <Card className="flex-col w-[322px] h-[288px] hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.1)]">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>상태 : {props.state}</CardDescription>
      </CardHeader>
      <CardContent>{props.description}</CardContent>
      <CardFooter className="gap-x-3">
        <LogWatch {...props} />
        <ModifyButton id={props.id} />
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
