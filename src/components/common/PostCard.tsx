/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { UserLogo } from '../../static/images';
import Tag from './Tag';

const PostCardBlock = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  &:first-child {
    padding-top: 0;
  }
  .user-info {
    display: flex;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      display: block;
      margin-right: 1rem;
      background: ${palette.gray0};
      object-fit: cover;
      border-radius: 1.5rem;
    }
    .username {
      font-size: 0.875rem;
      color: ${palette.gray9};
      font-weight: bold;
    }
    margin-bottom: 1.5rem;
  }
  .post-thumbnail {
    width: 100%;
    max-height: 369px;
    margin-bottom: 1rem;
  }
  line-height: 1.5;
  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: ${palette.blue1};
  }
  p {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${palette.gray7};
  }
  .subinfo {
    color: ${palette.blue1};
    font-size: 0.875rem;
    span {
    }
    span + span:before {
      content: ' · ';
    }
  }
  .tags-wrapper {
    margin-top: 0.5rem;
  }
`;

interface PostCardProps {}

const PostCard: React.FC<PostCardProps> = (props) => {
  return (
    <PostCardBlock>
      <div className="user-info">
        <img src={UserLogo} />
        <div className="username">codeway</div>
      </div>
      <img
        className="post-thumbnail"
        src="https://cdn.dribbble.com/users/529301/screenshots/14095754/media/3106cb5669d0a1346f933b2616f46a77.jpg?compress=1&resize=1000x750"
      />
      <h2>Title Title</h2>
      <p>Content content content content... content</p>
      <div className="subinfo">
        <span>May 07, 2021</span>
        <span>0 comments</span>
      </div>
      <div className="tags-wrapper">
        <Tag>React</Tag>
        <Tag>TypeScript</Tag>
        <Tag>JavaScript</Tag>
      </div>
    </PostCardBlock>
  );
};

export default PostCard;
