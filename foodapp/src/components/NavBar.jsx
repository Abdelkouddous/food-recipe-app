import React, { useState } from "react";
import styles from "./nav.module.css";
export default function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  return (
    <div className={styles.nav}>
      🥙 Food App
      <div>
        {/* <ul className={`${styles.navlink} ${expand ? styles.expanded : ""}`}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul> */}
        <div
          className={styles.toggle}
          style={{ backgroundColor: navColour ? "#333" : "#fff" }}
          onClick={() => updateNavbar(!navColour)}
        />
      </div>
    </div>
  );
}
