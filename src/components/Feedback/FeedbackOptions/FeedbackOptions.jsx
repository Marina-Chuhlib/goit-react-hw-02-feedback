import { Item, Button } from '../Feedback.styled';

const FeedbackOptions = ({ onLeaveFeedback}) => {
    return (
        <>
            <Item>
             <Button type="button"  onClick={()=> onLeaveFeedback("good")}> <span></span>
              good
            </Button>
            </Item>
            <Item>
             <Button type="button"  onClick={()=> onLeaveFeedback("neutral")}>
              neutral
            </Button>
          </Item>
           <Item>
                 <Button type="button"  onClick={()=> onLeaveFeedback("bad")}>
              bad
            </Button>
          </Item>
              
        </>
    )
}

export default FeedbackOptions;