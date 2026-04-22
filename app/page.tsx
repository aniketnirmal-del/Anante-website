import { Header } from "@/components/header";
import { MarqueeBanner } from "@/components/marquee-banner";
import { HeroSection } from "@/components/hero-section";
import { FarmToTable } from "@/components/farm-to-table";
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
      
      {/* Shared watermark background spanning hero + farm-to-table */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/images/thali-sketch-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-35"
            style={{ objectPosition: 'center -200px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
        </div>
        <div className="relative z-10">
          <HeroSection />
          <FarmToTable />
        </div>
      </div>

      {/* Scrolling banner */}
      <MarqueeBanner 
        text="HAVE YOU EATEN TODAY?" 
        variant="primary" 
      />
      
      <MealPlans />
      <WhyChooseUs />
      
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
