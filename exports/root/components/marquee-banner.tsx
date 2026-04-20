export function MarqueeBanner({ text, variant = "primary" }: { text: ; variant?: "primary" | "accent" }) {
  const bgClass = variant === "primary" ? "bg-primary text-primary-foreground" : "bg-foreground text-background";
  
  return (
    <div className={`${bgClass} py-2 overflow-hidden`}>
      <div className="animate-marquee whitespace-nowrap flex">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="mx-8 text-sm font-medium tracking-wide">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
