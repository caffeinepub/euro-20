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

// Helper function to create complete leveled lessons for a language
function createCompleteLeveledLessons(
  code: string,
  name: string,
  a1: LanguageLessons,
  a2: LanguageLessons,
  b1: LanguageLessons,
  b2: LanguageLessons,
  c1: LanguageLessons,
  c2: LanguageLessons
): LeveledLessons {
  return { A1: a1, A2: a2, B1: b1, B2: b2, C1: c1, C2: c2 };
}

// ENGLISH (en)
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
    ],
  },
};

const enA2: LanguageLessons = {
  alphabet: {
    introduction: 'Advanced English pronunciation patterns and diphthongs:',
    items: [
      { note: 'AI/AY - "ay" sound as in "rain" or "day"' },
      { note: 'EA - Can be "ee" (eat) or "e" (bread)' },
      { note: 'OO - Long (food) or short (book)' },
      { note: 'OU/OW - "ow" sound as in "house" or "cow"' },
      { note: 'Silent letters - K in "know", W in "write", B in "climb"' },
    ],
  },
  greetings: {
    introduction: 'Extended greetings and social expressions:',
    items: [
      { native: 'How do you do?', english: 'Formal greeting', pronunciation: 'how doo yoo DOO' },
      { native: 'Nice to see you', english: 'Nice to see you', pronunciation: 'nys too SEE yoo' },
      { native: 'Long time no see', english: 'Haven\'t seen you in a while', pronunciation: 'long tym noh SEE' },
      { native: 'Take care', english: 'Goodbye (informal)', pronunciation: 'tayk KAIR' },
      { native: 'See you later', english: 'See you later', pronunciation: 'see yoo LAY-ter' },
    ],
  },
  numbers: {
    introduction: 'Numbers 11-100 and ordinals:',
    items: [
      { native: '11 - Eleven', pronunciation: 'ee-LEV-en' },
      { native: '20 - Twenty', pronunciation: 'TWEN-tee' },
      { native: '50 - Fifty', pronunciation: 'FIF-tee' },
      { native: '100 - One hundred', pronunciation: 'wun HUN-dred' },
      { native: '1st - First', pronunciation: 'first' },
    ],
  },
  common: {
    introduction: 'Everyday vocabulary for common situations:',
    items: [
      { native: 'Restaurant', english: 'Restaurant', pronunciation: 'RES-tuh-ront' },
      { native: 'Hotel', english: 'Hotel', pronunciation: 'hoh-TEL' },
      { native: 'Airport', english: 'Airport', pronunciation: 'AIR-port' },
      { native: 'Train station', english: 'Train station', pronunciation: 'trayn STAY-shun' },
      { native: 'Hospital', english: 'Hospital', pronunciation: 'HOS-pi-tul' },
    ],
  },
  sentences: {
    introduction: 'Practical sentences for daily interactions:',
    items: [
      { native: 'Could you help me?', english: 'Could you help me?' },
      { native: 'Where is the bathroom?', english: 'Where is the bathroom?' },
      { native: 'I would like...', english: 'I would like...' },
      { native: 'How do I get to...?', english: 'How do I get to...?' },
      { native: 'Can I have the bill?', english: 'Can I have the bill?' },
    ],
  },
};

const enB1: LanguageLessons = {
  alphabet: {
    introduction: 'Complex English spelling patterns and exceptions:',
    items: [
      { note: 'OUGH - Multiple pronunciations: through, though, rough, cough' },
      { note: 'TION/SION - "shun" sound in "nation" and "vision"' },
      { note: 'PH - "f" sound as in "phone"' },
      { note: 'GH - Often silent (night) or "f" (laugh)' },
    ],
  },
  greetings: {
    introduction: 'Professional and formal expressions:',
    items: [
      { native: 'It\'s a pleasure to meet you', english: 'Formal greeting' },
      { native: 'I hope you\'re doing well', english: 'Polite inquiry' },
      { native: 'Please give my regards to...', english: 'Send greetings' },
      { native: 'I look forward to seeing you', english: 'Anticipation' },
    ],
  },
  numbers: {
    introduction: 'Large numbers, fractions, and percentages:',
    items: [
      { native: '1,000 - One thousand', pronunciation: 'wun THOU-zund' },
      { native: '1/2 - One half', pronunciation: 'wun haf' },
      { native: '25% - Twenty-five percent', pronunciation: 'TWEN-tee-fyv per-SENT' },
      { native: '1,000,000 - One million', pronunciation: 'wun MIL-yun' },
    ],
  },
  common: {
    introduction: 'Intermediate vocabulary for various contexts:',
    items: [
      { native: 'Environment', english: 'Environment' },
      { native: 'Technology', english: 'Technology' },
      { native: 'Education', english: 'Education' },
      { native: 'Government', english: 'Government' },
      { native: 'Economy', english: 'Economy' },
    ],
  },
  sentences: {
    introduction: 'Complex sentences for expressing opinions and ideas:',
    items: [
      { native: 'In my opinion...', english: 'In my opinion...' },
      { native: 'I believe that...', english: 'I believe that...' },
      { native: 'It seems to me that...', english: 'It seems to me that...' },
      { native: 'On the other hand...', english: 'On the other hand...' },
      { native: 'As far as I know...', english: 'As far as I know...' },
    ],
  },
};

const enB2: LanguageLessons = {
  alphabet: {
    introduction: 'Advanced phonetics and regional variations:',
    items: [
      { note: 'British vs American pronunciation differences' },
      { note: 'Stress patterns in multi-syllable words' },
      { note: 'Weak forms in connected speech' },
      { note: 'Intonation patterns for questions and statements' },
    ],
  },
  greetings: {
    introduction: 'Sophisticated social and business expressions:',
    items: [
      { native: 'I trust you\'re well', english: 'Formal inquiry' },
      { native: 'It\'s been too long', english: 'Expressing time passed' },
      { native: 'I appreciate your time', english: 'Showing gratitude' },
      { native: 'Looking forward to our collaboration', english: 'Business context' },
    ],
  },
  numbers: {
    introduction: 'Advanced numerical expressions and calculations:',
    items: [
      { native: 'Approximately', english: 'About, roughly' },
      { native: 'Decimal point', english: 'Point in decimal numbers' },
      { native: 'To the power of', english: 'Exponents' },
      { native: 'Square root', english: 'Mathematical operation' },
    ],
  },
  common: {
    introduction: 'Advanced vocabulary for abstract concepts:',
    items: [
      { native: 'Sustainability', english: 'Sustainability' },
      { native: 'Innovation', english: 'Innovation' },
      { native: 'Diversity', english: 'Diversity' },
      { native: 'Accountability', english: 'Accountability' },
      { native: 'Transparency', english: 'Transparency' },
    ],
  },
  sentences: {
    introduction: 'Nuanced expressions for complex communication:',
    items: [
      { native: 'I would argue that...', english: 'I would argue that...' },
      { native: 'It could be argued that...', english: 'It could be argued that...' },
      { native: 'To put it another way...', english: 'To put it another way...' },
      { native: 'What I mean to say is...', english: 'What I mean to say is...' },
      { native: 'The point I\'m trying to make is...', english: 'The point I\'m trying to make is...' },
    ],
  },
};

const enC1: LanguageLessons = {
  alphabet: {
    introduction: 'Mastery of English phonology and accent reduction:',
    items: [
      { note: 'Schwa sound - The most common vowel in English' },
      { note: 'Linking and elision in natural speech' },
      { note: 'Sentence stress and rhythm patterns' },
      { note: 'Distinguishing minimal pairs in context' },
    ],
  },
  greetings: {
    introduction: 'Highly formal and diplomatic language:',
    items: [
      { native: 'It is with great pleasure that I...', english: 'Very formal opening' },
      { native: 'May I extend my warmest regards', english: 'Diplomatic greeting' },
      { native: 'I am honored to make your acquaintance', english: 'Formal introduction' },
      { native: 'Please accept my sincerest apologies', english: 'Formal apology' },
    ],
  },
  numbers: {
    introduction: 'Specialized numerical and statistical terminology:',
    items: [
      { native: 'Correlation coefficient', english: 'Statistical measure' },
      { native: 'Standard deviation', english: 'Statistical term' },
      { native: 'Exponential growth', english: 'Mathematical concept' },
      { native: 'Margin of error', english: 'Statistical term' },
    ],
  },
  common: {
    introduction: 'Sophisticated vocabulary for academic and professional contexts:',
    items: [
      { native: 'Paradigm', english: 'Framework or model' },
      { native: 'Juxtaposition', english: 'Placing side by side' },
      { native: 'Dichotomy', english: 'Division into two parts' },
      { native: 'Pragmatic', english: 'Practical approach' },
      { native: 'Ubiquitous', english: 'Present everywhere' },
    ],
  },
  sentences: {
    introduction: 'Advanced expressions for academic and professional discourse:',
    items: [
      { native: 'It is imperative that we consider...', english: 'It is imperative that we consider...' },
      { native: 'The implications of this are far-reaching', english: 'The implications of this are far-reaching' },
      { native: 'This warrants further investigation', english: 'This warrants further investigation' },
      { native: 'Notwithstanding the challenges...', english: 'Notwithstanding the challenges...' },
      { native: 'It behooves us to examine...', english: 'It behooves us to examine...' },
    ],
  },
};

