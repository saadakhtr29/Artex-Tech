import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "linear-gradient(to bottom, #F2F2EB, #F8F8F2)",
        color: "#202e44",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 300 }}>
          Site Under Maintenance
        </h1>

        <p style={{ marginTop: "1rem", fontSize: "1rem", opacity: 0.85 }}>
          Our engineers are on it.<br />
          We’ll be back very soon.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            background: "#88734C",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
