import React from 'react'
import AutumnLeafOak from  '../static/svg/autumn-leaf-oak.svg'
import AutumnLeafBirch from  '../static/svg/autumn-leaf-birch.svg'
import AutumnLeafAlder from  '../static/svg/autumn-leaf-alder.svg'
import AutumnLeafMaple from  '../static/svg/autumn-leaf-maple.svg'
import styles from '../styles/FallingLeavesAnimation.modules.css'

export default () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>Autumn Leaves</div>
      <div className={styles.set}>
        <img className={`${styles.img} ${styles.leaf1}`} src={AutumnLeafOak} />
        <img className={`${styles.img} ${styles.leaf2}`} src={AutumnLeafBirch} />
        <img className={`${styles.img} ${styles.leaf3}`} src={AutumnLeafAlder} />
        <img className={`${styles.img} ${styles.leaf4}`} src={AutumnLeafMaple} />
        <img className={`${styles.img} ${styles.leaf5}`} src={AutumnLeafOak} />
        <img className={`${styles.img} ${styles.leaf6}`} src={AutumnLeafBirch} />
        <img className={`${styles.img} ${styles.leaf7}`} src={AutumnLeafAlder} />
        <img className={`${styles.img} ${styles.leaf8}`} src={AutumnLeafMaple} />
      </div>
      {/*
      <div className={styles.set2}>
        <img className={`${styles.img} ${styles.leaf1}`} src={AutumnLeafOak} />
        <img className={`${styles.img} ${styles.leaf2}`} src={AutumnLeafBirch} />
        <img className={`${styles.img} ${styles.leaf3}`} src={AutumnLeafAlder} />
        <img className={`${styles.img} ${styles.leaf4}`} src={AutumnLeafMaple} />
        <img className={`${styles.img} ${styles.leaf5}`} src={AutumnLeafOak} />
        <img className={`${styles.img} ${styles.leaf6}`} src={AutumnLeafBirch} />
        <img className={`${styles.img} ${styles.leaf7}`} src={AutumnLeafAlder} />
        <img className={`${styles.img} ${styles.leaf8}`} src={AutumnLeafMaple} />
      </div>
      */}
    </div>
  )
}
