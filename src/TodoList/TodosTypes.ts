export interface TodoInputTypes {
  name: string;
  content: string;
}

export interface TodosTypes extends TodoInputTypes {
  id: number;
}
