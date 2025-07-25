import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Strona nie została znaleziona
          </h2>
          <p className="text-muted-foreground mb-8">
            Przepraszamy, ale strona, którą próbujesz odwiedzić, nie istnieje.
            Sprawdź URL lub wróć na stronę główną.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Strona główna
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
            <button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Wróć
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
