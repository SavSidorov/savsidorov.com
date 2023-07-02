'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import ACS101Module from '@/components/ACS101Module';
import styles from '../blogpost.module.css';
import { ANIMATION_DURATION, ANIMATION_DELAY } from '../consts';

import acsModules from '@/data/acs101.json';

export default function Project() {
	const [projectVisible, setProjectVisible] = useState(false);

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
					<h1>ACS101 Notes (unfinished)</h1>
					<h2 className={styles.subtitle}>Spring 2021</h2>
					<p>
						Lecture notes I took for{' '}
						<Link href="https://jwnorman.com/">
							<span>Joe Norman</span>
						</Link>
						&apos;s online course:{' '}
						<Link href="https://appliedcomplexity.io/education">
							<span>Introduction to Complexity and Applied Complexity</span>
						</Link>
						. The notes are not finished, and some lectures are missing.
					</p>
				</div>

				<div>
					<div className={styles.books}>
						{acsModules.map((module, index) => (
							<ACS101Module key={index} module={module} />
						))}
					</div>
				</div>
			</div>
		</Fade>
	);
}
