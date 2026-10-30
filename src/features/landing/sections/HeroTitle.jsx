import "./hero-title.css";

// The parallel contours converge at the first letter of each word, like a
// stretched strip of the lettering. SVG keeps the seams sharp at every size.
const colours = [
  "#356541",
  "#71933c",
  "#c6ee78",
  "#eee9b2",
  "#fff4d8",
  "#ffc378",
  "#f49a4e",
  "#ed7436",
  "#bd432e",
  "#702f30",
  "#ef8b48",
  "#ffe8b7",
];

function Stretch({ end, top, bend }) {
  const step = 9;
  return (
    <g fill="none" clipPath={`url(#stretch-clip-${end})`}>
      <defs>
        <clipPath id={`stretch-clip-${end}`}>
          <path d={`M -200 -100 H ${end + 70} V ${top} C ${end + 12} ${top}, ${end + 4} ${top + 30}, ${end + 4} ${top + 52} S ${end + 12} ${top + 104}, ${end + 70} ${top + 104} V 600 H -200 Z`} />
        </clipPath>
      </defs>
      {colours.map((colour, index) => {
        const y = top + index * step;
        const start = y + bend;
        return (
          <path
            key={colour}
            d={`M -90 ${start} C ${end * 0.26} ${start - 120}, ${end * 0.53} ${y}, ${end + 26} ${y}`}
            stroke={colour}
            strokeWidth={step + 1}
          />
        );
      })}
      {Array.from({ length: 48 }, (_, index) => {
        const y = top + index * 2.1;
        const start = y + bend;
        return (
          <path
            key={index}
            d={`M -90 ${start} C ${end * 0.26} ${start - 120}, ${end * 0.53} ${y}, ${end + 26} ${y}`}
            stroke={index % 3 === 0 ? "#fff7dc" : "#422a25"}
            strokeOpacity={index % 3 === 0 ? ".22" : ".12"}
            strokeWidth=".7"
          />
        );
      })}
    </g>
  );
}

export default function HeroTitle() {
  return (
    <h1
      id="hero-title"
      className="stretch-title"
      aria-label="Social Conclave 2027"
    >
      <svg
        className="stretch-title-art"
        viewBox="0 0 1200 385"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="hero-letter-colour" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#fff7df" />
            <stop offset="1" stopColor="#ffe6b5" />
          </linearGradient>
        </defs>
        <Stretch end={460} top={48} bend={104} />
        <Stretch end={245} top={225} bend={124} />
        <g
          fill="url(#hero-letter-colour)"
          fontFamily="'DM Sans', Arial, sans-serif"
          fontWeight="700"
          fontSize="158"
          letterSpacing="-9"
        >
          <text
            x="445"
            y="157"
            textLength="743"
            lengthAdjust="spacingAndGlyphs"
          >
            SOCIAL
          </text>
          <text
            x="230"
            y="334"
            textLength="958"
            lengthAdjust="spacingAndGlyphs"
          >
            CONCLAVE
          </text>
        </g>
        <text className="stretch-edition" x="1188" y="380" textAnchor="end">
          2027 / THE TENTH EDITION
        </text>
      </svg>
    </h1>
  );
}
