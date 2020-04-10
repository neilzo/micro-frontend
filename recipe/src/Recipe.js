import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const fetchRecipe = (id) => {
  const host = process.env.REACT_APP_RECIPE_HOST;
  if (!id) throw Error('need id yo');
  return fetch(`${host}/api/recipe/${id}`).then((response) => response.json());
};

const Recipe = ({ match: { params } }) => {
  const { id } = params;
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetchRecipe(id).then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) return null;

  return (
    <section>
      <h1>{recipe.name}</h1>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Directions</h3>
      <ul>
        {recipe.directions.map((direction) => (
          <li key={direction}>{direction}</li>
        ))}
      </ul>
    </section>
  );
};

Recipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

Recipe.defaultProps = {
  match: null,
};

export default Recipe;
