import { Component } from 'react';
import { Sections } from './App.styled';
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

  addFeedBack = e => {
    this.setState(prevState => {
      let newState = { ...prevState };
      for (const key in newState) {
        if (key === e.target.textContent) {
          newState[key] += 1;
        }
      }
      return newState;
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return '0%';
    } else {
      const value = Math.round(
        this.state.good / (this.countTotalFeedback() / 100)
      );
      return `${value}%`;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <GlobalStyle />
        <Section title={'Please leave feedback'}>
          <Sections>
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.addFeedBack}
            />
          </Sections>
          <Sections>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Sections>
        </Section>
      </div>
    );
  }
}
