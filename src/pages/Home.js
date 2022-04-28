import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import TikTokLoadingAnimation from './TikTokLoadingAnimation'
import styles from '../styles/Home.module.css'

export const routes = [
  {
    path: '/tiktok-loading-animation',
    element: <TikTokLoadingAnimation />
  },
  {
    path: '/about',
    element: <About />
  },
]

export default () => {
  return (
    <div className={styles.home}>
      <h1>HOMEPAGE</h1>
      <br />
      <div className={styles.links}>
        {routes.map(r =>
          <Link to={r.path} target={'_blank'}>{r.path.toUpperCase().substring(1).replaceAll('-', ' ')}</Link>
        )}
      </div>
    </div>
  )
}
