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
import ProjectLinkButton from './ProjectLinkButton';

const ProjectItem = ({ ...props }: Item) => {
  const {
    name,
    state,
    description,
    id,
    isCollaborator,
    startedDate,
    endedDate,
  } = props;

  return (
    <Card className="flex-col w-[322px] h-[288px] hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.1)]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{`${startedDate} ~ ${endedDate}`}</CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className="gap-x-3">
        {isCollaborator ? (
          <>
            <LogWatch {...props} />
            <ModifyButton id={id} />
            <ProjectLinkButton />
          </>
        ) : (
          <ProjectLinkButton />
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
