export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flagPath: string;
}

export const languages: Language[] = [
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flagPath: '/assets/generated/flag-uk.dim_64x64.png' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flagPath: '/assets/generated/flag-de.dim_64x64.png' },
  { code: 'fr', name: 'French', nativeName: 'Français', flagPath: '/assets/generated/flag-fr.dim_64x64.png' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flagPath: '/assets/generated/flag-es.dim_64x64.png' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flagPath: '/assets/generated/flag-it.dim_64x64.png' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flagPath: '/assets/generated/flag-pt.dim_64x64.png' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flagPath: '/assets/generated/flag-nl.dim_64x64.png' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flagPath: '/assets/generated/flag-sv.dim_64x64.png' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk', flagPath: '/assets/generated/flag-no.dim_64x64.png' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', flagPath: '/assets/generated/flag-da.dim_64x64.png' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flagPath: '/assets/generated/flag-fi.dim_64x64.png' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flagPath: '/assets/generated/flag-pl.dim_64x64.png' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', flagPath: '/assets/generated/flag-cs.dim_64x64.png' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', flagPath: '/assets/generated/flag-hu.dim_64x64.png' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', flagPath: '/assets/generated/flag-ro.dim_64x64.png' },
  { code: 'bg', name: 'Bulgarian', nativeName: 'Български', flagPath: '/assets/generated/flag-bg.dim_64x64.png' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', flagPath: '/assets/generated/flag-el.dim_64x64.png' },
  { code: 'en', name: 'English', nativeName: 'English', flagPath: '/assets/generated/flag-uk.dim_64x64.png' },
  { code: 'ga', name: 'Irish', nativeName: 'Gaeilge', flagPath: '/assets/generated/flag-ga.dim_64x64.png' },
  { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina', flagPath: '/assets/generated/flag-sk.dim_64x64.png' },
];
