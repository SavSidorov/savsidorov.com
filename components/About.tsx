import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
  const iconWidth = 21;
  const iconHeight = 21;

  return(
    <div className={styles.about}>
      <Image 
        src="/images/profile.png"
        alt="Sav Sidorov" 
        width={300} 
        height={300} 
        draggable={false}
        priority={true}
        className={styles.profile}
      />
      <div className={styles.content}>
        <h1 className={styles.name}>Sav Sidorov</h1>
        <p>I’m a recent electrical engineering graduate interested in <a target="_blank" href="https://www.youtube.com/watch?v=agOdP2Bmieg"><span>humane software</span></a>, neurotech, robotics and the <a target="_blank" href="https://savsidorov.substack.com/p/the-future-of-learning"><span>future of learning</span></a>.</p>
        <p>Explore <Link href="/library"><span>stuff I’ve read</span></Link>.</p>
        <p>My <Link href="/sav_sidorov_resume.pdf"><span>resume</span></Link>.</p>
        <div className={styles.socials}>
          <a target="_blank" href="https://twitter.com/savsidorov">
            <Image src="/socials/twitter.svg" alt="Twitter" width={iconWidth} height={iconHeight} draggable={false}/>
          </a>
          <a target="_blank" href="https://linkedin.com/in/savsidorov">
            <Image src="/socials/linkedin.svg" alt="LinkedIn" width={iconWidth} height={iconHeight} draggable={false}/>
          </a>
          <a target="_blank" href="https://github.com/savsidorov">
            <Image src="/socials/github.svg" alt="GitHub" width={iconWidth} height={iconHeight} draggable={false}/>
          </a>
          <a target="_blank" href="https://instagram.com/savsidorov">
            <Image src="/socials/instagram.svg" alt="Instagram" width={iconWidth} height={iconHeight} draggable={false}/>
          </a>
          <a target="_blank" href="https://savsidorov.substack.com/">
            <Image src="/socials/substack.svg" alt="Substack" width={iconWidth} height={iconHeight} draggable={false}/>
          </a>
          <a target="_blank" href="mailto:sav01027@gmail.com">
            <Image src="/socials/mail.svg" alt="Mail" width={iconWidth*1.1} height={iconHeight*1.1} draggable={false}/>
          </a>
        </div>
      </div>
    </div>
  )
}