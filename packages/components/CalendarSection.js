import Calendar from "./Calendar";

export default function CalendarSection() {
  return (
    <main style={{ backgroundColor: "#252627" }}>
      <div style={{ maxWidth: "90vw", margin: "0 auto" }}>
        <div
          style={{
            height: "100vh",
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Calendar />
        </div>
      </div>
    </main>
  );
}
