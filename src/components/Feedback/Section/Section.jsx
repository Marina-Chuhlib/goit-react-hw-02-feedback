import PropTypes from 'prop-types';
import { Wrapper, Text } from '../Feedback.styled';

const Section = ({ children, title }) => {
  return (
    <Wrapper>
      <Text>{title}</Text>
      {children}
    </Wrapper>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
