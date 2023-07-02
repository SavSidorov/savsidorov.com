'use client';

import React, { useState, useEffect } from 'react';
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
					<h1>Music Videos</h1>
					<h2 className={styles.subtitle}>2020 / 2021</h2>
					<p>
						I&apos;ve had the opportunity to direct three music videos, thus
						far. One is a Wallows cover, &apos;Drunk on Halloween&apos; with{' '}
						<Link href="https://www.youtube.com/channel/UCHK83GbLYCwSCNjiIPEfL4Q">
							<span>Dwaigne Quierra</span>
						</Link>
						. &apos;Here Comes Another Year&apos; is an original song that
						Dwaigne wrote. A third video is of my mom, dancing to Replay by
						WOODJU & MITYA.
					</p>
				</div>

				<div>
					<iframe
						width={screenWidth > 700 ? 560 : 560 / 1.9}
						height={screenWidth > 700 ? 315 : 315 / 1.9}
						src="https://www.youtube.com/embed/LRzBZ4yueIc"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen={true}
						style={{ border: 0 }}
					></iframe>
				</div>

				<div>
					<iframe
						width={screenWidth > 700 ? 560 : 560 / 1.9}
						height={screenWidth > 700 ? 315 : 315 / 1.9}
						src="https://www.youtube.com/embed/da94JmrPtgk"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen={true}
						style={{ border: 0 }}
					></iframe>
				</div>

				<div>
					<iframe
						width={screenWidth > 700 ? 560 : 560 / 1.9}
						height={screenWidth > 700 ? 315 : 315 / 1.9}
						src="https://www.youtube.com/embed/whxyTwNuaOk"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen={true}
						style={{ border: 0 }}
					></iframe>
				</div>
			</div>
		</Fade>
	);
}
