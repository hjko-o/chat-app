import * as $ from './style';
import { useRouter } from 'next/router';
import UserIcon from '../../Icon/User';
import MenuIcon from '../../Icon/Menu';
import BackIcon from '../../Icon/Back';
import UploadIcon from '../../Icon/Upload';
import SearchIcon from '../../Icon/Search';
import React from 'react';

interface Props {
  title: string;
  onClick: (action: string) => void;
  children?: React.ReactNode;
}

const Header = ({ title, children, onClick }: Props) => {
  const router = useRouter();

  return (
    <>
      <$.Wrapper>
        {router.asPath === '/list' ? (
          <>
            <MenuIcon />
            <$.Title>{title}</$.Title>
            <UserIcon />
          </>
        ) : (
          <>
            <div>
              {children ? (
                ''
              ) : (
                <span onClick={() => router.push('/list')}>
                  <BackIcon />
                </span>
              )}
            </div>
            <p>{title}</p>
            <div>
              <span onClick={() => onClick('upload')}>
                <UploadIcon />
              </span>
              <span>
                <SearchIcon />
              </span>
            </div>
          </>
        )}
      </$.Wrapper>
      {children}
    </>
  );
};

export default Header;
