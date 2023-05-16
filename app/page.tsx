'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { RedoOutlined } from '@ant-design/icons'
import { Button } from 'antd';

import About from '@/components/About'
import Quote from '@/components/Quote'

import quotes from '@/data/quotes.json'

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState<{ text: string; author: string; context?: string; } | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  const setRandomQuote = () => {
    setFadeOut(true);
  }

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
        setFadeOut(false);
        setFadeIn(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  useEffect(() => {
    if (fadeIn) {
      const timer = setTimeout(() => {
        setFadeIn(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [fadeIn]);

  return (
    <main className={styles.main}>
      <div className={styles.aboutSection}>
        <About />
      </div>
      
      <div className={styles.quoteSection}>
        <div className={styles.quoteHeading}>
          <h2>A Favorite Quote</h2>
          <Button className={styles.refreshButton} type="text" shape="circle" icon={<RedoOutlined />} onClick={setRandomQuote}/>
        </div>
        {currentQuote ? <Quote quote={currentQuote} fadeIn={fadeIn} fadeOut={fadeOut}/> : <p style={{ minHeight:"100px" }}>Loading...</p>}
      </div>

      <div className={styles.workSection}>
        <h2>My Work</h2>
        <p>Coming soon...</p>
      </div>

      <div className={styles.newsletterSection}>
        <h2>Newsletter</h2>
        <p>If you’d like to stay in the loop with what I write, feel free to subscribe to the Substack:</p>
        <div className={styles.newsletter}>
          <iframe src="https://savsidorov.substack.com/embed" frameBorder="0" scrolling="no" title="subscribe"></iframe>
        </div>
      </div>

    </main>
  )
}

//FIXME: Button SSR https://ant.design/docs/react/customize-theme#server-side-render-ssr 

//TODO: Work section