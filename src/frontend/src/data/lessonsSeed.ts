import { CEFRLevel } from '../lib/cefrLevels';

export interface LessonItem {
  native?: string;
  english?: string;
  pronunciation?: string;
  note?: string;
}

export interface LessonContent {
  introduction?: string;
  items: LessonItem[];
}

export interface LanguageLessons {
  alphabet: LessonContent;
  greetings: LessonContent;
  numbers: LessonContent;
  common: LessonContent;
  sentences: LessonContent;
}

export type LeveledLessons = Record<CEFRLevel, LanguageLessons>;

const emptyLessonContent: LessonContent = {
  introduction: 'Content for this level is coming soon. Check back later!',
  items: [],
};

const emptyLanguageLessons: LanguageLessons = {
  alphabet: emptyLessonContent,
  greetings: emptyLessonContent,
  numbers: emptyLessonContent,
  common: emptyLessonContent,
  sentences: emptyLessonContent,
};

// A1 content for English
const enA1: LanguageLessons = {
  alphabet: {
    introduction: 'English uses the Latin alphabet with 26 letters. Here are some key pronunciation tips:',
    items: [
      { note: 'A - Pronounced as "ay" in "day" or "a" in "cat"' },
      { note: 'E - Pronounced as "ee" in "see" or "e" in "bed"' },
      { note: 'I - Pronounced as "eye" or "i" in "sit"' },
      { note: 'O - Pronounced as "oh" in "go" or "o" in "hot"' },
      { note: 'U - Pronounced as "you" or "u" in "cup"' },
      { note: 'TH - Unique sound: voiced (this) or unvoiced (think)' },
      { note: 'R - Pronounced with tongue curled back' },
    ],
  },
  greetings: {
    introduction: 'Essential greetings and polite expressions in English:',
    items: [
      { native: 'Hello', english: 'Hello', pronunciation: 'heh-LOH' },
      { native: 'Good morning', english: 'Good morning', pronunciation: 'good MOR-ning' },
      { native: 'Good afternoon', english: 'Good afternoon', pronunciation: 'good af-ter-NOON' },
      { native: 'Good evening', english: 'Good evening', pronunciation: 'good EEV-ning' },
      { native: 'Goodbye', english: 'Goodbye', pronunciation: 'good-BYE' },
      { native: 'Please', english: 'Please', pronunciation: 'pleez' },
      { native: 'Thank you', english: 'Thank you', pronunciation: 'thank YOO' },
      { native: 'You\'re welcome', english: 'You\'re welcome', pronunciation: 'yoor WEL-kum' },
      { native: 'Excuse me', english: 'Excuse me', pronunciation: 'ex-KYOOZ mee' },
      { native: 'I\'m sorry', english: 'I\'m sorry', pronunciation: 'I\'m SOR-ee' },
    ],
  },
  numbers: {
    introduction: 'Numbers 1-10 in English:',
    items: [
      { native: '1 - One', pronunciation: 'wun' },
      { native: '2 - Two', pronunciation: 'too' },
      { native: '3 - Three', pronunciation: 'three' },
      { native: '4 - Four', pronunciation: 'for' },
      { native: '5 - Five', pronunciation: 'fiv' },
      { native: '6 - Six', pronunciation: 'siks' },
      { native: '7 - Seven', pronunciation: 'SEV-en' },
      { native: '8 - Eight', pronunciation: 'ayt' },
      { native: '9 - Nine', pronunciation: 'nyn' },
      { native: '10 - Ten', pronunciation: 'ten' },
    ],
  },
  common: {
    introduction: 'Essential everyday vocabulary:',
    items: [
      { native: 'Yes', english: 'Yes', pronunciation: 'yes' },
      { native: 'No', english: 'No', pronunciation: 'noh' },
      { native: 'Water', english: 'Water', pronunciation: 'WAW-ter' },
      { native: 'Food', english: 'Food', pronunciation: 'food' },
      { native: 'House', english: 'House', pronunciation: 'hows' },
      { native: 'Family', english: 'Family', pronunciation: 'FAM-i-lee' },
      { native: 'Friend', english: 'Friend', pronunciation: 'frend' },
      { native: 'Time', english: 'Time', pronunciation: 'tym' },
      { native: 'Day', english: 'Day', pronunciation: 'day' },
      { native: 'Night', english: 'Night', pronunciation: 'nyt' },
      { native: 'Man', english: 'Man', pronunciation: 'man' },
      { native: 'Woman', english: 'Woman', pronunciation: 'WOO-man' },
      { native: 'Child', english: 'Child', pronunciation: 'chyld' },
      { native: 'Money', english: 'Money', pronunciation: 'MUN-ee' },
      { native: 'Help', english: 'Help', pronunciation: 'help' },
    ],
  },
  sentences: {
    introduction: 'Basic everyday sentences:',
    items: [
      { native: 'My name is...', english: 'My name is...' },
      { native: 'How are you?', english: 'How are you?' },
      { native: 'I am fine', english: 'I am fine' },
      { native: 'Where is...?', english: 'Where is...?' },
      { native: 'I don\'t understand', english: 'I don\'t understand' },
      { native: 'Do you speak English?', english: 'Do you speak English?' },
      { native: 'How much does it cost?', english: 'How much does it cost?' },
      { native: 'I need help', english: 'I need help' },
      { native: 'What time is it?', english: 'What time is it?' },
      { native: 'Nice to meet you', english: 'Nice to meet you' },
    ],
  },
};

