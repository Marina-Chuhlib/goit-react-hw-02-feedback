import PropTypes from 'prop-types';
import { Item, Total, PositiveFeedback } from '../Feedback.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <Item>good: {good}</Item>
        <Item>neutral: {neutral}</Item>
        <Item> bad: {bad} </Item>
      </ul>
      <Total>Total: {total}</Total>
      <PositiveFeedback>
        Positive feedback: {positivePercentage}%
      </PositiveFeedback>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
