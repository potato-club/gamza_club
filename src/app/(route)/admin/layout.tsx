import Header from './_components/Header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen flex flex-col gap-y-4 justify-center items-center">
      <Header />
      {children}
    </div>
  );
}
