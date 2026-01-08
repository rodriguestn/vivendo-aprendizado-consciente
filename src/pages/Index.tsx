import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PainPointSection } from "@/components/PainPointSection";
import { CoreOfferingSection } from "@/components/CoreOfferingSection";
import { EducationStructure } from "@/components/EducationStructure";
import { MethodologySection } from "@/components/MethodologySection";
import { DiagnosisSection } from "@/components/DiagnosisSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainPointSection />
        <CoreOfferingSection />
        <EducationStructure />
        <MethodologySection />
        <DiagnosisSection />
        <BenefitsSection />
        <LeadershipSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
