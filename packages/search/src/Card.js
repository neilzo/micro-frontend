import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

const Card = ({ id, name, imageSrc, description, author }) => {
  return (
    <Link to={`/recipe/${id}`} className={styles.link}>
      <div className={styles.container}>
        <img src={imageSrc} className={styles.image} alt="recipe preview" />
        <div className={styles.content__container}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.description}>{description}</p>
          <p className={styles.description}>By {author}</p>
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
  author: PropTypes.string,
};

// Todo: update shared eslint config
// default props on function components will be deprecated, prefer default args
Card.defaultProps = {
  id: '',
  name: '',
  imageSrc: '',
  description: '',
  author: '',
};

export default Card;
