import propTypes from 'prop-types';
import { Button, Option } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Option>
    {options.map((option, index) => (
      <Button type="button" key={index} onClick={onLeaveFeedback}>
        {option}
      </Button>
    ))}
  </Option>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
};
