"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Calendar } from "lucide-react"
import "../styles/letsWork.css"

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  const handleBookCall = () => {
    window.open("https://cal.com/artex-tech-saad/15min", "_blank")
  }

  return (
    <section className="lw-section">
      <div className="lw-container">

        {/* SUCCESS OVERLAY */}
        <div
          className="lw-success"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          <div className="lw-success-heading">
            <span
              className="lw-eyebrow"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "100ms",
              }}
            >
              Perfect
            </span>
            <h3
              className="lw-success-title"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              Let's talk
            </h3>
          </div>

          {/* BOOK CALL */}
          <button
            className="lw-book"
            onClick={handleBookCall}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            style={{
              transform: showSuccess
                ? isButtonHovered
                  ? "scale(1.02)"
                  : "scale(1)"
                : "translateY(15px)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "150ms",
            }}
          >
            <span
              className="lw-line"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.5,
              }}
            />

            <span
              className="lw-book-inner"
              style={{
                borderColor: isButtonHovered ? "var(--foreground)" : "var(--border)",
                backgroundColor: isButtonHovered ? "#121010ff" : "transparent",
                color: isButtonHovered ? "#fff" : "var(--border)",
                boxShadow: isButtonHovered
                  ? "0 0 30px rgba(0,0,0,0.1), 0 10px 40px rgba(0,0,0,0.08)"
                  : "none",
              }}
            >
              <Calendar
                className="lw-icon"
                strokeWidth={1.5}
                style={{ color: isButtonHovered ? "#fff" : "var(--foreground)" }}
              />
              <span
                className="lw-book-text"
                style={{ color: isButtonHovered ? "#fff" : "var(--foreground)" }}
              >
                Book a call
              </span>
              <ArrowUpRight
                className="lw-icon"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered ? "#fff" : "var(--foreground)",
                  transform: isButtonHovered ? "translate(3px,-3px) scale(1.1)" : "none",
                }}
              />
            </span>

            <span
              className="lw-line"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.5,
              }}
            />
          </button>

          <span
            className="lw-subtext"
            style={{
              transform: showSuccess ? "translateY(0)" : "translateY(10px)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "450ms",
            }}
          >
            15 min intro call
          </span>
        </div>

        {/* AVAILABILITY */}
        <div
          className="lw-availability"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(-20px)" : "none",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <span className="lw-ping">
            <span className="lw-ping-ring" />
            <span className="lw-ping-dot" />
          </span>
          <span className="lw-availability-text">Available for projects</span>
        </div>

        {/* MAIN CTA */}
        <div
          className="lw-main"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={(e) => handleClick(e as any)}
          style={{ pointerEvents: isClicked ? "none" : "auto" }}
        >
          <h2
            className="lw-title"
            style={{
              opacity: isClicked ? 0 : 1,
              transform: isClicked ? "translateY(-40px) scale(0.95)" : "none",
            }}
          >
            <span className="lw-line-wrap">
              <span
                className="lw-line-text"
                style={{ transform: isHovered && !isClicked ? "translateY(-8%)" : "none" }}
              >
                Let's work
              </span>
            </span>
            <span className="lw-line-wrap">
              <span
                className="lw-line-text muted"
                style={{ transform: isHovered && !isClicked ? "translateY(-8%)" : "none" }}
              >
                together
              </span>
            </span>
          </h2>

          <div className="lw-arrow-wrap">
            <div
              className="lw-arrow-ring"
              style={{
                borderColor: isHovered ? "#cbcbcbff" : "var(--border)",
                backgroundColor: isHovered ? "#121010ff" : "transparent",
                transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                opacity: isClicked ? 0 : 1,
              }}
            />
            <ArrowUpRight
              className="lw-arrow"
              style={{
                transform: isClicked
                  ? "translate(100px,-100px) scale(0.5)"
                  : isHovered
                  ? "translate(2px,-2px)"
                  : "none",
                opacity: isClicked ? 0 : 1,
                color: isHovered ? "#edececff" : "var(--foreground)",
              }}
            />
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="lw-footer"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(20px)" : "none",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <p>
            Have a project in mind? We'd love to hear about it. Let's create something exceptional together.
          </p>
          <span>contact@artextech.com</span>
        </div>
      </div>
    </section>
  )
}
