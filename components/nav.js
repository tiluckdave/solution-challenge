import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

 const Navbar = () => {
 
  return (
   
    <nav className={styles.mainav}>
          <ul className={styles.link}>
          <Link href='/'><li><span className={styles.span}>SpeakOut</span></li></Link>
          <Link href='/about'><li className={styles.about}>About Us</li></Link>
          
          </ul>
        </nav> 
        
  )
}
export default Navbar