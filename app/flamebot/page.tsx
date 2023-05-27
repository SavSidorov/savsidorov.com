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
          <h1>Flamebot</h1>
          <h2>Summer 2018</h2>
          <p>We’ve built a mini remote control tank as a fun summer project – complete with a flamethrower mounted on top. The whole project was built from the ground up – designed, fabricated and assembled. The only major off the shelf component is the track assembly, found <Link href="https://www.andymark.com/products/rhino-track-drive-module"><span>on Andymark</span></Link>. We’re controlling it with a <Link href="https://www.amazon.ca/gp/product/B07115X6KL/"><span>Flysky FS-i6X RC Transmitter and FS-iA10B Receiver</span></Link> combination. Flamethrower runs on diesel and a standard electric fuel pump.</p>
        </div>

        <div>
          <Image src="/images/flamebot/flamebot.png" alt="Flamebot" width={screenWidth > 700 ? 1920/3.4 : 1920/6.5} height={screenWidth > 700 ? 1090/3.4 : 1090/6.5} />
        </div>

        <div>
          <Image src="/images/flamebot/flamebot-in-shop.jpg" alt="Flamebot in shop" width={screenWidth > 700 ? 768/1.4 : 768/2.6} height={screenWidth > 700 ? 432/1.4 : 432/2.6} />
        </div>

        <div>
          <p>Watch the reveal video below:</p>
        </div>

        <div>
          <iframe width={screenWidth > 700 ? 560 : 560/1.9} height={screenWidth > 700 ? 315: 315/1.9} src="https://www.youtube.com/embed/z63zuT0zpTQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true} style={{ border: 0 }}></iframe>
        </div>

      </div>
    </Fade>
  )
}