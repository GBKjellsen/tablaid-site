export type MedicationPrinciple = {
  id: number;
  title: string;
  shortText: string;
  longText: string;
  sources: string[];
  copyright: string;
  category: string;
};

export const medicationPrinciples: MedicationPrinciple[] = [
  {
    id: 1,
    title: "1. Ta medisinen til riktig tid",
    shortText: "Stabil bruk gir bedre effekt og færre bivirkninger.",
    longText:
      "Å ta medisinen til omtrent samme tid hver dag gir stabile nivåer i kroppen og sikrer best mulig effekt. Uregelmessighet kan redusere virkningen og øke risikoen for bivirkninger.",
    sources: [
      "WHO – Medication Adherence Report (2003)",
      "Helsedirektoratet – Riktig legemiddelbruk",
    ],
    copyright: "© Tablaid",
    category: "Riktig bruk",
  },

  {
    id: 2,
    title: "2. Følg doseringen legen har bestemt",
    shortText: "Ikke endre dose uten å avklare med lege.",
    longText:
      "Ikke ta mer, mindre eller oftere enn foreskrevet. Endringer i dose må alltid avklares med lege.",
    sources: [
      "Legemiddelverket – Forsvarlig legemiddelbruk",
      "Norsk legemiddelhåndbok",
    ],
    copyright: "© Tablaid",
    category: "Riktig bruk",
  },

  {
    id: 3,
    title: "3. Les pakningsvedlegget",
    shortText: "Gir viktig informasjon om riktig bruk og bivirkninger.",
    longText:
      "Pakningsvedlegget gir informasjon om bruk, interaksjoner og hva du gjør ved glemt dose. Å lese det gjør behandlingen tryggere.",
    sources: [
      "EMA / Legemiddelverket – Pakningsvedlegg (PL/SmPC)",
    ],
    copyright: "© Tablaid",
    category: "Kunnskap",
  },
  {
    id: 4,
    title: "4. Ikke stopp behandlingen selv",
    shortText: "Plutselige avbrudd kan gi alvorlige konsekvenser.",
    longText:
      "Å avslutte behandling uten veiledning kan føre til forverring, abstinens eller tap av effekt. Endringer skal alltid skje i dialog med helsepersonell.",
    sources: [
      "WHO – Continuity of Care",
      "Helsedirektoratet – Kroniske behandlinger",
    ],
    copyright: "© Tablaid",
    category: "Riktig bruk",
  },
  {
    id: 5,
    title: "5. Fortell om alt du bruker av medisiner",
    shortText: "Også kosttilskudd og naturpreparater.",
    longText:
      "Reseptfrie midler, naturpreparater og vitaminer kan påvirke effekten av legemidler. Mange interaksjoner merkes ikke, men kan være alvorlige.",
    sources: [
      "Legemiddelverket – Interaksjonssøk",
      "Helsedirektoratet – Legemiddelsamstemming",
    ],
    copyright: "© Tablaid",
    category: "Kommunikasjon",
  },
  {
    id: 6,
    title: "6. Unngå alkohol og mat som påvirker medisinen",
    shortText: "Noen matvarer kan endre effekt og bivirkninger.",
    longText:
      "Alkohol og enkelte matvarer (f.eks. grapefrukt) kan påvirke opptak og virkning. Les pakningsvedlegget eller spør apoteket.",
    sources: [
      "Legemiddelverket – Mat–legemiddel-interaksjoner",
      "FDA – Food–Drug Interactions",
    ],
    copyright: "© Tablaid",
    category: "Sikkerhet",
  },
  {
    id: 7,
    title: "7. Ikke del medisiner – og ikke bruk andres",
    shortText: "Legemidler er individuelt tilpasset.",
    longText:
      "Medisiner er forskrevet basert på individuell helse. Å bruke andres medisiner kan være farlig.",
    sources: [
      "WHO – Rational Use of Medicines",
      "Helsedirektoratet – Pasientsikkerhet",
    ],
    copyright: "© Tablaid",
    category: "Sikkerhet",
  },
  {
    id: 8,
    title: "8. Oppbevar medisiner trygt",
    shortText: "Trygt for andre – tilgjengelig for deg.",
    longText:
      "Oppbevar medisiner utilgjengelig for barn og husdyr, men lett tilgjengelig for deg. Følg anbefalt temperatur.",
    sources: [
      "FHI – Forgiftningsforebygging",
      "Legemiddelverket – Oppbevaringsråd",
    ],
    copyright: "© Tablaid",
    category: "Oppbevaring",
  },
  {
    id: 9,
    title: "9. Sjekk utløpsdato og kvalitet",
    shortText: "Ikke bruk utløpte eller skadede medisiner.",
    longText:
      "Utløpte eller feiloppbevarte medisiner kan ha redusert eller uforutsigbar effekt.",
    sources: [
      "Legemiddelverket – Holdbarhet",
      "WHO – Good Storage Practice",
    ],
    copyright: "© Tablaid",
    category: "Oppbevaring",
  },
  {
    id: 10,
    title: "10. Del eller knus tabletter bare når det er trygt",
    shortText: "Feil deling kan gi feil dose.",
    longText:
      "Kun tabletter med dele-strek kan deles. Depot- og enterotabletter må ikke knuses uten råd.",
    sources: [
      "Norsk legemiddelhåndbok – Formuleringer",
      "Legemiddelverket – Tablettdeling",
      "WHO – Oral Solid Dosage Forms",
    ],
    copyright: "© Tablaid",
    category: "Sikkerhet",
  },
  {
    id: 11,
    title: "11. Hent medisiner i god tid",
    shortText: "Unngå avbrudd i behandlingen.",
    longText:
      "Avbrudd kan føre til forverring eller tap av effekt. Planlegg påfyll før du går tom.",
    sources: [
      "WHO – Treatment Adherence Guidelines",
      "Helsedirektoratet – Kronikeroppfølging",
    ],
    copyright: "© Tablaid",
    category: "Planlegging",
  },
  {
    id: 12,
    title: "12. Meld fra om bivirkninger eller endringer",
    shortText: "Tidlig varsling gir tryggere behandling.",
    longText:
      "Kontakt helsepersonell ved nye symptomer eller uventede reaksjoner. Tidlig varsling styrker pasientsikkerheten.",
    sources: [
      "WHO – Pharmacovigilance Programme",
      "EMA – EudraVigilance",
      "Legemiddelverket – Bivirkningsmelding",
    ],
    copyright: "© Tablaid",
    category: "Oppfølging",
    

  },
];
