"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Pen,
  PaintBucket,
  Home,
  Ruler,
  PenTool,
  Building2,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  Zap,
  TrendingUp,
   Code,
  Globe,
  Cpu,
  Smartphone,
  Database,
  ShieldCheck,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  easeOut,
} from "framer-motion";
import "../styles/about.css";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { amount: 0.1 });
  const isStatsInView = useInView(statsRef, { amount: 0.3 });

  /* Parallax blobs */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  /* Animation variants */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const services = [
  {
    icon: <Code />,
    secondaryIcon: <Sparkles className="secondary-icon" />,
    title: "Custom Web Development",
    description:
      "High-performance, SEO-friendly websites and web applications built with modern frameworks like React, Next.js, and Node.js to scale your business online.",
    position: "left",
  },
  {
    icon: <Globe />,
    secondaryIcon: <CheckCircle className="secondary-icon" />,
    title: "UI/UX Design & Branding",
    description:
      "User-centric UI/UX design focused on conversion, accessibility, and brand identity to deliver intuitive digital experiences that users love.",
    position: "left",
  },
  {
    icon: <Cpu />,
    secondaryIcon: <Star className="secondary-icon" />,
    title: "AI & Automation Solutions",
    description:
      "Custom AI solutions including chatbots, AI agents, process automation, and intelligent systems to optimize operations and drive business growth.",
    position: "left",
  },
  {
    icon: <Smartphone />,
    secondaryIcon: <Sparkles className="secondary-icon" />,
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile app development for iOS and Android using React Native and modern technologies for fast, secure performance.",
    position: "right",
  },
  {
    icon: <Database />,
    secondaryIcon: <CheckCircle className="secondary-icon" />,
    title: "Backend, Cloud & DevOps",
    description:
      "Scalable backend architectures, cloud deployment, APIs, and DevOps solutions using AWS, Firebase, and containerized infrastructures.",
    position: "right",
  },
  {
    icon: <ShieldCheck />,
    secondaryIcon: <Star className="secondary-icon" />,
    title: "Web3 & Blockchain Development",
    description:
      "Secure blockchain, smart contract, and Web3 solutions including tokenization, dApps, and decentralized platforms built on Ethereum and Sui.",
    position: "right",
  },
];

  const stats = [
    { icon: <Award />, value: 25, label: "Projects Completed", suffix: "+" },
    { icon: <Users />, value: 120, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar />, value: 3, label: "Years Experience", suffix: "" },
    {
      icon: <TrendingUp />,
      value: 98,
      label: "Satisfaction Rate",
      suffix: "%",
    },
  ];

  return (
    <section ref={sectionRef} id="about-section" className="about-section">
      {/* Decorative blobs */}
      <motion.div className="blob blob-1" style={{ y: y1, rotate: rotate1 }} />
      <motion.div className="blob blob-2" style={{ y: y2, rotate: rotate2 }} />

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="section-header" variants={itemVariants}>
          <span className="subtitle">
            <Zap size={16} /> DISCOVER OUR STORY
          </span>
          <h2>About Us</h2>
          <div className="divider" />
        </motion.div>

        <motion.p className="intro-text" variants={itemVariants}>
          We are a passionate team of designers, architects and developers creating
          beautiful, functional spaces that inspire everyday living.
        </motion.p>

        {/* Services */}
        <div className="services-grid">
          <div className="services-column">
            {services
              .filter((s) => s.position === "left")
              .map((s, i) => (
                <ServiceItem
                  key={i}
                  {...s}
                  variants={itemVariants}
                  delay={i * 0.2}
                  direction="left"
                />
              ))}
          </div>

          <div className="center-image">
            <img
              src="https://images.unsplash.com/photo-1747582411588-f9b4acabe995"
              alt="Modern House"
            />
          </div>

          <div className="services-column">
            {services
              .filter((s) => s.position === "right")
              .map((s, i) => (
                <ServiceItem
                  key={i}
                  {...s}
                  variants={itemVariants}
                  delay={i * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
        >
          {stats.map((stat, i) => (
            <StatCounter key={i} {...stat} delay={i * 0.1} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/*  SERVICE ITEM  */

function ServiceItem({
  icon,
  secondaryIcon,
  title,
  description,
  variants,
  delay,
  direction,
}: any) {
  return (
    <motion.div
      className="service-item"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="service-header"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="service-icon"
          whileHover={{ rotate: [0, -10, 10, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3>{title}</h3>
      </motion.div>

      <motion.p
        className="service-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

/* STAT COUNTER */

function StatCounter({ icon, value, label, suffix, delay }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, { stiffness: 50, damping: 10 });

  useEffect(() => {
    if (inView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    } else if (!inView && hasAnimated) {
      spring.set(0);
      setHasAnimated(false);
    }
  }, [inView, value, spring, hasAnimated]);

  const display = useTransform(spring, (v) => Math.floor(v));

  return (
    <motion.div
      className="stat-card"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5 }}
    >
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <p className="stat-label">{label}</p>
    </motion.div>
  );
}
