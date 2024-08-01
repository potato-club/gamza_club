export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen flex flex-col gap-y-4 justify-center items-center">
      <img src="/Logo.svg" width={48} height={48} />
      {children}
    </div>
  );
}
