export function MarqueeBanner({ text, variant = "primary" }: { text: string; variant?: "primary" | "accent" }) {
  const bgClass = variant === "primary" ? "bg-primary text-primary-foreground" : "bg-foreground text-background";
  
  return (
    <div className={`${bgClass} py-4 overflow-hidden`}>
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="mx-20 text-base font-bold tracking-widest uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
