import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/floatplane-logo.svg"
        alt="Floatplane Logo"
        className={styles.logo}
        width={500}
        height={180}
        priority
      />

    </main>
  )
}
