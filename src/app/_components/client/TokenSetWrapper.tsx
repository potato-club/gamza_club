'use client';

import React, { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
  token: string;
}

const TokenSetWrapper = ({ children, token }: Props) => {
  useEffect(() => {
    if (token) {
      localStorage.setItem('accessToken', token);
    }
  }, [token]);
  return <>{children}</>;
};

export default TokenSetWrapper;
