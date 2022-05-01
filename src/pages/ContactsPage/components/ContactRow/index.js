import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './index.module.css';

function ContactRow({ title, content }) {
  const classes = classNames.bind(css);
  return (
    <p className={classes('root')}>
      <span className={classes('title')}>{title} : </span>
      <span>{content}</span>
    </p>
  );
}

ContactRow.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ContactRow;
