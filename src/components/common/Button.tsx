import * as React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
const ButtonBlock = styled.button<{ theme: string }>`
  display: inline-flex;
  height: 2rem;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  border: none;
  ${(props) =>
    props.theme === 'default' &&
    css`
      background: ${palette.blue0};
      color: ${palette.yellow};
      border-radius: 1rem;
      &:hover,
      &:focus {
        background: ${palette.blue1};
      }
    `}
`;
interface ButtonProps {
  theme?: string;
}

const Button: React.FC<ButtonProps> = ({ theme, children }) => {
  return <ButtonBlock theme={theme}>{children}</ButtonBlock>;
};

Button.defaultProps = {
  theme: 'default',
};

export default Button;
