import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Neeraj Singh Rajput — Full Stack Developer | MERN & React Native";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #020810 0%, #061220 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            right: 120,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(0, 212, 255, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -40,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "rgba(0, 212, 255, 0.06)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#00d4ff",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            nsrgfx.in
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Neeraj Singh Rajput
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#7dd3fc",
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            Full Stack Developer | MERN & React Native
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
