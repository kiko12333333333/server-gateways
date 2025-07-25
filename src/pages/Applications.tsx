import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Shield, 
  Wrench, 
  Users, 
  Skull, 
  Building, 
  Settings,
  ExternalLink,
  Clock,
  CheckCircle 
} from 'lucide-react';

const Applications = () => {
  const applications = [
    {
      title: "Emergency Medical Services (EMS)",
      description: "Dołącz do zespołu ratowników medycznych i pomagaj mieszkańcom Los Santos",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      requirements: [
        "Minimum 18 lat",
        "Mikrofon o dobrej jakości", 
        "Znajomość podstaw RP",
        "Dostępność minimum 10h/tydzień"
      ],
      formUrl: "https://forms.google.com/ems-application",
      status: "open",
      spots: "5/15"
    },
    {
      title: "Los Santos Police Department (LSPD)",
      description: "Służ społeczności jako oficer policji i utrzymuj porządek w mieście",
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      requirements: [
        "Minimum 19 lat",
        "Czysta karta karalna IC",
        "Doświadczenie w RP",
        "Dostępność minimum 15h/tydzień"
      ],
      formUrl: "https://forms.google.com/lspd-application",
      status: "open",
      spots: "3/20"
    },
    {
      title: "Mechanik",
      description: "Zostań mechanikiem i naprawiaj pojazdy mieszkańców miasta",
      icon: <Wrench className="h-8 w-8 text-yellow-500" />,
      requirements: [
        "Minimum 16 lat",
        "Podstawowa znajomość mechaniki",
        "Regularność w grze",
        "Dostępność minimum 8h/tydzień"
      ],
      formUrl: "https://forms.google.com/mechanic-application",
      status: "open",
      spots: "2/8"
    },
    {
      title: "Organizacja przestępcza",
      description: "Stwórz lub dołącz do organizacji przestępczej w Los Santos",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      requirements: [
        "Minimum 20 lat",
        "Doświadczenie w RP kryminalnym",
        "Przemyślana historia organizacji",
        "Minimum 5 członków założycieli"
      ],
      formUrl: "https://forms.google.com/org-application",
      status: "limited",
      spots: "1/3"
    },
    {
      title: "Gang",
      description: "Załóż gang uliczny i walcz o terytorium w mieście",
      icon: <Skull className="h-8 w-8 text-red-600" />,
      requirements: [
        "Minimum 18 lat",
        "Doświadczenie w gang RP",
        "Plan rozwoju gangu",
        "Minimum 3 członków założycieli"
      ],
      formUrl: "https://forms.google.com/gang-application",
      status: "closed",
      spots: "0/2"
    },
    {
      title: "Firma",
      description: "Otwórz własną firmę i rozwijaj biznes w Los Santos",
      icon: <Building className="h-8 w-8 text-green-500" />,
      requirements: [
        "Minimum 21 lat",
        "Plan biznesowy",
        "Doświadczenie w prowadzeniu firm RP",
        "Kapitał początkowy (IC)"
      ],
      formUrl: "https://forms.google.com/company-application",
      status: "open",
      spots: "Unlimited"
    },
    {
      title: "Administrator",
      description: "Zostań członkiem zespołu administracji serwera",
      icon: <Settings className="h-8 w-8 text-accent" />,
      requirements: [
        "Minimum 21 lat",
        "Doświadczenie w administracji serwerów",
        "Znajomość regulaminu na poziomie eksperckim",
        "Dostępność minimum 20h/tydzień"
      ],
      formUrl: "https://forms.google.com/admin-application",
      status: "limited",
      spots: "1/2"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-success text-white">Otwarte</Badge>;
      case 'limited':
        return <Badge className="bg-warning text-black">Ograniczone</Badge>;
      case 'closed':
        return <Badge variant="destructive">Zamknięte</Badge>;
      default:
        return <Badge variant="outline">Nieznany</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <CheckCircle className="h-5 w-5 text-success" />;
      case 'limited':
        return <Clock className="h-5 w-5 text-warning" />;
      case 'closed':
        return <Clock className="h-5 w-5 text-destructive" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Podania na serwer
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Dołącz do naszego zespołu! Wybierz rolę, która Cię interesuje i złóż podanie
        </p>
      </div>

      {/* Info Card */}
      <Card className="mb-12 bg-card border-border">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-accent">
            📋 Informacje o podaniach
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Czas rozpatrzenia</h3>
              <p className="text-muted-foreground">3-7 dni roboczych</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Wymagania ogólne</h3>
              <p className="text-muted-foreground">Znajomość regulaminu i podstaw RP</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Status podania</h3>
              <p className="text-muted-foreground">Sprawdź na stronie statusu</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {applications.map((app, index) => (
          <Card 
            key={index} 
            className={`bg-card border-border hover:border-primary/30 transition-all duration-300 ${
              app.status === 'closed' ? 'opacity-75' : 'hover:scale-105'
            }`}
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {app.icon}
                  <div>
                    {getStatusBadge(app.status)}
                  </div>
                </div>
                {getStatusIcon(app.status)}
              </div>
              <CardTitle className="text-xl">{app.title}</CardTitle>
              <CardDescription className="text-base">
                {app.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Wymagania:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {app.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <span className="text-accent">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Wolne miejsca:</span>
                  <span className="font-semibold text-primary">{app.spots}</span>
                </div>

                <Button 
                  className={`w-full ${app.status === 'closed' ? 'btn-secondary cursor-not-allowed' : 'btn-primary'}`}
                  disabled={app.status === 'closed'}
                  onClick={() => {
                    if (app.status !== 'closed') {
                      window.open(app.formUrl, '_blank');
                    }
                  }}
                >
                  {app.status === 'closed' ? (
                    'Podania zamknięte'
                  ) : (
                    <>
                      Złóż podanie
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <Card className="mt-12 bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-center text-xl">
            💡 Wskazówki
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Przed złożeniem podania:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Przeczytaj uważnie regulamin serwera</li>
                <li>• Upewnij się, że spełniasz wymagania</li>
                <li>• Przygotuj przemyślaną historię postaci</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Po złożeniu podania:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Sprawdzaj regularnie status podania</li>
                <li>• Bądź dostępny na Discordzie</li>
                <li>• Przygotuj się na rozmowę kwalifikacyjną</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Applications;