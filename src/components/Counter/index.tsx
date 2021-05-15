import { useState, useRef } from "react"

import styles from './counter.module.scss'


export function Counter() {
  const [counter, setCounter] = useState(0)
  const [isIncrementing, setIsIncrementing] = useState(false)
  const [isDecrementing, setIsDecrementing] = useState(false)

  function resetAnimation() {
    setIsIncrementing(false)
    setIsDecrementing(false)
  }

  function handleIncrement() {
    setCounter(counter +1)
    setIsIncrementing(true)
    setTimeout(() => {
      resetAnimation()
    }, 100); 
  }

  function handleDecrement() {
    setCounter(counter -1)
    setIsDecrementing(true)
    setTimeout(() => {
      resetAnimation()
    }, 100); 
  }

  function handleReset() {
    setCounter(0)
  }

  return (
    <section className={styles.counterContainer}>
      <div>
        <p
          className={`${isIncrementing ? `${styles.increment}` : "" } 
                      ${isDecrementing ? `${styles.decrement}` : "" }`}
        >
          {counter}
        </p>
      </div>

      <button name="increment" onClick={handleIncrement}>Increment</button>
      <button name="decrement" onClick={handleDecrement}>Decrement</button>
      <button name="reset" onClick={handleReset}>Reset</button>
    </section>
  )
}