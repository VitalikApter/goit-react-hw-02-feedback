import { FeedbackButton } from '../FeedbackButton/FeedbackButton';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(key => (
        <button
        type="button"
        
        className={css.button}
        onClick={onClick}
      >
        {buttonTitle}
      </button>
      ))}
    </>
  );
};


FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({ 
  }).isRequired
};