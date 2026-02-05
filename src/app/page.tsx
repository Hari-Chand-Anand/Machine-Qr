import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-dvh flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-lg">
        <h1 className="text-2xl font-semibold">Machine QR System</h1>
        <p className="mt-2 text-sm text-zinc-300">
          Go to the admin panel to create machines and download QR codes.
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            href="/admin"
            className="inline-flex items-center justify-center rounded-xl bg-white text-zinc-950 px-4 py-3 font-medium w-full"
          >
            Open Admin
          </Link>
          <Link
            href="/m/demo-001"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-4 py-3 font-medium w-full"
          >
            Demo Landing
          </Link>
        </div>
      </div>
    </main>
  );
}
