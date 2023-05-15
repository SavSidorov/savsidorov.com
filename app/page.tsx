import styles from './page.module.css'

import About from '@/components/About'
import Quote from '@/components/Quote'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <About />
      </div>
      

      

    </main>
  )
}

/*
      <div>
        <h2>A Favorite Quote</h2>
        <button>Refresh</button>
      </div>
      <Quote />

      <h2>My Work</h2>

      <h2>Newsletter</h2>
      <div className={styles.newsletter}>
				<iframe src="https://savsidorov.substack.com/embed" frameBorder="0" scrolling="no" title="subscribe"></iframe>
			</div> 	
*/