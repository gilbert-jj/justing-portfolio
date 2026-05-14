import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {
  return (
    <div
className="min-h-screen bg-cover bg-right bg-no-repeat bg-zinc-100"  style={{
    backgroundImage: "url('/MercerGrad_Desktop.png')",
    backgroundPosition: "right center",
  }}
>
<main className="relative z-10 flex min-h-screen w-full max-w-7xl flex-col justify-center px-24">      
  
  <nav className="flex items-center justify-between py-8">

  <div className="flex gap-8 text-lg text-zinc-700">
    <Link href="/" className="hover:text-black transition">
      Home
    </Link>

    <Link href="/skills-experience" className="hover:text-black transition">
      Skills/Experience
    </Link>
  </div>
</nav>
  
    <div className="flex flex-col gap-8">
          <h1 className={`${playfair.className} max-w-4xl text-7xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50`}
>              Justin J. Gilbert          </h1>
              <p className="max-w-2xl text-2xl leading-10 tracking-wide text-zinc-700 font-light italic">
            Computer Science Graduate with Information Science and Technology Minor- focused on software development and problem solving.
           </p>
           <div className="mt-2 h-[2px] w-80 bg-black rounded-full" />
           <h2 className= "text-2xl font-semibold mt-16 mb-4">
            About Me: </h2>
            <p className="max-w-2xl text-xl leading-9 text-zinc-700">
             Motivated Computer Science graduate with experience in software development, tutoring, and collaborative problem solving. Strong foundation in programming, modern development tools, and AI-assisted workflows, with a proven ability to balance rigorous academics and collegiate athletics.
            </p>
            <h2 className= "text-2xl font-semibold mt-16 mb-4">
            Passions: </h2>
            <ul className="max-w-2xl text-xl leading-9 text-zinc-700">
  <li>Modern programming and web development</li>
  <li>How AI can transform technical workspaces and production</li>
  <li>The advancement of code development processes</li>
</ul>
            </div>
          <div className="flex gap-4 mt-16">
  <a
    href="https://github.com/gilbert-jj"
    target="_blank"
className="rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition hover:bg-zinc-800"  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/justin-gilbert-b94a38214/"
    target="_blank"
className="rounded-full border border-zinc-300 bg-white/70 px-8 py-4 text-lg font-medium text-zinc-800 transition hover:bg-white"  >
    LinkedIn
  </a>
</div>        
        
      </main>
    </div>
  );
}
