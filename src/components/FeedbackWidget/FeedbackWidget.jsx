import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

import css from './FeedbackWidget.module.scss';

class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statePropNames = Object.keys(this.state);

  onLeaveFeedback = propName => {
    this.setState(prevState => {
      return { [propName]: prevState[propName] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = Math.round((value * 100) / total);
    return Number(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage('good');

    return (
      <>
        <Section className={css.wrapper} title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.statePropNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {!!total ? (
          <Section className={css.wrapper} title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default FeedbackWidget;
