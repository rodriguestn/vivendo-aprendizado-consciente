import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PainPointSection } from "@/components/sections/PainPointSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { EducationalPrinciplesSection } from "@/components/sections/EducationalPrinciplesSection";
import { NucleoVisualizationSection } from "@/components/sections/NucleoVisualizationSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <PainPointSection />
        <JourneySection />
        <EducationalPrinciplesSection />
        <NucleoVisualizationSection />
        <MethodologySection />
        <BenefitsSection />
        <LeadershipSection />
        <TestimonialsSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
