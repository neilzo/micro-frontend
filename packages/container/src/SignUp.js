import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as userActions from './actions/user';

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

const SignUp = ({ signup }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };
  const handleSubmit = async (e) => {
    const { password, confirmPassword, email } = state;
    e.preventDefault();
    const pwTouched = password && confirmPassword;
    const isMismatched = pwTouched && password !== confirmPassword;
    const isIncomplete = !email && !password && !confirmPassword;

    if (isMismatched) {
      setError('🚨 Your passwords must match 🚨');
      return;
    }
    if (isIncomplete) {
      setError('Fill everything out, homes 🕵️‍');
      return;
    }
    setError(null);

    try {
      await signup(state);
    } catch (err) {
      // handle errors
      console.log("I'm in da component", err);
      // setError(e.msg)
    }
  };
  const renderError = () => {
    if (!error) return null;
    return <div className={styles.error}>{error}</div>;
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form action="" className={styles.container__form} onSubmit={handleSubmit}>
        <label htmlFor="email" className={styles.field}>
          <p className={styles.label}>Email:</p>
          <input
            id="email"
            type="email"
            placeholder="yourEmail@example.com"
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <label htmlFor="password" className={styles.field}>
          <p className={styles.label}>Password:</p>

          <input
            id="password"
            type="password"
            placeholder="***"
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <label htmlFor="confirmPassword" className={styles.field}>
          <p className={styles.label}>Confirm Password:</p>
          <input
            id="confirmPassword"
            type="password"
            placeholder="***"
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        {renderError()}
        <button type="submit" className={`btn btn-primary ${styles.button__submit}`}>
          Create Account
        </button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signup: (formValues) => dispatch(userActions.signup(formValues)),
});

export default connect(null, mapDispatchToProps)(SignUp);
