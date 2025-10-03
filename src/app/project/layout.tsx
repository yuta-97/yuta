import Navigation from "@/components/Navigation";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">{children}</main>
    </div>
  );
}
