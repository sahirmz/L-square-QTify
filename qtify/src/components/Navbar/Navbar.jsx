import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <search />
      <Button children="Give Feedback" />
    </nav>
  );
}