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
					<h1>FIRST Robotics Competition: &apos;Elevation&apos;</h1>
					<h2>Feb 2015</h2>
					<p>
						Designed for the 2015 FIRST Robotics Competition game – &apos;Recycle Rush&apos; with{' '}
						<Link href="https://www.thebluealliance.com/team/4334/2015">
							<span>Team 4334</span>
						</Link>
						. Elevation was designed for bottom stacking and flipping totes.
					</p>
				</div>

				<div>
					<Image
						src="/images/frc2015/elevation.png"
						alt="Elevation"
						width={screenWidth > 700 ? 945 / 1.8 : 945 / 3.2}
						height={screenWidth > 700 ? 739 / 1.8 : 739 / 3.2}
					/>
				</div>

				<div>
					<Image
						src="/images/frc2015/ATA_SAIT.png"
						alt="ATA Group Photo"
						width={screenWidth > 700 ? 614 / 1.2 : 614 / 2.1}
						height={screenWidth > 700 ? 442 / 1.2 : 442 / 2.1}
					/>
				</div>

				<div>
					<p>Watch the reveal video below:</p>
				</div>

				<div>
					<iframe
						width={screenWidth > 700 ? 560 : 560 / 1.9}
						height={screenWidth > 700 ? 315 : 315 / 1.9}
						src="https://www.youtube.com/embed/vd-Vv28Scl8"
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
