export interface Tree {
    id: string;
    label: string;
    children?: Tree[];
    type: string;
  }