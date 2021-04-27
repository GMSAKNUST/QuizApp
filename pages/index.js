import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.Home}>
<center className={styles.HomeContent}>
<div>
<h1>
  MQI QURAN FAIR 
</h1>
<p>HIFZ CONTEST</p>
</div>

<div className={styles.imgContainer}>
<Image src='/images/Mobile Quran.png' 
height={644}
width={644}
alt="this is me"/>
</div>

<div>
<Link href='/contest'>
  <a className={styles.HomeLink}> Start</a>
</Link>
</div>
</center>


    </div>
  )
}
