import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-xl font-bold mb-8">
        Enterprise AI
      </h1>

      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:text-zinc-400">
          Dashboard
        </Link>

        <Link href="/chat" className="block hover:text-zinc-400">
          AI Chat
        </Link>

        <Link href="/files" className="block hover:text-zinc-400">
          Files
        </Link>

        <Link href="/analytics" className="block hover:text-zinc-400">
          Analytics
        </Link>
      </nav>

      <Link
        href="/settings"
        className="block mt-8 hover:text-zinc-400"
      >
        Settings
      </Link>
    </aside>
  );
}