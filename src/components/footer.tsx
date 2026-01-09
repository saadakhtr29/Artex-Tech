"use client";

import { memo } from "react";
import "@/styles/footer.css";

// const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer-wrapper" role="contentinfo">
      <div className="footer-container">
        <p className="footer-text" aria-label="Artex copyright">
          ARTEX <sup className="footer-subtext">&#9400;</sup>
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
