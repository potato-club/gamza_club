import Link from 'next/link';
import React from 'react';

const ProjectLinkButton = ({ route }: { route: string | null }) => {
  return (
    <Link href={route ?? '#'} className="text-sm font-semibold">
      <button className="normal-button bg-slate-200 p-3 hover:shadow-[0_0_0_2px_rgba(0,0,0)] ease-out duration-300 ">
        서비스 이동
      </button>
    </Link>
  );
};

export default ProjectLinkButton;
