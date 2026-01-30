export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 pt-8 text-center dark:border-zinc-800">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Built with Next.js &middot;{" "}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
        >
          View on GitHub
        </a>
      </p>
    </footer>
  );
}