// A1 content for German
const deA1: LanguageLessons = {
  alphabet: {
    introduction: 'German uses the Latin alphabet plus ä, ö, ü, and ß. Key pronunciation notes:',
    items: [
      { note: 'Ä - Pronounced like "e" in "bed"' },
      { note: 'Ö - Round your lips and say "e"' },
      { note: 'Ü - Round your lips and say "ee"' },
      { note: 'ß (Eszett) - Sharp "s" sound' },
      { note: 'CH - Soft sound after e, i (ich) or hard after a, o, u (Bach)' },
      { note: 'W - Pronounced like English "v"' },
      { note: 'V - Usually pronounced like English "f"' },
    ],
  },
  greetings: {
    introduction: 'Essential German greetings:',
    items: [
      { native: 'Hallo', english: 'Hello', pronunciation: 'HAH-loh' },
      { native: 'Guten Morgen', english: 'Good morning', pronunciation: 'GOO-ten MOR-gen' },
      { native: 'Guten Tag', english: 'Good day', pronunciation: 'GOO-ten TAHK' },
      { native: 'Guten Abend', english: 'Good evening', pronunciation: 'GOO-ten AH-bent' },
      { native: 'Auf Wiedersehen', english: 'Goodbye', pronunciation: 'owf VEE-der-zay-en' },
      { native: 'Bitte', english: 'Please', pronunciation: 'BIT-teh' },
      { native: 'Danke', english: 'Thank you', pronunciation: 'DAHN-keh' },
      { native: 'Bitte schön', english: 'You\'re welcome', pronunciation: 'BIT-teh shern' },
      { native: 'Entschuldigung', english: 'Excuse me', pronunciation: 'ent-SHOOL-dee-goong' },
      { native: 'Es tut mir leid', english: 'I\'m sorry', pronunciation: 'es toot meer lyt' },
    ],
  },
  numbers: {
    introduction: 'Numbers 1-10 in German:',
    items: [
      { native: '1 - Eins', pronunciation: 'eyns' },
      { native: '2 - Zwei', pronunciation: 'tsvy' },
      { native: '3 - Drei', pronunciation: 'dry' },
      { native: '4 - Vier', pronunciation: 'feer' },
      { native: '5 - Fünf', pronunciation: 'fewnf' },
      { native: '6 - Sechs', pronunciation: 'zeks' },
      { native: '7 - Sieben', pronunciation: 'ZEE-ben' },
      { native: '8 - Acht', pronunciation: 'ahkt' },
      { native: '9 - Neun', pronunciation: 'noyn' },
      { native: '10 - Zehn', pronunciation: 'tsayn' },
    ],
  },
  common: {
    introduction: 'Essential German vocabulary:',
    items: [
      { native: 'Ja', english: 'Yes', pronunciation: 'yah' },
      { native: 'Nein', english: 'No', pronunciation: 'nyn' },
      { native: 'Wasser', english: 'Water', pronunciation: 'VAH-ser' },
      { native: 'Essen', english: 'Food', pronunciation: 'ES-sen' },
      { native: 'Haus', english: 'House', pronunciation: 'hows' },
      { native: 'Familie', english: 'Family', pronunciation: 'fah-MEE-lee-eh' },
      { native: 'Freund', english: 'Friend', pronunciation: 'froynt' },
      { native: 'Zeit', english: 'Time', pronunciation: 'tsyt' },
      { native: 'Tag', english: 'Day', pronunciation: 'tahk' },
      { native: 'Nacht', english: 'Night', pronunciation: 'nahkt' },
      { native: 'Mann', english: 'Man', pronunciation: 'mahn' },
      { native: 'Frau', english: 'Woman', pronunciation: 'frow' },
      { native: 'Kind', english: 'Child', pronunciation: 'kint' },
      { native: 'Geld', english: 'Money', pronunciation: 'gelt' },
      { native: 'Hilfe', english: 'Help', pronunciation: 'HIL-feh' },
    ],
  },
  sentences: {
    introduction: 'Basic German sentences:',
    items: [
      { native: 'Ich heiße...', english: 'My name is...' },
      { native: 'Wie geht es Ihnen?', english: 'How are you?' },
      { native: 'Mir geht es gut', english: 'I am fine' },
      { native: 'Wo ist...?', english: 'Where is...?' },
      { native: 'Ich verstehe nicht', english: 'I don\'t understand' },
      { native: 'Sprechen Sie Englisch?', english: 'Do you speak English?' },
      { native: 'Wie viel kostet das?', english: 'How much does it cost?' },
      { native: 'Ich brauche Hilfe', english: 'I need help' },
      { native: 'Wie spät ist es?', english: 'What time is it?' },
      { native: 'Freut mich', english: 'Nice to meet you' },
    ],
  },
};

