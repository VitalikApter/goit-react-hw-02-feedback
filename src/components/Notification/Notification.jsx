import PropTypes from 'prop-types';
import css from './Notification.module.scss';


const Notification = ({ message }) => (
    <p>
      {message}
    </p>
  );
  
  export default Notification;
  
  Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };