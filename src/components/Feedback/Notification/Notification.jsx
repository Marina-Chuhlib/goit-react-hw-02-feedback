import { Message } from '../Feedback.styled';

const Notification = ({ message }) => {
  return (
    <>
      <Message>{message}</Message>
    </>
  );
};

export default Notification;
