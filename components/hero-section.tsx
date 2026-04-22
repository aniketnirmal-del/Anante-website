import { Button } from "@/components/ui/button";
import { MessageCircle, ChefHat, Star, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Authentic Home Food
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
               Everyday Meals for extraordinary performance.    
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              {"We are an authentic home-style kitchen that specializes in making simple everyday recipes into carefully curated, nutrition paired meals so you can focus on taste and nutrition rather than cost and time. "}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">500+</span>
                <span className="text-muted-foreground">Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-primary" />
                <span className="font-semibold">100%</span>
                <span className="text-muted-foreground">Fresh Daily</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
                asChild
              >
                <a href="#menu">View Menu</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 gap-2 bg-transparent"
                asChild
              >
                <a
                  href="https://wa.me/919511961444?text=Hi!%20I%27d%20like%20to%20order%20from%20Anant%C3%A9%20Foods."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/regional-recipes.png" 
                    alt="Regional Indian Cuisines" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <div className="text-center">
                      <div className="font-serif font-bold text-background text-2xl">
                        {"Regional Recipes"}
                      </div>
                      <p className="text-background/90 mt-1">
                        {"Curated and Nutrition-paired"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/fresh-ingredients.jpg.webp" 
                    alt="Fresh Vegetables and Ingredients" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <div className="text-center">
                      <div className="font-serif font-bold text-background text-2xl">
                        {"Freshly sourced"}
                      </div>
                      <p className="text-background/90 mt-1 font-serif">
                        From our OWN farms    
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/vitamins-colorful.jpg" 
                    alt="Vitamins and Nutrient-Rich Foods" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <div className="text-center">
                      <div className="font-serif font-bold text-background text-2xl">
                        {"Vitamin Fortified"}
                      </div>
                      <p className="text-background/90 mt-1">
                        {"Say goodbye to deficiencies"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/Microplastics.jpeg.webp" 
                    alt="Plastic Free Kitchen" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <div className="text-center">
                      <div className="font-serif font-bold text-background text-2xl">
                        {"No Microplastics"}
                      </div>
                      <p className="text-background/90 mt-1">
                        {"Certified plastic free kitchen"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
