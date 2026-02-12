import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/common/SEO";
import { BlauMapaHeroSection } from "@/components/sections/diagnosis/BlauMapaHeroSection";
import { WhatIsBlauMapaSection } from "@/components/sections/diagnosis/WhatIsBlauMapaSection";
import { IndustrySegmentsSection } from "@/components/sections/diagnosis/IndustrySegmentsSection";
import { ProcessTimelineSection } from "@/components/sections/diagnosis/ProcessTimelineSection";
import { DiagnosisBenefitsSection } from "@/components/sections/diagnosis/DiagnosisBenefitsSection";
import { DiagnosisCTASection } from "@/components/sections/diagnosis/DiagnosisCTASection";

const Diagnosis = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blau Mapa | Diagnóstico"
        description="Descubra oportunidades ocultas na sua empresa com o Blau Mapa. Um diagnóstico completo para estruturar sua educação corporativa."
        canonical="/diagnostico"
      />
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
