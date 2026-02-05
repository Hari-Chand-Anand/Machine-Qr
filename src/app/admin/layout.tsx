import Link from "next/link";
import { envPublic } from "@/lib/env";


export const runtime = "nodejs";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link href="/admin" className="font-semibold">
            {envPublic.companyName} • Admin
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-sm text-zinc-300 hover:text-white"
            >
              Home
            </Link>
            <form action="/api/auth/logout" method="post">
              <button className="text-sm text-zinc-300 hover:text-white">
                Logout
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
    </div>
  );
}
