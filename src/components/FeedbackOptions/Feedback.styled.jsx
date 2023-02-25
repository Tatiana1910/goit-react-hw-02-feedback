import styled from 'styled-components';

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 10px 15px;
  background-color: #106215;
  color: #fff;
  font-weight: 500;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 10px;

  transform: scale(1);
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;
