import React, { useState } from "react";
import styles from "./nav.module.css";
export default function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  return (
    <div className={styles.divs}>
      <div className={styles.nav}>
        🥙 Food App
        {/* <ul className={`${styles.navlink} ${expand ? styles.expanded : ""}`}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul> */}
        <div
          className={styles.toggle}
          style={{ backgroundColor: navColour ? "#333" : "#fff" }}
        />
        <button
          className={styles.sticky}
          onClick={() => updateNavbar(!navColour)}
        >
          ☾
        </button>
      </div>
    </div>
  );
}
