import { MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Server Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">FiveM RP Server</h3>
            <p className="text-muted-foreground text-sm">
              Najlepszy serwer roleplay w Polsce. Dołącz do naszej społeczności i 
              rozpocznij swoją przygodę w Los Santos!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Szybkie linki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/regulamin" className="text-muted-foreground hover:text-accent transition-colors">
                  Regulamin serwera
                </a>
              </li>
              <li>
                <a href="/podania" className="text-muted-foreground hover:text-accent transition-colors">
                  Złóż podanie
                </a>
              </li>
              <li>
                <a href="/changelog" className="text-muted-foreground hover:text-accent transition-colors">
                  Historia zmian
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Kontakt</h3>
            <div className="flex space-x-4">
              <a
                href="https://discord.gg/fivemrp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors btn-accent px-3 py-2 rounded-md"
              >
                <MessageCircle size={20} />
                <span>Discord</span>
              </a>
              <a
                href="https://fivemrp.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors btn-primary px-3 py-2 rounded-md"
              >
                <Globe size={20} />
                <span>Strona</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 FiveM RP Server. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;