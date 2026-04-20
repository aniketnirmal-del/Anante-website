import { Heart, Leaf, Truck, Users, ChefHat, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made in small batches",
    description:
      "We only cook in small batches to retain that homely taste.",
  },
  {
    icon: Leaf,
    title: "Sourced directly from our farms",
    description: "All our vegetables come directly from our farms near Pune.",
  },
  {
    icon: Truck,
    title: "Eco deliveries across pune",
    description:
      "Our entire delivery network consists of electric vehicles and we deliver across Pune.",
  },
  {
    icon: Users,
    title: "Trusted by mothers",
    description: "Our recipes have been curated and refined by and with mothers at home.",
  },
  {
    icon: ChefHat,
    title: "Nutrition-Paired Recipes",
    description: "Pune’s first ever nutritionally-paired meal with regional taste intact.",
  },
  {
    icon: Award,
    title: "Anti-Plastic Philosophy",
    description: "We follow a strict no-plastic protocol in the kitchen to make sure no microplastic contaminate your food.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Our Promise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            Why choose Ananté?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We bring the warmth and authenticity of home-cooked meals to your
            table, prepared with the same love and care as your own family
            kitchen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
