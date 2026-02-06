"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import BubbleMenu from "@/components/navbar";
import { ServiceAccordion } from "@/components/service-accordion";
import Footer from "@/components/footer";
import { LinePath } from "@/components/followScroll";
import { ArrowUpRight } from "lucide-react";

import logo from "../../assets/Artex-logo.jpeg";
import team from "../../assets/serviceTeamImg.jpg";

import "@/styles/service.css";

// export const metadata = {
//   title: "Services | Artex Tech",
//   description: "This page is currently under maintenance.",
// };

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
    href: "/about",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "projects",
    href: "/projects",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "services",
    href: "/services",
    ariaLabel: "Services",
    rotation: 8,
    hoverStyles: { bgColor: "#0be9f5ff", textColor: "#ffffff" },
  },
  {
    label: "blog",
    href: "/blogs",
    ariaLabel: "Blog",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "contact",
    href: "/contact",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className="service-wrapper" ref={scrollRef}>
      {mounted && (
        <LinePath
          className="service-scroll-path"
          scrollYProgress={scrollYProgress}
        />
      )}
      <div className="service-hero">
        <BubbleMenu
          logo={
            <span
              style={{
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image src={logo} alt="Logo" width={33} height={33} />
              Artex Tech
            </span>
          }
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
        <div className="service-hero-content">
          <h1 className="service-title">
            WE ARE THE TEAM OF VISUAL & MULTIVERSE DESIGNERS AND DEVELOPERS
          </h1>
          <Link href="/contact" className="service-contact-link">
            GET IN TOUCH <ArrowUpRight />
          </Link>
        </div>
      </div>
      <div className="service-main">
        <ServiceAccordion />
      </div>
      <div className="service-team">
        <Image className="service-img" src={team} alt="Artex Tech Team" />
        <p className="service-team-text">
          We are a team of visionary designers, full-stack developers, and problem-solvers shaping the future of digital experiences. At Artex Tech, we specialize in modern UI/UX design, web and mobile development, AI-powered solutions, and scalable digital products tailored for real-world impact. By combining strategy, innovation, and execution, we help brands stand out, scale faster, and turn ideas into powerful digital realities.
        </p>
      </div>

      <div className="service-contact-wrapper">
        <Link href="/contact" className="service-contact-heading">
          LET&apos;S MAKE IT HAPPEN
          <ArrowUpRight className="service-contact-arrow" />
        </Link>
      </div>
      <Footer />
    </section>
  );
}
