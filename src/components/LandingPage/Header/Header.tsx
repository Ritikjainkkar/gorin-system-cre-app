"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../../../public/SVGs/Logo";
import Lock from "../../../../public/SVGs/Lock";
import Burger from "../../../../public/SVGs/Burger";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      // Add a class to the body to prevent page scroll
      document.body.classList.add(styles.menuOpen);
    } else {
      // Remove the class when the menu is closed
      document.body.classList.remove(styles.menuOpen);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.burgerMenu} onClick={toggleMobileMenu}>
          <Burger />
        </div>

        {/* Show nav links only on desktop */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNav : ""}`}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#" className={styles.lock}>
            <span className={styles.lockIcon}><Lock /></span> Login
          </a>
          <button className={styles.tryButton}>Try For Free</button>
        </nav>
      </header>

      {/* Mobile Menu - visible when burger is clicked */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#" onClick={toggleMobileMenu}>Features</a>
          <hr />
          <a href="#" onClick={toggleMobileMenu}>Pricing</a>
          <hr />
          <a href="#" onClick={toggleMobileMenu} className={styles.lock}>
            <span className={styles.lockIcon}><Lock /></span> Login
          </a>
          <button className={styles.tryButton}>Try For Free</button>
        </div>
      )}
    </div>
  );
}
