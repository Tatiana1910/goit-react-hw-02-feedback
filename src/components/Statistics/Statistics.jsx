import propTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  // total,
  // positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        {/* <li>Total:{total}</li> */}
        {/* <li>Positive feedback:{positivePercentage}</li> */}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  // total: propTypes.func.isRequired,
  // positivePercentage: propTypes.func.isRequired,
};