const enC2: LanguageLessons = {
  alphabet: {
    introduction: 'Native-level mastery of English phonetics and prosody:',
    items: [
      { note: 'Subtle intonation for conveying attitude and emotion' },
      { note: 'Regional accent features and social markers' },
      { note: 'Poetic devices: alliteration, assonance, consonance' },
      { note: 'Rhetorical stress and emphasis patterns' },
    ],
  },
  greetings: {
    introduction: 'Idiomatic and culturally nuanced expressions:',
    items: [
      { native: 'Fancy meeting you here', english: 'Surprised greeting' },
      { native: 'What brings you to these parts?', english: 'Informal inquiry' },
      { native: 'I trust all is well in your world', english: 'Casual but polite' },
      { native: 'It\'s been ages since we last crossed paths', english: 'Long time no see' },
    ],
  },
  numbers: {
    introduction: 'Idiomatic numerical expressions and colloquialisms:',
    items: [
      { native: 'A ballpark figure', english: 'Approximate number' },
      { native: 'In the ballpark of', english: 'Approximately' },
      { native: 'Back of the envelope calculation', english: 'Rough estimate' },
      { native: 'Order of magnitude', english: 'Scale of size' },
    ],
  },
  common: {
    introduction: 'Nuanced vocabulary with subtle connotations:',
    items: [
      { native: 'Serendipitous', english: 'Fortunate coincidence' },
      { native: 'Ephemeral', english: 'Lasting a short time' },
      { native: 'Quintessential', english: 'Most typical example' },
      { native: 'Ineffable', english: 'Too great to describe' },
      { native: 'Perspicacious', english: 'Having keen insight' },
    ],
  },
  sentences: {
    introduction: 'Masterful expressions with literary and rhetorical sophistication:',
    items: [
      { native: 'One might venture to suggest...', english: 'One might venture to suggest...' },
      { native: 'It would not be remiss to observe...', english: 'It would not be remiss to observe...' },
      { native: 'Suffice it to say...', english: 'Suffice it to say...' },
      { native: 'Be that as it may...', english: 'Be that as it may...' },
      { native: 'It stands to reason that...', english: 'It stands to reason that...' },
    ],
  },
};

// GERMAN (de) - keeping existing content
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
    ],
  },
  sentences: {
    introduction: 'Basic German sentences:',
    items: [
      { native: 'Ich heiße...', english: 'My name is...' },
      { native: 'Wie geht es dir?', english: 'How are you?' },
      { native: 'Mir geht es gut', english: 'I am fine' },
      { native: 'Wo ist...?', english: 'Where is...?' },
      { native: 'Ich verstehe nicht', english: 'I don\'t understand' },
    ],
  },
};

// Simplified German levels A2-C2 (keeping structure similar to existing)
const deA2: LanguageLessons = {
  alphabet: { introduction: 'Advanced German pronunciation patterns:', items: [{ note: 'Compound consonants and vowel combinations' }] },
  greetings: { introduction: 'Extended German greetings:', items: [{ native: 'Wie geht\'s?', english: 'How are you? (informal)' }, { native: 'Schönen Tag noch', english: 'Have a nice day' }] },
  numbers: { introduction: 'Numbers 11-100 in German:', items: [{ native: '11 - Elf', pronunciation: 'elf' }, { native: '20 - Zwanzig', pronunciation: 'TSVAN-tsig' }] },
  common: { introduction: 'Common German vocabulary:', items: [{ native: 'Restaurant', english: 'Restaurant' }, { native: 'Bahnhof', english: 'Train station' }] },
  sentences: { introduction: 'Practical German sentences:', items: [{ native: 'Können Sie mir helfen?', english: 'Can you help me?' }] },
};

const deB1: LanguageLessons = {
  alphabet: { introduction: 'Complex German spelling patterns:', items: [{ note: 'Regional pronunciation variations' }] },
  greetings: { introduction: 'Professional German expressions:', items: [{ native: 'Es freut mich, Sie kennenzulernen', english: 'Pleased to meet you (formal)' }] },
  numbers: { introduction: 'Large numbers and fractions in German:', items: [{ native: '1.000 - Eintausend', english: 'One thousand' }] },
  common: { introduction: 'Intermediate German vocabulary:', items: [{ native: 'Umwelt', english: 'Environment' }, { native: 'Bildung', english: 'Education' }] },
  sentences: { introduction: 'Complex German sentences:', items: [{ native: 'Meiner Meinung nach...', english: 'In my opinion...' }] },
};

const deB2: LanguageLessons = {
  alphabet: { introduction: 'Advanced German phonetics:', items: [{ note: 'Stress patterns in compound words' }] },
  greetings: { introduction: 'Sophisticated German expressions:', items: [{ native: 'Ich hoffe, es geht Ihnen gut', english: 'I hope you are well' }] },
  numbers: { introduction: 'Advanced numerical expressions:', items: [{ native: 'Ungefähr', english: 'Approximately' }] },
  common: { introduction: 'Advanced German vocabulary:', items: [{ native: 'Nachhaltigkeit', english: 'Sustainability' }] },
  sentences: { introduction: 'Nuanced German expressions:', items: [{ native: 'Ich würde behaupten, dass...', english: 'I would argue that...' }] },
};

const deC1: LanguageLessons = {
  alphabet: { introduction: 'Mastery of German phonology:', items: [{ note: 'Subtle regional variations and dialects' }] },
  greetings: { introduction: 'Highly formal German language:', items: [{ native: 'Es ist mir eine Ehre', english: 'It is an honor' }] },
  numbers: { introduction: 'Specialized German terminology:', items: [{ native: 'Standardabweichung', english: 'Standard deviation' }] },
  common: { introduction: 'Sophisticated German vocabulary:', items: [{ native: 'Paradigma', english: 'Paradigm' }] },
  sentences: { introduction: 'Advanced German discourse:', items: [{ native: 'Es ist unerlässlich, dass...', english: 'It is imperative that...' }] },
};

const deC2: LanguageLessons = {
  alphabet: { introduction: 'Native-level German mastery:', items: [{ note: 'Poetic and rhetorical devices' }] },
  greetings: { introduction: 'Idiomatic German expressions:', items: [{ native: 'Lange nicht gesehen', english: 'Long time no see' }] },
  numbers: { introduction: 'Idiomatic numerical expressions:', items: [{ native: 'Über den Daumen gepeilt', english: 'Rough estimate' }] },
  common: { introduction: 'Nuanced German vocabulary:', items: [{ native: 'Zeitgeist', english: 'Spirit of the times' }] },
  sentences: { introduction: 'Masterful German expressions:', items: [{ native: 'Man könnte behaupten...', english: 'One might argue...' }] },
};

