import React from 'react';
import RouteButton from './RouteButton';

const Header = () => {
  return (
    <div className="flex gap-6 justify-center">
      <RouteButton href="/admin/user" title="유저" />
      <img src="/Logo.svg" width={48} height={48} />
      <RouteButton href="/admin/project" title="프로젝트" />
    </div>
  );
};

export default Header;
