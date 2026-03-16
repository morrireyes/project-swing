"use client";

import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
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

function useWordReveal(words: string[], opts?: { startDelayMs?: number; wordEveryMs?: number }) {
  const startDelayMs = opts?.startDelayMs ?? 250;
  const wordEveryMs = opts?.wordEveryMs ?? 120;
  const [shownCount, setShownCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let timeout: number | undefined;
    let interval: number | undefined;

    setShownCount(0);
    timeout = window.setTimeout(() => {
      let i = 0;
      interval = window.setInterval(() => {
        if (cancelled) return;
        i += 1;
        setShownCount(i);
        if (i >= words.length) {
          if (interval) window.clearInterval(interval);
        }
      }, wordEveryMs);
    }, startDelayMs);

    return () => {
      cancelled = true;
      if (timeout) window.clearTimeout(timeout);
      if (interval) window.clearInterval(interval);
    };
  }, [startDelayMs, wordEveryMs, words]);

  return shownCount;
}

function PremiumCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let running = true;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const isHoverTarget = (el: Element | null) => {
      if (!el) return false;
      return Boolean(
        el.closest(
          'a, button, input, select, textarea, [role="button"], [data-cursor="hover"]',
        ),
      );
    };

    const onOver = (e: MouseEvent) => {
      hovering = isHoverTarget(e.target as Element | null);
      ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.25 : 0.7})`;
      ring.style.opacity = hovering ? "0.35" : "0.18";
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${hovering ? 0.0 : 1})`;
      dot.style.opacity = hovering ? "0" : "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    const tick = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${hovering ? 0.0 : 1})`;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.25 : 0.7})`;
      if (running) window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);

    return () => {
      running = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] h-10 w-10 rounded-full border border-[#f5a623]/60 bg-[#f5a623]/10 opacity-20 backdrop-blur-sm transition-[opacity] duration-150"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[61] h-2 w-2 rounded-full bg-[#f5a623]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const statsRef = useRef<HTMLElement | null>(null);
  const [entered, setEntered] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [navOpen, setNavOpen] = useState(false);
  const [enableCursor, setEnableCursor] = useState(false);
  const heroWords = useMemo(() => ["CEBU'S", "FIRST", "TRACKMAN", "FACILITY."], []);
  const revealed = useWordReveal(heroWords, { startDelayMs: 260, wordEveryMs: 120 });
  const [statsActive, setStatsActive] = useState(false);
  const [stats, setStats] = useState({ members: 0, bays: 0, courses: 0 });

  useEffect(() => {
    const id = window.setTimeout(() => setEntered(true), 60);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mqPointerFine = window.matchMedia("(pointer: fine)");
    const mqMinLg = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      setEnableCursor(mqPointerFine.matches && mqMinLg.matches);
    };

    update();
    mqPointerFine.addEventListener("change", update);
    mqMinLg.addEventListener("change", update);

    return () => {
      mqPointerFine.removeEventListener("change", update);
      mqMinLg.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add("is-revealed");
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!statsActive) return;
    let raf = 0;
    const start = performance.now();
    const duration = 950;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const k = easeOutCubic(t);
      setStats({
        members: Math.round(50 * k),
        bays: Math.round(2 * k),
        courses: Math.round(200 * k),
      });
      if (t < 1) raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [statsActive]);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setStatsActive(true);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
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

  function onMove(e: ReactMouseEvent) {
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
  } satisfies CSSProperties;

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#f5a623]/30 selection:text-white lg:cursor-none"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {enableCursor ? <PremiumCursor /> : null}
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_35%,rgba(0,255,135,0.14),transparent_58%),radial-gradient(1200px_700px_at_20%_0%,rgba(245,166,35,0.16),transparent_62%),radial-gradient(900px_650px_at_100%_20%,rgba(0,255,135,0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(245,166,35,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,166,35,0.22)_1px,transparent_1px)] [background-size:92px_92px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/70" />
        <div
          className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl will-change-transform"
          style={{
            ...parallaxStyle,
            animation: "floatA 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-24 right-[-12%] h-[460px] w-[460px] rounded-full bg-[#f5a623]/10 blur-3xl will-change-transform"
          style={{
            transform: `translate3d(${parallax.x * -14}px, ${parallax.y * -14}px, 0)`,
            animation: "floatB 14s ease-in-out infinite",
          }}
        />
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay [background-image:var(--noise)]" />
      </div>

      <header className="relative z-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-8 md:py-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.06] bg-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <span className="font-[var(--font-display)] text-sm font-black tracking-[0.22em] text-[#f5a623]">
                iS
              </span>
            </div>
            <div className="leading-tight">
              <div className="font-[var(--font-display)] text-sm font-black tracking-[0.16em] text-white uppercase">
                iSwing PH
              </div>
              <div className="text-xs uppercase tracking-widest text-[#a0a0a0]">
                Trackman indoor golf lounge
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#a0a0a0] md:flex">
            <a
              href="#services"
              className="relative transition-colors hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#f5a623] after:transition-transform hover:after:scale-x-100"
            >
              Services
            </a>
            <a
              href="#how"
              className="relative transition-colors hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#f5a623] after:transition-transform hover:after:scale-x-100"
            >
              Technology
            </a>
            <a
              href="#testimonials"
              className="relative transition-colors hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#f5a623] after:transition-transform hover:after:scale-x-100"
            >
              Reviews
            </a>
            <a
              href="#book"
              className="relative transition-colors hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#f5a623] after:transition-transform hover:after:scale-x-100"
            >
              Book
            </a>
          </nav>
          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((v) => !v)}
            className="relative z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 md:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full bg-white transition-transform duration-200",
                  navOpen ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full bg-white transition-opacity duration-150",
                  navOpen ? "top-1.5 opacity-0" : "top-1.5 opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full bg-white transition-transform duration-200",
                  navOpen ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
          <a
            href="#book"
            data-cursor="hover"
            className="group relative hidden items-center justify-center overflow-hidden rounded-full border border-[#f5a623]/40 bg-transparent px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_60px_-30px_rgba(245,166,35,0.55)] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5a623]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:inline-flex"
          >
            <span className="absolute inset-0 -translate-x-full bg-[#f5a623] transition-transform duration-300 ease-out group-hover:translate-x-0" />
            <span className="relative mix-blend-normal group-hover:text-black">Book a bay</span>
          </a>
        </div>
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <div className="h-px w-full bg-[#f5a623]/60" />
        </div>

        {/* Mobile nav menu */}
        {navOpen ? (
          <div className="fixed inset-0 z-[9999] flex flex-col bg-[#0a0a0a] px-6 pb-10 pt-6 sm:px-8 md:hidden animate-mobileMenuIn">
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setNavOpen(false)}
              className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40"
            >
              <span className="relative block h-3.5 w-3.5">
                <span className="absolute left-0 top-1.5 h-0.5 w-full -rotate-45 bg-white" />
                <span className="absolute left-0 top-1.5 h-0.5 w-full rotate-45 bg-white" />
              </span>
            </button>
            <nav className="flex flex-1 items-center justify-center">
              <ul className="flex flex-col items-center gap-6 text-2xl font-[var(--font-display)] font-black uppercase tracking-[0.22em] text-white">
                {[
                  { href: "#services", label: "Services" },
                  { href: "#how", label: "Technology" },
                  { href: "#testimonials", label: "Reviews" },
                  { href: "#book", label: "Book" },
                  { href: "#book", label: "Book a bay" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setNavOpen(false)}
                      className="group relative inline-flex items-center gap-3"
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden="true"
                        className="h-px w-10 origin-left scale-x-0 bg-[#f5a623] transition-transform duration-200 group-hover:scale-x-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : null}
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section
          ref={heroRef}
          className={cn(
            "mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-14 md:pb-16",
            "transition-all duration-1000 ease-out",
            entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
        >
          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00ff87]/80 shadow-[0_0_20px_rgba(0,255,135,0.35)]" />
                The first-ever full Trackman facility in Cebu
              </div>

              <h1 className="mt-6 font-[var(--font-display)] text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block">
                  <span className={cn("inline-block will-change-transform", revealed >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")}>
                    {heroWords[0]}
                  </span>{" "}
                  <span
                    className={cn(
                      "inline-block will-change-transform transition-all duration-300",
                      revealed >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                    )}
                  >
                    {heroWords[1]}
                  </span>
                </span>
                <span className="block pt-2 text-[#f5a623] [text-shadow:0_0_40px_rgba(245,166,35,0.15)]">
                  <span
                    className={cn(
                      "inline-block will-change-transform transition-all duration-300",
                      revealed >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                    )}
                  >
                    {heroWords[2]}
                  </span>{" "}
                  <span
                    className={cn(
                      "inline-block will-change-transform transition-all duration-300",
                      revealed >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                    )}
                  >
                    {heroWords[3]}
                  </span>
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-[#a0a0a0]">
                Cebu’s newest indoor golf & lifestyle hub, powered by Trackman—premium bays, crisp data, and a lounge
                experience built for serious energy.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#book"
                  data-cursor="hover"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-transparent px-7 py-3 text-xs font-black uppercase tracking-[0.22em] text-white shadow-[0_24px_70px_-34px_rgba(245,166,35,0.9)] ring-1 ring-[#f5a623]/40 transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5a623]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] animate-[ctaPulse_2.6s_ease-in-out_infinite] sm:w-auto"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[#f5a623] transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  <span className="relative group-hover:text-black">Book your session</span>
                </a>
                <a
                  href="#services"
                  data-cursor="hover"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-7 py-3 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:w-auto"
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  <span className="relative">Explore packages</span>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Trackman iO</div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">VIP suites + bays</div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Saved shots in app</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#f5a623]/18 via-[#00ff87]/12 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                      Technology
                    </div>
                    <div className="mt-2 font-[var(--font-display)] text-2xl font-black uppercase tracking-tight text-white">
                      Track. Analyze. Repeat.
                    </div>
                  </div>
                  <div className="rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f5a623]">
                    Open 10a–11p
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <div className="flex items-center justify-between">
                      <div className="font-[var(--font-display)] text-lg font-black uppercase tracking-tight text-white">
                        Trackman iO
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                        Tour-grade
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-[#a0a0a0]">
                      Carry • Spin • Club path • Face angle • Dispersion
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <div className="flex items-center justify-between">
                      <div className="font-[var(--font-display)] text-lg font-black uppercase tracking-tight text-white">
                        Range + courses
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                        Global
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-[#a0a0a0]">
                      Play bucket-list layouts with smooth visuals and instant replay.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <div className="flex items-center justify-between">
                      <div className="font-[var(--font-display)] text-lg font-black uppercase tracking-tight text-white">
                        Lounge
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                        Premium
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-[#a0a0a0]">
                      Dim lighting, refined finishes, and service that stays out of the way.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagonal divider */}
        <div aria-hidden="true" className="relative z-10">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
            <div className="h-px w-full bg-[#f5a623]/60" />
          </div>
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
            <div
              className="h-10 w-full bg-[#0f0f0f]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 100%)" }}
            />
          </div>
        </div>

        {/* Stats */}
        <section
          className="mx-auto w-full max-w-6xl bg-[#0f0f0f] px-4 py-12 sm:px-6 md:px-8 md:py-14"
          data-reveal
          ref={statsRef}
        >
          <div className="grid gap-10 md:grid-cols-[0.6fr_0.4fr] md:items-end">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">Performance</div>
              <h2 className="mt-3 font-[var(--font-display)] text-5xl font-black uppercase tracking-tighter text-white sm:text-6xl">
                Numbers that hit harder.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#a0a0a0]">
                Athletic energy, premium finish. Train with real data and save every swing in the Trackman Golf app.
              </p>
            </div>
            <div className="rounded-3xl border border-white/[0.06] bg-black/30 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                Limited offer
              </div>
              <div className="mt-3 font-[var(--font-display)] text-3xl font-black uppercase tracking-tight text-white">
                First 50 persons only.
              </div>
              <a
                href="#book"
                data-cursor="hover"
                className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-[#f5a623]/35 bg-transparent px-4 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#f5a623] hover:text-black"
              >
                Inquire now
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-[#f5a623]/60 pt-10 md:grid-cols-3">
            {[
              { value: stats.members, suffix: "", label: "members (first 50 promo)" },
              { value: stats.bays, suffix: "+", label: "bay types (regular + VIP)" },
              { value: stats.courses, suffix: "+", label: "courses & range modes" },
            ].map((s, i) => (
              <div key={s.label} className="reveal-child" style={{ ["--d" as never]: `${i * 90}ms` }}>
                <div className="font-[var(--font-display)] text-6xl font-black uppercase tracking-tighter text-[#f5a623]">
                  {s.value}
                  {s.suffix}
                </div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services / Memberships */}
        <section id="services" className="mx-auto w-full max-w-6xl bg-[#0a0a0a] px-4 py-14 sm:px-6 md:px-8 md:py-16" data-reveal>
          <div className="h-px w-full bg-[#f5a623]/60" />
          <div className="pt-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
              01 — Memberships & bay rates
            </div>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-black uppercase tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Choose your lane.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#a0a0a0]">
              Regular bays for everyday rounds. VIP suites for private energy. Membership to train like a pro.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map(({ title, price, desc, Icon }, idx) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-[#f5a623]/45 hover:bg-white/7 hover:shadow-[0_30px_90px_-55px_rgba(245,166,35,0.8)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -top-20 left-10 h-52 w-52 rounded-full bg-[#f5a623]/12 blur-3xl" />
                  <div className="absolute -bottom-20 right-10 h-52 w-52 rounded-full bg-[#00ff87]/10 blur-3xl" />
                </div>
                <div className="pointer-events-none absolute -right-3 -top-6 font-[var(--font-display)] text-[130px] font-black uppercase tracking-tighter text-white/5">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#f5a623]/25 bg-black/30 text-[#f5a623] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                      {price}
                    </div>
                  </div>
                  <div className="mt-5 font-[var(--font-display)] text-2xl font-black uppercase tracking-tight text-white">
                    {title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-[#a0a0a0]">{desc}</div>
                  <a
                    href="#book"
                    data-cursor="hover"
                    className="group/cta mt-6 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-white"
                  >
                    <span className="relative">
                      Book / inquire
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#f5a623] transition-transform duration-300 group-hover/cta:scale-x-100" />
                    </span>
                    <span aria-hidden="true" className="text-[#f5a623]">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section id="how" className="mx-auto w-full max-w-6xl bg-[#0f0f0f] px-4 py-14 sm:px-6 md:px-8 md:py-16" data-reveal>
          <div className="h-px w-full bg-[#f5a623]/60" />
          <div className="pt-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
              02 — Technology
            </div>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-black uppercase tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Not your ordinary simulator.
            </h2>
          </div>

          <div className="mt-8 grid gap-10 md:grid-cols-[0.6fr_0.4fr] md:items-start">
            <div className="reveal-child" style={{ ["--d" as never]: "0ms" }}>
              <p className="max-w-3xl text-sm leading-6 text-[#a0a0a0]">
                Trackman iO blends radar, infrared, and high-speed imaging for real-time club + ball data. Every hit
                is saved in the Trackman Golf app—your stats, anytime you want.
              </p>
              <div className="mt-8 grid gap-4">
                {steps.map(({ title, desc, Icon }, idx) => (
                  <div
                    key={title}
                    className="group flex gap-4 rounded-2xl border border-white/[0.06] bg-black/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-[#00ff87]/25"
                  >
                    <div className="grid h-11 w-11 flex-none place-items-center rounded-2xl border border-[#f5a623]/25 bg-black/30 text-[#f5a623] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-[var(--font-display)] text-lg font-black uppercase tracking-tight text-white">
                        <span className="text-[#f5a623]">{String(idx + 1).padStart(2, "0")}</span> {title}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-[#a0a0a0]">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Asymmetric visual/stat */}
            <div className="reveal-child rounded-3xl border border-white/[0.06] bg-[radial-gradient(700px_380px_at_50%_20%,rgba(0,255,135,0.14),transparent_60%)] bg-black/30 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" style={{ ["--d" as never]: "120ms" }}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                Screen light glow
              </div>
              <div className="mt-3 font-[var(--font-display)] text-3xl font-black uppercase tracking-tight text-white">
                See every shot.
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  { k: "Carry", v: "Dial distance in real time" },
                  { k: "Spin", v: "Control flight + stopping power" },
                  { k: "Face/Path", v: "Build repeatable strike" },
                ].map((r) => (
                  <div key={r.k} className="flex items-center justify-between border-b border-white/10 py-3">
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-white">{r.k}</div>
                    <div className="text-xs uppercase tracking-[0.22em] text-[#a0a0a0]">{r.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mx-auto w-full max-w-6xl bg-[#0a0a0a] px-4 py-14 sm:px-6 md:px-8 md:py-16" data-reveal>
          <div className="h-px w-full bg-[#f5a623]/60" />
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="pt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                03 — Reviews
              </div>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-black uppercase tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Where every swing connects.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#a0a0a0]">
                Premium feel. Real data. A space that makes you want to come back.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur transition hover:-translate-y-1 hover:border-[#f5a623]/35"
              >
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute -top-24 left-6 h-40 w-40 rounded-full bg-[#00ff87]/10 blur-3xl" />
                </div>
                <div className="relative">
                  <div className="text-sm leading-7 text-[#a0a0a0]">“{t.quote}”</div>
                  <figcaption className="mt-6 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-[var(--font-display)] text-lg font-black uppercase tracking-tight text-white">
                        {t.name}
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                        {t.meta}
                      </div>
                    </div>
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-[#f5a623]">★★★★★</div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* Contact / Booking */}
        <section id="book" className="mx-auto w-full max-w-6xl bg-[#0f0f0f] px-4 pb-16 pt-14 sm:px-6 md:px-8 md:pb-20 md:pt-16" data-reveal>
          <div className="h-px w-full bg-[#f5a623]/60" />
          <div className="mt-10 grid gap-8 rounded-3xl border border-white/[0.06] bg-black/30 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur sm:p-10 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                04 — Contact
              </div>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-black uppercase tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Book your session.
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#a0a0a0]">
                Reserve a bay, plan a private event, or ask about membership/coaching. We’ll respond quickly.
              </p>

              <div className="mt-7 grid gap-4 text-sm text-white">
                <div className="rounded-2xl border border-white/[0.06] bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">Address</div>
                  <div className="mt-2 font-[var(--font-display)] text-xl font-black uppercase tracking-tight text-white">
                    SM JMall, Cebu
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">Phone</div>
                  <div className="mt-2 font-[var(--font-display)] text-xl font-black uppercase tracking-tight text-white">
                    (032) 555-0199
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">Hours</div>
                  <div className="mt-2 font-[var(--font-display)] text-xl font-black uppercase tracking-tight text-white">
                    Daily 10:00am – 11:00pm
                  </div>
                </div>
              </div>
            </div>

            <form
              className="rounded-2xl border border-white/[0.06] bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-6"
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
                  <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className="h-11 rounded-xl border border-white/[0.06] bg-black/40 px-4 text-sm text-white placeholder:text-[#666] outline-none transition focus:border-[#f5a623]/60 focus:ring-2 focus:ring-[#f5a623]/20"
                  />
                </div>

                <div className="grid gap-1.5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="h-11 rounded-xl border border-white/[0.06] bg-black/40 px-4 text-sm text-white placeholder:text-[#666] outline-none transition focus:border-[#f5a623]/60 focus:ring-2 focus:ring-[#f5a623]/20"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label htmlFor="phone" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="(555) 123-4567"
                      className="h-11 rounded-xl border border-white/[0.06] bg-black/40 px-4 text-sm text-white placeholder:text-[#666] outline-none transition focus:border-[#f5a623]/60 focus:ring-2 focus:ring-[#f5a623]/20"
                    />
                  </div>
                </div>

                <div className="grid gap-1.5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <label htmlFor="service" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                      Package
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="h-11 rounded-xl border border-white/[0.06] bg-black/40 px-4 text-sm text-white outline-none transition focus:border-[#f5a623]/60 focus:ring-2 focus:ring-[#f5a623]/20"
                      defaultValue="Regular Bay"
                    >
                      <option>Regular Bay</option>
                      <option>VIP Room</option>
                      <option>Golf Lesson Membership</option>
                    </select>
                  </div>
                  <div className="grid gap-1.5">
                    <label htmlFor="date" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                      Preferred date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="h-11 rounded-xl border border-white/[0.06] bg-black/40 px-4 text-sm text-white outline-none transition focus:border-[#f5a623]/60 focus:ring-2 focus:ring-[#f5a623]/20"
                    />
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0a0a0]">
                    Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Anything we should know? (Lefty setup, group size, coaching goals, etc.)"
                    className="resize-none rounded-xl border border-white/[0.06] bg-black/40 px-4 py-3 text-sm text-white placeholder:text-[#666] outline-none transition focus:border-[#f5a623]/60 focus:ring-2 focus:ring-[#f5a623]/20"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="hover"
                  className="group relative mt-1 inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-transparent px-5 text-xs font-black uppercase tracking-[0.22em] text-white shadow-[0_22px_70px_-38px_rgba(245,166,35,0.95)] ring-1 ring-[#f5a623]/45 transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5a623]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:w-auto"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[#f5a623] transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  <span className="relative group-hover:text-black">Request booking</span>
                </button>

                <p className="text-xs leading-5 text-[#a0a0a0]">
                  By submitting, you’re requesting a reservation. We’ll confirm availability by email or phone.
                </p>
              </div>
            </form>
          </div>
        </section>

        <footer className="mx-auto w-full max-w-6xl bg-[#0a0a0a] px-6 pb-10 sm:px-8">
          <div className="h-px w-full bg-[#f5a623]/60" />
          <div className="flex flex-col gap-3 pt-8 text-sm text-[#a0a0a0] md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-white">iSwing PH</span> • Trackman indoor golf lounge
            </div>
            <div className="flex items-center gap-4">
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#how" className="transition hover:text-white">
                Technology
              </a>
              <a href="#book" className="transition hover:text-white">
                Book
              </a>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        :root {
          --noise: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
        }

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

        @keyframes ctaPulse {
          0%,
          100% {
            box-shadow: 0 24px 70px -34px rgba(245, 166, 35, 0.7);
          }
          50% {
            box-shadow: 0 24px 70px -30px rgba(245, 166, 35, 1);
          }
        }

        @keyframes mobileMenuIn {
          0% {
            opacity: 0;
            transform: translate3d(0, -10px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-mobileMenuIn {
          animation: mobileMenuIn 260ms ease-out;
        }

        [data-reveal] {
          opacity: 0;
          transform: translate3d(0, 18px, 0);
          transition: opacity 800ms cubic-bezier(0.2, 0.8, 0.2, 1),
            transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: opacity, transform;
        }

        [data-reveal].is-revealed {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .reveal-child {
          opacity: 0;
          transform: translate3d(0, 14px, 0);
          transition: opacity 650ms cubic-bezier(0.2, 0.8, 0.2, 1),
            transform 650ms cubic-bezier(0.2, 0.8, 0.2, 1);
          transition-delay: var(--d, 0ms);
          will-change: opacity, transform;
        }

        [data-reveal].is-revealed .reveal-child {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal],
          .reveal-child {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