// ITALIAN (it) - Complete authentic content
const itA1: LanguageLessons = {
  alphabet: {
    introduction: 'Italian uses the Latin alphabet with 21 letters. Key pronunciation notes:',
    items: [
      { note: 'C - "ch" before e/i (ciao), "k" before a/o/u (casa)' },
      { note: 'G - "j" before e/i (gelato), "g" before a/o/u (gatto)' },
      { note: 'GL - "ly" sound as in "million" (famiglia)' },
      { note: 'GN - "ny" sound as in "canyon" (gnocchi)' },
      { note: 'SC - "sh" before e/i (pesce), "sk" before a/o/u (scuola)' },
      { note: 'Double consonants are pronounced longer (notte vs note)' },
    ],
  },
  greetings: {
    introduction: 'Essential Italian greetings:',
    items: [
      { native: 'Ciao', english: 'Hello/Goodbye (informal)', pronunciation: 'CHOW' },
      { native: 'Buongiorno', english: 'Good morning/day', pronunciation: 'bwon-JOR-no' },
      { native: 'Buonasera', english: 'Good evening', pronunciation: 'bwon-ah-SEH-rah' },
      { native: 'Buonanotte', english: 'Good night', pronunciation: 'bwon-ah-NOT-teh' },
      { native: 'Arrivederci', english: 'Goodbye (formal)', pronunciation: 'ah-ree-veh-DEHR-chee' },
      { native: 'Per favore', english: 'Please', pronunciation: 'pehr fah-VOH-reh' },
      { native: 'Grazie', english: 'Thank you', pronunciation: 'GRAH-tsyeh' },
      { native: 'Prego', english: 'You\'re welcome', pronunciation: 'PREH-go' },
      { native: 'Scusi', english: 'Excuse me (formal)', pronunciation: 'SKOO-zee' },
      { native: 'Mi dispiace', english: 'I\'m sorry', pronunciation: 'mee dees-PYAH-cheh' },
    ],
  },
  numbers: {
    introduction: 'Numbers 1-10 in Italian:',
    items: [
      { native: '1 - Uno', pronunciation: 'OO-no' },
      { native: '2 - Due', pronunciation: 'DOO-eh' },
      { native: '3 - Tre', pronunciation: 'treh' },
      { native: '4 - Quattro', pronunciation: 'KWAH-tro' },
      { native: '5 - Cinque', pronunciation: 'CHEEN-kweh' },
      { native: '6 - Sei', pronunciation: 'say' },
      { native: '7 - Sette', pronunciation: 'SET-teh' },
      { native: '8 - Otto', pronunciation: 'OT-to' },
      { native: '9 - Nove', pronunciation: 'NOH-veh' },
      { native: '10 - Dieci', pronunciation: 'DYEH-chee' },
    ],
  },
  common: {
    introduction: 'Essential Italian vocabulary:',
    items: [
      { native: 'Sì', english: 'Yes', pronunciation: 'see' },
      { native: 'No', english: 'No', pronunciation: 'no' },
      { native: 'Acqua', english: 'Water', pronunciation: 'AH-kwah' },
      { native: 'Cibo', english: 'Food', pronunciation: 'CHEE-bo' },
      { native: 'Casa', english: 'House', pronunciation: 'KAH-zah' },
      { native: 'Famiglia', english: 'Family', pronunciation: 'fah-MEE-lyah' },
      { native: 'Amico', english: 'Friend', pronunciation: 'ah-MEE-ko' },
      { native: 'Tempo', english: 'Time', pronunciation: 'TEM-po' },
      { native: 'Giorno', english: 'Day', pronunciation: 'JOR-no' },
      { native: 'Notte', english: 'Night', pronunciation: 'NOT-teh' },
    ],
  },
  sentences: {
    introduction: 'Basic Italian sentences:',
    items: [
      { native: 'Mi chiamo...', english: 'My name is...' },
      { native: 'Come stai?', english: 'How are you? (informal)' },
      { native: 'Sto bene', english: 'I am fine' },
      { native: 'Dove è...?', english: 'Where is...?' },
      { native: 'Non capisco', english: 'I don\'t understand' },
    ],
  },
};

const itA2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Italian pronunciation:', items: [{ note: 'Stress patterns and accent marks' }, { note: 'Regional pronunciation variations' }] },
  greetings: { introduction: 'Extended Italian greetings:', items: [{ native: 'Come va?', english: 'How\'s it going?' }, { native: 'Piacere di conoscerti', english: 'Nice to meet you' }] },
  numbers: { introduction: 'Numbers 11-100 in Italian:', items: [{ native: '11 - Undici', pronunciation: 'OON-dee-chee' }, { native: '20 - Venti', pronunciation: 'VEN-tee' }] },
  common: { introduction: 'Common Italian vocabulary:', items: [{ native: 'Ristorante', english: 'Restaurant' }, { native: 'Stazione', english: 'Station' }] },
  sentences: { introduction: 'Practical Italian sentences:', items: [{ native: 'Può aiutarmi?', english: 'Can you help me?' }] },
};

const itB1: LanguageLessons = {
  alphabet: { introduction: 'Complex Italian patterns:', items: [{ note: 'Formal vs informal register' }] },
  greetings: { introduction: 'Professional Italian expressions:', items: [{ native: 'È un piacere conoscerla', english: 'Pleased to meet you (formal)' }] },
  numbers: { introduction: 'Large numbers in Italian:', items: [{ native: '1.000 - Mille', english: 'One thousand' }] },
  common: { introduction: 'Intermediate Italian vocabulary:', items: [{ native: 'Ambiente', english: 'Environment' }, { native: 'Istruzione', english: 'Education' }] },
  sentences: { introduction: 'Complex Italian sentences:', items: [{ native: 'Secondo me...', english: 'In my opinion...' }] },
};

const itB2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Italian phonetics:', items: [{ note: 'Subtle pronunciation nuances' }] },
  greetings: { introduction: 'Sophisticated Italian expressions:', items: [{ native: 'Spero che stia bene', english: 'I hope you are well' }] },
  numbers: { introduction: 'Advanced numerical expressions:', items: [{ native: 'Circa', english: 'Approximately' }] },
  common: { introduction: 'Advanced Italian vocabulary:', items: [{ native: 'Sostenibilità', english: 'Sustainability' }] },
  sentences: { introduction: 'Nuanced Italian expressions:', items: [{ native: 'Direi che...', english: 'I would say that...' }] },
};

const itC1: LanguageLessons = {
  alphabet: { introduction: 'Mastery of Italian phonology:', items: [{ note: 'Literary and poetic language' }] },
  greetings: { introduction: 'Highly formal Italian language:', items: [{ native: 'È un onore', english: 'It is an honor' }] },
  numbers: { introduction: 'Specialized Italian terminology:', items: [{ native: 'Deviazione standard', english: 'Standard deviation' }] },
  common: { introduction: 'Sophisticated Italian vocabulary:', items: [{ native: 'Paradigma', english: 'Paradigm' }] },
  sentences: { introduction: 'Advanced Italian discourse:', items: [{ native: 'È imperativo che...', english: 'It is imperative that...' }] },
};

const itC2: LanguageLessons = {
  alphabet: { introduction: 'Native-level Italian mastery:', items: [{ note: 'Rhetorical and stylistic devices' }] },
  greetings: { introduction: 'Idiomatic Italian expressions:', items: [{ native: 'Quanto tempo!', english: 'Long time no see!' }] },
  numbers: { introduction: 'Idiomatic numerical expressions:', items: [{ native: 'A occhio e croce', english: 'Rough estimate' }] },
  common: { introduction: 'Nuanced Italian vocabulary:', items: [{ native: 'Serendipità', english: 'Serendipity' }] },
  sentences: { introduction: 'Masterful Italian expressions:', items: [{ native: 'Si potrebbe sostenere...', english: 'One might argue...' }] },
};

// UKRAINIAN (uk) - Complete authentic content
const ukA1: LanguageLessons = {
  alphabet: {
    introduction: 'Ukrainian uses the Cyrillic alphabet with 33 letters. Key pronunciation notes:',
    items: [
      { note: 'Г (H) - Pronounced like "h" in "hello"' },
      { note: 'Є (Ye) - Pronounced like "ye" in "yes"' },
      { note: 'І (I) - Pronounced like "ee" in "see"' },
      { note: 'Ї (Yi) - Pronounced like "yee"' },
      { note: 'Щ (Shch) - Pronounced like "shch" sound' },
      { note: 'Ь (Soft sign) - Softens the preceding consonant' },
    ],
  },
  greetings: {
    introduction: 'Essential Ukrainian greetings:',
    items: [
      { native: 'Привіт', english: 'Hello (informal)', pronunciation: 'pry-VEET' },
      { native: 'Доброго ранку', english: 'Good morning', pronunciation: 'DOB-ro-ho RAN-ku' },
      { native: 'Добрий день', english: 'Good day', pronunciation: 'DOB-ryy den' },
      { native: 'Добрий вечір', english: 'Good evening', pronunciation: 'DOB-ryy VEH-cheer' },
      { native: 'До побачення', english: 'Goodbye', pronunciation: 'do po-BAH-chen-nya' },
      { native: 'Будь ласка', english: 'Please', pronunciation: 'bood LAS-ka' },
      { native: 'Дякую', english: 'Thank you', pronunciation: 'DYA-ku-yu' },
      { native: 'Будь ласка', english: 'You\'re welcome', pronunciation: 'bood LAS-ka' },
      { native: 'Вибачте', english: 'Excuse me', pronunciation: 'vy-BACH-teh' },
      { native: 'Перепрошую', english: 'I\'m sorry', pronunciation: 'peh-reh-PRO-shu-yu' },
    ],
  },
  numbers: {
    introduction: 'Numbers 1-10 in Ukrainian:',
    items: [
      { native: '1 - Один', pronunciation: 'o-DYN' },
      { native: '2 - Два', pronunciation: 'dva' },
      { native: '3 - Три', pronunciation: 'try' },
      { native: '4 - Чотири', pronunciation: 'cho-TY-ry' },
      { native: '5 - П\'ять', pronunciation: 'pyat' },
      { native: '6 - Шість', pronunciation: 'sheest' },
      { native: '7 - Сім', pronunciation: 'seem' },
      { native: '8 - Вісім', pronunciation: 'VEE-seem' },
      { native: '9 - Дев\'ять', pronunciation: 'DEH-vyat' },
      { native: '10 - Десять', pronunciation: 'DEH-syat' },
    ],
  },
  common: {
    introduction: 'Essential Ukrainian vocabulary:',
    items: [
      { native: 'Так', english: 'Yes', pronunciation: 'tak' },
      { native: 'Ні', english: 'No', pronunciation: 'nee' },
      { native: 'Вода', english: 'Water', pronunciation: 'vo-DA' },
      { native: 'Їжа', english: 'Food', pronunciation: 'yee-ZHA' },
      { native: 'Дім', english: 'House', pronunciation: 'deem' },
      { native: 'Сім\'я', english: 'Family', pronunciation: 'seem-YA' },
      { native: 'Друг', english: 'Friend', pronunciation: 'druh' },
      { native: 'Час', english: 'Time', pronunciation: 'chas' },
      { native: 'День', english: 'Day', pronunciation: 'den' },
      { native: 'Ніч', english: 'Night', pronunciation: 'neech' },
    ],
  },
  sentences: {
    introduction: 'Basic Ukrainian sentences:',
    items: [
      { native: 'Мене звати...', english: 'My name is...' },
      { native: 'Як справи?', english: 'How are you?' },
      { native: 'Добре', english: 'I am fine' },
      { native: 'Де...?', english: 'Where is...?' },
      { native: 'Я не розумію', english: 'I don\'t understand' },
    ],
  },
};

