import Head from "next/head";
import { Counter } from "../components/Counter";
import commonStyles from '../styles/common.module.scss'

export default function CounterPage() {
  return (
    <>
      <Head>
        <title>Counter</title>
      </Head>
      <h1 className={commonStyles.title}>Counter</h1>
      <Counter/>
    </>
  )
}