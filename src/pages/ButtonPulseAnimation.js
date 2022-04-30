import React, { useState, useEffect } from 'react'
import styles from '../styles/ButtonPulseAnimation.module.css'

export default () => {
  return (
    <div className={styles.container}>
      <a href='/' className={styles.button}>Learn More</a>
    </div>
  )
}
