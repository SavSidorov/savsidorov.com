// Project component
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Project.module.css';

interface ProjectProps {
	project: {
		title: string;
		url: string;
		description: string;
		date: string;
		image: string;
	};
}

export default function Project({ project }: ProjectProps) {
	return (
		<Link href={project.url}>
			<div className={styles.project}>
				<Image
					src={`/images/projects/${project.image}.png`}
					alt={project.title}
					width={150}
					height={150}
					className={styles.image}
				/>
				<div className={styles.body}>
					<h3 className={styles.title}>
						{project.title} <span>-&gt;</span>
					</h3>
					<h4 className={styles.date}>{project.date}</h4>
					<p className={styles.description} style={{ textDecoration: 'none' }}>
						{project.description}
					</p>
				</div>
			</div>
		</Link>
	);
}
