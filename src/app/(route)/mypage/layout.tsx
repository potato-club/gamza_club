import Image from 'next/image';

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen flex flex-col gap-y-4 justify-center items-center">
      <header>
        <Image src="/Logo.svg" width={48} height={48} alt="gamza" />
      </header>
      <main className="w-full h-[520px] flex justify-center items-center">
        {children}
      </main>
    </div>
  );
}
