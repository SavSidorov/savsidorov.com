import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Book.module.css';

interface ACS101ModuleProps {
	module: {
		title: string;
		image: string;
		pdf: string;
	};
}

export default function ACS101Module({ module }: ACS101ModuleProps) {
	return module.pdf !== '' ? (
		<div className={styles.book}>
			<Link href={module.pdf}>
				<Image src={module.image} alt={module.title} width={165 / 1.2} height={250 / 1.2} />
			</Link>
		</div>
	) : (
		<div className={styles.book}>
			<Image src={module.image} alt={module.title} width={165 / 1.2} height={250 / 1.2} />
		</div>
	);
}
