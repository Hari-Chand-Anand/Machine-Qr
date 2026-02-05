import Link from "next/link";
import { Card } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="min-h-dvh flex items-center justify-center p-6">
      <Card className="max-w-md w-full p-6">
        <h1 className="text-2xl font-semibold">Machine not found</h1>
        <p className="mt-2 text-sm text-zinc-300">
          This QR code does not match any machine entry in the system.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-white text-zinc-950 px-4 py-2 text-sm font-medium"
          >
            Go Home
          </Link>
        </div>
      </Card>
    </main>
  );
}
