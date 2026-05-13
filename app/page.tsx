import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Justin J. Gilbert          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Computer Science Graduate and Information Science and Technology Minor focused on software development and problem solving.
            <br />
            <br />
            Passionate about modern web development, how AI can transform workspace and production, and the future of code development.
          </p>
        </div>
          <div className="flex gap-4 mt-6">
  <a
    href="https://github.com/gilbert-jj"
    target="_blank"
    className="rounded-full bg-black px-5 py-3 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/justin-gilbert-b94a38214/"
    target="_blank"
    className="rounded-full border border-zinc-400 px-5 py-3 transition hover:bg-zinc-100 dark:hover:bg-zinc-900"
  >
    LinkedIn
  </a>
</div>        
        
      </main>
    </div>
  );
}
