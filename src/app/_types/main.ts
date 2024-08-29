export type List = {
  title: string;
  describe: string;
  status: 'plan' | 'progress' | 'complete';
  content: string;
  footer: string;
};
