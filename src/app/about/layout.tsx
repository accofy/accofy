export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black text-white">
      About layout
      {children}
    </section>
  );
}
