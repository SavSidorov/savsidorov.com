// About component

import React from 'react';
import { Inter } from 'next/font/google';
import styles from './Quote.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
  return(
    <div className={styles.quote}>
      <div className={styles.body}>
        <div className={styles.line}></div>
        <p>
          “When you grow up you tend to get told that the world is the way it is and your life is just to live your life inside the world. Try not to bash into the walls too much. Try to have a nice family life, have fun, save a little money. That’s a very limited life. Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you’ll never be the same again.”
        </p>
      </div>
      <p className={styles.attribution}>
        – Steve Jobs
      </p>
    </div>
  )
}