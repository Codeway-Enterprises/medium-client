/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const MainRightFooterBlock = styled.div`
  margin-top: 6.25rem;
  line-height: 1.5;
  font-size: 0.875rem;
  .links {
    color: ${palette.gray6};
    a {
      color: inherit;
      text-decoration: none;
    }
    a + a:before {
      content: ' · ';
    }
  }
  .copyright {
    color: ${palette.gray5};
  }
`;

interface MainRightFooterProps {}

const MainRightFooter: React.FC<MainRightFooterProps> = (props) => {
  return (
    <MainRightFooterBlock>
      <div className="links">
        <a>Introduce</a>
        <a>Service policy</a>
        <a>FAQ</a>
      </div>
      <div className="copyright">© 2021 · Codeway LLC</div>
    </MainRightFooterBlock>
  );
};

export default MainRightFooter;
