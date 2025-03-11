import Navbar from "@/components/Navbar";


export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <main className="font-work-sans">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
