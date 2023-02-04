import css from '../FeedbackWidget/FeedbackWidget.module.scss';
import PropTypes from 'prop-types';

export const Section = ({ className, title, children }) => (
  <section className={css.wrapper}>
    <h2 className={css.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
