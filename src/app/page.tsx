import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import meImage from "./images/me1.png";

const githubProjects = [
  {
    name: "Vault",
    tone: "vault",
    url: "https://github.com/kristianinc",
    summary: "Personal assistant that organizes my finances and tasks.",
  },
  {
    name: "ClosedClaw",
    tone: "closed-claw",
    url: "https://github.com/kristianinc",
    summary: "An AI powered Android Operating System on kernel level.",
  },
  {
    name: "e-Baluwa",
    tone: "e-baluwa",
    url: "https://github.com/kristianinc",
    summary: "A document certification and verification solution.",
  },
  {
    name: "Arbitrage Calculator",
    tone: "arbitrage-calculator",
    url: "https://github.com/kristianinc",
    summary: "A system for no-loss betting using a martingale system.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--surface)] text-[var(--ink)]">
      <div className="hero-aurora absolute inset-x-0 top-0 -z-10 h-[52rem]" />
      <div className="hero-glow absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-40" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-12 pt-6 sm:px-8 lg:px-12">
        <header className="sticky top-4 z-20 mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-[var(--line)] bg-[var(--glass)] px-5 py-3 backdrop-blur-xl shadow-[0_24px_50px_var(--shadow-soft)]">
          <div>
            <p className="text-sm font-semibold tracking-[0.04em] text-[var(--ink)] uppercase">
              Xankiiza
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold tracking-[0.04em] text-[var(--ink)] uppercase md:flex">
            <a href="#who-i-am" className="transition hover:text-[var(--ink)]">
              About
            </a>
            <a href="#top-projects" className="transition hover:text-[var(--ink)]">
              Work
            </a>
            <a href="#contact" className="transition hover:text-[var(--ink)]">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </header>

        <div className="grid flex-1 items-center gap-14 pb-10 pt-14 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:pt-20">
          <Reveal className="relative z-10 max-w-2xl">
            <div id="who-i-am" className="scroll-mt-28" />
            <p className="mb-5 text-sm font-semibold tracking-[0.04em] text-[var(--ink)] uppercase">
              Who I am
            </p>

            <p className="mt-6 max-w-xl text-base font-normal leading-7 text-[var(--muted)]">
              My name is Kiiza Christian. <br/> I am just an ordinary guy, who likes cool tech, cool projects, and learning more about tech.
            </p>

            <div id="top-projects" className="mt-12 scroll-mt-28">
              <p className="mb-4 text-sm font-semibold tracking-[0.04em] text-[var(--ink)] uppercase">
                Top Projects
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
              {githubProjects.map((project, index) => (
                <Reveal key={project.name} delay={120 + index * 120}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <div className={`project-card project-card--${project.tone} rounded-[1.75rem] bg-[var(--card)] p-5 backdrop-blur-xl`}>
                      <div className="flex items-center gap-2 text-[var(--muted)]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.34 2.74-1.06 2.74-1.06.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.96-2.33 4.82-4.56 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
                        </svg>
                        <span className="text-xs font-semibold tracking-[0.02em] text-[var(--ink)] uppercase">
                          {project.name}
                        </span>
                      </div>

                      <p className="mt-2 text-base font-normal leading-7 text-[var(--muted)]">
                        {project.summary}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://github.com/kristianinc"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--button-border)] bg-[var(--button-bg)] px-6 py-3 text-sm font-medium text-[var(--button-text)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_var(--button-shadow)]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.34 2.74-1.06 2.74-1.06.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.96-2.33 4.82-4.56 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
                  </svg>
                  GitHub
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M9 7h8v8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

              </div>
            </div>
          </Reveal>

          <Reveal className="relative z-0 mx-auto w-full max-w-2xl lg:pl-6" delay={120}>


            <div className="absolute -right-2 top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(174,255,210,0.5),_rgba(13,55,40,0)_70%)] blur-md" />

            <div className="hero-panel relative rounded-[2.5rem] border border-[var(--line)] p-4 shadow-[0_28px_80px_var(--shadow-soft)] backdrop-blur-2xl">
              <Image
                src={meImage}
                alt="Portrait of Kiiza Christian"
                width={1200}
                height={1400}
                priority
                className="hero-image h-auto w-full rounded-[2rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="w-full px-0 pb-0 pt-14">
        <Reveal>
          <div className="contact-shell overflow-hidden border-y border-[var(--line)] px-6 py-10 shadow-[0_28px_90px_var(--shadow-soft)] sm:px-8 lg:px-12 lg:py-14">
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.04em] text-[var(--ink)] uppercase">
                  Contact
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.05em] text-[var(--ink)] sm:text-4xl">
                  Let&apos;s talk.
                </h2>
                <p className="mt-5 max-w-2xl text-base font-normal leading-7 text-[var(--muted)]">
                  Open to cool ideas, projects, and conversations about tech.
                </p>
              </div>

              <div className="space-y-5 lg:pl-10">
                <div>
                  <p className="text-xs font-semibold tracking-[0.03em] text-[var(--ink)] uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:hello@kxstudio.dev"
                    className="mt-2 block text-base font-normal leading-7 text-[var(--muted)] transition hover:text-[var(--ink)]"
                  >
                    hello@xankiiza.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.03em] text-[var(--ink)] uppercase">
                    Location
                  </p>
                  <p className="mt-2 text-base font-normal leading-7 text-[var(--muted)]">
                    Kampala, Uganda
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center border-t border-[var(--line)] pt-5 text-center">
              <p className="text-sm text-[var(--muted)]">
                &copy; Christian Kiiza {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
