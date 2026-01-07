"use client";
import Image from "next/image";
import Link from "next/link";
import BubbleMenu from "@/components/navbar";
import { ServiceAccordion } from "@/components/service-accordion";
import Footer from "@/components/footer";
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
  return (
    <section className="service-wrapper">
      <div className="service-hero">
        <BubbleMenu
          logo={
            <span
              style={{
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 0,
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
            GET IN TOUCH
            <ArrowUpRight />
          </Link>
        </div>
      </div>
      <div className="service-main">
        <ServiceAccordion />
      </div>
      <div className="service-team">
        <Image
          className="service-img"
          src={team}
          alt="Artex Tech Team"
          width={850}
          height={500}
        />
        <p className="service-team-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi
          quisquam ea molestias. Natus officiis adipisci exercitationem? Dolor,
          hic. Obcaecati sed, blanditiis ex fugit harum accusantium
          necessitatibus nobis.
        </p>
      </div>
      <div className="service-contact-wrapper">
        <Link href="/contact" className="service-contact-heading">
        CONTACT US
      </Link>
      <ArrowUpRight style={{scale: 5}}/>
      </div>
      <Footer />
    </section>
  );
}
