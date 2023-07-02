'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import Book from '@/components/Book';
import styles from '../blogpost.module.css';
import { ANIMATION_DURATION, ANIMATION_DELAY } from '../consts';

import books from '@/data/books.json';
import essays from '@/data/essays.json';
import papers from '@/data/papers.json';
import interviews from '@/data/interviews.json';
import shortStories from '@/data/shortstories.json';
import poetry from '@/data/poetry.json';

export default function Library() {
	const [libraryVisible, setLibraryVisible] = useState(false);
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

	// Sorts reading list by title alphabetically, excluding "A" and "The" from the beginning of titles
	function sortByTitle(readingList: any[]) {
		return readingList.sort((a, b) => {
			const titleA = a.title.replace(/^(a|the)\s/i, '');
			const titleB = b.title.replace(/^(a|the)\s/i, '');
			return titleA.localeCompare(titleB);
		});
	}

	// Sorts reading list alphabetically by the author's last name (handles single names and multiple names)
	// If an author has multiple writings, sort the writings by title
	// Skips et al.
	function sortByAuthor(readingList: any[]) {
		return readingList.sort((a, b) => {
			const authorA = a.author.split(' ').pop();
			const authorB = b.author.split(' ').pop();
			if (authorA === authorB) {
				const titleA = a.title.replace(/^(a|the)\s/i, '');
				const titleB = b.title.replace(/^(a|the)\s/i, '');
				return titleA.localeCompare(titleB);
			}
			return authorA.localeCompare(authorB);
		});
	}

	return (
		<Fade
			triggerOnce
			delay={ANIMATION_DELAY}
			duration={ANIMATION_DURATION}
			onVisibilityChange={(inView) => inView && setLibraryVisible(true)}
		>
			<div
				className={`
          ${styles.main} 
          hidden-initially 
          ${libraryVisible ? 'become-visible' : ''}
        `}
			>
				<div className={styles.titleSection}>
					<h1>The Library</h1>
					<p>
						These are the books and shorter writings that have stuck with me and
						shaped my worldview. See more books on my{' '}
						<Link href="https://www.goodreads.com/user/show/74501550-sav-sidorov">
							<span>Goodreads</span>
						</Link>
						.
					</p>
				</div>

				<div className={styles.booksSection}>
					<h2>Books</h2>
					<div className={styles.books}>
						{sortByTitle(books).map((book, index) => (
							<Book key={index} book={book} />
						))}
					</div>
				</div>

				<div className={styles.essaysSection}>
					<h2>Essays & Articles</h2>
					<div className={styles.essays}>
						{screenWidth > 700
							? sortByAuthor(essays).map((essay, index) => (
									<p key={index}>
										{essay.author} –{' '}
										<Link href={essay.url}>
											<span>{essay.title}</span>
										</Link>
									</p>
							  ))
							: sortByTitle(essays).map((essay, index) => (
									<p key={index}>
										<Link href={essay.url}>
											<span>{essay.title}</span>
										</Link>
									</p>
							  ))}
					</div>
				</div>

				<div className={styles.papersSection}>
					<h2>Scientific Papers</h2>
					<div className={styles.papers}>
						{screenWidth > 700
							? sortByAuthor(papers).map((paper, index) => (
									<p key={index}>
										{paper.author} –{' '}
										<Link href={paper.url}>
											<span>{paper.title}</span>
										</Link>
									</p>
							  ))
							: sortByTitle(papers).map((paper, index) => (
									<p key={index}>
										<Link href={paper.url}>
											<span>{paper.title}</span>
										</Link>
									</p>
							  ))}
					</div>
				</div>

				<div className={styles.interviewsSection}>
					<h2>Interviews</h2>
					<div className={styles.interviews}>
						{sortByTitle(interviews).map((interview, index) => (
							<p key={index}>
								<Link href={interview.url}>
									<span>{interview.title}</span>
								</Link>
							</p>
						))}
					</div>
				</div>

				<div className={styles.storiesSection}>
					<h2>Short Stories</h2>
					<div className={styles.stories}>
						{screenWidth > 700
							? sortByAuthor(shortStories).map((story, index) => (
									<p key={index}>
										{story.author} –{' '}
										<Link href={story.url}>
											<span>{story.title}</span>
										</Link>
									</p>
							  ))
							: sortByTitle(shortStories).map((story, index) => (
									<p key={index}>
										<Link href={story.url}>
											<span>{story.title}</span>
										</Link>
									</p>
							  ))}
					</div>
				</div>

				<div className={styles.poetrySection}>
					<h2>Poetry</h2>
					<div className={styles.poetry}>
						{screenWidth > 700
							? sortByAuthor(poetry).map((poem, index) => (
									<p key={index}>
										{poem.author} –{' '}
										<Link href={poem.url}>
											<span>{poem.title}</span>
										</Link>
									</p>
							  ))
							: sortByTitle(poetry).map((poem, index) => (
									<p key={index}>
										<Link href={poem.url}>
											<span>{poem.title}</span>
										</Link>
									</p>
							  ))}
					</div>
				</div>
			</div>
		</Fade>
	);
}
