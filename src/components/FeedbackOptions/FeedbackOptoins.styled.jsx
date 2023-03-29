import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  padding: 4px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Caveat', cursive;
  border-color: #8c89d5;

  background-color: #8c89d5;
  border-radius: 3px;
  box-shadow: -5px -5px 10px 0px rgba(255, 255, 255, 0.5),
    5px 5px 10px 0px rgba(0, 0, 0, 0.3);

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    background-color:  #7873DB;
  }
`;