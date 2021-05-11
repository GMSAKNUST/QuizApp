import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div data-testid="home" className={styles.Home}>
      <center className={styles.HomeContent}>
        <div>
          <h1>{` MQI QURAN FAIR ${year}`}</h1>
          <p>HIFZ CONTEST</p>
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="/images/Mobile Quran.png"
            height={644}
            width={644}
            alt="mobileQuran"
          />
        </div>

        <div>
          <Link href="/contest">
            <a className={styles.HomeLink}> Start</a>
          </Link>
        </div>
      </center>
    </div>
  );
}
