import React, { useState } from 'react'
import styles from '../styles/FindMultipliers.modules.css'

export default () => {
  const [state, setState] = useState([])

  const splitByMultipliers = (n) => {
    let r = [], i = 2
    while (n > 1) {
      if (n % i === 0) {
        r.push(i)
        n /= i
      } else { i++ }
    }
    return r
  }

  const onChange = (e) => {
    setState(splitByMultipliers(e.target.value))
  }

  return (
    <div className={styles.container}>
      <h2>Разложение на множители</h2>
      <input className={styles.input} onChange={onChange} type="number" />
      <div className={styles.mults}>
        {state.map((m, key) => <div className={styles.mult} key={key}>{m}</div>)}
      </div>
    </div>
  )
}
