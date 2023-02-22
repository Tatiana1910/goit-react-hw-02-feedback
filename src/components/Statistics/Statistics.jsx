import { Notification } from 'components/Notification/Notification';
import propTypes from 'prop-types';
import { Title, Item, Span, Div } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total !== 0 ? (
    <Div>
      <Title>Statistics</Title>
      <ul>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>
          <Span>Total: </Span>
          {total}
        </Item>
        <Item>
          <Span>Positive feedback: </Span>
          {positivePercentage}
        </Item>
      </ul>
    </Div>
  ) : (
    <Notification message="There is not feedback" />
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  // total: propTypes.func.isRequired,
  // positivePercentage: propTypes.func.isRequired,
};
