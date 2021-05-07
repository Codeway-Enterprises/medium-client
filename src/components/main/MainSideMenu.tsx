import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import { MdTrendingUp, MdAccessTime, MdRssFeed } from 'react-icons/md';

const MainSideMenuBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuItem = styled(NavLink)`
  display: flex;
  color: ${palette.gray8};
  text-decoration: none;
  height: 48px;
  align-items: center;
  padding-left: 1rem;
  font-size: 1.125rem;
  border-left: 3px solid transparent;
  transition: 0.125s all ease-in;
  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
  }
  &.active {
    background: ${palette.blue0};
    border-color: ${palette.yellow};
    color: ${palette.yellow};
    font-weight: bold;
  }
`;

interface MainSideMenuProps {}

const MainSideMenu: React.FC<MainSideMenuProps> = (props) => {
  return (
    <MainSideMenuBlock>
      <MenuItem
        to="/trending"
        activeClassName="active"
        isActive={(match, location) => {
          return ['/', '/trending'].indexOf(location.pathname) !== -1;
        }}
      >
        <MdTrendingUp />
        Trending
      </MenuItem>
      <MenuItem to="/recent" activeClassName="active">
        <MdAccessTime />
        New
      </MenuItem>
      <MenuItem to="/following" activeClassName="active">
        <MdRssFeed />
        Following
      </MenuItem>
    </MainSideMenuBlock>
  );
};

export default MainSideMenu;