const ukA2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Ukrainian pronunciation:', items: [{ note: 'Palatalization and soft consonants' }] },
  greetings: { introduction: 'Extended Ukrainian greetings:', items: [{ native: 'Як ся маєш?', english: 'How are you? (informal)' }, { native: 'Приємно познайомитись', english: 'Nice to meet you' }] },
  numbers: { introduction: 'Numbers 11-100 in Ukrainian:', items: [{ native: '11 - Одинадцять', pronunciation: 'o-dy-NAD-tsyat' }, { native: '20 - Двадцять', pronunciation: 'DVAD-tsyat' }] },
  common: { introduction: 'Common Ukrainian vocabulary:', items: [{ native: 'Ресторан', english: 'Restaurant' }, { native: 'Вокзал', english: 'Train station' }] },
  sentences: { introduction: 'Practical Ukrainian sentences:', items: [{ native: 'Чи можете допомогти?', english: 'Can you help?' }] },
};

const ukB1: LanguageLessons = {
  alphabet: { introduction: 'Complex Ukrainian patterns:', items: [{ note: 'Formal and informal registers' }] },
  greetings: { introduction: 'Professional Ukrainian expressions:', items: [{ native: 'Радий познайомитись', english: 'Pleased to meet you' }] },
  numbers: { introduction: 'Large numbers in Ukrainian:', items: [{ native: '1.000 - Тисяча', english: 'One thousand' }] },
  common: { introduction: 'Intermediate Ukrainian vocabulary:', items: [{ native: 'Довкілля', english: 'Environment' }, { native: 'Освіта', english: 'Education' }] },
  sentences: { introduction: 'Complex Ukrainian sentences:', items: [{ native: 'На мою думку...', english: 'In my opinion...' }] },
};

const ukB2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Ukrainian phonetics:', items: [{ note: 'Dialectal variations' }] },
  greetings: { introduction: 'Sophisticated Ukrainian expressions:', items: [{ native: 'Сподіваюся, у вас все добре', english: 'I hope you are well' }] },
  numbers: { introduction: 'Advanced numerical expressions:', items: [{ native: 'Приблизно', english: 'Approximately' }] },
  common: { introduction: 'Advanced Ukrainian vocabulary:', items: [{ native: 'Сталий розвиток', english: 'Sustainability' }] },
  sentences: { introduction: 'Nuanced Ukrainian expressions:', items: [{ native: 'Я б сказав, що...', english: 'I would say that...' }] },
};

const ukC1: LanguageLessons = {
  alphabet: { introduction: 'Mastery of Ukrainian phonology:', items: [{ note: 'Literary language features' }] },
  greetings: { introduction: 'Highly formal Ukrainian language:', items: [{ native: 'Це честь', english: 'It is an honor' }] },
  numbers: { introduction: 'Specialized Ukrainian terminology:', items: [{ native: 'Стандартне відхилення', english: 'Standard deviation' }] },
  common: { introduction: 'Sophisticated Ukrainian vocabulary:', items: [{ native: 'Парадигма', english: 'Paradigm' }] },
  sentences: { introduction: 'Advanced Ukrainian discourse:', items: [{ native: 'Необхідно, щоб...', english: 'It is imperative that...' }] },
};

const ukC2: LanguageLessons = {
  alphabet: { introduction: 'Native-level Ukrainian mastery:', items: [{ note: 'Poetic and rhetorical devices' }] },
  greetings: { introduction: 'Idiomatic Ukrainian expressions:', items: [{ native: 'Скільки літ, скільки зим!', english: 'Long time no see!' }] },
  numbers: { introduction: 'Idiomatic numerical expressions:', items: [{ native: 'На око', english: 'Rough estimate' }] },
  common: { introduction: 'Nuanced Ukrainian vocabulary:', items: [{ native: 'Щасливий випадок', english: 'Serendipity' }] },
  sentences: { introduction: 'Masterful Ukrainian expressions:', items: [{ native: 'Можна стверджувати...', english: 'One might argue...' }] },
};

// PORTUGUESE (pt) - Complete authentic content
const ptA1: LanguageLessons = {
  alphabet: {
    introduction: 'Portuguese uses the Latin alphabet with special characters. Key pronunciation notes:',
    items: [
      { note: 'Ã, Õ - Nasal vowels, pronounced through nose' },
      { note: 'Ç - Pronounced like "s" in "sun"' },
      { note: 'LH - Pronounced like "li" in "million"' },
      { note: 'NH - Pronounced like "ny" in "canyon"' },
      { note: 'R at beginning - Rolled or guttural "h" sound' },
      { note: 'S between vowels - Pronounced like "z"' },
    ],
  },
  greetings: {
    introduction: 'Essential Portuguese greetings:',
    items: [
      { native: 'Olá', english: 'Hello', pronunciation: 'o-LAH' },
      { native: 'Bom dia', english: 'Good morning', pronunciation: 'bom DEE-ah' },
      { native: 'Boa tarde', english: 'Good afternoon', pronunciation: 'BO-ah TAR-deh' },
      { native: 'Boa noite', english: 'Good evening/night', pronunciation: 'BO-ah NOY-teh' },
      { native: 'Adeus', english: 'Goodbye', pronunciation: 'ah-DEH-oosh' },
      { native: 'Por favor', english: 'Please', pronunciation: 'por fah-VOR' },
      { native: 'Obrigado/a', english: 'Thank you', pronunciation: 'o-bree-GAH-do/dah' },
      { native: 'De nada', english: 'You\'re welcome', pronunciation: 'deh NAH-dah' },
      { native: 'Com licença', english: 'Excuse me', pronunciation: 'kom lee-SEN-sah' },
      { native: 'Desculpe', english: 'I\'m sorry', pronunciation: 'desh-KOOL-peh' },
    ],
  },
  numbers: {
    introduction: 'Numbers 1-10 in Portuguese:',
    items: [
      { native: '1 - Um', pronunciation: 'oom' },
      { native: '2 - Dois', pronunciation: 'doysh' },
      { native: '3 - Três', pronunciation: 'tresh' },
      { native: '4 - Quatro', pronunciation: 'KWA-tro' },
      { native: '5 - Cinco', pronunciation: 'SEEN-ko' },
      { native: '6 - Seis', pronunciation: 'saysh' },
      { native: '7 - Sete', pronunciation: 'SEH-teh' },
      { native: '8 - Oito', pronunciation: 'OY-to' },
      { native: '9 - Nove', pronunciation: 'NO-veh' },
      { native: '10 - Dez', pronunciation: 'desh' },
    ],
  },
  common: {
    introduction: 'Essential Portuguese vocabulary:',
    items: [
      { native: 'Sim', english: 'Yes', pronunciation: 'seem' },
      { native: 'Não', english: 'No', pronunciation: 'now' },
      { native: 'Água', english: 'Water', pronunciation: 'AH-gwah' },
      { native: 'Comida', english: 'Food', pronunciation: 'ko-MEE-dah' },
      { native: 'Casa', english: 'House', pronunciation: 'KAH-zah' },
      { native: 'Família', english: 'Family', pronunciation: 'fah-MEE-lyah' },
      { native: 'Amigo', english: 'Friend', pronunciation: 'ah-MEE-go' },
      { native: 'Tempo', english: 'Time', pronunciation: 'TEM-po' },
      { native: 'Dia', english: 'Day', pronunciation: 'DEE-ah' },
      { native: 'Noite', english: 'Night', pronunciation: 'NOY-teh' },
    ],
  },
  sentences: {
    introduction: 'Basic Portuguese sentences:',
    items: [
      { native: 'O meu nome é...', english: 'My name is...' },
      { native: 'Como está?', english: 'How are you?' },
      { native: 'Estou bem', english: 'I am fine' },
      { native: 'Onde é...?', english: 'Where is...?' },
      { native: 'Não compreendo', english: 'I don\'t understand' },
    ],
  },
};

