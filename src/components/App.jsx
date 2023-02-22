import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedBack = event => {
    this.setState(prevState => {
      switch (event.target.textContent) {
        case 'Good':
          return {
            good: prevState.good + 1,
          };
        case 'Neutral':
          return {
            neutral: prevState.neutral + 1,
          };
        case 'Bad':
          return {
            bad: prevState.bad + 1,
          };
        default:
          return;
      }
    });
  };
  // countTotalFeedback = () => {};

  // countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <GlobalStyle />
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={['Good', 'Neutral', 'Bad']} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            // total={this.countTotalFeedback}
            // positivePercentage={this.countPositiveFeedbackPercentage}
            onLeaveFeedback={this.addFeedBack}
          />
        </Section>
      </div>
    );
  }
}
