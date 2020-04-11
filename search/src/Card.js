import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './Card.module.css';

const Card = ({ id, name, imageSrc, description }) => {
  return (
    <Link to={`/recipe/${id}`} className={cx('card', styles.link)}>
      <div className={styles.container}>
        <img src={imageSrc} className={styles.image} alt="recipe preview" />
        <div className={styles.content__container}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
};

// Todo: update shared eslint config
// default props on function components will be deprecated, prefer default args
Card.defaultProps = {
  id: '',
  name: '',
  imageSrc: '',
  description: '',
};

export default Card;
