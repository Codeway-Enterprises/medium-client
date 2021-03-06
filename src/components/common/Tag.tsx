import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagBlock = styled.div`
  display: inline-flex;
  height: 1.5rem;
  border-radius: 0.75rem;
  background: ${palette.blue0};
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  align-items: center;
  font-size: 0.75rem;
  color: ${palette.yellow};
  cursor: pointer;
  & + & {
    margin-left: 0.5rem;
  }
`;

interface TagProps {}

const Tag: React.FC<TagProps> = ({ children }) => {
  return <TagBlock>{children}</TagBlock>;
};

export default Tag;
