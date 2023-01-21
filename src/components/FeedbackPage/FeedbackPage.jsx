import { Component } from 'react';
import css from './FeedbackPage.module.scss';
import Statistics from 'components/Statistics/Statistics';


class FeedbackPage extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      };

      countTotalFeedback() {
        const {good, neutral, bad} = this.state;
        const total = good + neutral + bad;
        return total;
      };

      PositivePercentage(propName) {
        const total = this.countTotalFeedback();
        if(!total) {
            return 0;
        }
        const value = this.state[propName];
        const result = ((value / total) * 100).toFixed(2);
        return Number(result);
      }

      onLeaveFeedback(name) {
        this.setState(prevState => {
            return {[name]: prevState[name] + 1}
        })
      }

      
    render(){
        const {good, neutral, bad} = this.state;
        const total = this.countTotalFeedback();
    const positivePercentage = this.PositivePercentage('good');

        return (
    <div className={css.wrapper}>
        <div className={css.buttons}>
                <h2 className={css.title}>Please leave feedback</h2>
              <button onClick={() => this.onLeaveFeedback('good')}>Good</button>
              <button onClick={() => this.onLeaveFeedback('neutral')}>Neutral</button>
              <button onClick={() => this.onLeaveFeedback('bad')}>Bad</button>
        </div>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
    </div>
        )
    }
};
export default FeedbackPage;