
import Link from 'next/link'
import Book from '@/components/Book'
import styles from '../blogpost.module.css'

export default function Library() {
  return (
    <div className={styles.main}>
      <div className={styles.titleSection}>
        <h1>The Library</h1>
        <p>These are the books and shorter writings that have stuck with me and shaped my worldview. See more books on my <Link href="https://www.goodreads.com/user/show/74501550-sav-sidorov"><span>Goodreads</span></Link>.</p>
      </div>

      <div className={styles.booksSection}>
        <h2>Books</h2>
        <div className={styles.books}>
          <Book book={{title: "The Bed of Procrustes: Philosophical and Practical Aphorisms", url: "https://savsidorov.substack.com/p/50-quotes-from-the-bed-of-procrustes", image: "/images/books/procrustes.jpg"}}/>
          <Book book={{title: "Finite and Infinite Games: A Vision of Life as Play and Possibility", url: "https://www.goodreads.com/book/show/189989.Finite_and_Infinite_Games", image: "/images/books/finite.jpg"}}/>
          <Book book={{title: "Gödel, Escher, Bach: An Eternal Golden Braid", url: "https://www.goodreads.com/book/show/24113.G_del_Escher_Bach", image: "/images/books/geb.jpg"}}/>
          <Book book={{title: "The Machiavellians: Defenders of Freedom", url: "https://www.goodreads.com/book/show/1270379.The_Machiavellians", image: "/images/books/machiavellians.jpg"}}/>
          <Book book={{title: "Zero to One: Notes on Startups, or How to Build the Future", url: "https://www.goodreads.com/book/show/18050143-zero-to-one", image: "/images/books/zero-to-one.jpg"}}/>
        </div>
      </div>

      <div className={styles.essaysSection}>
        <h2>Essays & Articles</h2>
        <div className={styles.essays}>
          <p>Scott Alexander – <Link href="https://slatestarcodex.com/2018/01/24/conflict-vs-mistake/"><span>Conflict vs Mistake</span></Link></p>
          <p>Scott Alexander – <Link href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/"><span>Meditations on Moloch</span></Link></p>
        </div>
      </div>

      <div className={styles.papersSection}>
        <h2>Scientific Papers</h2>
        <div className={styles.papers}>
          <p><Link href="https://www.interferenza.net/bcs/interw/66-jan.htm"><span>Playboy Interview: Bob Dylan</span></Link></p>
        </div>
      </div>

      <div className={styles.interviewsSection}>
        <h2>Interviews</h2>
        <div className={styles.interviews}>
          <p><Link href="https://www.interferenza.net/bcs/interw/66-jan.htm"><span>Playboy Interview: Bob Dylan</span></Link></p>
        </div>
      </div>

      <div className={styles.storiesSection}>
        <h2>Short Stories</h2>
        <div className={styles.stories}>
          <p>Scott Alexander – <Link href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/"><span>Meditations on Moloch</span></Link></p>
        </div>
      </div>

      <div className={styles.poetrySection}>
        <h2>Poetry</h2>
        <div className={styles.poetry}>
          <p>Scott Alexander – <Link href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/"><span>Meditations on Moloch</span></Link></p>
        </div>
      </div>

      
    </div>
  )
}
