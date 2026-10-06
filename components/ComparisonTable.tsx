import { Fragment } from "react";
import { clsx } from "clsx";
import { Check, Minus } from "lucide-react";
import type { MatrixGroup } from "@/data/membership";

type Column = { name: string; sub?: string; highlight?: boolean };

function CellValue({ v }: { v: string | boolean }) {
  if (v === true)
    return (
      <span className="inline-flex items-center gap-1.5 text-brand-600">
        <Check className="h-5 w-5" aria-hidden />
        <span className="sr-only">Included</span>
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex text-ink-muted/50">
        <Minus className="h-5 w-5" aria-hidden />
        <span className="sr-only">Not included</span>
      </span>
    );
  return <span className="text-sm font-medium text-ink-strong">{v}</span>;
}

export function ComparisonTable({ columns, groups, caption }: { columns: Column[]; groups: MatrixGroup[]; caption: string }) {
  return (
    <div className="relative overflow-x-auto rounded-2xl border border-line bg-white shadow-card">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className="sticky left-0 z-10 w-[34%] bg-white p-5 align-bottom text-sm font-medium text-ink-muted">
              What's included
            </th>
            {columns.map((c) => (
              <th
                key={c.name}
                scope="col"
                className={clsx("p-5 align-bottom", c.highlight && "bg-navy-900")}
              >
                <span className={clsx("block text-base font-semibold", c.highlight ? "text-white" : "text-ink-strong")}>{c.name}</span>
                {c.sub && <span className={clsx("mt-0.5 block text-xs font-normal", c.highlight ? "text-brand-200" : "text-ink-muted")}>{c.sub}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groups.map((g) => (
            <Fragment key={g.title}>
              <tr>
                <th
                  colSpan={columns.length + 1}
                  scope="colgroup"
                  className="border-t border-line bg-paper px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700"
                >
                  {g.title}
                </th>
              </tr>
              {g.rows.map((r) => (
                <tr key={r.label} className="border-t border-line/70">
                  <th scope="row" className="sticky left-0 z-10 bg-white p-5 align-top font-normal">
                    <span className="block text-[15px] text-ink-strong">{r.label}</span>
                    {r.hint && <span className="mt-0.5 block text-xs text-ink-muted">{r.hint}</span>}
                  </th>
                  {r.values.map((v, i) => (
                    <td key={i} className={clsx("p-5 align-top", columns[i]?.highlight && "bg-brand-50/60")}>
                      <CellValue v={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