const ptA2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Portuguese pronunciation:', items: [{ note: 'European vs Brazilian pronunciation differences' }] },
  greetings: { introduction: 'Extended Portuguese greetings:', items: [{ native: 'Como vai?', english: 'How are you?' }, { native: 'Prazer em conhecê-lo', english: 'Nice to meet you' }] },
  numbers: { introduction: 'Numbers 11-100 in Portuguese:', items: [{ native: '11 - Onze', pronunciation: 'ON-zeh' }, { native: '20 - Vinte', pronunciation: 'VEEN-teh' }] },
  common: { introduction: 'Common Portuguese vocabulary:', items: [{ native: 'Restaurante', english: 'Restaurant' }, { native: 'Estação', english: 'Station' }] },
  sentences: { introduction: 'Practical Portuguese sentences:', items: [{ native: 'Pode ajudar-me?', english: 'Can you help me?' }] },
};

const ptB1: LanguageLessons = {
  alphabet: { introduction: 'Complex Portuguese patterns:', items: [{ note: 'Formal and informal registers' }] },
  greetings: { introduction: 'Professional Portuguese expressions:', items: [{ native: 'É um prazer conhecê-lo', english: 'Pleased to meet you' }] },
  numbers: { introduction: 'Large numbers in Portuguese:', items: [{ native: '1.000 - Mil', english: 'One thousand' }] },
  common: { introduction: 'Intermediate Portuguese vocabulary:', items: [{ native: 'Ambiente', english: 'Environment' }, { native: 'Educação', english: 'Education' }] },
  sentences: { introduction: 'Complex Portuguese sentences:', items: [{ native: 'Na minha opinião...', english: 'In my opinion...' }] },
};

const ptB2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Portuguese phonetics:', items: [{ note: 'Regional variations' }] },
  greetings: { introduction: 'Sophisticated Portuguese expressions:', items: [{ native: 'Espero que esteja bem', english: 'I hope you are well' }] },
  numbers: { introduction: 'Advanced numerical expressions:', items: [{ native: 'Aproximadamente', english: 'Approximately' }] },
  common: { introduction: 'Advanced Portuguese vocabulary:', items: [{ native: 'Sustentabilidade', english: 'Sustainability' }] },
  sentences: { introduction: 'Nuanced Portuguese expressions:', items: [{ native: 'Eu diria que...', english: 'I would say that...' }] },
};

const ptC1: LanguageLessons = {
  alphabet: { introduction: 'Mastery of Portuguese phonology:', items: [{ note: 'Literary language features' }] },
  greetings: { introduction: 'Highly formal Portuguese language:', items: [{ native: 'É uma honra', english: 'It is an honor' }] },
  numbers: { introduction: 'Specialized Portuguese terminology:', items: [{ native: 'Desvio padrão', english: 'Standard deviation' }] },
  common: { introduction: 'Sophisticated Portuguese vocabulary:', items: [{ native: 'Paradigma', english: 'Paradigm' }] },
  sentences: { introduction: 'Advanced Portuguese discourse:', items: [{ native: 'É imperativo que...', english: 'It is imperative that...' }] },
};

const ptC2: LanguageLessons = {
  alphabet: { introduction: 'Native-level Portuguese mastery:', items: [{ note: 'Poetic and rhetorical devices' }] },
  greetings: { introduction: 'Idiomatic Portuguese expressions:', items: [{ native: 'Há quanto tempo!', english: 'Long time no see!' }] },
  numbers: { introduction: 'Idiomatic numerical expressions:', items: [{ native: 'A olho', english: 'Rough estimate' }] },
  common: { introduction: 'Nuanced Portuguese vocabulary:', items: [{ native: 'Serendipidade', english: 'Serendipity' }] },
  sentences: { introduction: 'Masterful Portuguese expressions:', items: [{ native: 'Poder-se-ia argumentar...', english: 'One might argue...' }] },
};

// DUTCH (nl) - Complete authentic content
const nlA1: LanguageLessons = {
  alphabet: {
    introduction: 'Dutch uses the Latin alphabet with digraphs. Key pronunciation notes:',
    items: [
      { note: 'IJ - Pronounced like "ay" in "day"' },
      { note: 'UI - Unique Dutch sound, like "ow" with rounded lips' },
      { note: 'G/CH - Guttural sound from back of throat' },
      { note: 'SCH - Combination of "s" + guttural "ch"' },
      { note: 'OE - Pronounced like "oo" in "boot"' },
      { note: 'EE - Long "ay" sound' },
    ],
  },
  greetings: {
    introduction: 'Essential Dutch greetings:',
    items: [
      { native: 'Hallo', english: 'Hello', pronunciation: 'HAH-lo' },
      { native: 'Goedemorgen', english: 'Good morning', pronunciation: 'KHOO-duh-MOR-khun' },
      { native: 'Goedemiddag', english: 'Good afternoon', pronunciation: 'KHOO-duh-MID-dakh' },
      { native: 'Goedenavond', english: 'Good evening', pronunciation: 'KHOO-dun-AH-vont' },
      { native: 'Tot ziens', english: 'Goodbye', pronunciation: 'tot ZEENS' },
      { native: 'Alstublieft', english: 'Please (formal)', pronunciation: 'ALS-tu-bleeft' },
      { native: 'Dank je wel', english: 'Thank you', pronunciation: 'DANK yuh vel' },
      { native: 'Graag gedaan', english: 'You\'re welcome', pronunciation: 'khrahkh khuh-DAHN' },
      { native: 'Pardon', english: 'Excuse me', pronunciation: 'par-DON' },
      { native: 'Het spijt me', english: 'I\'m sorry', pronunciation: 'het SPAYT muh' },
    ],
  },
  numbers: {
    introduction: 'Numbers 1-10 in Dutch:',
    items: [
      { native: '1 - Een', pronunciation: 'ayn' },
      { native: '2 - Twee', pronunciation: 'tway' },
      { native: '3 - Drie', pronunciation: 'dree' },
      { native: '4 - Vier', pronunciation: 'feer' },
      { native: '5 - Vijf', pronunciation: 'fayf' },
      { native: '6 - Zes', pronunciation: 'zes' },
      { native: '7 - Zeven', pronunciation: 'ZAY-vun' },
      { native: '8 - Acht', pronunciation: 'akht' },
      { native: '9 - Negen', pronunciation: 'NAY-khun' },
      { native: '10 - Tien', pronunciation: 'teen' },
    ],
  },
  common: {
    introduction: 'Essential Dutch vocabulary:',
    items: [
      { native: 'Ja', english: 'Yes', pronunciation: 'yah' },
      { native: 'Nee', english: 'No', pronunciation: 'nay' },
      { native: 'Water', english: 'Water', pronunciation: 'VAH-tur' },
      { native: 'Eten', english: 'Food', pronunciation: 'AY-tun' },
      { native: 'Huis', english: 'House', pronunciation: 'hows' },
      { native: 'Familie', english: 'Family', pronunciation: 'fah-MEE-lee' },
      { native: 'Vriend', english: 'Friend', pronunciation: 'freent' },
      { native: 'Tijd', english: 'Time', pronunciation: 'tayt' },
      { native: 'Dag', english: 'Day', pronunciation: 'dakh' },
      { native: 'Nacht', english: 'Night', pronunciation: 'nakht' },
    ],
  },
  sentences: {
    introduction: 'Basic Dutch sentences:',
    items: [
      { native: 'Ik heet...', english: 'My name is...' },
      { native: 'Hoe gaat het?', english: 'How are you?' },
      { native: 'Het gaat goed', english: 'I am fine' },
      { native: 'Waar is...?', english: 'Where is...?' },
      { native: 'Ik begrijp het niet', english: 'I don\'t understand' },
    ],
  },
};

const nlA2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Dutch pronunciation:', items: [{ note: 'Diminutives with -je suffix' }] },
  greetings: { introduction: 'Extended Dutch greetings:', items: [{ native: 'Hoe is het?', english: 'How are you?' }, { native: 'Leuk je te ontmoeten', english: 'Nice to meet you' }] },
  numbers: { introduction: 'Numbers 11-100 in Dutch:', items: [{ native: '11 - Elf', pronunciation: 'elf' }, { native: '20 - Twintig', pronunciation: 'TVIN-tikh' }] },
  common: { introduction: 'Common Dutch vocabulary:', items: [{ native: 'Restaurant', english: 'Restaurant' }, { native: 'Station', english: 'Station' }] },
  sentences: { introduction: 'Practical Dutch sentences:', items: [{ native: 'Kunt u mij helpen?', english: 'Can you help me?' }] },
};

