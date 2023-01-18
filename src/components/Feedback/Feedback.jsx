import { Component } from 'react';

import {
  Text,
  List,
  Item,
  Wrapper,
  Button,
  TextStatistics,
} from './Feedback.styled';

class Feedback extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
   
    };


  leaveFeedback = (name) => {
    this.setState(prevState => {
      return{ [name]: prevState[name] + 1}
    })
    console.log("click");
    
  };

  calcTotal() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
    
  }


  render() {
    const { good,neutral, bad} = this.state;

    return (
      <>
      <Wrapper>

        <Text>Please leave feedback</Text>

        <List>
          <Item>
            <Button type="button"  onClick={this.handleClick}>
              good
            </Button>
          </Item>
          <Item>
            <Button type="button"  onClick={this.handleClick}>
              neutral
            </Button>
          </Item>

          <Item>
            <Button type="button"  onClick={this.handleClick}>
              bad
            </Button>
          </Item>
        </List>
</Wrapper>
       <Wrapper>
        <TextStatistics>Statistics </TextStatistics>

        <ul>
            <Item>good: {good}</Item>
             <Item>neutral: { neutral}</Item>
             <Item> bad: {bad}</Item>
          </ul>
          
        </Wrapper>
        </>
    );
  }
}

export default Feedback;
