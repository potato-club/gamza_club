export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
}
