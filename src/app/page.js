import Image from 'next/image'
import styles from './page.module.css'
import Landing from 'src/components/Molecule/Landing/Landing'

export default function Home() {
  return (
    <main className={styles.main}>
          <Landing />
    </main>
  )
}