const nlB1: LanguageLessons = {
  alphabet: { introduction: 'Complex Dutch patterns:', items: [{ note: 'Formal and informal registers' }] },
  greetings: { introduction: 'Professional Dutch expressions:', items: [{ native: 'Aangenaam kennis te maken', english: 'Pleased to meet you' }] },
  numbers: { introduction: 'Large numbers in Dutch:', items: [{ native: '1.000 - Duizend', english: 'One thousand' }] },
  common: { introduction: 'Intermediate Dutch vocabulary:', items: [{ native: 'Milieu', english: 'Environment' }, { native: 'Onderwijs', english: 'Education' }] },
  sentences: { introduction: 'Complex Dutch sentences:', items: [{ native: 'Naar mijn mening...', english: 'In my opinion...' }] },
};

const nlB2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Dutch phonetics:', items: [{ note: 'Regional variations (Flemish vs Dutch)' }] },
  greetings: { introduction: 'Sophisticated Dutch expressions:', items: [{ native: 'Ik hoop dat het goed met u gaat', english: 'I hope you are well' }] },
  numbers: { introduction: 'Advanced numerical expressions:', items: [{ native: 'Ongeveer', english: 'Approximately' }] },
  common: { introduction: 'Advanced Dutch vocabulary:', items: [{ native: 'Duurzaamheid', english: 'Sustainability' }] },
  sentences: { introduction: 'Nuanced Dutch expressions:', items: [{ native: 'Ik zou zeggen dat...', english: 'I would say that...' }] },
};

const nlC1: LanguageLessons = {
  alphabet: { introduction: 'Mastery of Dutch phonology:', items: [{ note: 'Literary language features' }] },
  greetings: { introduction: 'Highly formal Dutch language:', items: [{ native: 'Het is een eer', english: 'It is an honor' }] },
  numbers: { introduction: 'Specialized Dutch terminology:', items: [{ native: 'Standaardafwijking', english: 'Standard deviation' }] },
  common: { introduction: 'Sophisticated Dutch vocabulary:', items: [{ native: 'Paradigma', english: 'Paradigm' }] },
  sentences: { introduction: 'Advanced Dutch discourse:', items: [{ native: 'Het is noodzakelijk dat...', english: 'It is imperative that...' }] },
};

const nlC2: LanguageLessons = {
  alphabet: { introduction: 'Native-level Dutch mastery:', items: [{ note: 'Poetic and rhetorical devices' }] },
  greetings: { introduction: 'Idiomatic Dutch expressions:', items: [{ native: 'Lang niet gezien!', english: 'Long time no see!' }] },
  numbers: { introduction: 'Idiomatic numerical expressions:', items: [{ native: 'Op het oog', english: 'Rough estimate' }] },
  common: { introduction: 'Nuanced Dutch vocabulary:', items: [{ native: 'Serendipiteit', english: 'Serendipity' }] },
  sentences: { introduction: 'Masterful Dutch expressions:', items: [{ native: 'Men zou kunnen stellen...', english: 'One might argue...' }] },
};

// SWEDISH (sv) - Complete authentic content
const svA1: LanguageLessons = {
  alphabet: {
    introduction: 'Swedish uses the Latin alphabet plus å, ä, ö. Key pronunciation notes:',
    items: [
      { note: 'Å - Pronounced like "o" in "or"' },
      { note: 'Ä - Pronounced like "e" in "bed"' },
      { note: 'Ö - Pronounced like "u" in "fur"' },
      { note: 'SJ - Unique Swedish sound, soft "sh"' },
      { note: 'SK before e/i/y - Soft "sh" sound' },
      { note: 'J - Pronounced like "y" in "yes"' },
    ],
  },
  greetings: {
    introduction: 'Essential Swedish greetings:',
    items: [
      { native: 'Hej', english: 'Hello', pronunciation: 'hay' },
      { native: 'God morgon', english: 'Good morning', pronunciation: 'goo MOR-gon' },
      { native: 'God dag', english: 'Good day', pronunciation: 'goo dahg' },
      { native: 'God kväll', english: 'Good evening', pronunciation: 'goo kvel' },
      { native: 'Hej då', english: 'Goodbye', pronunciation: 'hay doh' },
      { native: 'Tack', english: 'Thank you', pronunciation: 'tack' },
      { native: 'Varsågod', english: 'You\'re welcome', pronunciation: 'VAR-sho-good' },
      { native: 'Ursäkta', english: 'Excuse me', pronunciation: 'OOR-shek-tah' },
      { native: 'Förlåt', english: 'I\'m sorry', pronunciation: 'fur-LOHT' },
      { native: 'Snälla', english: 'Please', pronunciation: 'SNEL-lah' },
    ],
  },
  numbers: {
    introduction: 'Numbers 1-10 in Swedish:',
    items: [
      { native: '1 - Ett', pronunciation: 'et' },
      { native: '2 - Två', pronunciation: 'tvoh' },
      { native: '3 - Tre', pronunciation: 'treh' },
      { native: '4 - Fyra', pronunciation: 'FEW-rah' },
      { native: '5 - Fem', pronunciation: 'fem' },
      { native: '6 - Sex', pronunciation: 'sex' },
      { native: '7 - Sju', pronunciation: 'shoo' },
      { native: '8 - Åtta', pronunciation: 'OT-tah' },
      { native: '9 - Nio', pronunciation: 'NEE-oh' },
      { native: '10 - Tio', pronunciation: 'TEE-oh' },
    ],
  },
  common: {
    introduction: 'Essential Swedish vocabulary:',
    items: [
      { native: 'Ja', english: 'Yes', pronunciation: 'yah' },
      { native: 'Nej', english: 'No', pronunciation: 'nay' },
      { native: 'Vatten', english: 'Water', pronunciation: 'VAT-ten' },
      { native: 'Mat', english: 'Food', pronunciation: 'maht' },
      { native: 'Hus', english: 'House', pronunciation: 'hoos' },
      { native: 'Familj', english: 'Family', pronunciation: 'fah-MILJ' },
      { native: 'Vän', english: 'Friend', pronunciation: 'ven' },
      { native: 'Tid', english: 'Time', pronunciation: 'teed' },
      { native: 'Dag', english: 'Day', pronunciation: 'dahg' },
      { native: 'Natt', english: 'Night', pronunciation: 'nat' },
    ],
  },
  sentences: {
    introduction: 'Basic Swedish sentences:',
    items: [
      { native: 'Jag heter...', english: 'My name is...' },
      { native: 'Hur mår du?', english: 'How are you?' },
      { native: 'Jag mår bra', english: 'I am fine' },
      { native: 'Var är...?', english: 'Where is...?' },
      { native: 'Jag förstår inte', english: 'I don\'t understand' },
    ],
  },
};

const svA2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Swedish pronunciation:', items: [{ note: 'Pitch accent patterns (acute and grave)' }] },
  greetings: { introduction: 'Extended Swedish greetings:', items: [{ native: 'Hur är läget?', english: 'How are you?' }, { native: 'Trevligt att träffas', english: 'Nice to meet you' }] },
  numbers: { introduction: 'Numbers 11-100 in Swedish:', items: [{ native: '11 - Elva', pronunciation: 'EL-vah' }, { native: '20 - Tjugo', pronunciation: 'CHOO-go' }] },
  common: { introduction: 'Common Swedish vocabulary:', items: [{ native: 'Restaurang', english: 'Restaurant' }, { native: 'Station', english: 'Station' }] },
  sentences: { introduction: 'Practical Swedish sentences:', items: [{ native: 'Kan du hjälpa mig?', english: 'Can you help me?' }] },
};

const svB1: LanguageLessons = {
  alphabet: { introduction: 'Complex Swedish patterns:', items: [{ note: 'Formal and informal registers' }] },
  greetings: { introduction: 'Professional Swedish expressions:', items: [{ native: 'Trevligt att träffa er', english: 'Pleased to meet you' }] },
  numbers: { introduction: 'Large numbers in Swedish:', items: [{ native: '1.000 - Tusen', english: 'One thousand' }] },
  common: { introduction: 'Intermediate Swedish vocabulary:', items: [{ native: 'Miljö', english: 'Environment' }, { native: 'Utbildning', english: 'Education' }] },
  sentences: { introduction: 'Complex Swedish sentences:', items: [{ native: 'Enligt min åsikt...', english: 'In my opinion...' }] },
};

const svB2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Swedish phonetics:', items: [{ note: 'Regional variations' }] },
  greetings: { introduction: 'Sophisticated Swedish expressions:', items: [{ native: 'Jag hoppas att du mår bra', english: 'I hope you are well' }] },
  numbers: { introduction: 'Advanced numerical expressions:', items: [{ native: 'Ungefär', english: 'Approximately' }] },
  common: { introduction: 'Advanced Swedish vocabulary:', items: [{ native: 'Hållbarhet', english: 'Sustainability' }] },
  sentences: { introduction: 'Nuanced Swedish expressions:', items: [{ native: 'Jag skulle säga att...', english: 'I would say that...' }] },
};

