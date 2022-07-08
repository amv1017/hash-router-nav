import React from 'react'
import styles from '../styles/GooeyEffectSVGFilter.module.css'

export default () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <svg>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10
            " />
          </filter>
        </svg>
      </div>
    </div>
  )
}
