'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import styles from '../blogpost.module.css';

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
					<h1>Interhackt</h1>
					<h2>Dec 2020</h2>
					<p>
						Interhackt is a hackathon I helped organize and run, along with Azlen Elza, Matthew Siu,
						Jon Borichevskiy, Kristen Pavle and others. The focus was on the future of interfaces,
						collaboration, online learing, interacting with software and similar ideas. We had over
						300 signups and many creative, forward-looking projects made.
					</p>
				</div>

				<div>
					<Image
						src="/images/interhackt/interhackt.png"
						alt="Interhackt"
						width={screenWidth > 700 ? 1088 / 1.7 : 1088 / 3.7}
						height={screenWidth > 700 ? 643 / 1.7 : 643 / 3.7}
					/>
				</div>

				<div>
					<p>
						In addition, we ran several events throughout the week, ranging from software tutorials,
						to the history of technology and the process of building startups, to name a few. You
						can check out all of the talks on the{' '}
						<Link href="https://www.youtube.com/channel/UCeBgTxzDP97tPzaCwViIqAA">
							<span>Interhackt YouTube channel</span>
						</Link>
						.
					</p>
				</div>

				<div>
					<p>The talk I gave at Interhackt is titled 'The Future of Learning'. Watch:</p>
				</div>

				<div>
					<iframe
						width={screenWidth > 700 ? 560 : 560 / 1.9}
						height={screenWidth > 700 ? 315 : 315 / 1.9}
						src="https://www.youtube.com/embed/Gtvww68rEcQ"
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
