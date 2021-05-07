import * as React from 'react';
import styled from 'styled-components';
import PostCardList from '../../components/common/PostCardList';

const RecentPostsPageBlock = styled.div``;

interface RecentPostsPageProps {}

const RecentPostsPage: React.FC<RecentPostsPageProps> = (props) => {
  return (
    <RecentPostsPageBlock>
      <PostCardList />
    </RecentPostsPageBlock>
  );
};

export default RecentPostsPage;