// A1 content for French
const frA1: LanguageLessons = {
  alphabet: {
    introduction: 'French uses the Latin alphabet with accents (é, è, ê, ë, à, ù, ç). Key sounds:',
    items: [
      { note: 'É - Pronounced like "ay" in "day"' },
      { note: 'È/Ê - Pronounced like "e" in "bed"' },
      { note: 'Ç - Soft "s" sound before a, o, u' },
      { note: 'R - Guttural sound from the back of throat' },
      { note: 'U - Round lips and say "ee"' },
      { note: 'Silent letters - Many final consonants are silent' },
      { note: 'Nasal vowels - AN, EN, IN, ON, UN' },
    ],
  },
  greetings: {
    introduction: 'Essential French greetings:',
    items: [
      { native: 'Bonjour', english: 'Hello/Good day', pronunciation: 'bon-ZHOOR' },
      { native: 'Bonsoir', english: 'Good evening', pronunciation: 'bon-SWAHR' },
      { native: 'Salut', english: 'Hi (informal)', pronunciation: 'sah-LOO' },
      { native: 'Au revoir', english: 'Goodbye', pronunciation: 'oh reh-VWAHR' },
      { native: 'S\'il vous plaît', english: 'Please', pronunciation: 'seel voo PLEH' },
      { native: 'Merci', english: 'Thank you', pronunciation: 'mehr-SEE' },
      { native: 'De rien', english: 'You\'re welcome', pronunciation: 'deh ree-AN' },
      { native: 'Excusez-moi', english: 'Excuse me', pronunciation: 'ex-kew-zay MWAH' },
      { native: 'Pardon', english: 'Sorry', pronunciation: 'par-DON' },
      { native: 'Enchanté(e)', english: 'Nice to meet you', pronunciation: 'on-shon-TAY' },
    ],
  },
  numbers: {
    introduction: 'Numbers 1-10 in French:',
    items: [
      { native: '1 - Un', pronunciation: 'uhn' },
      { native: '2 - Deux', pronunciation: 'duh' },
      { native: '3 - Trois', pronunciation: 'twah' },
      { native: '4 - Quatre', pronunciation: 'KAH-truh' },
      { native: '5 - Cinq', pronunciation: 'sank' },
      { native: '6 - Six', pronunciation: 'sees' },
      { native: '7 - Sept', pronunciation: 'set' },
      { native: '8 - Huit', pronunciation: 'weet' },
      { native: '9 - Neuf', pronunciation: 'nuhf' },
      { native: '10 - Dix', pronunciation: 'dees' },
    ],
  },
  common: {
    introduction: 'Essential French vocabulary:',
    items: [
      { native: 'Oui', english: 'Yes', pronunciation: 'wee' },
      { native: 'Non', english: 'No', pronunciation: 'non' },
      { native: 'Eau', english: 'Water', pronunciation: 'oh' },
      { native: 'Nourriture', english: 'Food', pronunciation: 'noo-ree-TOOR' },
      { native: 'Maison', english: 'House', pronunciation: 'may-ZON' },
      { native: 'Famille', english: 'Family', pronunciation: 'fah-MEE' },
      { native: 'Ami(e)', english: 'Friend', pronunciation: 'ah-MEE' },
      { native: 'Temps', english: 'Time', pronunciation: 'ton' },
      { native: 'Jour', english: 'Day', pronunciation: 'zhoor' },
      { native: 'Nuit', english: 'Night', pronunciation: 'nwee' },
      { native: 'Homme', english: 'Man', pronunciation: 'ohm' },
      { native: 'Femme', english: 'Woman', pronunciation: 'fahm' },
      { native: 'Enfant', english: 'Child', pronunciation: 'on-FON' },
      { native: 'Argent', english: 'Money', pronunciation: 'ar-ZHON' },
      { native: 'Aide', english: 'Help', pronunciation: 'ed' },
    ],
  },
  sentences: {
    introduction: 'Basic French sentences:',
    items: [
      { native: 'Je m\'appelle...', english: 'My name is...' },
      { native: 'Comment allez-vous?', english: 'How are you?' },
      { native: 'Je vais bien', english: 'I am fine' },
      { native: 'Où est...?', english: 'Where is...?' },
      { native: 'Je ne comprends pas', english: 'I don\'t understand' },
      { native: 'Parlez-vous anglais?', english: 'Do you speak English?' },
      { native: 'Combien ça coûte?', english: 'How much does it cost?' },
      { native: 'J\'ai besoin d\'aide', english: 'I need help' },
      { native: 'Quelle heure est-il?', english: 'What time is it?' },
      { native: 'Ravi(e) de vous rencontrer', english: 'Nice to meet you' },
    ],
  },
};

