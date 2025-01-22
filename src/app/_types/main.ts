export type List = {
  size: number;
  contents: Item[];
};

export type Item = {
  id: number;
  name: string;
  description: string;
  state: 'PLAN' | 'PROGRESS' | 'DONE';
  startedDate: string;
  endedDate: string;
  isCollaborator: boolean;
  route: string;
};
