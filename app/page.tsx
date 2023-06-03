'use client';

import React, { useState, useEffect } from 'react';
import { RedoOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Fade } from 'react-awesome-reveal';
import styles from './page.module.css';

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

	const [sectionVisible, setSectionsVisible] = useState(false);

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
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [fadeOut]);

	useEffect(() => {
		if (fadeIn) {
			const timer = setTimeout(() => {
				setFadeIn(false);
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [fadeIn]);

	return (
		<main className={styles.main}>
			<Fade
				triggerOnce
				delay={500}
				duration={2000}
				//Set all section to visible
				onVisibilityChange={(inView) => inView && setSectionsVisible(true)}
			>
				<div
					className={`
              ${styles.aboutSection} 
              hidden-initially 
              ${sectionVisible ? 'become-visible' : ''}
            `}
				>
					<About />
				</div>

				<div
					className={`
            ${styles.quoteSection} 
            hidden-initially 
            ${sectionVisible ? 'become-visible' : ''}
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

				<div
					className={`
            ${styles.projectsSection} 
            hidden-initially 
            ${sectionVisible ? 'become-visible' : ''}
          `}
				>
					<h2>My Work</h2>
					<div className={styles.projects}>
						{projects.map((project, index) => (
							<Project key={index} project={project} />
						))}
					</div>
				</div>

				<div
					className={`
            ${styles.newsletterSection} 
            hidden-initially 
            ${sectionVisible ? 'become-visible' : ''}
          `}
				>
					<h2>Newsletter</h2>
					<p>
						If you’d like to stay in the loop with what I write, feel free to subscribe to the
						Substack:
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
