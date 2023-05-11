import React from 'react';
import * as $ from './style';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <$.Wrapper>{children}</$.Wrapper>;
};

export default Layout;
