import React, { FC } from 'react';

//Components
import Content from 'components/Content';
import Header from 'components/Header';

//Styles
import './MainLayout.scss';

const MainLayout: FC = () => {
  return (
    <div className="main-layout">
      <Header />
      <Content />
    </div>
  );
};

export default MainLayout;
