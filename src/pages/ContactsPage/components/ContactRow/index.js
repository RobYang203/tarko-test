import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './index.module.css';

function ContactRow({ title, content }) {
  const classes = classNames.bind(css);
  return (
    <p className={classes('root')}>
      <div className={classes('title')}>{title} : </div>
      <div>{content}</div>
    </p>
  );
}

ContactRow.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ContactRow;
