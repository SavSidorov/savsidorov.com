'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal';
import styles from '../blogpost.module.css'

export default function Project() {
  const [projectVisible, setProjectVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // This function will run whenever the window size changes
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    }
  
    // Run the function once to get the initial window size
    handleResize();
  
    // Subscribe to window resize events
    window.addEventListener('resize', handleResize);
  
    // Cleanup function: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []); // No dependencies so the effect only runs once on mount and on unmount

  return (
    <Fade
        triggerOnce
        delay={500}
        duration={2000}
        onVisibilityChange={(inView) => inView && setProjectVisible(true)}
      >
      <div
        className={`
          ${styles.main} 
          hidden-initially 
          ${projectVisible ? 'become-visible' : ''}
        `}
      >
        <div className={styles.titleSection}>
          <h1>Playfair (concept)</h1>
          <h2>2022</h2>
          <p>Ideation and prototyping for a Mathematica-like web platform for STEM problem-solving. Landing page live at <Link href="https://www.getplayfair.com/"><span>getplayfair.com</span></Link></p>
        </div>

        <div>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              TeX box <a href="https://t.co/2y01O4wgau">pic.twitter.com/2y01O4wgau</a>
            </p>
            &mdash; Sav Sidorov (@savsidorov) 
            <a href="https://twitter.com/savsidorov/status/1616570586880438272?ref_src=twsrc%5Etfw">January 20, 2023</a>
          </blockquote>

          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>

      </div>
    </Fade>
  )
}

//FIXME: Tweet embed errors