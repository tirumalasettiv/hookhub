import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HookGrid } from "@/components/hooks/HookGrid";
import { CategoryFilter } from "@/components/hooks/CategoryFilter";
import hooksData from "@/data/hooks.json";
import type { Hook, Category } from "@/types/hook";

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const activeCategory = params.category as Category | undefined;

  const hooks: Hook[] = hooksData as Hook[];
  const filteredHooks = activeCategory
    ? hooks.filter((hook) => hook.category === activeCategory)
    : hooks;

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Header />
        <Suspense fallback={<div className="h-10" />}>
          <CategoryFilter />
        </Suspense>
        <HookGrid hooks={filteredHooks} />
        <Footer />
      </main>
    </div>
  );
}
