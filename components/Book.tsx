import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Modal } from 'antd';
import styles from './Book.module.css';

interface BookProps {
	book: {
		title: string;
		subtitle: string;
		author: string;
		image: string;
		review: string;
		purchaseLink: string;
		goodreadsLink: string;
	};
}

export default function Book({ book }: BookProps) {
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const handleOk = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setOpen(false);
		}, 3000);
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<div className={styles.book}>
			<Image
				src={book.image}
				alt={book.title}
				width={165 / 1.2}
				height={250 / 1.2}
				onClick={showModal}
			/>
			<Modal
				open={open}
				title={book.title}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				centered
			>
				<p>{book.review}</p>
				<Link href={book.goodreadsLink}>Goodreads</Link>
				<br />
				<Link href={book.purchaseLink}>Purchase</Link>
			</Modal>
		</div>
	);
}
