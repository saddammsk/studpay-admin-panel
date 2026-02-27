'use client'
import { useState, useEffect, useRef } from "react";

const STAGES = [
  {
    label: "Draft",
    count: 145,
    color: "#6B7280",
    bg: "rgba(107,114,128,0.60)",
    gradient: "linear-gradient(135deg, rgba(107,114,128,0.7), rgba(75,85,99,0.55))",
  },
  {
    label: "KYC Review",
    count: 89,
    color: "#EAB308",
    bg: "rgba(234,179,8,0.84)",
    gradient: "linear-gradient(135deg, rgba(234,179,8,0.88), rgba(202,138,4,0.75))",
  },
  {
    label: "Payment",
    count: 56,
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.75)",
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.82), rgba(37,99,235,0.65))",
  },
  {
    label: "Funds Received",
    count: 34,
    color: "#A855F7",
    bg: "rgba(168,85,247,1)",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.95), rgba(126,34,206,0.85))",
  },
  {
    label: "AVI Issued",
    count: 28,
    color: "#22C55E",
    bg: "rgba(34,197,94,0.68)",
    gradient: "linear-gradient(135deg, rgba(34,197,94,0.75), rgba(16,185,129,0.58))",
  },
];

function useCountUp(target: number, duration = 1200, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

function StageCard({ stage, index, total, animationStarted }: { stage: typeof STAGES[0]; index: number; total: number; animationStarted: boolean }) {
  const count = useCountUp(stage.count, 900 + index * 150, animationStarted);
  const isLast = index === total - 1;

  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
      <div
        style={{
          width: "100%",
          height: 48,
          borderRadius: 8,
          background: stage.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#fff",
            fontFamily: "'DM Mono', 'Courier New', monospace",
            textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            letterSpacing: "-0.5px",
          }}
        >
          {count}
        </span>
      </div>

      <small
        style={{
          display: "block",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: "#6B7280",
          marginTop: 8,
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {stage.label}
      </small>

      {!isLast && (
        <div
          style={{
            position: "absolute",
            top: 14,
            right: -14,
            zIndex: 10,
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8M7 3l3 3-3 3"
              stroke="#D1D5DB"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function AviPipelineFunnel() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimationStarted(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setAnimationStarted(false);
    setTimeout(() => {
      setAnimationStarted(true);
      setIsRefreshing(false);
    }, 300);
  };

  const conversionRate = ((STAGES[4].count / STAGES[0].count) * 100).toFixed(1);

  return (
    <div
      style={{
        width: "100%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      }}
    >
      <div
        ref={containerRef}
        style={{
          border: "1px solid #E5E7EB",
          padding: 16,
          marginBottom: 32,
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 16 }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: 0, lineHeight: "20px" }}>
            AVI Pipeline Funnel
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <p
              style={{
                color: "#6B7280",
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "16px",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="#9CA3AF" strokeWidth="1.2" />
                <path d="M7 4v3l2 1.5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              15 min avg processing
            </p>
            <button
              onClick={handleRefresh}
              title="Refresh animation"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 2,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                color: "#9CA3AF",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6B7280")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                style={{
                  transition: "transform 0.5s",
                  transform: isRefreshing ? "rotate(360deg)" : "rotate(0deg)",
                }}
              >
                <path
                  d="M11 6.5A4.5 4.5 0 116.5 2"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <path d="M6.5 2L8.5 4l-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            borderBottom: "1px solid #E5E7EB",
            paddingBottom: 16,
            flexWrap: "wrap",
          }}
        >
          {STAGES.map((stage, i) => (
            <StageCard
              key={stage.label}
              stage={stage}
              index={i}
              total={STAGES.length}
              animationStarted={animationStarted}
            />
          ))}
        </div>

        <div style={{ paddingTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: 12, fontWeight: 400, color: "#6B7280", lineHeight: "16px", margin: 0 }}>
            Overall Conversion
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 14 }}>
              {STAGES.map((s, i) => (
                <div
                  key={i}
                  style={{
                    width: 4,
                    height: `${(s.count / STAGES[0].count) * 14}px`,
                    borderRadius: 2,
                    background: s.gradient,
                    transition: "height 0.8s ease",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                lineHeight: "20px",
                color: "#22C55E",
                margin: 0,
              }}
            >
              {conversionRate}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}