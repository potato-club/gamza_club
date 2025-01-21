type DateType = {
  from: Date;
  to: Date;
};

export type PostForm = {
  zip: File;
  title: string;
  description: string;
  status: string;
  date: DateType;
  port: string;
  v_key: string | null;
  tag: string;
  collaborators: number[];
};

export type ModifyForm = {
  id: number;
  title: string;
  description: string;
  status: string;
  date: DateType;
  collaborators: number[];
};

export type AppModifyForm = {
  id: number;
  file: File;
  port: string;
  tag: string;
  v_key: string;
};
