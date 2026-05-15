import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function SkillsProjects() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/SkillsBackground.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="min-h-screen bg-black/65">
        <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-24 pt-10 pb-24">
        {/* MAIN CONTAINER */}

          {/* NAVBAR */}
          <nav className="flex items-center justify-between border-b border-white/10 pb-6">
            <h2
              className={`${playfair.className} text-3xl text-white`}
            >
              Justin J. Gilbert
            </h2>

            <div className="flex gap-10 text-lg text-zinc-300">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/skills-projects"
                className="border-b border-white pb-1 text-white"
              >
                Skills § Projects
              </Link>
            </div>
          </nav>

          {/* HERO SECTION */}
          <section className="mt-20 max-w-4xl">
            <h1
              className={`${playfair.className} text-7xl font-semibold leading-tight tracking-tight`}
            >
              Skills & Projects
            </h1>

            <div className="mt-8 h-[2px] w-28 bg-white" />

            <p className="mt-8 max-w-2xl text-2xl leading-10 tracking-wide text-zinc-300 font-light italic">
              A summary of my technical skills, tools,
              and project experience.
            </p>
          </section>

          {/* SKILLS SECTION */}
          <section className="mt-28">
            <h2
              className={`${playfair.className} text-5xl`}
            >
              Skills
            </h2>

            <div className="mt-6 h-[1px] w-full bg-white/10" />

            {/* SKILL CARDS */}
            <div className="mt-12 grid grid-cols-4 gap-8">

              {/* CARD 1 */}
              <div className="rounded-3xl bg-black/30 border border-white/5 p-10 backdrop-blur-md transition hover:border-white/20">
                <h3 className="text-2xl font-semibold tracking-wide">
                  Languages
                </h3>

                <div className="mt-4 h-[2px] w-16 bg-white/40" />

                <ul className="mt-8 space-y-4 text-xl text-zinc-300">
                  <li>Java</li>
                  <li>C++</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>C#</li>
                </ul>
              </div>

              {/* CARD 2 */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md transition hover:border-white/20">
                <h3 className="text-3xl font-semibold">
                  Frameworks
                </h3>

                <div className="mt-4 h-[2px] w-16 bg-white/40" />

                <ul className="mt-8 space-y-4 text-xl text-zinc-300">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
              </div>

              {/* CARD 3 */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md transition hover:border-white/20">
                <h3 className="text-3xl font-semibold">
                  Tools
                </h3>

                <div className="mt-4 h-[2px] w-16 bg-white/40" />

                <ul className="mt-8 space-y-4 text-xl text-zinc-300">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>MS Office</li>
                  <li>Firebase</li>
                  <li>AutoCad</li>
                </ul>
              </div>

              {/* CARD 4 */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md transition hover:border-white/20">
                <h3 className="text-3xl font-semibold">
                  Concepts
                </h3>

                <div className="mt-4 h-[2px] w-16 bg-white/40" />

                <ul className="mt-8 space-y-4 text-xl text-zinc-300">
                  <li>OOP</li>
                  <li>File Structures</li>
                  <li>Algorithms</li>
                  <li>Database Design</li>
                  <li>REST APIs</li>
                  </ul>
              </div>

            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section className="mt-32 pb-32">
            <h2
              className={`${playfair.className} text-5xl`}
            >
              Projects
            </h2>

            <div className="mt-6 h-[1px] w-full bg-white/10" />

            {/* PROJECT CARDS */}
            <div className="mt-14 flex flex-col gap-10">

              {/* PROJECT 1 */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md">
                <div className="flex items-start justify-between">

                  <div>
                    <h3 className="text-3xl font-semibold">
                      Poker Game Engine
                    </h3>

                    <p className="mt-2 text-xl text-zinc-400">
                      Ruby, GitLab
                    </p>

                    <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-300">
                      Developed a multiplayer poker hand evaluation application that implemented ranking algorithms,
                      hand comparison logic, and automated winner determination. Built modular functions and extensive 
                      test cases to validate all possible hand combinations while collaborating in a GitLab-based team development environment.
                    </p>
                  </div>

                  <p className="text-lg text-zinc-500">
                   {/* 2024 - Present */}
                  </p>

                </div>
              </div>

              {/* PROJECT 2 */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md">
                <div className="flex items-start justify-between">

                  <div>
                    <h3 className="text-3xl font-semibold">
                      Full Stack Web Application
                    </h3>

                    <p className="mt-2 text-xl text-zinc-400">
                      React, Node.js, Firebase
                    </p>

                    <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-300">
                      Built and deployed a responsive full-stack web application using React for the frontend and Node.js 
                      for backend routing and functionality. Integrated Firebase authentication and real-time database storage 
                      to support dynamic user-driven content while improving UI/UX through reusable components, optimized performance, 
                      and streamlined development workflows using GitHub version control.
                    </p>
                  </div>

                  <p className="text-lg text-zinc-500">
                   {/* 2022 - 2024 */}
                  </p>

                </div>
              </div>

              {/* Project 3 */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md">
                <div className="flex items-start justify-between">

                  <div>
                    <h3 className="text-3xl font-semibold">
                      Portfolio Website
                    </h3>

                    <p className="mt-2 text-xl text-zinc-400">
                      Next.js, React, Tailwind CSS, JavaScript, Responsisve Design, GitHub, Vercel
                    </p>

                    <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-300">
                     Designed and deployed a modern responsive portfolio website using Next.js 
                     and Tailwind CSS to showcase technical projects, software development experience, 
                     and professional skills. Focused on clean UI/UX design, reusable component architecture, 
                     responsive layouts, and production deployment workflows through GitHub and Vercel.
                    </p>
                  </div>

                  <p className="text-lg text-zinc-500">
                   {/* Present */}
                  </p>

                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </div>
  );
}