export type Language = 'pl' | 'uk';

export interface Translations {
  // Header
  header: {
    blog: string;
    freelanceIdeas: string;
    accounting: string;
    businessSetup: string;
    temporaryResidence: string;
    permanentResidence: string;
  };
  
  // Hero
  hero: {
    title: string;
    subtitle: string;
    bullets: string[];
    description: string;
    ryczaltTitle: string;
    ryczaltDescription: string;
    ryczaltRates: Array<{
      rate: string;
      description: string;
    }>;
    cta: string;
    infaktLink: string;
  };
  
  // Requirements
  requirements: {
    title: string;
    subtitle: string;
    tipTitle: string;
    tipText: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  
  // Categories
  categories: {
    title: string;
    subtitle: string;
    cta: string;
    ctaButton: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  
  // Accounting
  accounting: {
    title: string;
    subtitle: string;
    cardTitle: string;
    cardSubtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    pricing: {
      jdg: string;
      spzoo: string;
    };
    ksef: string;
    whyTitle: string;
    whyItems: string[];
    button1: string;
    button2: string;
    selectionTitle?: string;
    selectionSubtitle?: string;
    selectionDescription?: string;
    qualityInfo?: string;
    languagesInfo?: string;
    companySetup?: {
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      process: {
        title: string;
        steps: Array<{
          number: string;
          title: string;
          description: string;
        }>;
      };
      comparison: {
        title: string;
        withAccountant: string[];
        alone: string[];
      };
      pricing: {
        setup: string;
        monthly: string;
      };
    };
  };
  
  // Accountants Selection
  accountants: {
    title: string;
    subtitle: string;
    description: string;
    contactInfo: string;
    qualityInfo: string;
    languagesInfo: string;
    filters: {
      name: string;
      activityType: string;
      jdg: string;
      spzoo: string;
      settlementMethod: string;
      kpir: string;
      ryczalt: string;
      vatActive: string;
      yes: string;
      no: string;
      industry: string;
      employees: string;
      employeesInfo: string;
      showBusy: string;
    };
    button: string;
  };
  
  // Why Open Company
  whyOpenCompany: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  
  // Business Ideas
  businessIdeas: {
    title: string;
    description: string;
  };
  
  // Company Types
  companyTypes: {
    title: string;
    types: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  
  // Registration Steps
  registrationSteps: {
    title: string;
    steps: string[];
    helpText: string;
  };
  
  // After Registration
  afterRegistration: {
    title: string;
    items: Array<{
      number: string;
      title: string;
    }>;
    nextStepsTitle: string;
    nextStepsText: string;
  };
  
  // Taxation
  taxation: {
    title: string;
    paragraphs: string[];
  };
  
  // FAQ
  faq: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  
  // Temporary Residence
  temporaryResidence: {
    title: string;
    subtitle: string;
    description: string;
    benefits: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    requirements: {
      title: string;
      items: string[];
    };
    process: {
      title: string;
      steps: Array<{
        number: string;
        title: string;
        description: string;
      }>;
    };
    duration: {
      title: string;
      text: string;
    };
    faq: {
      title: string;
      questions: Array<{
        question: string;
        answer: string;
      }>;
    };
  };
  
  // Permanent Residence
  permanentResidence: {
    title: string;
    subtitle: string;
    description: string;
    benefits: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    requirements: {
      title: string;
      items: string[];
    };
    process: {
      title: string;
      steps: Array<{
        number: string;
        title: string;
        description: string;
      }>;
    };
    faq: {
      title: string;
      questions: Array<{
        question: string;
        answer: string;
      }>;
    };
  };
  
  // Spółka Setup (Company Registration with inFakt)
  spolkaSetup: {
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    process: {
      title: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    features: string[];
    cta: string;
  };
  
  // Blog
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    seeAll: string;
    posts: Array<{
      badge: string;
      title: string;
      description: string;
    }>;
  };
  
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  pl: {
    header: {
      blog: 'Blog',
      freelanceIdeas: 'Freelancing w Polsce',
      accounting: 'Księgowość',
      businessSetup: 'Zakładanie spółki',
      temporaryResidence: 'Karta czasowego pobytu',
      permanentResidence: 'Karta stałego pobytu',
    },
    hero: {
      title: 'Freelancing w Polsce dla samozatrudnionych',
      subtitle: 'Jak legalnie pracować jako freelancer w Polsce',
      bullets: [
        '✓ Rejestracja JDG (jednoosobowa działalność gospodarcza)',
        '✓ Wybór najbardziej opłacalnej formy opodatkowania',
        '✓ Księgowość i rozliczenia przez inFakt',
      ],
      description: 'Aby pracować jako freelancer w Polsce, musisz zarejestrować JDG (jednoosobowa działalność gospodarcza). To proste i szybkie. Najważniejsze pytanie to wybór formy opodatkowania.',
      ryczaltTitle: 'Ryczałt - najpopularniejszy wybór dla freelancerów',
      ryczaltDescription: 'Ryczałt to stała stawka podatku od przychodów. Nie musisz prowadzić skomplikowanej ewidencji kosztów.',
      ryczaltRates: [
        {
          rate: '12%',
          description: 'Dla większości usług (IT, design, konsulting, marketing). Przychód do 200 000 zł rocznie.',
        },
        {
          rate: '8,5%',
          description: 'Dla wolnych zawodów (lekarze, prawnicy, architekci, inżynierowie). Przychód do 200 000 zł rocznie.',
        },
        {
          rate: '17%',
          description: 'Jeśli Twoje roczne przychody przekraczają 200 000 zł.',
        },
      ],
      cta: 'Zarejestruj się i zobacz swojego księgowego',
      infaktLink: 'Polecamy inFakt do obsługi księgowej',
    },
    requirements: {
      title: 'Co jest potrzebne do rozpoczęcia freelancingu w Polsce?',
      subtitle: 'Aby legalnie prowadzić działalność freelancerską w Polsce, musisz spełnić kilka podstawowych wymagań. Oto kompletny przewodnik po formalnościach.',
      tipTitle: 'Wskazówka',
      tipText: 'Proces rejestracji działalności można przeprowadzić online przez CEIDG. Większość formalności można załatwić zdalnie, co jest szczególnie wygodne dla freelancerów pracujących z różnych lokalizacji.',
      items: [
        {
          title: 'Rejestracja działalności',
          description: 'Założenie JDG (jednoosobowa działalność gospodarcza) lub Sp. z o.o.',
        },
        {
          title: 'Numer NIP',
          description: 'Otrzymanie numeru identyfikacji podatkowej',
        },
        {
          title: 'Konto bankowe',
          description: 'Otwarcie konta firmowego lub osobistego',
        },
        {
          title: 'Ubezpieczenia ZUS',
          description: 'Rejestracja w Zakładzie Ubezpieczeń Społecznych',
        },
        {
          title: 'Księga przychodów i rozchodów',
          description: 'Prowadzenie dokumentacji finansowej',
        },
        {
          title: 'Forma opodatkowania',
          description: 'Wybór: ryczałt, skala podatkowa lub podatek liniowy',
        },
      ],
    },
    categories: {
      title: 'Popularne kategorie freelancingu w Polsce',
      subtitle: 'Odkryj różnorodne możliwości zarobkowania jako freelancer. Każda kategoria oferuje unikalne możliwości rozwoju i zarobków.',
      cta: 'Chcesz dowiedzieć się więcej o konkretnej kategorii?',
      ctaButton: 'Przeczytaj artykuły na blogu',
      items: [
        {
          title: 'Technology',
          description: 'Programiści, deweloperzy, specjaliści IT',
        },
        {
          title: 'Marketing & Advertising',
          description: 'Specjaliści marketingu, SEO, reklamy',
        },
        {
          title: 'Creative & Media',
          description: 'Fotografowie, filmowcy, twórcy treści',
        },
        {
          title: 'Writing & Publishing',
          description: 'Pisarze, copywriterzy, redaktorzy',
        },
        {
          title: 'Wideo reklamowe i fotografia',
          description: 'Montaż wideo, spoty reklamowe, fotografia komercyjna',
        },
        {
          title: 'Art & Design',
          description: 'Grafikowie, ilustratorzy, projektanci',
        },
      ],
    },
    accounting: {
      title: 'Usługi księgowe w Polsce od inFakt',
      subtitle: 'Pełny zakres usług księgowych w całej Polsce, skierowanych do osób prowadzących działalność gospodarczą (JDG) i do spółek (Sp. z o.o.).',
      cardTitle: 'Profesjonalna księgowość online',
      cardSubtitle: 'inFakt to jedna z najpopularniejszych platform księgowych w Polsce',
      features: [
        {
          title: 'Rejestracja działalności',
          description: 'Pomoc w założeniu JDG lub Sp. z o.o.',
        },
        {
          title: 'Prowadzenie księgowości',
          description: 'Pełna obsługa księgowa i podatkowa, przygotowanie deklaracji',
        },
        {
          title: 'KSeF - faktury elektroniczne',
          description: 'Wystawianie i otrzymywanie e-faktur przez KSeF bezpłatnie i bez ograniczeń',
        },
        {
          title: 'Aplikacja mobilna',
          description: 'Zarządzaj finansami i wystawiaj faktury z dowolnego miejsca',
        },
        {
          title: 'Dostęp do księgowego',
          description: 'Osobisty księgowy, którego kompetencje są zweryfikowane przez inFakt',
        },
      ],
      pricing: {
        jdg: 'od 189 zł miesięcznie',
        spzoo: 'od 619 zł miesięcznie',
      },
      ksef: 'KSeF (Krajowy System e-Faktur) to krajowy system faktur elektronicznych w Polsce. Z inFakt możesz wystawiać i otrzymywać e-faktury bezpłatnie i bez ograniczeń. System automatycznie wysyła i otrzymuje faktury przez KSeF.',
      whyTitle: 'Dlaczego warto wybrać inFakt?',
      whyItems: [
        '9,7 z 10 klientów poleca swojego księgowego',
        '98% klientów pozostawia pozytywne opinie',
        'Wysokie oceny: Google (4,9), Facebook (94%), AppStore (4,8)',
        'Wsparcie KSeF - bezpłatne wystawianie i otrzymywanie e-faktur',
        'Ponad 100 konsultantów KSeF gotowych odpowiedzieć na Twoje pytania',
      ],
      button1: 'Zarejestruj się i zobacz swojego księgowego',
      button2: 'Dowiedz się więcej',
    },
    accountants: {
      title: 'Księgowi inFakt z polecenia. Jak zlecić księgowość w inFakcie?',
      subtitle: 'Określ, czego potrzebujesz i wybierz najlepszego Księgowego inFaktu z polecenia',
      description: 'Podaj swoje dane, a skontaktujemy się z Tobą w ciągu 24h',
      contactInfo: 'Podaj swoje dane, a skontaktujemy się z Tobą w ciągu 24h',
      qualityInfo: 'Oceniaj Księgowego i polecaj innym! Jakość usług jest dla nas bardzo ważna',
      languagesInfo: '445 księgowych ze znajomością angielskiego, ukraińskiego i wielu innych języków',
      filters: {
        name: 'Imię lub nazwisko księgowego',
        activityType: 'Typ działalności',
        jdg: 'Jednoosobowa Działalność Gosp.',
        spzoo: 'Spółka',
        settlementMethod: 'Sposób rozliczania',
        kpir: 'Księga Przychodów i Rozchodów',
        ryczalt: 'Ryczałt',
        vatActive: 'Podatnik VAT czynny',
        yes: 'Tak',
        no: 'Nie',
        industry: 'Branża',
        employees: 'Pracownicy',
        employeesInfo: 'W usłudze jest m.in.: wyliczenie podatku, składek, przygotowanie dokumentacji pracowniczej, deklaracji do US i ZUS',
        showBusy: 'Pokaż zajętych księgowych',
      },
      button: 'Znajdź swojego księgowego',
    },
    whyOpenCompany: {
      title: 'Dlaczego warto założyć firmę w Polsce',
      items: [
        {
          title: 'Gospodarka Polski rośnie',
          description: 'W UE Polska jest na 6 miejscu pod względem PKB. Bezrobocie stale spada.',
        },
        {
          title: 'Niski kapitał startowy',
          description: '1200 euro lub 5000 złotych. Nie muszą być na koncie.',
        },
        {
          title: 'Pełny pakiet socjalny',
          description: 'Bezpłatna medycyna i edukacja dla przedsiębiorców.',
        },
        {
          title: 'Dostęp do rynku UE',
          description: 'Możliwość pracy ze wszystkimi krajami Unii Europejskiej.',
        },
        {
          title: 'Możliwości rozwoju',
          description: 'Można otrzymać kredyt na preferencyjnych warunkach.',
        },
        {
          title: 'Bez dodatkowych kosztów',
          description: 'Właściciele nie muszą wypłacać sobie pensji.',
        },
        {
          title: 'Dostępne nieruchomości',
          description: 'Szybka procedura kupna komercyjnych i prywatnych nieruchomości.',
        },
        {
          title: 'Legalizacja w kraju',
          description: 'Po pół roku działalności możesz uzyskać kartę czasowego pobytu, po 5 latach - stałego.',
        },
      ],
    },
    businessIdeas: {
      title: 'Jaki biznes otworzyć w Polsce',
      description: 'Popularne kierunki: cleaning, zatrudnienie, transport, budownictwo. Polska ma korzystne położenie dla logistyki. Dobrze rozwinięte: rolnictwo, przemysł tekstylny i chemiczny, metalurgia, turystyka, przemysł maszynowy.',
    },
    companyTypes: {
      title: 'Jakie typy firm można zarejestrować',
      types: [
        {
          number: '1',
          title: 'Spółka z o.o. (odpowiednik LLC)',
          description: '80% nowych firm wybiera tę formę. Pasuje do każdego biznesu, prosta w rejestracji.',
        },
        {
          number: '2',
          title: 'JDG (jednoosobowa działalność)',
          description: 'Niska rejestracja, podatek 18%. Prosty księgowy. Pierwsze 2 lata - ulgi ZUS. Można zawiesić działalność do 2 lat bez podatków.',
        },
        {
          number: '3',
          title: 'Spółka Akcyjna (SA)',
          description: 'Dla dużych firm. Minimalny kapitał 25000 €. Podatek 19%.',
        },
        {
          number: '4',
          title: 'Spółka komandytowo-akcyjna',
          description: 'Nazwa musi zawierać nazwisko właściciela. Kapitał statutowy 12500 €.',
        },
        {
          number: '5',
          title: 'Spółka komandytowa',
          description: 'Wymaga minimum 2 założycieli. Nie wymaga kapitału statutowego.',
        },
        {
          number: '6',
          title: 'Oddział firmy zagranicznej',
          description: 'Filia lub przedstawicielstwo zagranicznej firmy. Oddzielna księgowość.',
        },
      ],
    },
    registrationSteps: {
      title: 'Etapy rejestracji firmy w Polsce',
      steps: [
        'Wybrać typ firmy (JDG lub Sp. z o.o.)',
        'Wybrać rodzaj działalności wg PKD',
        'Podać dane założycieli',
        'Wybrać adres (rzeczywisty lub wirtualny)',
        'Poświadczyć dokumenty u notariusza z tłumaczem',
        'Uzyskać numer PESEL',
        'Uzyskać podpis elektroniczny lub profil EPUAP',
        'Zarejestrować się przez system S24',
        'Otworzyć konto bankowe',
        'Zamówić usługi księgowe',
      ],
      helpText: 'Pomożemy na każdym etapie - wybierzemy rodzaj działalności, zbierzemy dokumenty, otworzymy konto. Pełne wsparcie z gwarancją.',
    },
    afterRegistration: {
      title: 'Co otrzymasz po rejestracji',
      items: [
        {
          number: '1',
          title: 'Numer REGON (Rejestr Gospodarki Narodowej)',
        },
        {
          number: '2',
          title: 'Numer KRS (można znaleźć wszystkie informacje o firmie)',
        },
        {
          number: '3',
          title: 'Statut firmy',
        },
        {
          number: '4',
          title: 'Numer NIP (numer identyfikacji podatkowej)',
        },
        {
          number: '5',
          title: 'Pieczątka firmy (opcjonalnie)',
        },
        {
          number: '6',
          title: 'Rejestracja VAT w razie potrzeby',
        },
      ],
      nextStepsTitle: 'Co zrobić po rejestracji?',
      nextStepsText: 'Wyślij do urzędu skarbowego formularz NIP-8 z informacjami o księgowym i koncie bankowym. Ważne, aby zrobić to w ciągu 21 dni.',
    },
    taxation: {
      title: 'Opodatkowanie w Polsce',
      paragraphs: [
        'Podatek od osób prawnych - 19%. Dla porównania: w Niemczech 30%, w Estonii 21%.',
        'Od 2019 roku obowiązuje obniżona stawka 9% dla firm z obrotem do 1,2 mln euro rocznie.',
        'Obniżone stawki dla niektórych towarów: farmaceutyki, materiały budowlane.',
        'Jeśli w Sp. z o.o. jest więcej niż 2 założycieli - zwolnienie z obowiązkowych składek ZUS.',
      ],
    },
    faq: {
      title: 'Często zadawane pytania',
      questions: [
        {
          question: 'Jakie dokumenty są potrzebne?',
          answer: 'Tylko paszport. Wszystkie inne dokumenty załatwią nasi specjaliści.',
        },
        {
          question: 'Kto może założyć firmę?',
          answer: 'Każda osoba powyżej 18 lat, rezydent lub nierezydent Polski.',
        },
        {
          question: 'Czy można założyć zdalnie?',
          answer: 'Tak. Potrzebne jest pełnomocnictwo notarialne i podpis elektroniczny, który możemy zrobić zdalnie.',
        },
        {
          question: 'Ile czasu trwa rejestracja?',
          answer: 'Około 10 dni.',
        },
        {
          question: 'Czy kierownik musi być zatrudniony?',
          answer: 'Nie, to nie jest obowiązkowe.',
        },
        {
          question: 'Jak wybrać nazwę firmy?',
          answer: 'Nazwa musi być unikalna. Można sprawdzić na stronie KRS Polski.',
        },
      ],
    },
    temporaryResidence: {
      title: 'Karta czasowego pobytu w Polsce',
      subtitle: 'Uzyskaj pozwolenie na pobyt',
      description: 'Karta czasowego pobytu daje prawo do legalnego zamieszkania i pracy w Polsce. To pierwszy krok do stałego pobytu.',
      benefits: {
        title: 'Korzyści z karty czasowego pobytu',
        items: [
          {
            title: 'Legalny pobyt',
            description: 'Możesz mieszkać w Polsce od 6 miesięcy do 3 lat.',
          },
          {
            title: 'Prawo do pracy',
            description: 'Możesz pracować bez dodatkowych zezwoleń.',
          },
          {
            title: 'Bezwizowy ruch po Schengen',
            description: 'Podróżuj po krajach UE do 90 dni.',
          },
          {
            title: 'Dostęp do opieki zdrowotnej',
            description: 'Bezpłatna medycyna przy opłacaniu ZUS.',
          },
          {
            title: 'Edukacja dla dzieci',
            description: 'Dzieci mogą uczyć się w polskich szkołach.',
          },
          {
            title: 'Usługi bankowe',
            description: 'Otwieranie kont i uzyskiwanie kredytów.',
          },
        ],
      },
      requirements: {
        title: 'Co jest potrzebne do uzyskania',
        items: [
          'Ważny paszport',
          'Podstawa pobytu (praca, nauka, biznes)',
          'Ubezpieczenie zdrowotne lub ZUS',
          'Potwierdzenie miejsca zamieszkania',
          'Gwarancje finansowe (konto bankowe)',
          'Czysta przeszłość kryminalna',
          '4 zdjęcia',
          'Wypełniony wniosek',
        ],
      },
      process: {
        title: 'Proces uzyskania karty',
        steps: [
          {
            number: '1',
            title: 'Zbieranie dokumentów',
            description: 'Przygotuj wszystkie potrzebne dokumenty i tłumaczenia.',
          },
          {
            number: '2',
            title: 'Złożenie wniosku',
            description: 'Złóż dokumenty w urzędzie wojewódzkim.',
          },
          {
            number: '3',
            title: 'Opłata',
            description: 'Zapłać opłatę skarbową (około 340 złotych).',
          },
          {
            number: '4',
            title: 'Oczekiwanie na decyzję',
            description: 'Rozpatrzenie trwa od 1 do 3 miesięcy.',
          },
          {
            number: '5',
            title: 'Odbiór karty',
            description: 'Odbierz gotową kartę w urzędzie.',
          },
        ],
      },
      duration: {
        title: 'Okres ważności',
        text: 'Karta wydawana jest na okres od 6 miesięcy do 3 lat. Zależy od podstawy uzyskania. Można przedłużać nieograniczoną liczbę razy.',
      },
      faq: {
        title: 'Często zadawane pytania',
        questions: [
          {
            question: 'Ile kosztuje oformienie?',
            answer: 'Opłata skarbowa około 340 złotych. Dodatkowo mogą być koszty tłumaczeń i ubezpieczenia.',
          },
          {
            question: 'Ile czekać na decyzję?',
            answer: 'Zazwyczaj od 1 do 3 miesięcy. Czasem może się przedłużyć do 6 miesięcy.',
          },
          {
            question: 'Czy można pracować podczas rozpatrywania?',
            answer: 'Tak, jeśli masz stempel o złożeniu dokumentów na kartę.',
          },
          {
            question: 'Czy można wyjeżdżać z Polski?',
            answer: 'Tak, ale lepiej mieć stempel o rozpatrywaniu wniosku w paszporcie.',
          },
          {
            question: 'Co robić, jeśli odmówiono?',
            answer: 'Można złożyć odwołanie w ciągu 14 dni lub złożyć nowy wniosek.',
          },
        ],
      },
    },
    permanentResidence: {
      title: 'Karta stałego pobytu w Polsce',
      subtitle: 'Stały pobyt w UE',
      description: 'Karta stałego pobytu daje prawie wszystkie prawa obywateli Polski. To bezterminowe pozwolenie na pobyt.',
      benefits: {
        title: 'Korzyści z karty stałego pobytu',
        items: [
          {
            title: 'Bezterminowy pobyt',
            description: 'Karta ważna 10 lat, potem wymiana.',
          },
          {
            title: 'Pełne prawo do pracy',
            description: 'Pracuj bez ograniczeń w całej Polsce.',
          },
          {
            title: 'Swobodny ruch po UE',
            description: 'Mieszkaj i pracuj w innych krajach UE.',
          },
          {
            title: 'Świadczenia socjalne',
            description: 'Dostęp do wszystkich programów społecznych.',
          },
          {
            title: 'Edukacja',
            description: 'Bezpłatna edukacja dla ciebie i dzieci.',
          },
          {
            title: 'Droga do obywatelstwa',
            description: 'Po 3 latach można ubiegać się o paszport.',
          },
        ],
      },
      requirements: {
        title: 'Warunki uzyskania',
        items: [
          'Mieszkać w Polsce 5 lat nieprzerwanie z kartą czasowego pobytu',
          'Stabilne źródło dochodu',
          'Mieszkanie w Polsce',
          'Ubezpieczenie zdrowotne',
          'Znajomość języka polskiego (poziom podstawowy)',
          'Czysta przeszłość kryminalna',
          'Integracja ze społeczeństwem polskim',
        ],
      },
      process: {
        title: 'Jak uzyskać kartę',
        steps: [
          {
            number: '1',
            title: 'Sprawdzenie warunków',
            description: 'Upewnij się, że mieszkałeś 5 lat.',
          },
          {
            number: '2',
            title: 'Zbieranie dokumentów',
            description: 'Przygotuj wszystkie dokumenty i zaświadczenia.',
          },
          {
            number: '3',
            title: 'Egzamin językowy',
            description: 'Zdaj test znajomości języka (jeśli wymagany).',
          },
          {
            number: '4',
            title: 'Złożenie wniosku',
            description: 'Złóż dokumenty w urzędzie wojewódzkim.',
          },
          {
            number: '5',
            title: 'Oczekiwanie',
            description: 'Rozpatrzenie trwa 2-6 miesięcy.',
          },
          {
            number: '6',
            title: 'Odbiór karty',
            description: 'Odbierz kartę stałego pobytu.',
          },
        ],
      },
      faq: {
        title: 'Często zadawane pytania',
        questions: [
          {
            question: 'Czy egzamin językowy jest obowiązkowy?',
            answer: 'Tak, wymagany jest podstawowy poziom polskiego. Zwolnione są dzieci, emeryci i absolwenci polskich szkół.',
          },
          {
            question: 'Czy można stracić kartę?',
            answer: 'Tak, jeśli wyjedziesz z UE na 6+ lat lub otrzymasz zakaz wjazdu.',
          },
          {
            question: 'Ile kosztuje oformienie?',
            answer: 'Opłata skarbowa około 640 złotych plus koszty dokumentów.',
          },
          {
            question: 'Czy trzeba przedłużać?',
            answer: 'Karta ważna 10 lat, potem po prostu wymienia się na nową.',
          },
          {
            question: 'Czy można pracować w innych krajach UE?',
            answer: 'Tak, karta daje prawo do życia i pracy w większości krajów UE.',
          },
        ],
      },
    },
    spolkaSetup: {
      title: 'Zakładanie spółki z o.o. z inFakt',
      subtitle: 'Załóż spółkę handlową online bez stresu',
      description: 'inFakt pomaga założyć wieloosobowe spółki handlowe. Przeprowadzimy Cię przez cały proces założenia spółki krok po kroku.',
      benefits: [
        'Wsparcie eksperta - odpowiemy na Twoje pytania',
        'Bez wizyty w urzędzie - wszystkie formalności online',
        'Załóż spółkę z Księgowym lub samodzielnie',
        'Otrzymasz osobistego Księgowego do prowadzenia spółki',
      ],
      process: {
        title: 'Jak to działa',
        steps: [
          {
            title: 'Przeprowadzimy Cię przez cały proces założenia spółki krok po kroku',
            description: 'Specjalista inFakt pomoże Ci wybrać odpowiednią formę spółki i przeprowadzi przez wszystkie formalności.',
          },
          {
            title: 'Założymy Twoją spółkę online - bez wychodzenia z domu i spotkania się z notariuszem',
            description: 'Wszystkie dokumenty można podpisać elektronicznie. Nie musisz nigdzie jechać.',
          },
        ],
      },
      features: [
        'Pełna księgowość spółek z o.o.',
        'Osobisty Księgowy dla każdej spółki',
        'Aplikacja inFakt z dostępem dla wspólników',
        'Pomoc w wyborze formy opodatkowania',
      ],
      cta: 'Chcę założyć spółkę',
    },
    blog: {
      title: 'Najnowsze artykuły o freelancingu',
      subtitle: 'Przeczytaj nasze recenzje, poradniki i analizy różnych aspektów freelancingu w Polsce',
      readMore: 'Czytaj więcej',
      seeAll: 'Zobacz wszystkie artykuły',
      posts: [
        {
          badge: 'Poradnik',
          title: 'Jak rozpocząć freelancing w Polsce',
          description: 'Kompletny przewodnik dla początkujących freelancerów',
        },
        {
          badge: 'Analiza',
          title: 'Najlepiej płatne branże freelancingu',
          description: 'Sprawdź, które kategorie oferują najlepsze zarobki',
        },
        {
          badge: 'Recenzja',
          title: 'Przegląd platform księgowych',
          description: 'Porównanie najlepszych rozwiązań dla freelancerów',
        },
      ],
    },
    footer: {
      description: 'Freelancer.net.pl to portal informacyjny i blog o freelancingu w Polsce. Zawiera recenzje, poradniki i przeglądy różnych rozwiązań dla freelancerów.',
      quickLinks: 'Szybkie linki',
      contact: 'Kontakt',
      copyright: 'Freelancer.net.pl. Wszelkie prawa zastrzeżone.',
    },
  },
  uk: {
    header: {
      blog: 'Блог',
      freelanceIdeas: 'Фріланс у Польщі',
      accounting: 'Бухгалтерія',
      businessSetup: 'Відкриття фірми',
      temporaryResidence: 'Часовий побит',
      permanentResidence: 'Сталий побут',
    },
    hero: {
      title: 'Фріланс у Польщі для самозайнятих',
      subtitle: 'Як легально працювати та заробляти фрілансерам в Польщі',
      bullets: [
        '✓ Реєстрація JDG (це як український ФОП)',
        '✓ Вибір найвигіднішої системи оподаткування',
        '✓ Бухгалтерія та звітність через inFakt',
      ],
      description: 'Для роботи фрілансером у Польщі потрібно зареєструвати JDG (jednoosobowa działalność gospodarcza). Це просто і швидко. Головне питання - обрати форму оподаткування.',
      ryczaltTitle: 'Рычалт - найпопулярніший варіант для фрілансерів',
      ryczaltDescription: 'Рычалт (ryczałt) - це фіксований податок від доходу. Не потрібно вести складний облік витрат.',
      ryczaltRates: [
        {
          rate: '12%',
          description: 'Для більшості послуг (IT, дизайн, консалтинг, маркетинг). Прибуток до 200 000 zł на рік.',
        },
        {
          rate: '8,5%',
          description: 'Для вільних професій (лікарі, юристи, архітектори, інженери). Прибуток до 200 000 zł на рік.',
        },
        {
          rate: '17%',
          description: 'Якщо ваш річний прибуток перевищує 200 000 zł.',
        },
      ],
      cta: 'Зареєструватися та переглянути свого бухгалтера',
      infaktLink: 'Рекомендуємо inFakt для бухгалтерського обслуговування',
    },
    requirements: {
      title: 'Що потрібно для початку фрілансу в Польщі?',
      subtitle: 'Щоб легально вести фрілансерську діяльність у Польщі, ви повинні виконати кілька основних вимог. Ось повний путівник по формальностях.',
      tipTitle: 'Порада',
      tipText: 'Процес реєстрації діяльності можна провести онлайн через CEIDG. Більшість формальностей можна зробити дистанційно, що особливо зручно для фрілансерів, які працюють з різних локацій.',
      items: [
        {
          title: 'Реєстрація діяльності',
          description: 'Заснування JDG (jednoosobowa działalność gospodarcza) або Sp. z o.o.',
        },
        {
          title: 'Номер NIP',
          description: 'Отримання номера ідентифікації платника податків',
        },
        {
          title: 'Банківський рахунок',
          description: 'Відкриття корпоративного або особистого рахунку',
        },
        {
          title: 'Страхування ZUS',
          description: 'Реєстрація в Закладі соціального страхування',
        },
        {
          title: 'Книга доходів і витрат',
          description: 'Ведення фінансової документації',
        },
        {
          title: 'Форма оподаткування',
          description: 'Вибір: ryczałt, податкова шкала або лінійний податок',
        },
      ],
    },
    categories: {
      title: 'Популярні категорії фрілансу в Польщі',
      subtitle: 'Відкрийте різноманітні можливості заробітку як фрілансер. Кожна категорія пропонує унікальні можливості розвитку та заробітку.',
      cta: 'Хочете дізнатися більше про конкретну категорію?',
      ctaButton: 'Прочитати статті в блозі',
      items: [
        {
          title: 'Технології',
          description: 'Програмісти, розробники, IT-спеціалісти',
        },
        {
          title: 'Маркетинг та реклама',
          description: 'Спеціалісти з маркетингу, SEO, реклами',
        },
        {
          title: 'Творчість та медіа',
          description: 'Фотографи, відеографі, контент-творці',
        },
        {
          title: 'Письменництво та видавництво',
          description: 'Письменники, копірайтери, редактори',
        },
        {
          title: 'Відео для реклами та фото',
          description: 'Відеомонтаж, рекламні ролики, комерційна фотографія',
        },
        {
          title: 'Мистецтво та дизайн',
          description: 'Графічні дизайнери, ілюстратори, дизайнери',
        },
      ],
    },
    accounting: {
      title: 'Бухгалтерські послуги в Польщі від inFakt',
      subtitle: 'Повний спектр бухгалтерських послуг по всій Польщі, орієнтованих на індивідуальних підприємців (JDG) і на компанії (Sp. z o.o.).',
      cardTitle: 'Професійна онлайн-бухгалтерія',
      cardSubtitle: 'inFakt - одна з найпопулярніших бухгалтерських платформ у Польщі',
      selectionTitle: 'Бухгалтери inFakt за рекомендацією. Як замовити бухгалтерські послуги в inFakt?',
      selectionSubtitle: 'Вкажіть, що вам потрібно, і оберіть найкращого бухгалтера inFakt за рекомендацією',
      selectionDescription: 'Надайте свої дані, і ми зв\'яжемося з вами протягом 24 годин',
      qualityInfo: 'Оцінюйте бухгалтера та рекомендуйте іншим! Якість послуг дуже важлива для нас',
      languagesInfo: '445 бухгалтерів зі знанням англійської, української та багатьох інших мов',
      features: [
        {
          title: 'Відкриття фірми',
          description: 'Допомога в реєстрації JDG (jednoosobowa działalność gospodarcza) або Sp. z o.o.',
        },
        {
          title: 'Ведення бухгалтерії',
          description: 'Повне бухгалтерське та податкове обслуговування, підготовка декларацій',
        },
        {
          title: 'KSeF - електронні рахунки-фактури',
          description: 'Виставлення та отримання e-фактур через KSeF безкоштовно та без обмежень',
        },
        {
          title: 'Мобільний додаток',
          description: 'Керуйте фінансами та виставляйте рахунки з будь-якого місця',
        },
        {
          title: 'Доступ до бухгалтера',
          description: 'Персональний бухгалтер, компетенції якого перевірені inFakt',
        },
      ],
      pricing: {
        jdg: 'від 189 zł на місяць',
        spzoo: 'від 619 zł на місяць',
      },
      ksef: 'KSeF (Krajowy System e-Faktur) - це національна система електронних рахунків-фактур у Польщі. З inFakt ви можете виставляти та отримувати e-фактури безкоштовно та без обмежень. Система автоматично надсилає та отримує рахунки-фактури через KSeF.',
      whyTitle: 'Чому варто обрати inFakt?',
      whyItems: [
        '9,7 з 10 клієнтів рекомендують свого бухгалтера',
        '98% клієнтів залишають позитивні відгуки',
        'Високі рейтинги: Google (4,9), Facebook (94%), AppStore (4,8)',
        'Підтримка KSeF - безкоштовне виставлення та отримання e-фактур',
        'Понад 100 консультантів KSeF готові відповісти на ваші питання',
      ],
      button1: 'Зареєструватися та переглянути свого бухгалтера',
      button2: 'Дізнатися більше',
      companySetup: {
        title: 'Безкоштовне заснування фірми',
        subtitle: 'Відкрийте свою діяльність онлайн без стресу, з повною підтримкою персонального бухгалтера',
        description: 'Оберіть форму діяльності та відкрийте бізнес на роки. Все можна зробити, не виходячи з дому.',
        benefits: [
          'Підтримка експерта - відповімо на всі ваші питання',
          'Без візиту до уряду - всі формальності оформимо онлайн',
          'Гарантія задоволення - 97% фірм, які ми відкрили, далі користуються бухгалтерією в inFakt',
          'Зручно і швидко - за допомогою зручної програми свою фірму відкриєте навіть за 15 хвилин',
        ],
        process: {
          title: 'Як відкрити фірму?',
          steps: [
            {
              number: '1',
              title: 'Замовляєте безкоштовну розмову',
              description: 'Ми зв\'яжемо вас з бухгалтером, який розповість про процес відкриття фірми з inFakt',
            },
            {
              number: '2',
              title: 'Відкриваєте фірму з бухгалтером',
              description: 'Бухгалтер допомагає відкрити вашу фірму. Ви стаєте підприємцем! Послуга повністю безкоштовна',
            },
            {
              number: '3',
              title: 'Готово!',
              description: 'Ваша фірма зареєстрована! Ви отримуєте номер NIP і можете виставити перший рахунок-фактуру',
            },
          ],
        },
        comparison: {
          title: 'Заснування з підтримкою або самостійно?',
          withAccountant: [
            'Реєстрація вашої фірми в CEIDG',
            'Процес заснування фірми повністю в inFakt',
            'Консультація телефоном зі спеціалістом',
            'Після заснування немає зобов\'язання до бухгалтерії',
            'Професійна підтримка та турбота на кожному етапі',
            'Відразу стаєте клієнтом inFakt',
            'Реєстрація до ПДВ та ZUS',
            'Вашу фірму заснуємо за 15 хвилин',
            'Ваш персональний бухгалтер',
            'Відразу узгоджуємо умови співпраці',
            'Можливість придбати послугу бухгалтерії',
          ],
          alone: [
            'Самостійне заповнення та підписання заявки',
            'Процес займає близько 15 хвилин',
            'Потребує Профіль Довіри або електронний підпис',
            'Контроль над усім процесом',
          ],
        },
        pricing: {
          setup: '0,00 PLN - Заснування фірми безкоштовно',
          monthly: 'від 189,00 PLN нетто/міс - Бухгалтерія після заснування',
        },
      },
    },
    accountants: {
      title: 'Бухгалтери inFakt за рекомендацією. Як замовити бухгалтерські послуги в inFakt?',
      subtitle: 'Вкажіть, що вам потрібно, і оберіть найкращого бухгалтера inFakt за рекомендацією',
      description: 'Надайте свої дані, і ми зв\'яжемося з вами протягом 24 годин',
      contactInfo: 'Надайте свої дані, і ми зв\'яжемося з вами протягом 24 годин',
      qualityInfo: 'Оцінюйте бухгалтера та рекомендуйте іншим! Якість послуг дуже важлива для нас',
      languagesInfo: '445 бухгалтерів зі знанням англійської, української та багатьох інших мов',
      filters: {
        name: 'Ім\'я або прізвище бухгалтера',
        activityType: 'Тип діяльності',
        jdg: 'Індивідуальна діяльність (JDG)',
        spzoo: 'Товариство (Sp. z o.o.)',
        settlementMethod: 'Спосіб розрахунку',
        kpir: 'Книга доходів і витрат',
        ryczalt: 'Ричалт',
        vatActive: 'Платник ПДВ',
        yes: 'Так',
        no: 'Ні',
        industry: 'Галузь',
        employees: 'Працівники',
        employeesInfo: 'До послуги входять: розрахунок податку, внесків, підготовка документації працівників, декларацій до US та ZUS',
        showBusy: 'Показати зайнятих бухгалтерів',
      },
      button: 'Знайти свого бухгалтера',
    },
    whyOpenCompany: {
      title: 'Чому вигідно відкрити фірму в Польщі',
      items: [
        {
          title: 'Економіка Польщі зростає',
          description: 'У ЄС за розміром економіки Польща на 6 місці. Безробіття постійно зменшується.',
        },
        {
          title: 'Маленький стартовий капітал',
          description: '1200 євро або 5000 злотих. Ці гроші можна не тримати на рахунку.',
        },
        {
          title: 'Повний соцпакет',
          description: 'Безкоштовна медицина та освіта для підприємців.',
        },
        {
          title: 'Доступ до ринку ЄС',
          description: 'Можна працювати з усіма країнами Європейського Союзу.',
        },
        {
          title: 'Можливості для розвитку',
          description: 'Можна отримати кредит на пільгових умовах для бізнесу.',
        },
        {
          title: 'Без зайвих витрат',
          description: 'Власникам компанії не обов\'язково платити собі зарплату.',
        },
        {
          title: 'Доступна нерухомість',
          description: 'Швидке оформлення комерційної та приватної нерухомості.',
        },
        {
          title: 'Легалізація в країні',
          description: 'Через пів року роботи компанії можна отримати ВНЖ, через 5 років - ПМП.',
        },
      ],
    },
    businessIdeas: {
      title: 'Який бізнес відкрити в Польщі',
      description: 'Популярні напрямки: клінінг, працевлаштування, перевезення, будівництво. Польща має вигідне розташування для логістики. Також добре розвинені: сільське господарство, текстильна та хімічна промисловість, металургія, туризм, машинобудування.',
    },
    companyTypes: {
      title: 'Які типи фірм можна зареєструвати',
      types: [
        {
          number: '1',
          title: 'Spółka z o.o. (аналог ТОВ)',
          description: '80% нових компаній обирають цю форму. Підходить для будь-якого бізнесу, проста в реєстрації.',
        },
        {
          number: '2',
          title: 'JDG (аналог ФОП)',
          description: 'Недорога реєстрація, податок 18%. Простий бухоблік. Перші 2 роки - пільги на ZUS. Можна призупинити діяльність до 2 років без податків.',
        },
        {
          number: '3',
          title: 'Spółka Akcyjna (SA)',
          description: 'Для великих компаній. Мінімальний капітал 25000 €. Податок 19%.',
        },
        {
          number: '4',
          title: 'Spółka komandytowo-akcyjna',
          description: 'Назва має містити прізвище власника. Статутний капітал 12500 €.',
        },
        {
          number: '5',
          title: 'Spółka komandytowa',
          description: 'Потрібно мінімум 2 засновники. Не потрібен статутний капітал.',
        },
        {
          number: '6',
          title: 'Oddział firmy zagranicznej',
          description: 'Філія або представництво іноземної компанії. Окрема бухзвітність.',
        },
      ],
    },
    registrationSteps: {
      title: 'Етапи реєстрації компанії в Польщі',
      steps: [
        'Обрати тип компанії (JDG або Sp. z o.o.)',
        'Вибрати вид діяльності за класифікатором PKD',
        'Надати дані про засновників',
        'Вибрати адресу (реальну або віртуальну офісну)',
        'Засвідчити документи у нотаріуса з перекладачем',
        'Отримати номер PESEL',
        'Отримати електронний підпис або профіль EPUAP',
        'Зареєструватися через систему S24',
        'Відкрити банківський рахунок',
        'Замовити бухгалтерські послуги',
      ],
      helpText: 'Ми допоможемо на всіх етапах - підберемо вид діяльності, зберемо документи, відкриємо рахунок. Повний супровід з гарантією.',
    },
    afterRegistration: {
      title: 'Що ви отримаєте після реєстрації',
      items: [
        {
          number: '1',
          title: 'Номер REGON (Реєстр народного господарства)',
        },
        {
          number: '2',
          title: 'Номер KRS (можна знайти всю інформацію про компанію)',
        },
        {
          number: '3',
          title: 'Статут компанії',
        },
        {
          number: '4',
          title: 'Номер NIP (ідентифікаційний номер платника)',
        },
        {
          number: '5',
          title: 'Друк компанії (за бажанням)',
        },
        {
          number: '6',
          title: 'Реєстрація ПДВ (VAT) за потреби',
        },
      ],
      nextStepsTitle: 'Що зробити після реєстрації?',
      nextStepsText: 'Надішліть у податкову формуляр NIP-8 з інформацією про бухгалтера та банківський рахунок. Важливо зробити це за 21 день.',
    },
    taxation: {
      title: 'Оподаткування в Польщі',
      paragraphs: [
        'Корпоративний податок - 19%. Для порівняння: в Німеччині 30%, в Естонії 21%.',
        'З 2019 року діє знижена ставка 9% для компаній з оборотом до 1,2 млн євро на рік.',
        'Знижені ставки для окремих товарів: фармацевтика, будматеріали.',
        'Якщо в Sp. z o.o. більше 2 засновників - звільнення від обов\'язкових внесків ZUS.',
      ],
    },
    faq: {
      title: 'Часті питання',
      questions: [
        {
          question: 'Які документи потрібні?',
          answer: 'Тільки закордонний паспорт. Всі інші документи оформлять наші фахівці.',
        },
        {
          question: 'Хто може відкрити фірму?',
          answer: 'Будь-яка особа старше 18 років, резидент чи нерезидент Польщі.',
        },
        {
          question: 'Чи можна відкрити віддалено?',
          answer: 'Так. Потрібна нотаріальна довіреність та електронний підпис, який ми можемо зробити віддалено.',
        },
        {
          question: 'Скільки часу займає реєстрація?',
          answer: 'Близько 10 днів.',
        },
        {
          question: 'Чи потрібно керівнику оформлятися на роботу?',
          answer: 'Ні, це не обов\'язково.',
        },
        {
          question: 'Як обрати назву компанії?',
          answer: 'Назва має бути унікальною. Перевірити можна на сайті KRS Польщі.',
        },
      ],
    },
    temporaryResidence: {
      title: 'Карта часового побиту в Польщі',
      subtitle: 'Отримайте дозвіл на проживання',
      description: 'Карта часового побиту дає право легально жити та працювати в Польщі. Це перший крок до постійного проживання в країні.',
      benefits: {
        title: 'Переваги карти часового побиту',
        items: [
          {
            title: 'Легальне проживання',
            description: 'Можна жити в Польщі від 6 місяців до 3 років.',
          },
          {
            title: 'Право на роботу',
            description: 'Можна працювати без додаткових дозволів.',
          },
          {
            title: 'Безвіз по Шенгену',
            description: 'Подорожуйте країнами ЄС до 90 днів.',
          },
          {
            title: 'Доступ до медицини',
            description: 'Безкоштовна медицина при сплаті ZUS.',
          },
          {
            title: 'Освіта для дітей',
            description: 'Діти можуть навчатися в польських школах.',
          },
          {
            title: 'Банківські послуги',
            description: 'Відкриття рахунків та отримання кредитів.',
          },
        ],
      },
      requirements: {
        title: 'Що потрібно для отримання',
        items: [
          'Дійсний закордонний паспорт',
          'Підстава для перебування (робота, навчання, бізнес)',
          'Медична страховка або ZUS',
          'Підтвердження житла в Польщі',
          'Фінансові гарантії (рахунок у банку)',
          'Чисте кримінальне минуле',
          '4 фотографії',
          'Заповнена анкета',
        ],
      },
      process: {
        title: 'Процес отримання карти',
        steps: [
          {
            number: '1',
            title: 'Збір документів',
            description: 'Підготуйте всі необхідні папери та переклади.',
          },
          {
            number: '2',
            title: 'Подача заяви',
            description: 'Подайте документи в воєводське управління.',
          },
          {
            number: '3',
            title: 'Оплата збору',
            description: 'Сплатіть державний збір (близько 340 злотих).',
          },
          {
            number: '4',
            title: 'Очікування рішення',
            description: 'Розгляд займає від 1 до 3 місяців.',
          },
          {
            number: '5',
            title: 'Отримання карти',
            description: 'Заберіть готову карту в управлінні.',
          },
        ],
      },
      duration: {
        title: 'Термін дії',
        text: 'Карта видається на період від 6 місяців до 3 років. Залежить від підстави отримання. Можна продовжувати необмежену кількість разів.',
      },
      faq: {
        title: 'Часті питання',
        questions: [
          {
            question: 'Скільки коштує оформлення?',
            answer: 'Державний збір близько 340 злотих. Додатково можуть бути витрати на переклади та страховку.',
          },
          {
            question: 'Скільки чекати рішення?',
            answer: 'Зазвичай від 1 до 3 місяців. Іноді може затягнутися до 6 місяців.',
          },
          {
            question: 'Чи можна працювати під час розгляду?',
            answer: 'Так, якщо у вас є штамп про подачу документів на картку.',
          },
          {
            question: 'Чи можна виїжджати з Польщі?',
            answer: 'Так, але краще мати штамп про розгляд заяви в паспорті.',
          },
          {
            question: 'Що робити, якщо відмовили?',
            answer: 'Можна подати апеляцію протягом 14 днів або подати нову заяву.',
          },
        ],
      },
    },
    permanentResidence: {
      title: 'Карта сталого побиту в Польщі',
      subtitle: 'Постійне проживання в ЄС',
      description: 'Карта сталого побиту дає майже всі права громадян Польщі. Це безстроковий дозвіл на проживання.',
      benefits: {
        title: 'Переваги карти сталого побиту',
        items: [
          {
            title: 'Безстрокове проживання',
            description: 'Карта діє 10 років, потім просто міняється.',
          },
          {
            title: 'Повні права на роботу',
            description: 'Працюйте без обмежень по всій Польщі.',
          },
          {
            title: 'Вільний рух по ЄС',
            description: 'Жити та працювати в інших країнах ЄС.',
          },
          {
            title: 'Соціальні виплати',
            description: 'Доступ до всіх соціальних програм.',
          },
          {
            title: 'Освіта',
            description: 'Безкоштовна освіта для вас і дітей.',
          },
          {
            title: 'Шлях до громадянства',
            description: 'Через 3 роки можна подавати на паспорт.',
          },
        ],
      },
      requirements: {
        title: 'Умови отримання',
        items: [
          'Прожити в Польщі 5 років безперервно з картою часового побиту',
          'Стабільне джерело доходу',
          'Житло в Польщі',
          'Медична страховка',
          'Знання польської мови (базовий рівень)',
          'Чисте кримінальне минуле',
          'Інтеграція в польське суспільство',
        ],
      },
      process: {
        title: 'Як отримати карту',
        steps: [
          {
            number: '1',
            title: 'Перевірка умов',
            description: 'Переконайтеся, що прожили 5 років.',
          },
          {
            number: '2',
            title: 'Збір документів',
            description: 'Підготуйте всі папери та довідки.',
          },
          {
            number: '3',
            title: 'Іспит з мови',
            description: 'Складіть тест на знання польської (якщо потрібно).',
          },
          {
            number: '4',
            title: 'Подача заяви',
            description: 'Подайте документи в воєводство.',
          },
          {
            number: '5',
            title: 'Очікування',
            description: 'Розгляд займає 2-6 місяців.',
          },
          {
            number: '6',
            title: 'Отримання карти',
            description: 'Заберіть карту сталого побиту.',
          },
        ],
      },
      faq: {
        title: 'Часті питання',
        questions: [
          {
            question: 'Чи обов\'язковий іспит з мови?',
            answer: 'Так, потрібен базовий рівень польської. Звільняються діти, пенсіонери та випускники польських шкіл.',
          },
          {
            question: 'Чи можна втратити картку?',
            answer: 'Так, якщо виїхати з ЄС на 6+ років або отримати заборону в\'їзду.',
          },
          {
            question: 'Скільки коштує оформлення?',
            answer: 'Державний збір близько 640 злотих плюс витрати на документи.',
          },
          {
            question: 'Чи потрібно продовжувати?',
            answer: 'Карта діє 10 років, потім просто міняється на нову.',
          },
          {
            question: 'Чи можна працювати в інших країнах ЄС?',
            answer: 'Так, карта дає право жити та працювати в більшості країн ЄС.',
          },
        ],
      },
    },
    spolkaSetup: {
      title: 'Заснування товариства з inFakt',
      subtitle: 'Відкрийте товариство онлайн без стресу',
      description: 'inFakt допомагає заснувати багатоосібні товариства. Ми проведемо вас через весь процес крок за кроком.',
      benefits: [
        'Підтримка експерта - відповімо на ваші запитання',
        'Без візиту до офісу - всі формальності онлайн',
        'Засну йте товариство з бухгалтером або самостійно',
        'Отримаєте особистого бухгалтера для ведення справ',
      ],
      process: {
        title: 'Як це працює',
        steps: [
          {
            title: 'Проведемо вас через весь процес заснування крок за кроком',
            description: 'Спеціаліст inFakt допоможе обрати відповідну форму товариства та проведе через всі формальності.',
          },
          {
            title: 'Заснуємо ваше товариство онлайн - без виходу з дому та зустрічей з нотаріусом',
            description: 'Всі документи можна підписати електронно. Не потрібно нікуди їхати.',
          },
        ],
      },
      features: [
        'Повна бухгалтерія товариств з о.о.',
        'Особистий бухгалтер для кожного товариства',
        'Додаток inFakt з доступом для партнерів',
        'Допомога у виборі форми оподаткування',
      ],
      cta: 'Хочу заснувати товариство',
    },
    blog: {
      title: 'Останні статті про фріланс',
      subtitle: 'Прочитайте наші рецензії, посібники та аналізи різних аспектів фрілансу в Польщі',
      readMore: 'Читати далі',
      seeAll: 'Подивитися всі статті',
      posts: [
        {
          badge: 'Посібник',
          title: 'Як почати фріланс у Польщі',
          description: 'Повний путівник для початківців фрілансерів',
        },
        {
          badge: 'Аналіз',
          title: 'Найвисокооплачуваніші галузі фрілансу',
          description: 'Перевірте, які категорії пропонують найкращі заробітки',
        },
        {
          badge: 'Огляд',
          title: 'Огляд бухгалтерських платформ',
          description: 'Порівняння найкращих рішень для фрілансерів',
        },
      ],
    },
    footer: {
      description: 'Freelancer.net.pl - це інформаційний портал та блог про фріланс у Польщі. Містить рецензії, посібники та огляди різних рішень для фрілансерів.',
      quickLinks: 'Швидкі посилання',
      contact: 'Контакти',
      copyright: 'Freelancer.net.pl. Всі права захищені.',
    },
  },
};
