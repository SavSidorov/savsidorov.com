'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal';
import ACS101Module from '@/components/ACS101Module'
import styles from '../blogpost.module.css'

import acsModules from '@/data/acs101.json'

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
          <h1>ACS101 Notes (unfinished)</h1>
          <h2>Spring 2021</h2>
          <p>Lecture notes I took for <Link href="https://jwnorman.com/"><span>Joe Norman</span></Link>'s online course: <Link href="https://appliedcomplexity.io/education"><span>Introduction to Complexity and Applied Complexity</span></Link>. The notes are not finished, and some lectures are missing.</p>
        </div>

        <div>
          <div className={styles.books}>
            {acsModules.map((module, index) => (
                <ACS101Module key={index} module={module}/>
            ))}
          </div>
        </div>

      </div>
    </Fade>
  )
}