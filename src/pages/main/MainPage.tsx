import * as React from 'react';

import MainTemplate from '../../components/main/MainTemplate';
import MainSideMenu from '../../components/main/MainSideMenu';
import MainNoticeWidget from '../../components/main/MainNoticeWidget';
import MainRightFooter from '../../components/main/MainRightFooter';
interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = (props) => {
  return (
    <MainTemplate>
      <MainTemplate.Left>
        <MainSideMenu />
      </MainTemplate.Left>
      <MainTemplate.Main>Main</MainTemplate.Main>
      <MainTemplate.Right>
        <MainNoticeWidget />
        <MainRightFooter />
      </MainTemplate.Right>
    </MainTemplate>
  );
};

export default MainPage;
