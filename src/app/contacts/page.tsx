export const metadata = {
  title: "Contacts | Artex Tech",
  description: "This page is currently under maintenance.",
};

export default function ServicesFallback() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2rem", fontWeight: 300 }}>
          Site Under Maintenance
        </h1>

        <p style={{ marginTop: "1rem", opacity: 0.8 }}>
          Our engineers are on it.<br />
          We’ll be back soon.
        </p>
      </div>
    </section>
  );
}
