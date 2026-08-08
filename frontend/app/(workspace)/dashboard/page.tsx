export default function Dashboard() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Enterprise AI Workspace
      </h1>

      <p className="mt-2 text-zinc-400">
        Your documents, data, and AI assistant in one workspace.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">
            AI Chat
          </h2>

          <p className="mt-2 text-zinc-400">
            Ask questions and get answers from your documents.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">
            Upload Documents
          </h2>

          <p className="mt-2 text-zinc-400">
            Upload PDFs and datasets to your workspace.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">
            Data Analysis
          </h2>

          <p className="mt-2 text-zinc-400">
            Analyze CSV datasets and generate AI-powered insights.
          </p>
        </div>
      </div>
    </main>
  );
}