import { motion } from "framer-motion";

export const FloatingCircle = ({
  size = 80,
  color = "var(--yellow)",
  top,
  left,
  right,
  bottom,
  delay = 0,
  className = "",
}: {
  size?: number;
  color?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.6, type: "spring" }}
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      width: size,
      height: size,
      background: `hsl(${color})`,
      top,
      left,
      right,
      bottom,
    }}
  />
);

export const FloatingDots = ({
  top,
  left,
  right,
  bottom,
  className = "",
}: {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className?: string;
}) => (
  <div
    className={`absolute pointer-events-none grid grid-cols-4 gap-2 ${className}`}
    style={{ top, left, right, bottom }}
  >
    {Array.from({ length: 16 }).map((_, i) => (
      <div
        key={i}
        className="w-2 h-2 rounded-full bg-primary-foreground/20"
      />
    ))}
  </div>
);

export const WaveDivider = ({ flip = false, color = "hsl(var(--primary))" }: { flip?: boolean; color?: string }) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  </div>
);

export const ZigzagDivider = ({ color = "hsl(var(--secondary))" }: { color?: string }) => (
  <div className="w-full overflow-hidden leading-none">
    <svg viewBox="0 0 1440 30" className="w-full h-auto" preserveAspectRatio="none">
      {Array.from({ length: 24 }).map((_, i) => (
        <polygon
          key={i}
          points={`${i * 60},30 ${i * 60 + 30},0 ${(i + 1) * 60},30`}
          fill={color}
        />
      ))}
    </svg>
  </div>
);

export const HalfMoon = ({
  size = 120,
  color = "var(--primary)",
  className = "",
  style = {},
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`absolute pointer-events-none ${className}`}
    style={{
      width: size,
      height: size / 2,
      background: `hsl(${color})`,
      borderRadius: `${size}px ${size}px 0 0`,
      ...style,
    }}
  />
);
