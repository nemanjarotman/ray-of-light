import React, { FC } from 'react';

//Styles
import './Logo.scss';

const Logo: FC = () => {
  return (
    <div className="logo">
      <img className="logo__image" src="images/logo.svg" alt="" />
    </div>
  );
};

export default Logo;
