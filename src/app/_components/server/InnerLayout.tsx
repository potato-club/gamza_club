interface Props {
  content: React.ReactNode;
  title: string;
}
const InnerLayout = ({ content, title }: Props) => {
  return (
    <div className="flex justify-center items-center gap-x-10 w-full h-[41px]">
      <span className="w-[88px] font-normal text-[rgba(0,0,0,0.6)] text-sm">
        {title}
      </span>
      {content}
    </div>
  );
};

export default InnerLayout;
