import React, { useState, useEffect } from 'react';

const fetchRecipes = () => {
  const host = process.env.REACT_APP_SEARCH_HOST;
  return fetch(`${host}/api/search`).then((response) => response.json());
};

const Results = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes()
      .then((data) => {
        setRecipes(data.results);
      })
      .catch((e) => console.error('something went wrong', e));
  }, [fetchRecipes]);

  if (!recipes.length) return null;

  return (
    <section>
      <span>{recipes.length} results</span>
      {recipes.map((recipe, i) => (
        <div key={i}>
          <h3>{recipe.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default Results;