const svC1: LanguageLessons = {
  alphabet: { introduction: 'Mastery of Swedish phonology:', items: [{ note: 'Literary language features' }] },
  greetings: { introduction: 'Highly formal Swedish language:', items: [{ native: 'Det är en ära', english: 'It is an honor' }] },
  numbers: { introduction: 'Specialized Swedish terminology:', items: [{ native: 'Standardavvikelse', english: 'Standard deviation' }] },
  common: { introduction: 'Sophisticated Swedish vocabulary:', items: [{ native: 'Paradigm', english: 'Paradigm' }] },
  sentences: { introduction: 'Advanced Swedish discourse:', items: [{ native: 'Det är nödvändigt att...', english: 'It is imperative that...' }] },
};

const svC2: LanguageLessons = {
  alphabet: { introduction: 'Native-level Swedish mastery:', items: [{ note: 'Poetic and rhetorical devices' }] },
  greetings: { introduction: 'Idiomatic Swedish expressions:', items: [{ native: 'Länge sedan!', english: 'Long time no see!' }] },
  numbers: { introduction: 'Idiomatic numerical expressions:', items: [{ native: 'På känn', english: 'Rough estimate' }] },
  common: { introduction: 'Nuanced Swedish vocabulary:', items: [{ native: 'Serendipitet', english: 'Serendipity' }] },
  sentences: { introduction: 'Masterful Swedish expressions:', items: [{ native: 'Man skulle kunna hävda...', english: 'One might argue...' }] },
};

// NORWEGIAN (no) - Complete authentic content
const noA1: LanguageLessons = {
  alphabet: {
    introduction: 'Norwegian uses the Latin alphabet plus æ, ø, å. Key pronunciation notes:',
    items: [
      { note: 'Æ - Pronounced like "a" in "cat"' },
      { note: 'Ø - Pronounced like "u" in "fur"' },
      { note: 'Å - Pronounced like "o" in "or"' },
      { note: 'KJ - Soft "sh" sound' },
      { note: 'SKJ - Soft "sh" sound' },
      { note: 'J - Pronounced like "y" in "yes"' },
    ],
  },
  greetings: {
    introduction: 'Essential Norwegian greetings:',
    items: [
      { native: 'Hei', english: 'Hello', pronunciation: 'hay' },
      { native: 'God morgen', english: 'Good morning', pronunciation: 'goo MOR-gen' },
      { native: 'God dag', english: 'Good day', pronunciation: 'goo dahg' },
      { native: 'God kveld', english: 'Good evening', pronunciation: 'goo kvel' },
      { native: 'Ha det', english: 'Goodbye', pronunciation: 'hah deh' },
      { native: 'Takk', english: 'Thank you', pronunciation: 'tack' },
      { native: 'Vær så god', english: 'You\'re welcome', pronunciation: 'vair soh goo' },
      { native: 'Unnskyld', english: 'Excuse me', pronunciation: 'OON-shewl' },
      { native: 'Beklager', english: 'I\'m sorry', pronunciation: 'beh-KLAH-ger' },
      { native: 'Vær så snill', english: 'Please', pronunciation: 'vair soh snil' },
    ],
  },
  numbers: {
    introduction: 'Numbers 1-10 in Norwegian:',
    items: [
      { native: '1 - En/Ett', pronunciation: 'en/et' },
      { native: '2 - To', pronunciation: 'too' },
      { native: '3 - Tre', pronunciation: 'treh' },
      { native: '4 - Fire', pronunciation: 'FEE-reh' },
      { native: '5 - Fem', pronunciation: 'fem' },
      { native: '6 - Seks', pronunciation: 'seks' },
      { native: '7 - Sju', pronunciation: 'shoo' },
      { native: '8 - Åtte', pronunciation: 'OT-teh' },
      { native: '9 - Ni', pronunciation: 'nee' },
      { native: '10 - Ti', pronunciation: 'tee' },
    ],
  },
  common: {
    introduction: 'Essential Norwegian vocabulary:',
    items: [
      { native: 'Ja', english: 'Yes', pronunciation: 'yah' },
      { native: 'Nei', english: 'No', pronunciation: 'nay' },
      { native: 'Vann', english: 'Water', pronunciation: 'van' },
      { native: 'Mat', english: 'Food', pronunciation: 'maht' },
      { native: 'Hus', english: 'House', pronunciation: 'hoos' },
      { native: 'Familie', english: 'Family', pronunciation: 'fah-MEE-lee-eh' },
      { native: 'Venn', english: 'Friend', pronunciation: 'ven' },
      { native: 'Tid', english: 'Time', pronunciation: 'teed' },
      { native: 'Dag', english: 'Day', pronunciation: 'dahg' },
      { native: 'Natt', english: 'Night', pronunciation: 'nat' },
    ],
  },
  sentences: {
    introduction: 'Basic Norwegian sentences:',
    items: [
      { native: 'Jeg heter...', english: 'My name is...' },
      { native: 'Hvordan har du det?', english: 'How are you?' },
      { native: 'Jeg har det bra', english: 'I am fine' },
      { native: 'Hvor er...?', english: 'Where is...?' },
      { native: 'Jeg forstår ikke', english: 'I don\'t understand' },
    ],
  },
};

const noA2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Norwegian pronunciation:', items: [{ note: 'Bokmål vs Nynorsk differences' }] },
  greetings: { introduction: 'Extended Norwegian greetings:', items: [{ native: 'Hvordan går det?', english: 'How are you?' }, { native: 'Hyggelig å møte deg', english: 'Nice to meet you' }] },
  numbers: { introduction: 'Numbers 11-100 in Norwegian:', items: [{ native: '11 - Elleve', pronunciation: 'EL-leh-veh' }, { native: '20 - Tjue', pronunciation: 'CHOO-eh' }] },
  common: { introduction: 'Common Norwegian vocabulary:', items: [{ native: 'Restaurant', english: 'Restaurant' }, { native: 'Stasjon', english: 'Station' }] },
  sentences: { introduction: 'Practical Norwegian sentences:', items: [{ native: 'Kan du hjelpe meg?', english: 'Can you help me?' }] },
};

const noB1: LanguageLessons = {
  alphabet: { introduction: 'Complex Norwegian patterns:', items: [{ note: 'Formal and informal registers' }] },
  greetings: { introduction: 'Professional Norwegian expressions:', items: [{ native: 'Hyggelig å møte dere', english: 'Pleased to meet you' }] },
  numbers: { introduction: 'Large numbers in Norwegian:', items: [{ native: '1.000 - Tusen', english: 'One thousand' }] },
  common: { introduction: 'Intermediate Norwegian vocabulary:', items: [{ native: 'Miljø', english: 'Environment' }, { native: 'Utdanning', english: 'Education' }] },
  sentences: { introduction: 'Complex Norwegian sentences:', items: [{ native: 'Etter min mening...', english: 'In my opinion...' }] },
};

const noB2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Norwegian phonetics:', items: [{ note: 'Regional variations' }] },
  greetings: { introduction: 'Sophisticated Norwegian expressions:', items: [{ native: 'Jeg håper du har det bra', english: 'I hope you are well' }] },
  numbers: { introduction: 'Advanced numerical expressions:', items: [{ native: 'Omtrent', english: 'Approximately' }] },
  common: { introduction: 'Advanced Norwegian vocabulary:', items: [{ native: 'Bærekraft', english: 'Sustainability' }] },
  sentences: { introduction: 'Nuanced Norwegian expressions:', items: [{ native: 'Jeg vil si at...', english: 'I would say that...' }] },
};

const noC1: LanguageLessons = {
  alphabet: { introduction: 'Mastery of Norwegian phonology:', items: [{ note: 'Literary language features' }] },
  greetings: { introduction: 'Highly formal Norwegian language:', items: [{ native: 'Det er en ære', english: 'It is an honor' }] },
  numbers: { introduction: 'Specialized Norwegian terminology:', items: [{ native: 'Standardavvik', english: 'Standard deviation' }] },
  common: { introduction: 'Sophisticated Norwegian vocabulary:', items: [{ native: 'Paradigme', english: 'Paradigm' }] },
  sentences: { introduction: 'Advanced Norwegian discourse:', items: [{ native: 'Det er nødvendig at...', english: 'It is imperative that...' }] },
};

const noC2: LanguageLessons = {
  alphabet: { introduction: 'Native-level Norwegian mastery:', items: [{ note: 'Poetic and rhetorical devices' }] },
  greetings: { introduction: 'Idiomatic Norwegian expressions:', items: [{ native: 'Lenge siden!', english: 'Long time no see!' }] },
  numbers: { introduction: 'Idiomatic numerical expressions:', items: [{ native: 'På følelsen', english: 'Rough estimate' }] },
  common: { introduction: 'Nuanced Norwegian vocabulary:', items: [{ native: 'Serendipitet', english: 'Serendipity' }] },
  sentences: { introduction: 'Masterful Norwegian expressions:', items: [{ native: 'Man kunne hevde...', english: 'One might argue...' }] },
};

