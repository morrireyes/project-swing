"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type IconProps = { className?: string };

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function IconFlag({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M6 3v18M6 4h10l-2 4 2 4H6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSpark({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M12 2l1.2 4.3L17.5 8l-4.3 1.2L12 13.5l-1.2-4.3L6.5 8l4.3-1.7L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M19 12l.7 2.4L22 15l-2.3.6L19 18l-.7-2.4L16 15l2.3-.6L19 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

function IconCoach({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 21a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18.5 6.5 22 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCalendar({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M8 2v3M16 2v3M4.5 8.5h15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h8M8 16h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

function IconWrench({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M10 14 4 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14.5 4.5a5 5 0 0 0 6.3 6.3L16 15.6a2.2 2.2 0 0 1-3.1 0l-4.5-4.5a2.2 2.2 0 0 1 0-3.1l4.8-4.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChart({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M4 20V6M4 20h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16v-5M12 16V8M16 16v-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 11l4-3 4 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

function useTypewriter(text: string, opts?: { startDelayMs?: number; speedMs?: number }) {
  const startDelayMs = opts?.startDelayMs ?? 450;
  const speedMs = opts?.speedMs ?? 34;
  const [shown, setShown] = useState("");

  useEffect(() => {
    let cancelled = false;
    let timeout: number | undefined;
    let interval: number | undefined;

    setShown("");
    timeout = window.setTimeout(() => {
      let i = 0;
      interval = window.setInterval(() => {
        if (cancelled) return;
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          if (interval) window.clearInterval(interval);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      cancelled = true;
      if (timeout) window.clearTimeout(timeout);
      if (interval) window.clearInterval(interval);
    };
  }, [text, startDelayMs, speedMs]);

  return shown;
}

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [entered, setEntered] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const typed = useTypewriter("Golf. Reimagined Indoors.", { startDelayMs: 550, speedMs: 34 });

  useEffect(() => {
    const id = window.setTimeout(() => setEntered(true), 60);
    return () => window.clearTimeout(id);
  }, []);

  const services = useMemo(
    () => [
      {
        title: "Regular Bay",
        price: "₱700/hr (+₱300/extra person)",
        desc: "Open-concept bay designed for fun, comfort, and great swings. Good for 2 people (3rd player allowed with additional fee).",
        Icon: IconFlag,
      },
      {
        title: "VIP Room",
        price: "₱1,200/hr (+₱350/extra person)",
        desc: "Fully private enclosed suite with a premium ambiance—ideal for celebrations, meetings, and special events. Capacity: good for 6 people.",
        Icon: IconSpark,
      },
      {
        title: "Golf Lesson Membership",
        price: "₱12,999 (1 month)",
        desc: "Train with a coach and build your game using simulator data and structured sessions—designed for consistent progress.",
        Icon: IconCoach,
      },
    ],
    [],
  );

  const steps = useMemo(
    () => [
      { title: "Book a Bay", desc: "Choose a time, package, and add-ons in under a minute.", Icon: IconCalendar },
      { title: "Arrive and Set Up", desc: "We’ll get you dialed—clubs, tee height, and goals.", Icon: IconWrench },
      { title: "Play and Track Your Game", desc: "See every shot with carry, spin, and dispersion insights.", Icon: IconChart },
    ],
    [],
  );

  const testimonials = useMemo(
    () => [
      {
        quote:
          "It feels like a private club—quiet, polished, and the tracking is unreal. We booked one hour and stayed for two.",
        name: "Maya R.",
        meta: "Regular Bay",
      },
      {
        quote:
          "We hosted a client night here and it was flawless. Great drinks, zero stress, and everyone actually played.",
        name: "Jordan K.",
        meta: "VIP Room",
      },
      {
        quote:
          "My coach pinpointed my face-to-path issues instantly. The numbers made the changes click in one session.",
        name: "Elliot S.",
        meta: "Golf Lesson Membership",
      },
    ],
    [],
  );

  function onMove(e: React.MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x, y });
  }

  function onLeave() {
    setParallax({ x: 0, y: 0 });
  }

  const parallaxStyle = {
    transform: `translate3d(${parallax.x * 10}px, ${parallax.y * 10}px, 0)`,
  } satisfies React.CSSProperties;

  return (
    <div
      className="min-h-screen bg-[#070d0a] text-zinc-100 selection:bg-[#d6b25e]/30 selection:text-zinc-50"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_20%_0%,rgba(214,178,94,0.18),transparent_60%),radial-gradient(900px_650px_at_100%_20%,rgba(16,185,129,0.14),transparent_55%),radial-gradient(900px_600px_at_30%_100%,rgba(34,197,94,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(214,178,94,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,178,94,0.18)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div
          className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl will-change-transform"
          style={{
            ...parallaxStyle,
            animation: "floatA 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-24 right-[-12%] h-[460px] w-[460px] rounded-full bg-[#d6b25e]/10 blur-3xl will-change-transform"
          style={{
            transform: `translate3d(${parallax.x * -14}px, ${parallax.y * -14}px, 0)`,
            animation: "floatB 14s ease-in-out infinite",
          }}
        />
      </div>

      <header className="relative z-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#d6b25e]/20 bg-black/20">
              <span className="text-sm font-semibold tracking-[0.22em] text-[#d6b25e]">FC</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide text-zinc-50">The Fairway Club</div>
              <div className="text-xs text-zinc-400">Indoor simulator lounge</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#services" className="transition-colors hover:text-zinc-50">
              Services
            </a>
            <a href="#how" className="transition-colors hover:text-zinc-50">
              How it works
            </a>
            <a href="#testimonials" className="transition-colors hover:text-zinc-50">
              Reviews
            </a>
            <a href="#book" className="transition-colors hover:text-zinc-50">
              Book
            </a>
          </nav>
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-[#d6b25e] px-4 py-2 text-sm font-semibold text-black shadow-[0_18px_50px_-25px_rgba(214,178,94,0.9)] transition hover:bg-[#e2c371] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b25e]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070d0a]"
          >
            Book a Bay
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section
          ref={heroRef}
          className={cn(
            "mx-auto w-full max-w-6xl px-6 pb-10 pt-10 sm:px-8 sm:pt-14 md:pb-16",
            "transition-all duration-1000 ease-out",
            entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
        >
          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b25e]/20 bg-black/20 px-3 py-1 text-xs font-medium text-zinc-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                Premium bays • Tour-grade tracking • Lounge service
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
                <span className="text-[#d6b25e]">The Fairway Club</span>
                <span className="block pt-3">
                  <span className="relative">
                    {typed}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "ml-1 inline-block h-[1.05em] w-[2px] translate-y-[2px] bg-[#d6b25e]/80",
                        typed.length >= "Golf. Reimagined Indoors.".length ? "animate-pulse" : "animate-pulse",
                      )}
                    />
                  </span>
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-300">
                A high-end indoor golf simulator lounge built for clean vibes, crisp data, and unforgettable rounds—
                rain or shine.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center rounded-full bg-[#d6b25e] px-6 py-3 text-sm font-semibold text-black shadow-[0_22px_60px_-28px_rgba(214,178,94,0.95)] transition hover:bg-[#e2c371] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b25e]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070d0a]"
                >
                  Book a Bay
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070d0a]"
                >
                  Explore services
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-xs text-zinc-300/90">
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Ultra-quiet bays</div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Leather lounge seating</div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Shot replay + analytics</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#d6b25e]/15 via-emerald-400/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold text-zinc-50">Tonight’s vibe</div>
                    <div className="mt-1 text-xs text-zinc-400">Modern lounge • Quiet confidence</div>
                  </div>
                  <div className="rounded-full border border-[#d6b25e]/20 bg-[#d6b25e]/10 px-3 py-1 text-xs font-medium text-[#e8d49c]">
                    Open 10a–11p
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-zinc-50">Launch Monitor</div>
                      <div className="text-xs text-zinc-400">Tour-grade</div>
                    </div>
                    <div className="mt-2 text-xs text-zinc-300">
                      Carry • Spin • Club path • Face angle • Dispersion
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-zinc-50">Courses</div>
                      <div className="text-xs text-zinc-400">Global</div>
                    </div>
                    <div className="mt-2 text-xs text-zinc-300">
                      Play bucket-list layouts with smooth visuals and instant replay.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-zinc-50">Comfort</div>
                      <div className="text-xs text-zinc-400">Premium</div>
                    </div>
                    <div className="mt-2 text-xs text-zinc-300">
                      Dim lighting, refined finishes, and service that stays out of the way.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">Bays & packages</h2>
            <p className="max-w-2xl text-sm leading-6 text-zinc-300">
              Choose your pace—casual rounds, elevated events, or coaching with data-forward feedback.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map(({ title, price, desc, Icon }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/7"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute -top-20 left-10 h-52 w-52 rounded-full bg-[#d6b25e]/10 blur-3xl" />
                  <div className="absolute -bottom-20 right-10 h-52 w-52 rounded-full bg-emerald-400/10 blur-3xl" />
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#d6b25e]/20 bg-black/20 text-[#e8d49c]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-zinc-100">
                      {price}
                    </div>
                  </div>
                  <div className="mt-5 text-lg font-semibold text-zinc-50">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-zinc-300">{desc}</div>
                  <a
                    href="#book"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d6b25e] transition hover:text-[#e2c371]"
                  >
                    Book this
                    <span aria-hidden="true" className="translate-y-[-1px]">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
          <div className="grid gap-10 rounded-3xl border border-white/10 bg-black/20 px-6 py-10 backdrop-blur sm:px-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">How it works</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Simple from reservation to final putt. We’ll keep it seamless—so you can stay in the zone.
              </p>
            </div>
            <div className="grid gap-4">
              {steps.map(({ title, desc, Icon }, idx) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="grid h-11 w-11 flex-none place-items-center rounded-2xl border border-[#d6b25e]/20 bg-black/20 text-[#e8d49c]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-semibold text-zinc-50">
                        <span className="text-[#d6b25e]">{idx + 1}.</span> {title}
                      </div>
                    </div>
                    <div className="mt-1 text-sm leading-6 text-zinc-300">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">What guests say</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
                Premium feel. Real data. A space that makes you want to come back.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute -top-24 left-6 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
                </div>
                <div className="relative">
                  <div className="text-sm leading-7 text-zinc-200">“{t.quote}”</div>
                  <figcaption className="mt-6 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-zinc-50">{t.name}</div>
                      <div className="text-xs text-zinc-400">{t.meta}</div>
                    </div>
                    <div className="text-xs font-semibold text-[#e8d49c]">★★★★★</div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* Contact / Booking */}
        <section id="book" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-14 sm:px-8">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur sm:p-10 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">Contact & booking</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Reserve a bay, plan a private event, or ask about coaching. We’ll respond quickly.
              </p>

              <div className="mt-7 grid gap-4 text-sm text-zinc-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold tracking-wide text-zinc-400">Address</div>
                  <div className="mt-1 font-medium text-zinc-50">1440 Greenline Ave, Suite 12, Portland, OR</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold tracking-wide text-zinc-400">Phone</div>
                  <div className="mt-1 font-medium text-zinc-50">(503) 555-0199</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold tracking-wide text-zinc-400">Hours</div>
                  <div className="mt-1 font-medium text-zinc-50">Daily 10:00am – 11:00pm</div>
                </div>
              </div>
            </div>

            <form
              className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = String(fd.get("name") ?? "");
                window.alert(`Thanks${name ? `, ${name}` : ""}! We’ll reach out shortly to confirm your booking.`);
                e.currentTarget.reset();
              }}
            >
              <div className="grid gap-4">
                <div className="grid gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold tracking-wide text-zinc-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-zinc-50 placeholder:text-zinc-500 outline-none transition focus:border-[#d6b25e]/50 focus:ring-2 focus:ring-[#d6b25e]/20"
                  />
                </div>

                <div className="grid gap-1.5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold tracking-wide text-zinc-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-zinc-50 placeholder:text-zinc-500 outline-none transition focus:border-[#d6b25e]/50 focus:ring-2 focus:ring-[#d6b25e]/20"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold tracking-wide text-zinc-300">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="(555) 123-4567"
                      className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-zinc-50 placeholder:text-zinc-500 outline-none transition focus:border-[#d6b25e]/50 focus:ring-2 focus:ring-[#d6b25e]/20"
                    />
                  </div>
                </div>

                <div className="grid gap-1.5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <label htmlFor="service" className="text-xs font-semibold tracking-wide text-zinc-300">
                      Package
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-zinc-50 outline-none transition focus:border-[#d6b25e]/50 focus:ring-2 focus:ring-[#d6b25e]/20"
                      defaultValue="Regular Bay"
                    >
                      <option>Regular Bay</option>
                      <option>VIP Room</option>
                      <option>Golf Lesson Membership</option>
                    </select>
                  </div>
                  <div className="grid gap-1.5">
                    <label htmlFor="date" className="text-xs font-semibold tracking-wide text-zinc-300">
                      Preferred date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-zinc-50 outline-none transition focus:border-[#d6b25e]/50 focus:ring-2 focus:ring-[#d6b25e]/20"
                    />
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold tracking-wide text-zinc-300">
                    Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Anything we should know? (Lefty setup, group size, coaching goals, etc.)"
                    className="resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-50 placeholder:text-zinc-500 outline-none transition focus:border-[#d6b25e]/50 focus:ring-2 focus:ring-[#d6b25e]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex h-11 items-center justify-center rounded-xl bg-[#d6b25e] px-5 text-sm font-semibold text-black shadow-[0_20px_55px_-30px_rgba(214,178,94,1)] transition hover:bg-[#e2c371] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b25e]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070d0a]"
                >
                  Request booking
                </button>

                <p className="text-xs leading-5 text-zinc-400">
                  By submitting, you’re requesting a reservation. We’ll confirm availability by email or phone.
                </p>
              </div>
            </form>
          </div>
        </section>

        <footer className="mx-auto w-full max-w-6xl px-6 pb-10 sm:px-8">
          <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-zinc-200">The Fairway Club</span> • Indoor simulator lounge
            </div>
            <div className="flex items-center gap-4">
              <a href="#services" className="transition hover:text-zinc-200">
                Services
              </a>
              <a href="#how" className="transition hover:text-zinc-200">
                How it works
              </a>
              <a href="#book" className="transition hover:text-zinc-200">
                Book
              </a>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes floatA {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(14px, 18px, 0);
          }
        }
        @keyframes floatB {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-16px, 10px, 0);
          }
        }
      `}</style>
    </div>
  );
}
