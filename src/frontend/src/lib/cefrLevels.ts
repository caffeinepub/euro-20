export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface CEFRLevelInfo {
  id: CEFRLevel;
  label: string;
  description: string;
}

export const cefrLevels: CEFRLevelInfo[] = [
  { id: 'A1', label: 'A1', description: 'Beginner' },
  { id: 'A2', label: 'A2', description: 'Elementary' },
  { id: 'B1', label: 'B1', description: 'Intermediate' },
  { id: 'B2', label: 'B2', description: 'Upper Intermediate' },
  { id: 'C1', label: 'C1', description: 'Advanced' },
  { id: 'C2', label: 'C2', description: 'Proficient' },
];

export const defaultLevel: CEFRLevel = 'A1';
