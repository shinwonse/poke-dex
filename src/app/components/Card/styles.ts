import styled from 'styled-components';

interface WrapperProps {
  background?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ background }) => background};
  border-radius: 10px;
`;
