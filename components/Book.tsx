import React, { useState } from 'react';
import Image from 'next/image';
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
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const handleOk = () => {
		setTimeout(() => {
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
				footer={[
					<Button
						key="link"
						href={book.goodreadsLink}
						type="text"
						onClick={handleOk}
					>
						Goodreads
					</Button>,
					<Button
						key="link"
						href={book.purchaseLink}
						type="text"
						onClick={handleOk}
					>
						Purchase
					</Button>,
				]}
				centered
			>
				<p>{book.review}</p>
			</Modal>
		</div>
	);
}

//FIXME: Modal slightly shifts underlying content when opened
