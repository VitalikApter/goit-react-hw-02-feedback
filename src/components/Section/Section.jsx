import css from './Section.module.scss';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section>
    <h2 className={css.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