// DANISH (da) - Complete authentic content
const daA1: LanguageLessons = {
  alphabet: {
    introduction: 'Danish uses the Latin alphabet plus æ, ø, å. Key pronunciation notes:',
    items: [
      { note: 'Æ - Pronounced like "e" in "bed"' },
      { note: 'Ø - Pronounced like "u" in "fur"' },
      { note: 'Å - Pronounced like "o" in "or"' },
      { note: 'D - Often silent or soft "th" sound' },
      { note: 'R - Guttural sound from back of throat' },
      { note: 'Stød - Glottal stop unique to Danish' },
    ],
  },
  greetings: {
    introduction: 'Essential Danish greetings:',
    items: [
      { native: 'Hej', english: 'Hello', pronunciation: 'high' },
      { native: 'Godmorgen', english: 'Good morning', pronunciation: 'go-MOR-en' },
      { native: 'Goddag', english: 'Good day', pronunciation: 'go-DAH' },
      { native: 'Godaften', english: 'Good evening', pronunciation: 'go-AF-ten' },
      { native: 'Farvel', english: 'Goodbye', pronunciation: 'far-VEL' },
      { native: 'Tak', english: 'Thank you', pronunciation: 'tak' },
      { native: 'Værsgo', english: 'You\'re welcome', pronunciation: 'VAIRS-go' },
      { native: 'Undskyld', english: 'Excuse me', pronunciation: 'OON-skewl' },
      { native: 'Beklager', english: 'I\'m sorry', pronunciation: 'beh-KLAH-er' },
      { native: 'Vær så venlig', english: 'Please', pronunciation: 'vair soh VEN-lee' },
    ],
  },
  numbers: {
    introduction: 'Numbers 1-10 in Danish:',
    items: [
      { native: '1 - En/Et', pronunciation: 'en/et' },
      { native: '2 - To', pronunciation: 'toh' },
      { native: '3 - Tre', pronunciation: 'treh' },
      { native: '4 - Fire', pronunciation: 'FEE-reh' },
      { native: '5 - Fem', pronunciation: 'fem' },
      { native: '6 - Seks', pronunciation: 'seks' },
      { native: '7 - Syv', pronunciation: 'sew' },
      { native: '8 - Otte', pronunciation: 'OT-teh' },
      { native: '9 - Ni', pronunciation: 'nee' },
      { native: '10 - Ti', pronunciation: 'tee' },
    ],
  },
  common: {
    introduction: 'Essential Danish vocabulary:',
    items: [
      { native: 'Ja', english: 'Yes', pronunciation: 'yah' },
      { native: 'Nej', english: 'No', pronunciation: 'nigh' },
      { native: 'Vand', english: 'Water', pronunciation: 'van' },
      { native: 'Mad', english: 'Food', pronunciation: 'math' },
      { native: 'Hus', english: 'House', pronunciation: 'hoos' },
      { native: 'Familie', english: 'Family', pronunciation: 'fah-MEE-lee-eh' },
      { native: 'Ven', english: 'Friend', pronunciation: 'ven' },
      { native: 'Tid', english: 'Time', pronunciation: 'teeth' },
      { native: 'Dag', english: 'Day', pronunciation: 'dah' },
      { native: 'Nat', english: 'Night', pronunciation: 'nat' },
    ],
  },
  sentences: {
    introduction: 'Basic Danish sentences:',
    items: [
      { native: 'Jeg hedder...', english: 'My name is...' },
      { native: 'Hvordan har du det?', english: 'How are you?' },
      { native: 'Jeg har det godt', english: 'I am fine' },
      { native: 'Hvor er...?', english: 'Where is...?' },
      { native: 'Jeg forstår ikke', english: 'I don\'t understand' },
    ],
  },
};

const daA2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Danish pronunciation:', items: [{ note: 'The stød (glottal stop) in detail' }] },
  greetings: { introduction: 'Extended Danish greetings:', items: [{ native: 'Hvordan går det?', english: 'How are you?' }, { native: 'Rart at møde dig', english: 'Nice to meet you' }] },
  numbers: { introduction: 'Numbers 11-100 in Danish:', items: [{ native: '11 - Elleve', pronunciation: 'EL-leh-veh' }, { native: '20 - Tyve', pronunciation: 'TEW-veh' }] },
  common: { introduction: 'Common Danish vocabulary:', items: [{ native: 'Restaurant', english: 'Restaurant' }, { native: 'Station', english: 'Station' }] },
  sentences: { introduction: 'Practical Danish sentences:', items: [{ native: 'Kan du hjælpe mig?', english: 'Can you help me?' }] },
};

const daB1: LanguageLessons = {
  alphabet: { introduction: 'Complex Danish patterns:', items: [{ note: 'Formal and informal registers' }] },
  greetings: { introduction: 'Professional Danish expressions:', items: [{ native: 'Rart at møde jer', english: 'Pleased to meet you' }] },
  numbers: { introduction: 'Large numbers in Danish:', items: [{ native: '1.000 - Tusind', english: 'One thousand' }] },
  common: { introduction: 'Intermediate Danish vocabulary:', items: [{ native: 'Miljø', english: 'Environment' }, { native: 'Uddannelse', english: 'Education' }] },
  sentences: { introduction: 'Complex Danish sentences:', items: [{ native: 'Efter min mening...', english: 'In my opinion...' }] },
};

const daB2: LanguageLessons = {
  alphabet: { introduction: 'Advanced Danish phonetics:', items: [{ note: 'Regional variations' }] },
  greetings: { introduction: 'Sophisticated Danish expressions:', items: [{ native: 'Jeg håber du har det godt', english: 'I hope you are well' }] },
  numbers: { introduction: 'Advanced numerical expressions:', items: [{ native: 'Cirka', english: 'Approximately' }] },
  common: { introduction: 'Advanced Danish vocabulary:', items: [{ native: 'Bæredygtighed', english: 'Sustainability' }] },
  sentences: { introduction: 'Nuanced Danish expressions:', items: [{ native: 'Jeg vil sige at...', english: 'I would say that...' }] },
};

const daC1: LanguageLessons = {
  alphabet: { introduction: 'Mastery of Danish phonology:', items: [{ note: 'Literary language features' }] },
  greetings: { introduction: 'Highly formal Danish language:', items: [{ native: 'Det er en ære', english: 'It is an honor' }] },
  numbers: { introduction: 'Specialized Danish terminology:', items: [{ native: 'Standardafvigelse', english: 'Standard deviation' }] },
  common: { introduction: 'Sophisticated Danish vocabulary:', items: [{ native: 'Paradigme', english: 'Paradigm' }] },
  sentences: { introduction: 'Advanced Danish discourse:', items: [{ native: 'Det er nødvendigt at...', english: 'It is imperative that...' }] },
};

const daC2: LanguageLessons = {
  alphabet: { introduction: 'Native-level Danish mastery:', items: [{ note: 'Poetic and rhetorical devices' }] },
  greetings: { introduction: 'Idiomatic Danish expressions:', items: [{ native: 'Længe siden!', english: 'Long time no see!' }] },
  numbers: { introduction: 'Idiomatic numerical expressions:', items: [{ native: 'På fornemmelsen', english: 'Rough estimate' }] },
  common: { introduction: 'Nuanced Danish vocabulary:', items: [{ native: 'Serendipitet', english: 'Serendipity' }] },
  sentences: { introduction: 'Masterful Danish expressions:', items: [{ native: 'Man kunne hævde...', english: 'One might argue...' }] },
};

// Export all lessons
export const lessonsSeed: Record<string, LeveledLessons> = {
  en: createCompleteLeveledLessons('en', 'English', enA1, enA2, enB1, enB2, enC1, enC2),
  de: createCompleteLeveledLessons('de', 'German', deA1, deA2, deB1, deB2, deC1, deC2),
  it: createCompleteLeveledLessons('it', 'Italian', itA1, itA2, itB1, itB2, itC1, itC2),
  uk: createCompleteLeveledLessons('uk', 'Ukrainian', ukA1, ukA2, ukB1, ukB2, ukC1, ukC2),
  pt: createCompleteLeveledLessons('pt', 'Portuguese', ptA1, ptA2, ptB1, ptB2, ptC1, ptC2),
  nl: createCompleteLeveledLessons('nl', 'Dutch', nlA1, nlA2, nlB1, nlB2, nlC1, nlC2),
  sv: createCompleteLeveledLessons('sv', 'Swedish', svA1, svA2, svB1, svB2, svC1, svC2),
  no: createCompleteLeveledLessons('no', 'Norwegian', noA1, noA2, noB1, noB2, noC1, noC2),
  da: createCompleteLeveledLessons('da', 'Danish', daA1, daA2, daB1, daB2, daC1, daC2),
};
