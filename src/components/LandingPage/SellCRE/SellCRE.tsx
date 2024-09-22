import React from 'react'
import styles from './SellCRE.module.css'
import Play from '../../../../public/SVGs/Play'
import Image from 'next/image'

export default function SellCRE() {
  return (
      <main className={styles.mainContent}>
        <div className={styles.textSection}>
          <h1><span>Sell CRE Faster</span> with OMs & Ads created in <span>minutes</span></h1>
          <p>Create beautiful Commercial Real Estate Offering Memorandums, Flyers & Ads in minutes with our AI-powered platform.</p>
          <div className={styles.buttons}>
            <button className={styles.tryButton}>Try for free  </button>
            <button className={styles.demoButton}>
            <Play />  Watch Demo
            </button>
          </div>
        </div>
        <div className={styles.imageSection}>
          <Image src="/Images/Header menu.jpg" alt="Demo"  width={528} height={455} />
        </div>
      </main>
  )
}
