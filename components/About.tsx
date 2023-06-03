import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
	const iconWidth = 21;
	const iconHeight = 21;

	return (
		<div className={styles.about}>
			<Image
				src="/images/profile.png"
				alt="Sav Sidorov"
				width={300}
				height={300}
				draggable={false}
				priority={true}
				className={styles.profile}
			/>
			<div className={styles.content}>
				<h1 className={styles.name}>Sav Sidorov</h1>
				<p>
					I’m a recent electrical engineering graduate interested in{' '}
					<Link href="https://www.youtube.com/watch?v=agOdP2Bmieg">
						<span>humane software</span>
					</Link>
					, neurotech, robotics and the{' '}
					<Link href="https://savsidorov.substack.com/p/the-future-of-learning">
						<span>future of learning</span>
					</Link>
					.
				</p>
				<p>
					Explore{' '}
					<Link href="/library">
						<span>stuff I’ve read</span>
					</Link>
					.
				</p>
				<p>
					My{' '}
					<Link href="/sav_sidorov_resume.pdf">
						<span>resume</span>
					</Link>
					.
				</p>
				<div className={styles.socials}>
					<Link href="https://twitter.com/savsidorov">
						<Image
							src="/socials/twitter.svg"
							alt="Twitter"
							width={iconWidth}
							height={iconHeight}
							draggable={false}
						/>
					</Link>
					<Link href="https://linkedin.com/in/savsidorov">
						<Image
							src="/socials/linkedin.svg"
							alt="LinkedIn"
							width={iconWidth}
							height={iconHeight}
							draggable={false}
						/>
					</Link>
					<Link href="https://github.com/savsidorov">
						<Image
							src="/socials/github.svg"
							alt="GitHub"
							width={iconWidth}
							height={iconHeight}
							draggable={false}
						/>
					</Link>
					<Link href="https://instagram.com/savsidorov">
						<Image
							src="/socials/instagram.svg"
							alt="Instagram"
							width={iconWidth}
							height={iconHeight}
							draggable={false}
						/>
					</Link>
					<Link href="https://savsidorov.substack.com/">
						<Image
							src="/socials/substack.svg"
							alt="Substack"
							width={iconWidth}
							height={iconHeight}
							draggable={false}
						/>
					</Link>
					<Link href="mailto:sav01027@gmail.com">
						<Image
							src="/socials/mail.svg"
							alt="Mail"
							width={iconWidth * 1.1}
							height={iconHeight * 1.1}
							draggable={false}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
