import React, { useState, useEffect } from 'react'
import styles from '../styles/TikTokLoadingAnimation.module.css'

export default () => {
  return (
    <div className={styles.container}>
      <h1>TikTok Loading Animation</h1>
      <span className={styles.loader}></span>
    </div>
  )
}
