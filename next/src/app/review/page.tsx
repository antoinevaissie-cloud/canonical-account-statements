import { prismaClient } from "@/lib/prisma";
import { startOfMonth, format, subMonths } from "date-fns";
import { revalidatePath } from "next/cache";
import ReviewEditor from "@/components/ReviewEditor";

async function saveReview(formData: FormData) {
  "use server";
  const monthStr = String(formData.get("month") || "");
  const content = String(formData.get("content") || "");
  if (!monthStr) return;
  const month = startOfMonth(new Date(monthStr));
  await prismaClient.reviewNote.upsert({
    where: { month },
    update: { content },
    create: { month, content },
  });
  revalidatePath("/review");
}

export default async function ReviewPage(props: { searchParams?: Promise<Record<string, string | string[] | undefined>> }) {
  const searchParams = (await props.searchParams) ?? {};
  const monthParam = String(searchParams?.month ?? "");
  const today = new Date();
  const defaultMonth = startOfMonth(subMonths(today, 1));
  const selectedMonth = monthParam ? new Date(monthParam) : defaultMonth;
  const monthStart = startOfMonth(selectedMonth);
  const monthValue = format(monthStart, "yyyy-MM");
  const title = `Notes on ${format(monthStart, "LLLL yyyy")}`;

  const existing = await prismaClient.reviewNote.findUnique({ where: { month: monthStart } });
  const content = existing?.content ?? "- ";
  const allNotes = await prismaClient.reviewNote.findMany({ orderBy: { month: 'desc' } });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <form method="get" className="flex items-center gap-2">
          <input type="month" name="month" defaultValue={monthValue} className="rounded border px-2 py-1" />
          <button className="rounded bg-blue-600 px-3 py-1 text-white">Load</button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ReviewEditor monthValue={monthValue} initial={content} action={saveReview} />
        </div>
        <aside className="md:col-span-1">
          <div className="rounded border bg-white">
            <div className="border-b px-3 py-2 font-medium">Past Notes</div>
            <ul className="divide-y text-sm">
              {allNotes.length === 0 && (
                <li className="px-3 py-2 text-gray-500">No notes yet</li>
              )}
              {allNotes.map(n => (
                <li key={n.id} className="px-3 py-2">
                  <a className="text-blue-700 hover:underline" href={`/review?month=${format(n.month, 'yyyy-MM')}`}>
                    {format(n.month, 'LLL yyyy')}
                  </a>
                  {n.content && (
                    <div className="mt-1 text-gray-600 whitespace-pre-wrap">{n.content.slice(0, 160)}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
