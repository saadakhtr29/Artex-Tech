"use client";

import styles from "./page.module.css";
import Balatro from "../components/Balatro";
import { NavBar } from "@/components/navbar";
import About from "../components/about"

import { House, User, Briefcase, FileText } from 'lucide-react'

const navItems = [
    { name: 'Home', url: '/', icon: House },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: FileText }
]

export default function Home() {
  return (
    <main className={styles.container}>
      <Balatro
        isRotate={false}
        mouseInteraction={true}
        pixelFilter={800}
        magnetRadius={0.0}
        ringRadius={7}
        waveAmplitude={0.8}
        waveSpeed={2.5}
        fieldStrength={8}
      >
        <NavBar items={navItems} />
      </Balatro>
      <About />
    </main>
  );
}
