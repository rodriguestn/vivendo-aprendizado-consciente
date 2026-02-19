import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/common/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PainPointSection } from "@/components/sections/PainPointSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { EducationalPrinciplesSection } from "@/components/sections/EducationalPrinciplesSection";
import { NucleoVisualizationSection } from "@/components/sections/NucleoVisualizationSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Blau Consultoria",
    "url": "https://blauconsultoria.com.br",
    "logo": "https://blauconsultoria.com.br/assets/logo-blau.png",
    "sameAs": [
      "https://www.linkedin.com/company/blau-consultoria",
      "https://www.instagram.com/blauconsultoria"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-27-99665-6233",
      "contactType": "customer service"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blau Consultoria"
        description="A Blau cria Núcleos de Educação Corporativa Viva, formando pessoas que aprendem, ensinam e resolvem problemas com consciência, estratégia e colaboração."
        canonical="/"
        jsonLd={organizationJsonLd}
      />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <PainPointSection />
        <JourneySection />
        <EducationalPrinciplesSection />
        <NucleoVisualizationSection />
        <BenefitsSection />
        <LeadershipSection />
        <BlogSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
