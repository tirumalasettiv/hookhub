import type { Hook } from "@/types/hook";
import { HookCard } from "./HookCard";

interface HookGridProps {
  hooks: Hook[];
}

export function HookGrid({ hooks }: HookGridProps) {
  if (hooks.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-zinc-500 dark:text-zinc-400">
          No hooks found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {hooks.map((hook) => (
        <HookCard key={hook.id} hook={hook} />
      ))}
    </div>
  );
}
