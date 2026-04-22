import Image from "next/image";

type Step = {
  image: string;
  alt: string;
  label: string;
  color: string;
  border: string;
  accent: string;
  description?: string;
  bubbles?: string[];
};

const steps: Step[] = [
  {
    image: "/images/fresh-ingredients.jpg.webp",
    alt: "Procuring fresh vegetables from farmer at farm",
    label: "From the Farm",
    description: "We source only A-grade ingredients early morning directly from our farmers",
    color: "text-green-700",
    border: "border-green-200",
    accent: "bg-green-50",
  },
  {
    image: "/images/authentic-thali.jpg",
    alt: "Live kitchen with women cooking with love",
    label: "Our Kitchen",
    color: "text-orange-700",
    border: "border-orange-200",
    accent: "bg-orange-50",
    bubbles: [
      "FSSAI Certified Kitchen",
      "No plastic utensils · No microplastics",
      "Cooked in small batches",
    ],
  },
  {
    image: "/images/everyday-meals.png",
    alt: "Meals delivered at office",
    label: "Delivered to You",
    description: "Meals are packed and delivered on time, every time.",
    color: "text-amber-700",
    border: "border-amber-200",
    accent: "bg-amber-50",
  },
  {
    image: "/images/happy-customers.jpg",
    alt: "Happy and healthy stomach",
    label: "Happy & Healthy",
    description: "Our meals are easy on your stomach. No acidity or heaviness.",
    color: "text-rose-700",
    border: "border-rose-200",
    accent: "bg-rose-50",
  },
];

export function FarmToTable() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            From our farms to your plate
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every meal travels a carefully curated journey — grown with care, cooked with love.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
              {/* Step Card */}
              <div className="flex flex-col items-center text-center group w-full lg:w-52 xl:w-60 px-3">
                {/* Image circle */}
                <div
                  className={`w-36 h-36 rounded-full overflow-hidden border-2 ${step.border} shadow-md mb-4 flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Step number */}
                <span className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest mb-1">
                  Step {index + 1}
                </span>

                {/* Label */}
                <h3 className={`text-base font-serif font-bold mb-3 ${step.color}`}>
                  {step.label}
                </h3>

                {/* Description or Speech Bubbles */}
                {step.bubbles ? (
                  <div className="flex flex-col gap-2 items-center w-full">
                    {step.bubbles.map((bubble, bi) => (
                      <div key={bi} className="flex flex-col items-center w-full">
                        {/* Upward pointer triangle */}
                        <div
                          className={`w-0 h-0 border-l-[6px] border-r-[6px] border-b-[7px] border-l-transparent border-r-transparent border-b-orange-100 -mb-px`}
                        />
                        <div
                          className={`${step.accent} border ${step.border} rounded-xl px-3 py-1.5 text-xs font-medium ${step.color} leading-snug text-center w-full`}
                        >
                          {bubble}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>

              {/* Arrow connector — hidden after last step */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center my-6 lg:my-0 lg:mx-2 xl:mx-3 lg:mt-[-5rem]">
                  {/* Vertical arrow on mobile */}
                  <div className="flex lg:hidden flex-col items-center gap-1">
                    <div className="w-0.5 h-6 bg-border" />
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-border" />
                  </div>
                  {/* Horizontal arrow on desktop */}
                  <div className="hidden lg:flex items-center gap-1">
                    <div className="h-0.5 w-6 xl:w-8 bg-border" />
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-border" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
