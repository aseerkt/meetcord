import styled from 'styled-components';

export interface ButtonProps {
  variant?: 'outlined' | 'filled';
}

const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  width: max-content;
  padding: 0.8rem;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  background-color: #333;

  &:hover {
    border-radius: 0.3rem;
  }
`;

export default Button;
