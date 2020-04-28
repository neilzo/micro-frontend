import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './SignUp.module.css';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

function reducer(state, action) {
  return {
    ...state,
    [action.type]: action.value,
  };
}

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };
  const handleSubmit = (e) => {
    const { password, confirmPassword, email } = state;
    e.preventDefault();
    const pwTouched = password && confirmPassword;
    const isMismatched = pwTouched && password !== confirmPassword;
    const isIncomplete = !email && !password && !confirmPassword;

    if (isMismatched) {
      setError('🚨 Your passwords must match 🚨');
      return;
    } else if (isIncomplete) {
      setError('Fill everything out, homes 🕵️‍');
      return;
    }
    setError(null);

    console.log('form submit', state);
  };
  const renderError = () => {
    if (!error) return null;
    return <div className={styles.error}>{error}</div>;
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form action="" className={styles.container__form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="yourEmail@example.com"
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="***"
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="***"
          onChange={handleChange}
          className={styles.input}
        />
        {renderError()}
        <button type="submit" className={`btn ${styles.button__submit}`}>
          Create Account
        </button>
      </form>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
