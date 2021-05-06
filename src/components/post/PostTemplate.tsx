import * as React from 'react';
import styled from 'styled-components';
import PageTemplate from '../base/PageTemplate';

const PostTemplateBlock = styled(PageTemplate)``;

interface PostTemplateProps {}

const PostTemplate: React.FC<PostTemplateProps> = (props) => {
  return <PostTemplateBlock>POST</PostTemplateBlock>;
};

export default PostTemplate;
