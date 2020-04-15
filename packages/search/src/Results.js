import React, { useState, useEffect } from 'react';

import Card from './Card';

import styles from './Results.module.css';

const fetchRecipes = () => {
  const host = process.env.REACT_APP_SEARCH_HOST;
  return fetch(`${host}/api/search`).then((response) => response.json());
};

const Results = () => {
  const [recipes, setRecipes] = useState([]);
  const resultNum = recipes.length;

  useEffect(() => {
    fetchRecipes()
      .then((data) => {
        setRecipes(data.results);
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
          />
        ))}
      </div>
    </section>
  );
};

export default Results;