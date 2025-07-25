import { Users, Shield, Car, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroBanner from '@/assets/hero-banner.jpg';

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Aktywna społeczność",
      description: "Ponad 500 aktywnych graczy codziennie"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Profesjonalne służby",
      description: "LSPD, EMS i inne służby publiczne"
    },
    {
      icon: <Car className="h-8 w-8 text-primary" />,
      title: "Realistyczny gameplay",
      description: "Ekonomia, praca, organizacje przestępcze"
    },
    {
      icon: <Building className="h-8 w-8 text-accent" />,
      title: "Własne firmy",
      description: "Załóż swoją firmę i rozwijaj biznes"
    }
  ];

  const stats = [
    { label: "Aktywni gracze", value: "500+" },
    { label: "Organizacje", value: "25+" },
    { label: "Pojazdy", value: "200+" },
    { label: "Prace", value: "15+" }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            FiveM RP Server
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Najlepszy serwer roleplay w Polsce. Dołącz do naszej społeczności 
            i rozpocznij swoją przygodę w Los Santos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-3"
              onClick={() => window.open('fivem://connect/fivemrp.pl', '_blank')}
            >
              Dołącz do serwera
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-accent text-lg px-8 py-3"
              onClick={() => window.open('https://discord.gg/fivemrp', '_blank')}
            >
              Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dlaczego nasz serwer?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferujemy wyjątkowe doświadczenie roleplay z profesjonalną obsługą i aktywną społecznością
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors glow-effect">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gotowy na przygodę?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Dołącz do nas już dziś i zacznij swoją historię w Los Santos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-3"
              onClick={() => window.location.href = '/podania'}
            >
              Złóż podanie
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-accent text-lg px-8 py-3"
              onClick={() => window.location.href = '/regulamin'}
            >
              Przeczytaj regulamin
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;