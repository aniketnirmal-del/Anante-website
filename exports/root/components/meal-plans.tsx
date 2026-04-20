import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const mealPlans = [
  {
    name: "Everyday Nutrition Meals",
    price: 150,
    popular: true,
    image: "/images/thali-happy-meal.jpg",
    items: [
      "4 Chapati",
      "2 Sabzi",
      "Dal",
      "Rice",
      "Salad",
      "Pickle",
      "Sweet",
    ],
  },
  {
    name: "A-la-Carte Meals",
    price: 120,
    popular: false,
    image: "/images/thali-medium-meal.jpg",
    items: ["3 Chapati", "1 Sabzi", "Dal", "Rice", "Salad", "Pickle"],
  },
  {
    name: "Sugar-free Meals",
    price: 100,
    popular: false,
    image: "/images/thali-mini-meal.jpg",
    items: ["2 Chapati", "1 Sabzi", "Dal", "Rice", "Pickle"],
  },
  {
    name: "Mini Meals",
    price: 80,
    popular: false,
    image: "/images/thali-nano-meal.jpg",
    items: ["2 Chapati", "1 Sabzi", "Dal", "Pickle"],
  },
  {
    name: "Pro-Biotic drinks",
    price: 60,
    popular: false,
    image: "/images/thali-micro-meal.jpg",
    items: ["2 Chapati", "1 Sabzi", "Pickle"],
  },
];

export function MealPlans() {
  return (
    <section id="menu" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Our Range
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            Our Meal Plans
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our variety of meal plans designed to suit every
            appetite and budget
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {mealPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border"
              }`}
            >
              {/* Meal Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={plan.image || "/placeholder.svg"} 
                  alt={plan.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${plan.popular ? 'bg-primary/30' : 'bg-foreground/20'}`} />
                {plan.popular && (
                  <div className="absolute top-3 right-3 bg-background text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    BEST SELLER
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3
                  className={`text-xl font-serif font-bold mb-4 ${plan.popular ? "" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>

                <ul className="space-y-2 mb-4">
                  {plan.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <Check
                        className={`h-4 w-4 flex-shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`}
                      />
                      <span
                        className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-current/20 pt-3">
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-bold">₹{plan.price}</span>
                    <span
                      className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      /meal
                    </span>
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-background text-primary hover:bg-background/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                    asChild
                  >
                    <a
                      href="https://wa.me/919511961444"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
