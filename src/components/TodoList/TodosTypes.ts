export interface TodoInputTypes {
  name: string;
  content: string;
}

export interface TodosTypes extends TodoInputTypes {
  id?: string | undefined;
  date: number;
  done: boolean;
}
