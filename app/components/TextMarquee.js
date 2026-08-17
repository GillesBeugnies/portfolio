export default function TextMarquee({ text, speed = 22 }) {
  const items = Array(6).fill(text);
  return (
    <div className="text-marquee">
      <div className="text-marquee__track" style={{ animationDuration: `${speed}s` }}>
        {[...items, ...items].map((t, i) => (
          <span className="text-marquee__item" key={i}>
            {t}
            <span className="text-marquee__dot">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
