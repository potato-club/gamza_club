import React, { use } from 'react';
import ProjectItem from './ProjectItem';
interface Props {
  list: Promise<any[]>;
}
const ProjectItemList = ({ list }: Props) => {
  const data = use(list);
  console.log(data);
  return (
    <>
      {data.map((item, idx) => (
        <ProjectItem {...item} key={idx} />
      ))}
    </>
  );
};

export default ProjectItemList;
