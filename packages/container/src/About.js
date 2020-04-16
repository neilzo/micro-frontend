import React from 'react';

import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About</h1>

      <p>
        Simple Restaurant Website has what you want. What you need. With no superfluous content or
        SEO spam (no author&apos;s life stories here).
      </p>

      <p data-testid="aboutMotto">Our motto is: Find a recipe. Make it.</p>
    </div>
  );
};

export default About;
