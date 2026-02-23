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
    "@type": "LocalBusiness",
    "@id": "https://blauconsultoria.com.br/#organization",
    "name": "Blau Consultoria",
    "url": "https://blauconsultoria.com.br",
    "logo": "https://blauconsultoria.com.br/og-image.png",
    "description": "Consultoria de educação corporativa em Vitória e Grande Vitória - ES. Atendimento presencial no Espírito Santo e projetos em todo o Brasil.",
    "telephone": "+55-27-99665-6233",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vitória",
      "addressRegion": "ES",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -20.3155,
      "longitude": -40.3128
    },
    "areaServed": [
      { "@type": "City", "name": "Vitória" },
      { "@type": "City", "name": "Vila Velha" },
      { "@type": "City", "name": "Serra" },
      { "@type": "City", "name": "Cariacica" },
      { "@type": "State", "name": "Espírito Santo" },
      { "@type": "Country", "name": "Brasil" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/blau-consultoria-es",
      "https://www.instagram.com/blau.consultoria/",
      "https://www.youtube.com/@Blau_ce"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-27-99665-6233",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blau Consultoria"
        description="Consultoria de educação corporativa em Vitória e Grande Vitória - ES. A Blau cria Núcleos de Educação Corporativa Viva, formando equipes que aprendem, ensinam e resolvem problemas. Atendimento presencial no Espírito Santo e projetos em todo o Brasil."
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
