import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  MessageCircle, 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle,
  ExternalLink 
} from 'lucide-react';

const ApplicationStatus = () => {
  const statusTypes = [
    {
      status: "Otrzymane",
      description: "Twoje podanie zostało otrzymane i oczekuje na wstępną weryfikację",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      color: "bg-blue-500/10 border-blue-500/30"
    },
    {
      status: "W trakcie rozpatrywania",
      description: "Administracja sprawdza Twoje podanie i weryfikuje informacje",
      icon: <Clock className="h-6 w-6 text-warning" />,
      color: "bg-warning/10 border-warning/30"
    },
    {
      status: "Zaakceptowane",
      description: "Gratulacje! Twoje podanie zostało zaakceptowane",
      icon: <CheckCircle className="h-6 w-6 text-success" />,
      color: "bg-success/10 border-success/30"
    },
    {
      status: "Odrzucone",
      description: "Niestety, Twoje podanie zostało odrzucone. Sprawdź powód i spróbuj ponownie",
      icon: <XCircle className="h-6 w-6 text-destructive" />,
      color: "bg-destructive/10 border-destructive/30"
    }
  ];

  const checkMethods = [
    {
      title: "Discord Bot",
      description: "Użyj komendy !status [ID podania] na naszym serwerze Discord",
      icon: <MessageCircle className="h-8 w-8 text-accent" />,
      action: "Dołącz na Discord",
      link: "https://discord.gg/fivemrp"
    },
    {
      title: "Google Sheets",
      description: "Sprawdź status w publicznej tabeli z wszystkimi podaniami",
      icon: <FileText className="h-8 w-8 text-success" />,
      action: "Otwórz tabelę",
      link: "https://docs.google.com/spreadsheets/d/status-podań"
    },
    {
      title: "Kontakt z Administracją",
      description: "Skontaktuj się bezpośrednio z członkiem administracji",
      icon: <Search className="h-8 w-8 text-primary" />,
      action: "Napisz na Discord",
      link: "https://discord.gg/fivemrp"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Sprawdź Status Podania
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Dowiedz się na jakim etapie jest Twoje podanie i jak sprawdzić jego status
        </p>
      </div>

      {/* Status Types */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Możliwe statusy podań</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {statusTypes.map((type, index) => (
            <Card key={index} className={`${type.color} transition-all duration-300 hover:scale-105`}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {type.icon}
                  <CardTitle className="text-xl">{type.status}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Check Methods */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Sposoby sprawdzenia statusu</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {checkMethods.map((method, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 glow-effect">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  className="btn-primary w-full"
                  onClick={() => window.open(method.link, '_blank')}
                >
                  {method.action}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <Card className="mb-12 bg-card border-border">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-primary">
            📝 Instrukcja krok po kroku
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">Przez Discord:</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-fit">1</Badge>
                  <span>Dołącz na nasz serwer Discord</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-fit">2</Badge>
                  <span>Przejdź na kanał #sprawdź-status</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-fit">3</Badge>
                  <span>Wpisz komendę: !status [Twoje ID]</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-fit">4</Badge>
                  <span>Bot wyświetli aktualny status</span>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">Przez Google Sheets:</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-fit">1</Badge>
                  <span>Otwórz link do tabeli statusów</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-fit">2</Badge>
                  <span>Użyj Ctrl+F aby wyszukać swoje ID</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-fit">3</Badge>
                  <span>Sprawdź kolumnę "Status"</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="outline" className="min-w-fit">4</Badge>
                  <span>Przeczytaj ewentualne komentarze</span>
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-center text-xl">
            ❓ Często zadawane pytania
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Jak długo trwa rozpatrywanie podania?</h3>
              <p className="text-muted-foreground text-sm">
                Standardowy czas rozpatrywania to 3-7 dni roboczych. W przypadku większej liczby podań może to trwać dłużej.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Co robić jeśli podanie zostało odrzucone?</h3>
              <p className="text-muted-foreground text-sm">
                Przeczytaj powód odrzucenia, popraw błędy i możesz złożyć nowe podanie po 7 dniach.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Gdzie znajdę ID swojego podania?</h3>
              <p className="text-muted-foreground text-sm">
                ID podania zostaje wysłane na email podany w formularzu lub możesz je znaleźć w potwierdzeniu z Google Forms.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationStatus;