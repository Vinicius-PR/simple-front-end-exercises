import Head from 'next/head'

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>Front Exercises | Home</title>
    </Head>
      <section className={styles.homeContainer}>
        <img src="/vinicius.jpg" alt="vinicius"/>

        <div>
          <h1>Front End Exercises</h1>
          <h3>Hi, my name is Vinicius Paula Resende</h3>
          <p>This website have my solutions to some Front-End exercises.</p>
        </div>
        
      </section>
    </>
  )
}
