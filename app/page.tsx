'use client'

import React, { useState, useEffect } from 'react';
import { RedoOutlined } from '@ant-design/icons'
import { Button } from 'antd';
import { Fade } from 'react-awesome-reveal';
import styles from './page.module.css'

import About from '@/components/About'
import Quote from '@/components/Quote'
import Project from '@/components/Project'

import quotes from '@/data/quotes.json'
import projects from '@/data/projects.json'

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState<{ text: string; author: string; context?: string; } | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const [aboutSectionVisible, setAboutSectionVisible] = useState(false);
  const [quoteSectionVisible, setQuoteSectionVisible] = useState(false);
  const [projectsSectionVisible, setProjectsSectionVisible] = useState(false);
  const [newsletterSectionVisible, setNewsletterSectionVisible] = useState(false);

  let screenWidth = window.innerWidth;

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.main}>
      <Fade
        triggerOnce
        delay={500}
        duration={2000}
        onVisibilityChange={(inView) => inView && setAboutSectionVisible(true)}
      >
          <div
            className={`
              ${styles.aboutSection} 
              hidden-initially 
              ${aboutSectionVisible ? 'become-visible' : ''}
            `}
          >
          <About />
        </div>
      </Fade>
      
      <Fade
        direction="up"
        triggerOnce
        delay={1500}
        duration={screenWidth > 700 ? 1500 : 1000}
        onVisibilityChange={(inView) => inView && setQuoteSectionVisible(true)}
      >
        <div
          className={`
            ${styles.quoteSection} 
            hidden-initially 
            ${quoteSectionVisible ? 'become-visible' : ''}
          `}
        >
          <div className={styles.quoteHeading}>
            <h2>A Favorite Quote</h2>
            <Button className={styles.refreshButton} type="text" shape="circle" icon={<RedoOutlined />} onClick={setRandomQuote}/>
          </div>
          {currentQuote ? <Quote quote={currentQuote} fadeIn={fadeIn} fadeOut={fadeOut}/> : <p style={{ minHeight:"100px" }}>Loading...</p>}
        </div>
      </Fade>

      <Fade
        direction="up"
        triggerOnce
        delay={screenWidth > 700 ? 1500 : 0}
        duration={screenWidth > 700 ? 2250 : 1500}
        onVisibilityChange={(inView) => inView && setProjectsSectionVisible(true)}
      >
        <div
          className={`
            ${styles.projectsSection} 
            hidden-initially 
            ${projectsSectionVisible ? 'become-visible' : ''}
          `}
        >
          <h2>My Work</h2>
          <div className={styles.projects}>
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </Fade>

      <Fade
        direction="up"
        triggerOnce
        delay={500}
        onVisibilityChange={(inView) => inView && setNewsletterSectionVisible(true)}
      >
        <div
          className={`
            ${styles.newsletterSection} 
            hidden-initially 
            ${newsletterSectionVisible ? 'become-visible' : ''}
          `}
        >
          <h2>Newsletter</h2>
          <p>If you’d like to stay in the loop with what I write, feel free to subscribe to the Substack:</p>
          <div className={styles.newsletter}>
            <iframe src="https://savsidorov.substack.com/embed" frameBorder="0" scrolling="no" title="subscribe"></iframe>
          </div>
        </div>
      </Fade>

    </main>
  )
}