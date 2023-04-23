import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 26px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
`;

export const Button = styled.button`
  background-color: #ee6b2f;
  margin-left: 10px;
  padding: 10px;
  border-radius: 8px;
`;
