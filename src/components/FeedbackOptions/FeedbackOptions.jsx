import PropTypes from 'prop-types';
import { Button, Option } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Option>
    {Object.keys(options).map(key => (
      <Button type="button" key={key} onClick={onLeaveFeedback}>
        {key}
      </Button>
    ))}
  </Option>
);

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
