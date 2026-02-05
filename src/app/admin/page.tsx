import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card, Badge } from "@/components/ui";

export const runtime = "nodejs";

export default async function AdminListPage() {
  const machines = await prisma.machine.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Machines</h1>
          <p className="text-sm text-zinc-300">
            Create machine entries, then download printable QR codes.
          </p>
        </div>

        <Link
          href="/admin/new"
          className="inline-flex items-center justify-center rounded-xl bg-white text-zinc-950 px-4 py-2 text-sm font-medium"
        >
          + Add Machine
        </Link>
      </div>

      {machines.length === 0 ? (
        <Card className="p-6">
          <p className="text-zinc-200">No machines yet.</p>
          <p className="mt-1 text-sm text-zinc-400">
            Click <span className="text-white">Add Machine</span> to create your first one.
          </p>
        </Card>
      ) : (
        <div className="grid gap-3">
          {machines.map((m) => (
            <Link
              key={m.id}
              href={`/admin/${m.id}`}
              className="block rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/60 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold">{m.name}</div>
                  <div className="mt-1 text-sm text-zinc-300">
                    Machine ID: <span className="text-white font-medium">{m.machineId}</span>
                  </div>
                </div>
                <Badge>Open</Badge>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
