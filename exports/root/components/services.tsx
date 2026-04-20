import { Package, Building2, Home, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Low on cal, High on taste",
    description:
      "Vegetables you can actually taste and not feel bloated after eating.",
  },
  {
    icon: Building2,
    title: "Eat in plates",
    description:
      "We provide you plates and cutlery everyday. Home-food the way you eat at home",
  },
  {
    icon: Home,
    title: "Hot and On-time",
    description:
      "Maybe not your date, but definitely your lunches. Extra-discounts if the food is cold. How about that?",
  },
  {
    icon: PartyPopper,
    title: "Custom-made plans, only for your team",
    description:
      "Everyone gets a choice. Explore custom-made lunch plans for your team  ",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            {"Additional services"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance md:text-6xl">
            {"Ananté CorporEATS"} 
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  End-to-end premium lunch solutions for offices    
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary transition-all duration-500"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
