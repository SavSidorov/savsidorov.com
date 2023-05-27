'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
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
          <h1>FIRST Robotics Competition: 'Impulse'</h1>
          <h2>Feb 2016</h2>
          <p>Designed for the 2016 FIRST Robotics Competition game – 'FIRST Stronghold' with <Link href="https://www.thebluealliance.com/team/5897/2016"><span>Team 5897</span></Link>. Impulse was capable of catching and shooting foam balls, raising obstacles with the front arm and climbing up a bar with a telescoping mechanism.</p>
        </div>

        <div>
          <Image src="/images/frc2016/5897_team.jpg" alt="Team Photo" width={screenWidth > 700 ? 640/1.2 : 640/2.2} height={screenWidth > 700 ? 480/1.2 : 480/2.2} />
        </div>

        <div>
          <Image src="/images/frc2016/impulse.png" alt="Impulse" width={screenWidth > 700 ? 750/1.4 : 750/2.6} height={screenWidth > 700 ? 540/1.4 : 540/2.6} />
        </div>

        <div>
          <p>Watch the reveal video below:</p>
        </div>

        <div>
          <iframe width={screenWidth > 700 ? 560 : 560/1.9} height={screenWidth > 700 ? 315: 315/1.9} src="https://www.youtube.com/embed/iiEHdTanE8U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true} style={{ border: 0 }}></iframe>
        </div>

      </div>
    </Fade>
  )
}