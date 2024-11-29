export type PostForm = {
  zip: File;
  title: string;
  description: string;
  status: string;
  date: DateType;
  port: string;
  v_key: string | null;
  tag: string;
};

type DateType = {
  from: Date;
  to: Date;
};