// A1 content for Spanish
const esA1: LanguageLessons = {
  alphabet: {
    introduction: 'Spanish uses the Latin alphabet. Key pronunciation notes:',
    items: [
      { note: 'Ñ - Pronounced like "ny" in "canyon"' },
      { note: 'LL - Pronounced like "y" in "yes"' },
      { note: 'J - Pronounced like "h" in "hot" (stronger)' },
      { note: 'R - Single tap; RR is rolled' },
      { note: 'H - Always silent' },
      { note: 'V - Pronounced like "b"' },
      { note: 'Z - Pronounced like "s" (in Latin America) or "th" (in Spain)' },
    ],
  },
  greetings: {
    introduction: 'Essential Spanish greetings:',
    items: [
      { native: 'Hola', english: 'Hello', pronunciation: 'OH-lah' },
      { native: 'Buenos días', english: 'Good morning', pronunciation: 'BWEH-nos DEE-as' },
      { native: 'Buenas tardes', english: 'Good afternoon', pronunciation: 'BWEH-nas TAR-des' },
      { native: 'Buenas noches', english: 'Good evening/night', pronunciation: 'BWEH-nas NOH-ches' },
      { native: 'Adiós', english: 'Goodbye', pronunciation: 'ah-DYOS' },
      { native: 'Por favor', english: 'Please', pronunciation: 'por fah-VOR' },
      { native: 'Gracias', english: 'Thank you', pronunciation: 'GRAH-syahs' },
      { native: 'De nada', english: 'You\'re welcome', pronunciation: 'deh NAH-dah' },
      { native: 'Perdón', english: 'Excuse me/Sorry', pronunciation: 'per-DON' },
      { native: 'Disculpe', english: 'Excuse me (formal)', pronunciation: 'dees-KOOL-peh' },
    ],
  },
  numbers: {
    introduction: 'Numbers 1-10 in Spanish:',
    items: [
      { native: '1 - Uno', pronunciation: 'OO-no' },
      { native: '2 - Dos', pronunciation: 'dos' },
      { native: '3 - Tres', pronunciation: 'tres' },
      { native: '4 - Cuatro', pronunciation: 'KWAH-tro' },
      { native: '5 - Cinco', pronunciation: 'SEEN-ko' },
      { native: '6 - Seis', pronunciation: 'says' },
      { native: '7 - Siete', pronunciation: 'SYEH-teh' },
      { native: '8 - Ocho', pronunciation: 'OH-cho' },
      { native: '9 - Nueve', pronunciation: 'NWEH-veh' },
      { native: '10 - Diez', pronunciation: 'dyez' },
    ],
  },
  common: {
    introduction: 'Essential Spanish vocabulary:',
    items: [
      { native: 'Sí', english: 'Yes', pronunciation: 'see' },
      { native: 'No', english: 'No', pronunciation: 'no' },
      { native: 'Agua', english: 'Water', pronunciation: 'AH-gwah' },
      { native: 'Comida', english: 'Food', pronunciation: 'ko-MEE-dah' },
      { native: 'Casa', english: 'House', pronunciation: 'KAH-sah' },
      { native: 'Familia', english: 'Family', pronunciation: 'fah-MEE-lyah' },
      { native: 'Amigo/a', english: 'Friend', pronunciation: 'ah-MEE-go' },
      { native: 'Tiempo', english: 'Time', pronunciation: 'TYEM-po' },
      { native: 'Día', english: 'Day', pronunciation: 'DEE-ah' },
      { native: 'Noche', english: 'Night', pronunciation: 'NOH-cheh' },
      { native: 'Hombre', english: 'Man', pronunciation: 'OM-breh' },
      { native: 'Mujer', english: 'Woman', pronunciation: 'moo-HER' },
      { native: 'Niño/a', english: 'Child', pronunciation: 'NEE-nyo' },
      { native: 'Dinero', english: 'Money', pronunciation: 'dee-NEH-ro' },
      { native: 'Ayuda', english: 'Help', pronunciation: 'ah-YOO-dah' },
    ],
  },
  sentences: {
    introduction: 'Basic Spanish sentences:',
    items: [
      { native: 'Me llamo...', english: 'My name is...' },
      { native: '¿Cómo estás?', english: 'How are you?' },
      { native: 'Estoy bien', english: 'I am fine' },
      { native: '¿Dónde está...?', english: 'Where is...?' },
      { native: 'No entiendo', english: 'I don\'t understand' },
      { native: '¿Hablas inglés?', english: 'Do you speak English?' },
      { native: '¿Cuánto cuesta?', english: 'How much does it cost?' },
      { native: 'Necesito ayuda', english: 'I need help' },
      { native: '¿Qué hora es?', english: 'What time is it?' },
      { native: 'Mucho gusto', english: 'Nice to meet you' },
    ],
  },
};

