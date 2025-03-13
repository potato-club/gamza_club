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
    route,
    projectType,
  } = props;

  return (
    <Card className="flex-col w-[322px] h-[288px] hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.1)]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{`${startedDate} ~ ${endedDate}`}</CardDescription>
        <ProjectTypeLabel projectType={projectType} />
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className="gap-x-3">
        {isCollaborator ? (
          <>
            <LogWatch {...props} />
            <ModifyButton id={id} />
            <ProjectLinkButton route={route} />
          </>
        ) : (
          <ProjectLinkButton route={route} />
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;

const ProjectTypeLabel = ({
  projectType,
}: {
  projectType: 'FRONT' | 'BACK' | 'WAIT';
}) => {
  const LABEL_COLOR = {
    FRONT: 'bg-[#D3F8FF]',
    BACK: 'bg-[#FFD2F3]',
    WAIT: 'bg-[#ddd]',
  };

  const LABEL_TEXT = {
    FRONT: '프론트엔드',
    BACK: '백엔드',
    WAIT: '대기',
  };

  return (
    <div
      className={`text-xs rounded-lg max-w-fit px-2 py-1 font-semibold ${LABEL_COLOR[projectType]}`}
    >
      {LABEL_TEXT[projectType]}
    </div>
  );
};
