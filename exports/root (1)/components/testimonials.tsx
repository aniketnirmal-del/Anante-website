"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Tejas Chandgude",
    location: "Pune",
    text: "The food tastes exactly like my mother's cooking! Fresh, authentic, and delivered on time every day.",
    rating: 5,
  },
  {
    name: "Viraj Ghate",
    location: "Pune",
    text: "Amazing quality and taste. The thali is perfectly balanced and nutritious. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jasmeet Ahuja",
    location: "Pune",
    text: "Finally found authentic home food in Pune. The recipes are absolutely delicious!",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-foreground text-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-background" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-background text-balance">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${star <= 4 ? "text-primary fill-primary" : "text-primary/50 fill-primary/50"}`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold">4.6/5</span>
            <span className="text-background/60">
              Based on 500+ customer reviews
            </span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <Quote className="h-12 w-12 text-primary mb-6 mx-auto" />

            <blockquote className="text-xl md:text-2xl text-center font-medium leading-relaxed mb-8 text-balance">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-primary">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <p className="font-semibold text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-background/60">
                {testimonials[currentIndex].location}
              </p>
              <div className="flex items-center gap-1 mt-2">
                {Array.from({ length: testimonials[currentIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-primary fill-primary"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-background/30 text-background hover:bg-background/10 hover:text-background bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-background/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-background/30 text-background hover:bg-background/10 hover:text-background bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
