"use client";

import styles from "./page.module.css";
import Balatro from "../components/Balatro";
import BubbleMenu from "@/components/navbar";
import About from "../components/about";
import BlurText from "../components/blurText";
import TextType from "../components/TextType";
import GlassSurface from "@/components/liquidGlassButton";
import { LetsWorkTogether } from "@/components/letsWork";

import "../styles/hero.css";

const items = [
  {
    label: "home",
    href: "/",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "about",
    href: "#",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "projects",
    href: "#",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "blog",
    href: "#",
    ariaLabel: "Blog",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "contact",
    href: "#",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <section className="hero-section">
        <div className="hero-wrapper">
          <Balatro isRotate={false} mouseInteraction={true} pixelFilter={800} />
          <BubbleMenu
            logo={<span style={{ fontWeight: 700 }}>Artex Tech</span>}
            items={items}
            menuAriaLabel="Toggle navigation"
            menuBg="#ffffff"
            menuContentColor="#111111"
            useFixedPosition={false}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.12}
            className="navbar"
          />

          <div className="hero-content">
            <BlurText
              text="Your one stop IT solution"
              delay={150}
              animateBy="words"
              direction="top"
              className="hero-title"
            />

            <TextType
              text={[
                "A vibrant community of innovators, creators, and tech enthusiasts pushing the boundaries of what's possible.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="hero-subtitle"
            />
          </div>
          <div className="hero-cta">
            <GlassSurface
              width={250}
              height={70}
              borderRadius={20}
              className="cta-button"
            >
              <h2>Book Your Call Now</h2>
            </GlassSurface>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-wrapper">
          <About />
        </div>
      </section>

      <section className="letsWork-section">
        <LetsWorkTogether />
      </section>
    </main>
  );
}
