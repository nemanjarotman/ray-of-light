import React, { FC } from 'react';

//Components
import Logo from '../Logo';

//Styles
import './Header.scss';

const Header: FC = () => {
  return (
    <div className="header">
      <Logo />
    </div>
  );
};

export default Header;
