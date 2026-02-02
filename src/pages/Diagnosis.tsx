import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlauMapaHeroSection } from "@/components/sections/diagnosis/BlauMapaHeroSection";
import { WhatIsBlauMapaSection } from "@/components/sections/diagnosis/WhatIsBlauMapaSection";
import { IndustrySegmentsSection } from "@/components/sections/diagnosis/IndustrySegmentsSection";
import { ProcessTimelineSection } from "@/components/sections/diagnosis/ProcessTimelineSection";
import { DiagnosisBenefitsSection } from "@/components/sections/diagnosis/DiagnosisBenefitsSection";
import { DiagnosisCTASection } from "@/components/sections/diagnosis/DiagnosisCTASection";

const Diagnosis = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BlauMapaHeroSection />
        <WhatIsBlauMapaSection />
        <IndustrySegmentsSection />
        <ProcessTimelineSection />
        <DiagnosisBenefitsSection />
        <DiagnosisCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Diagnosis;
