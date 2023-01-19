import PropTypes from 'prop-types';
import { Item, Button } from '../Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(option => (
    <Item key={option}>
      <Button type="button" onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    </Item>
  ));

  return <>{elements}</>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
