import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Rules = () => {
  const sections = [
    {
      title: "§1 Postanowienia ogólne",
      rules: [
        "Nieznajomość regulaminu nie zwalnia z jego przestrzegania",
        "Administracja ma prawo do interpretacji regulaminu",
        "Regulamin może zostać zmieniony w każdej chwili",
        "Gracze są zobowiązani do śledzenia zmian w regulaminie"
      ]
    },
    {
      title: "§2 Roleplay",
      rules: [
        "Roleplay (RP) jest obowiązkowy na całym serwerze",
        "Zabronione jest łamanie charakteru postaci (OOC)",
        "Należy grać zgodnie z charakterem swojej postaci",
        "Każda postać musi mieć przemyślaną historię",
        "Zabronione jest używanie informacji zdobytych poza grą (metagaming)"
      ]
    },
    {
      title: "§3 Komunikacja",
      rules: [
        "Zabronione jest używanie wulgaryzmów w czacie IC",
        "Czat OOC służy tylko do komunikacji poza grą",
        "Nie wolno spamować na czacie",
        "Reklamy innych serwerów są zabronione",
        "Należy używać mikrofonu o dobrej jakości"
      ]
    },
    {
      title: "§4 Zachowanie w grze",
      rules: [
        "Zabronione jest RDM (Random Deathmatch)",
        "Zabronione jest VDM (Vehicle Deathmatch)",
        "Powrót na miejsce śmierci bez uzasadnienia RP jest zabroniony",
        "Należy szanować nową życie po respawn",
        "Zabronione jest trollowanie i griefing"
      ]
    },
    {
      title: "§5 Służby mundurowe",
      rules: [
        "Członkowie służb muszą przestrzegać procedur",
        "Korupcja jest dozwolona tylko z pozwoleniem administracji",
        "Służby nie mogą działać przeciwko sobie bez uzasadnienia",
        "Obowiązkowe jest używanie radiofonii",
        "Każda akcja musi być zgłoszona w raporcie"
      ]
    },
    {
      title: "§6 Organizacje przestępcze",
      rules: [
        "Każda organizacja musi być zatwierdzona przez administrację",
        "Wojny między organizacjami wymagają pozwolenia",
        "Zabronione są bezsensowne strzelaniny",
        "Każda akcja przestępcza musi mieć motyw RP",
        "Należy przestrzegać hierarchii w organizacji"
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Regulamin Serwera
        </h1>
        <p className="text-xl text-muted-foreground">
          Zapoznaj się z zasadami obowiązującymi na naszym serwerze
        </p>
      </div>

      <Card className="mb-8 bg-card border-border">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-accent">
            ⚠️ Ważne informacje
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-center">
            <p className="text-lg">
              Poniższy regulamin obowiązuje wszystkich graczy na serwerze FiveM RP Server.
            </p>
            <p className="text-muted-foreground">
              Wersja regulaminu: 3.2 | Data ostatniej aktualizacji: 15.01.2024
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {sections.map((section, index) => (
          <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {section.rules.map((rule, ruleIndex) => (
                  <div key={ruleIndex} className="flex items-start space-x-3">
                    <span className="text-accent font-bold min-w-fit">
                      {ruleIndex + 1}.
                    </span>
                    <span className="text-foreground">{rule}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <Card className="bg-destructive/10 border-destructive/30">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-destructive">
            Konsekwencje łamania regulaminu
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold text-warning mb-2">Ostrzeżenie</h3>
              <p className="text-sm text-muted-foreground">
                Za drobne naruszenia regulaminu
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-warning mb-2">Kick/Ban czasowy</h3>
              <p className="text-sm text-muted-foreground">
                Za poważniejsze naruszenia
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-destructive mb-2">Ban permanentny</h3>
              <p className="text-sm text-muted-foreground">
                Za ciężkie naruszenia i recydywę
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rules;