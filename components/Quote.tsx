// Quote component
import React from 'react';
import styles from './Quote.module.css';

interface QuoteProps {
  quote: {
    text: string;
    author: string;
    context?: string;
  };
  fadeIn: boolean;
  fadeOut: boolean;
}

export default function Quote({quote, fadeIn, fadeOut}: QuoteProps) {
  return(
    <div className={`${styles.quote} ${fadeIn ? styles.fadeIn : ''} ${fadeOut ? styles.fadeOut : ''}`}>
        <div className={styles.body}>
          <div className={styles.line}></div>
          <p>
            “{quote.text}”
          </p>
        </div>
        <p className={styles.author}>
          – {quote.author}<i>{quote.context ? `, ${quote.context}` : ''}</i>
        </p>
    </div>
  )
}