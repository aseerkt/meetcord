import styled from 'styled-components';

export interface ButtonProps {
  variant?: 'outlined' | 'filled';
}

const Button = styled.button<ButtonProps>``;

export default Button;
