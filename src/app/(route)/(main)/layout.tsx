import Header from '@/app/_components/client/Header/Header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-background min-h-screen flex flex-col items-center">
      <Header />
      {children}
    </div>
  );
}
