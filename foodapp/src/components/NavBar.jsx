import React, { useState } from "react";
import styles from "./nav.module.css";

export default function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  return (
    <>
      <div className={`${styles.nav} bg-gray-900`}>
        🥙 Food App
        {/* <ul className={`${styles.navlink} ${expand ? styles.expanded : ""}`}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul> */}
        <div>
          Copyright © 2024 HML Tech. <br></br>
          All rights reserved
        </div>
        <div>
          <button
            className={styles.toggleNav}
            onClick={() => {
              updateExpanded(!expand);
              updateNavbar(!navColour);
            }}
          >
            {expand ? "🍔" : "🌭"}
          </button>
        </div>
      </div>
    </>
  );
}
