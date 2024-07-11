export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-background min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
}
