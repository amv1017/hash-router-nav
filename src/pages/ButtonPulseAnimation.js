import React from 'react'
import styles from '../styles/ButtonPulseAnimation.module.css'
import p from '../../package.json'

export default () => {
  return (
    <div className={styles.container}>
      <a href={`${p.homepage}`} className={styles.button}>Learn More</a>
    </div>
  )
}
