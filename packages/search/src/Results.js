import React, { useState, useEffect } from 'react';
import get from 'lodash/get';
import Api from '@micro-frontend/shared/src/Api';

import Card from './Card';

import styles from './Results.module.css';

// TODO: move fetch/view fns to separate file
const recipeView = (data) => ({
  id: get(data, '_id'),
  name: get(data, 'name'),
  image: get(data, 'image_url'),
  description: get(data, 'description'),
  author: get(data, 'author'),
});

const fetchRecipes = () => {
  const host =
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_SEARCH_HOST
      : process.env.REACT_APP_SEARCH_SERVER_HOST;
  const url = `${host}/api/search`;

  return Api.get(url)
    .then((recipes) => recipes.map(recipeView));
};

const Results = () => {
  const [recipes, setRecipes] = useState([]);
  const resultNum = recipes.length;

  useEffect(() => {
    fetchRecipes()
      .then((data) => {
        setRecipes(data);
      })
      .catch((e) => console.error('something went wrong', e));
  }, []);

  if (!resultNum) return null;

  return (
    <section>
      {/* <span>{resultNum} results</span> */}
      <div className={styles.card__container}>
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            imageSrc={recipe.image}
            description={recipe.description}
            author={recipe.author}
          />
        ))}
      </div>
    </section>
  );
};

export default Results;
