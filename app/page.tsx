'use client';

import React, { useState, useEffect } from 'react';
import { RedoOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Fade } from 'react-awesome-reveal';
import styles from './page.module.css';
import { ANIMATION_DURATION, ANIMATION_DELAY } from './consts';

import About from '@/components/About';
import Quote from '@/components/Quote';
import Project from '@/components/Project';

import quotes from '@/data/quotes.json';
import projects from '@/data/projects.json';

export default function Home() {
	const [currentQuote, setCurrentQuote] = useState<{
		text: string;
		author: string;
		context?: string;
	} | null>(null);
	const [fadeIn, setFadeIn] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);

	const [aboutSectionVisible, setAboutSectionVisible] = useState(false);
	const [quoteSectionVisible, setQuoteSectionVisible] = useState(false);
	const [projectsSectionVisible, setProjectsSectionVisible] = useState(false);
	const [newsletterSectionVisible, setNewsletterSectionVisible] =
		useState(false);

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		setCurrentQuote(quotes[randomIndex]);
	}, []);

	const setRandomQuote = () => {
		setFadeOut(true);
	};

	useEffect(() => {
		if (fadeOut) {
			const timer = setTimeout(() => {
				const randomIndex = Math.floor(Math.random() * quotes.length);
				setCurrentQuote(quotes[randomIndex]);
				setFadeOut(false);
				setFadeIn(true);
			}, 500);

			return () => clearTimeout(timer);
		}
	}, [fadeOut]);

	useEffect(() => {
		if (fadeIn) {
			const timer = setTimeout(() => {
				setFadeIn(false);
			}, 500);

			return () => clearTimeout(timer);
		}
	}, [fadeIn]);

	return (
		<main className={styles.main}>
			<Fade
				triggerOnce
				delay={ANIMATION_DELAY}
				duration={ANIMATION_DURATION}
				onVisibilityChange={(inView) => inView && setAboutSectionVisible(true)}
			>
				<div
					className={`
              ${styles.aboutSection} 
              hidden-initially 
              ${aboutSectionVisible ? 'become-visible' : ''}
            `}
				>
					<About />
				</div>
			</Fade>

			<Fade
				triggerOnce
				delay={ANIMATION_DELAY}
				duration={ANIMATION_DURATION}
				onVisibilityChange={(inView) => inView && setQuoteSectionVisible(true)}
			>
				<div
					className={`
            ${styles.quoteSection} 
            hidden-initially 
            ${quoteSectionVisible ? 'become-visible' : ''}
          `}
				>
					<div className={styles.quoteHeading}>
						<h2>A Favorite Quote</h2>
						<Button
							className={styles.refreshButton}
							type="text"
							shape="circle"
							icon={<RedoOutlined />}
							onClick={setRandomQuote}
						/>
					</div>
					{currentQuote ? (
						<Quote quote={currentQuote} fadeIn={fadeIn} fadeOut={fadeOut} />
					) : (
						<p style={{ minHeight: '100px' }}>Loading...</p>
					)}
				</div>
			</Fade>

			<Fade
				triggerOnce
				delay={ANIMATION_DELAY}
				duration={ANIMATION_DURATION}
				fraction={0.15}
				onVisibilityChange={(inView) =>
					inView && setProjectsSectionVisible(true)
				}
			>
				<div
					className={`
            ${styles.projectsSection} 
            hidden-initially 
            ${projectsSectionVisible ? 'become-visible' : ''}
          `}
				>
					<h2>My Work</h2>
					<div className={styles.projects}>
						{projects.map((project, index) => (
							<Project key={index} project={project} />
						))}
					</div>
				</div>
			</Fade>

			<Fade
				triggerOnce
				delay={ANIMATION_DELAY}
				duration={ANIMATION_DURATION}
				onVisibilityChange={(inView) =>
					inView && setNewsletterSectionVisible(true)
				}
			>
				<div
					className={`
            ${styles.newsletterSection} 
            hidden-initially 
            ${newsletterSectionVisible ? 'become-visible' : ''}
          `}
				>
					<h2>Newsletter</h2>
					<p>
						If you’d like to stay in the loop with what I write, feel free to
						subscribe to the Substack:
					</p>
					<div className={styles.newsletter}>
						<iframe
							src="https://savsidorov.substack.com/embed"
							frameBorder="0"
							scrolling="no"
							title="subscribe"
						></iframe>
					</div>
				</div>
			</Fade>
		</main>
	);
}
