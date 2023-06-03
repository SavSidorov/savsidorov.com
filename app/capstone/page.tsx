'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
					<h1>ECE Capstone Project: Noise Detector and Classifier</h1>
					<h2>2022–2023</h2>
					<p>
						In partnership with{' '}
						<Link href="https://breezetraffic.com/">
							<span>Breeze Traffic</span>
						</Link>
						, we've used machine learning classification models to categorize various traffic sounds
						at intersections in Vancouver. The ultimate goal is a system that can assist the
						government in reducing CO2 emissions by identifying and monitoring vehicle emissions.
						Traffic light cameras are equipped with microphones, the audio from which is analyzed in
						real time to identify sounds such as car horns and sirens. The identified audio is
						subsequently stored in a database in the cloud, and sound metrics are computed and
						presented on a dashboard for easy visualization.
					</p>
				</div>

				<div>
					<iframe
						width={screenWidth > 700 ? 560 : 560 / 1.9}
						height={screenWidth > 700 ? 315 : 315 / 1.9}
						src="https://www.youtube.com/embed/Kt8L60WjCTU"
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
