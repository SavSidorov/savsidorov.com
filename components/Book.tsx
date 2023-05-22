import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Book.module.css";

interface BookProps {
  book: {
    title: string;
		subtitle: string;
    author: string;
		review: string;
		purchaseLink: string;
		goodreadsLink: string;
    image: string;
  };
}

export default function Book({book}: BookProps) {
	return (
			<div className={styles.book}>
				<Link href={book.goodreadsLink}>
					<Image src={book.image} alt={book.title} width={165 / 1.2} height={250 / 1.2}/>
				</Link>
			</div>
	);
}
