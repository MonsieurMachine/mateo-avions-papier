export default function StarRating({ rating, max = 5, size = "text-lg" }) {
  return (
    <span className={`inline-flex gap-0.5 ${size}`}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "star-filled" : "opacity-30"}
          style={i < rating ? { animationDelay: `${i * 0.15}s` } : {}}
        >
          ⭐
        </span>
      ))}
    </span>
  );
}
