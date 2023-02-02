import { Component } from 'react';

import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';
// import Notification from './Notification/Notification';

import './App.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage(propname) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propname];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  countTotalFeedback()  {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  handleStatisticChange = evt => {
    const key = evt.target.name;
    this.setState(prevState => ({
      [key]: { ...prevState[key], value: prevState[key].value + 1 },
    }));
    this.countTotalFeedback();
  };
  render() {
    return (
      <>
        <FeedbackWidget
          stateData={this.state}
          onChangeStatistic={this.handleStatisticChange}
        />
        {/* <Notification message="There is no feedback" /> */}
      </>
    );
  }
}

export default App;
