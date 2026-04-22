import { Sprout, ShoppingBasket, Truck, ChefHat, HandHeart } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    label: "Farms",
    description: "Veggies sourced fresh from our own farms",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: ShoppingBasket,
    label: "Procurement",
    description: "Procured directly — no middlemen, no compromise",
    color: "text-lime-700",
    bg: "bg-lime-50",
    border: "border-lime-200",
  },
  {
    icon: Truck,
    label: "Transport",
    description: "Produce transported fresh to our kitchen daily",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: ChefHat,
    label: "Kitchen",
    description: "Chefs prepare food in a warm, homely environment",
    color: "text-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    icon: HandHeart,
    label: "You",
    description: "Fresh, nutritious meals delivered to your door",
    color: "text-rose-700",
    bg: "bg-rose-50",
    border: "border-rose-200",
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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
              {/* Step Card */}
              <div className="flex flex-col items-center text-center group w-full lg:w-44 xl:w-52">
                {/* Icon circle */}
                <div
                  className={`w-20 h-20 rounded-full ${step.bg} border-2 ${step.border} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className={`h-9 w-9 ${step.color}`} />
                </div>

                {/* Step number */}
                <span className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest mb-1">
                  Step {index + 1}
                </span>

                {/* Label */}
                <h3 className={`text-lg font-serif font-bold mb-2 ${step.color}`}>
                  {step.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed px-2">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector — hidden after last step */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center my-4 lg:my-0 lg:mx-2 xl:mx-4">
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
