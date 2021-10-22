import React from "react";

import * as styles from "./footer.module.css";

const Footer = ({ siteTitle }) => (
  <footer className={styles.colophon}>
    © {new Date().getFullYear()} {siteTitle}
  </footer>
);

export default Footer;
