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
					<h1>FIRST Robotics Competition: &apos;Toggle&apos;</h1>
					<h2 className={styles.subtitle}>Feb 2017</h2>
					<p>
						Designed for the 2017 FIRST Robotics Competition game – &apos;FIRST
						Steamworks&apos; with{' '}
						<Link href="https://www.thebluealliance.com/team/5897/2017">
							<span>Team 5897</span>
						</Link>
						. Toggle was capable of carrying gears (plastic game pieces),
						collecting and shooting plastic balls, climbing up a velcro rope and
						moving seamlessly across the field.
					</p>
					<p>
						Toggle was built on a mecanum drive train, allowing it to move
						omnidirectionally. Each wheel had a separate gearbox and could move
						independently. The custom gear ratios allowed it to reach one of the
						highest top speeds on the field. Due to the omnidirectional
						movement, the ‘front’ of the robot could be toggled between two
						modes, changing the control scheme to make operation easier.
					</p>
				</div>

				<div>
					<Image
						src="/images/frc2017/5897_team.png"
						alt="Team Photo"
						width={screenWidth > 700 ? 1440 / 2.7 : 1440 / 5}
						height={screenWidth > 700 ? 709 / 2.7 : 709 / 5}
					/>
				</div>

				<div>
					<Image
						src="/images/frc2017/toggle.png"
						alt="Toggle"
						width={screenWidth > 700 ? 490 : 490 / 1.7}
						height={screenWidth > 700 ? 353 : 353 / 1.7}
					/>
				</div>

				<div>
					<p>Watch the reveal video below:</p>
				</div>

				<div>
					<iframe
						width={screenWidth > 700 ? 560 : 560 / 1.9}
						height={screenWidth > 700 ? 315 : 315 / 1.9}
						src="https://www.youtube.com/embed/EHVaOwvWSi0"
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