// Helper function to create leveled lessons for a language
function createLeveledLessons(a1Content: LanguageLessons): LeveledLessons {
  return {
    A1: a1Content,
    A2: emptyLanguageLessons,
    B1: emptyLanguageLessons,
    B2: emptyLanguageLessons,
    C1: emptyLanguageLessons,
    C2: emptyLanguageLessons,
  };
}

export const lessonsSeed: Record<string, LeveledLessons> = {
  en: createLeveledLessons(enA1),
  de: createLeveledLessons(deA1),
  fr: createLeveledLessons(frA1),
  es: createLeveledLessons(esA1),
  it: createLeveledLessons(emptyLanguageLessons),
  pt: createLeveledLessons(emptyLanguageLessons),
  nl: createLeveledLessons(emptyLanguageLessons),
  sv: createLeveledLessons(emptyLanguageLessons),
  no: createLeveledLessons(emptyLanguageLessons),
  da: createLeveledLessons(emptyLanguageLessons),
  fi: createLeveledLessons(emptyLanguageLessons),
  pl: createLeveledLessons(emptyLanguageLessons),
  cs: createLeveledLessons(emptyLanguageLessons),
  hu: createLeveledLessons(emptyLanguageLessons),
  ro: createLeveledLessons(emptyLanguageLessons),
  bg: createLeveledLessons(emptyLanguageLessons),
  el: createLeveledLessons(emptyLanguageLessons),
  uk: createLeveledLessons(emptyLanguageLessons),
  ga: createLeveledLessons(emptyLanguageLessons),
  sk: createLeveledLessons(emptyLanguageLessons),
};
