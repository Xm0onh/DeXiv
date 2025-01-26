export default function HexagonGrid() {
  return (
    <div className="fixed inset-0 z-0 opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern
          id="hexagons"
          width="50"
          height="43.4"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2) rotate(0)"
        >
          <path
            d="M25 0L50 14.4v28.8L25 43.4L0 43.4V14.4z"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            fill="none"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
} 