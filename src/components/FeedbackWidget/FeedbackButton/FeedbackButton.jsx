import css from './FeedbackButton.module.scss';
import PropTypes from 'prop-types';

export const FeedbackButton = props => {
  const { buttonName, buttonTitle, onClick } = props;
  return (
    
  );
};

FeedbackButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
