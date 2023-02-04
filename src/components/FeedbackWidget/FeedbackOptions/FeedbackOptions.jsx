import css from '../FeedbackWidget.module.scss';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return options.map(option => (
    
  <button 
  className={css.btn}
    key={option}
    onClick={() => onLeaveFeedback(option)}
    type="button"
  >
    {option}
  </button>
  ))
};

export default FeedbackOptions;