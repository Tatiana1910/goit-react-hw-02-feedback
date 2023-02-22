import propTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
