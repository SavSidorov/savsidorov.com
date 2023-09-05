'use client';

import React, { useState, useEffect } from 'react';
import TweetEmbed from 'react-tweet-embed';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import styles from '../blogpost.module.css';
import { ANIMATION_DURATION, ANIMATION_DELAY } from '../consts';

export default function Project() {
	const [projectVisible, setProjectVisible] = useState(false);
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		// This function will run whenever the window size changes
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		// Run the function once to get the initial window size
		handleResize();

		// Subscribe to window resize events
		window.addEventListener('resize', handleResize);

		// Cleanup function: remove the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []); // No dependencies so the effect only runs once on mount and on unmount

	return (
		<Fade
			triggerOnce
			delay={ANIMATION_DELAY}
			duration={ANIMATION_DURATION}
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
					<p>
						Ideation and prototyping for a Mathematica-like web platform for
						STEM problem-solving.
					</p>
				</div>

				<div className={styles.tweet}>
					<TweetEmbed tweetId='1616570586880438272' />
				</div>
			</div>
		</Fade>
	);
}
