import { Header } from "@/components/header";
import { MarqueeBanner } from "@/components/marquee-banner";
import { HeroSection } from "@/components/hero-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { MealPlans } from "@/components/meal-plans";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Top promotional banner */}
      <div className="pt-16 md:pt-30">
        <MarqueeBanner 
          text="LOW OIL ••• VITAMIN PAIRED MEALS ••• CURATED REGIONAL RECIPES ••• BEST GARNISHES IN TOWN!!" 
          variant="accent" 
        />
      </div>
      
      <HeroSection />
      
      {/* Scrolling banner */}
      <MarqueeBanner 
        text="HAVE YOU EATEN TODAY?" 
        variant="primary" 
      />
      
      <WhyChooseUs />
      <MealPlans />
      
      <MarqueeBanner 
        text="FRESHLY COOKED DAILY ••• AUTHENTIC HOME RECIPES ••• VEGETABLES SOURCED DIRECTYLY FROM FARMS" 
        variant="accent" 
      />
      
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
