"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import "../styles/service-accordion.css"

interface AccordionItem {
  id: string
  number: string
  title: string
  content: string
}

const items: AccordionItem[] = [
  {
    id: "design",
    number: "01",
    title: "Design",
    content:
      "We craft pixel-perfect interfaces that blend aesthetics with functionality, creating memorable digital experiences.",
  },
  {
    id: "development",
    number: "02",
    title: "Development",
    content:
      "Building robust, scalable solutions with modern technologies that stand the test of time and traffic.",
  },
  {
    id: "strategy",
    number: "03",
    title: "Strategy",
    content:
      "Data-driven insights and creative thinking combine to position your brand for lasting success.",
  },
  {
    id: "growth",
    number: "04",
    title: "Growth",
    content:
      "Sustainable scaling strategies that transform startups into industry leaders through measurable results.",
  },
]

export function ServiceAccordion() {
  const [activeId, setActiveId] = useState<string | null>("design")
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="ua-wrapper">
      <div className="ua-list">
        {items.map((item, index) => {
          const isActive = activeId === item.id
          const isHovered = hoveredId === item.id

          return (
            <div key={item.id}>
              <motion.button
                onClick={() => setActiveId(isActive ? null : item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="ua-button"
                initial={false}
              >
                <div className="ua-header">
                  {/* Number */}
                  <div className="ua-number-wrap">
                    <motion.div
                      className="ua-number-bg"
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : isHovered ? 0.85 : 0,
                        opacity: isActive ? 1 : isHovered ? 0.1 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    />
                    <motion.span
                      className="ua-number"
                      animate={{
                        color: isActive
                          ? "var(--primary-foreground)"
                          : "var(--muted-foreground)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.number}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="ua-title"
                    animate={{
                      x: isActive || isHovered ? 4 : 0,
                      color:
                        isActive || isHovered
                          ? "var(--foreground)"
                          : "var(--muted-foreground)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Indicator */}
                  <div className="ua-indicator">
                    <motion.div
                      className="ua-plus-wrap"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <motion.svg
                        width="26"
                        height="26"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="ua-plus"
                        animate={{
                          opacity: isActive || isHovered ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.path
                          d="M8 1V15M1 8H15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>

                {/* Lines */}
                <div className="ua-line-bg" />
                <motion.div
                  className="ua-line-active"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: isActive ? 1 : isHovered ? 0.3 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              </motion.button>

              {/* Content */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    className="ua-content-wrap"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                  >
                    <motion.p
                      className="ua-content"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    >
                      {item.content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
