import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus, Bug, Settings, Trash2 } from 'lucide-react';

const Changelog = () => {
  const updates = [
    {
      version: "v3.2.1",
      date: "15.01.2024",
      type: "update",
      changes: [
        { type: "add", text: "Dodano nowy system pracy dla mechaników" },
        { type: "add", text: "Wprowadzono nowe pojazdy do LSPD" },
        { type: "fix", text: "Naprawiono błąd z respawnem pojazdów" },
        { type: "fix", text: "Poprawiono system ekonomiczny" },
        { type: "change", text: "Zmieniono wynagrodzenia za niektóre prace" }
      ]
    },
    {
      version: "v3.2.0",
      date: "08.01.2024",
      type: "major",
      changes: [
        { type: "add", text: "Całkowicie nowy system gangów" },
        { type: "add", text: "Dodano system terytoriów" },
        { type: "add", text: "Wprowadzono nowe bronie" },
        { type: "change", text: "Przeprojektowano system policji" },
        { type: "remove", text: "Usunięto stary system walki" }
      ]
    },
    {
      version: "v3.1.5",
      date: "28.12.2023",
      type: "hotfix",
      changes: [
        { type: "fix", text: "Naprawiono krytyczny błąd z zapisywaniem postaci" },
        { type: "fix", text: "Poprawiono problemy z synchronizacją" },
        { type: "fix", text: "Naprawiono błąd z inwentarzem" }
      ]
    },
    {
      version: "v3.1.4",
      date: "20.12.2023",
      type: "update",
      changes: [
        { type: "add", text: "Dodano świąteczne dekoracje w mieście" },
        { type: "add", text: "Wprowadzono specjalne eventy świąteczne" },
        { type: "change", text: "Zwiększono limity graczy do 128" },
        { type: "fix", text: "Poprawiono stabilność serwera" }
      ]
    },
    {
      version: "v3.1.3",
      date: "15.12.2023",
      type: "update",
      changes: [
        { type: "add", text: "Dodano nowy system firm transportowych" },
        { type: "add", text: "Wprowadzono system kontraktów" },
        { type: "fix", text: "Naprawiono błędy w systemie medycznym" },
        { type: "change", text: "Zoptymalizowano wydajność serwera" }
      ]
    }
  ];

  const getChangeIcon = (type: string) => {
    switch (type) {
      case 'add':
        return <Plus className="h-4 w-4 text-success" />;
      case 'fix':
        return <Bug className="h-4 w-4 text-warning" />;
      case 'change':
        return <Settings className="h-4 w-4 text-accent" />;
      case 'remove':
        return <Trash2 className="h-4 w-4 text-destructive" />;
      default:
        return <Settings className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getVersionBadge = (type: string) => {
    switch (type) {
      case 'major':
        return <Badge variant="default" className="bg-primary">Duża aktualizacja</Badge>;
      case 'update':
        return <Badge variant="secondary" className="bg-accent text-accent-foreground">Aktualizacja</Badge>;
      case 'hotfix':
        return <Badge variant="destructive">Hotfix</Badge>;
      default:
        return <Badge variant="outline">Patch</Badge>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Historia Zmian
        </h1>
        <p className="text-xl text-muted-foreground">
          Zobacz co nowego na serwerze
        </p>
      </div>

      <div className="space-y-8">
        {updates.map((update, index) => (
          <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl text-primary mb-2">
                    {update.version}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-2 text-base">
                    <Calendar className="h-4 w-4" />
                    <span>{update.date}</span>
                  </CardDescription>
                </div>
                {getVersionBadge(update.type)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {update.changes.map((change, changeIndex) => (
                  <div key={changeIndex} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                    {getChangeIcon(change.type)}
                    <span className="text-foreground">{change.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12 bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-center text-xl">
            📢 Informacja
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Aktualizacje są wprowadzane regularnie. Śledź nasz Discord, aby być na bieżąco z najnowszymi zmianami!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Changelog;