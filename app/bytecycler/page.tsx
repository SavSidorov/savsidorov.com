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
          <h1>ByteCycler</h1>
          <h2>2019–2020</h2>
          <p>ByteCycler is a crowdsourced sensemaking platform built by Johann Cooper and I. It started off as a hackathon project, and has since then turned into a full-fledged web platform. The platform generated graphs of the public discourse around a current issue, showing resonant and dissonant perspectives (nodes), as well as the relations (edges) between them.</p>
          <p>I worked on 4-5 prototypes of the platform over the course of two years while attending full time studies, and got acquainted with full-stack development in the process (React/Node/Express/SQL, & Django).</p>
        </div>

        <div>
          <Image src="/images/bytecycler/johann-sav.jpg" alt="Johann & Sav" width={screenWidth > 700 ? 1686/3 : 1686/5.8} height={screenWidth > 700 ? 1125/3 : 1125/5.8} />
        </div>

        <div>
          <p>At its core is the Echo Score and the Topic Graph (where each article is represented with a node).</p>
        </div>

        <div>
          <Image src="/images/bytecycler/graph-interface.png" alt="Topic Graph" width={screenWidth > 700 ? 1905/3 : 1905/6.5} height={screenWidth > 700 ? 972/3 : 972/6.5} />
        </div>

        <div>
          <h3>The Echo Score</h3>
        </div>
        <div>
          <p>The Echo Score of an article shows how much the snippets in an article are echoed by other articles. It's the percentage of supported snippets out of the article's total pool of supported and contradicted snippets. Nodes and connections are color coded from blue (highest score) to yellow (lowest score).</p>
        </div>
        <div>
          <Image src="/images/bytecycler/echo-formula.png" alt="Echo Score" width={screenWidth > 700 ? 1628/7 : 1628/7.5} height={screenWidth > 700 ? 352/7 : 352/7.5} />
        </div>

        <div>
          <h3>Nodes</h3>
        </div>
        <div>
          <p>Here for example, the maroon article has a lower echo score than the blue ones. Connected articles disagree with the maroon one more.</p>
        </div>
        <div>
          <Image src="/images/bytecycler/nodes.png" alt="Nodes" width={screenWidth > 700 ? 192/1.7 : 192/2} height={screenWidth > 700 ? 211/1.7 : 211/2} />
        </div>
        <div>
          <p>If we hover over that node, we can see that most of that disagreement comes from the top node, since the echo score between those two nodes is yellow - almost 0.</p>
        </div>
        <div>
          <Image src="/images/bytecycler/node-hover.png" alt="Nodes on hover" width={screenWidth > 700 ? 191/1.7 : 191/2} height={screenWidth > 700 ? 212/1.7 : 212/2} />
        </div>

        <div>
          <h3>Sources</h3>
        </div>
        <div>
          <p>We also had pages for every supported source / news outlet. Users could see all articles linked for that source, and rate that source’s credibility.</p>
        </div>
        <div>
          <Image src="/images/bytecycler/sources.png" alt="Sources" width={screenWidth > 700 ? 1904/3 : 1904/6.5} height={screenWidth > 700 ? 970/3 : 970/6.5} />
        </div>
        <div>
          <Image src="/images/bytecycler/source.png" alt="Source" width={screenWidth > 700 ? 1920/3 : 1920/6.5} height={screenWidth > 700 ? 974/3 : 974/6.5} />
        </div>

      </div>
    </Fade>
  )
}