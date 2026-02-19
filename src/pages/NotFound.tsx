import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/common/SEO";
import { Home, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Página não encontrada"
        description="A página que você procura não existe ou foi movida."
      />
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 pt-28 pb-16">
        <div className="text-center max-w-md">
          <p className="text-8xl font-bold text-primary/20 mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
            Página não encontrada
          </h1>
          <p className="text-muted-foreground mb-8">
            A página que você procura não existe ou foi movida. Que tal voltar ao início?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              <Home className="w-4 h-4" />
              Voltar ao Início
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com a Blau
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
