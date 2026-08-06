import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#090909",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 4,
            color: "#c79a3b",
            marginBottom: 22,
          }}
        >
          Dublin &amp; Nationwide
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            color: "#f5f5f3",
            letterSpacing: -1.5,
            lineHeight: 1.05,
          }}
        >
          Precision finish,
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            color: "#f5f5f3",
            letterSpacing: -1.5,
            lineHeight: 1.05,
          }}
        >
          lasting impression.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "rgba(245,245,243,0.5)",
            marginTop: 30,
          }}
        >
          Spray Works. Kitchen, Furniture, uPVC Spraying.
        </div>
      </div>
    ),
    { ...size }
  );
}
