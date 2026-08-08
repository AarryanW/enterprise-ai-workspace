import Sidebar from "@/components/sidebar";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
