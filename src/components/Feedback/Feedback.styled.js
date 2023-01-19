import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color:beige;
    background-color:#e4eaef;
  }

 h2{
  margin:0px;
 }
 ul{
    list-style: none;
    margin:0;
    padding:0;
 }

 button{
  cursor: pointer;
 }
 
`;

const Wrapper = styled.div`
  width: 550px;
  background-color: #e4efe9;
  height: fit-content;
  margin: 48px;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 10px 8px 8px rgb(165, 161, 161);
`;

const Text = styled.h2`
  margin-bottom: 28px;
  text-align: center;
  font-size: 32px;
  color: black;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Item = styled.li`
  text-transform: capitalize;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 6px 16px;
  text-align: center;
  font-size: 16px;
  text-transform: capitalize;
  background-color: #bef2f1;
  border: 1px solid #8d8885;
  border-radius: 5px;

  &:hover {
    background-color: #7caaf0;
  }
`;

const Message = styled.p`
  font-size: 18px;
  color: #696969;
`;

const Total = styled.p`
  font-size: 18px;
  margin-top: 18px;
  margin-bottom: 8px;
`;

const PositiveFeedback = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;
export {
  GlobalStyle,
  Wrapper,
  Text,
  List,
  Item,
  Button,
  Message,
  Total,
  PositiveFeedback,
};
