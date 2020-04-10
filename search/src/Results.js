import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <span>{resultNum} results</span>
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`}>
          <div key={recipe.id}>
            <h3>{recipe.name}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Results;
