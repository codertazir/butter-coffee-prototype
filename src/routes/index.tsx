import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import drinkImg from "@/assets/drink-1.jpg";
import pastryImg from "@/assets/pastry.jpg";
import beansImg from "@/assets/beans.jpg";
import { previewItems } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating Nav */}
      <header className="fixed top-4 inset-x-0 z-50 px-4 animate-fade-in">
        <div className="mx-auto max-w-6xl backdrop-blur-2xl backdrop-saturate-200 bg-background/40 supports-[backdrop-filter]:bg-background/25 border border-white/30 shadow-lg shadow-black/5 rounded-full px-6 h-14 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight">
            butter<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/menu" className="hover:text-foreground transition-colors">Menu</Link>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#visit" className="hover:text-foreground transition-colors">Visit</a>
          </nav>
          <a
            href="https://www.instagram.com/butter.speciality"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Instagram
          </a>
        </div>
      </header>

      {/* Hero — exact viewport */}
      <section id="top" className="relative h-svh min-h-svh overflow-hidden flex flex-col bg-background">
        <div className="flex-1 min-h-0 mx-auto w-full max-w-6xl px-6 pt-24 md:pt-32 pb-20 md:pb-8 grid md:grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="md:col-span-6 animate-fade-in">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 md:mb-6">
              Specialty Coffee · Al Jubail
            </p>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground">
              Refined<br />
              coffee.<br />
              <em className="italic text-accent">Effortless</em> moments.
            </h1>
            <p className="mt-5 md:mt-8 max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
              A neighborhood specialty spot in Al Huwailat. We pour thoughtfully,
              serve warmly, and pair every cup with pastries worth waking up for.
            </p>
            <div className="mt-6 md:mt-10 flex flex-wrap gap-3">
              <Link to="/menu" className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 hover:scale-105 transition-all">
                View Menu
              </Link>
              <a href="#visit" className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary hover:scale-105 transition-all">
                Find Us
              </a>
            </div>
          </div>
          <div className="md:col-span-6 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <div className="relative aspect-[4/5] max-h-[46vh] md:max-h-[70vh] w-4/5 sm:w-3/5 md:w-full mx-auto overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl shadow-black/10">
              <img
                src={heroImg}
                alt="Latte with rosetta art on a marble counter at Butter Coffee"
                width={1600}
                height={1200}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[1200ms]"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-6 inset-x-0 flex justify-center z-10 pointer-events-none">
          <a
            href="#marquee"
            aria-label="Scroll down"
            className="pointer-events-auto flex flex-col items-center gap-1.5 md:gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground animate-bounce-slow hover:text-foreground transition-colors"
          >
            <span>Scroll</span>
            <svg width="12" height="18" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1v18M1 13l6 6 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>



      {/* Animated marquee bar — outside the hero, uses story bg */}
      <div id="marquee" className="border-y border-border/70 bg-secondary/40 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0" aria-hidden={i === 1}>
              <span className="mx-8">Seasonal Beans</span>
              <span className="text-accent">✦</span>
              <span className="mx-8">House Pastries</span>
              <span className="text-accent">✦</span>
              <span className="mx-8">Open 6 AM – 12 AM</span>
              <span className="text-accent">✦</span>
              <span className="mx-8">Al Huwailat Center</span>
              <span className="text-accent">✦</span>
              <span className="mx-8">Slow Crafted</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Preview — hero bg */}
      <section id="menu" className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">The menu</p>
              <h2 className="font-display text-5xl md:text-6xl">Today's pour.</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Prices in SAR · VAT included.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pb-24">
              {previewItems.map((it, i) => (
                <article
                  key={it.name}
                  className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-card border border-border/60 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500 reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Mobile: horizontal row */}
                  <div className="flex sm:hidden items-center gap-4 p-3">
                    <div className="w-20 h-20 shrink-0 overflow-hidden rounded-xl">
                      <img src={it.image} alt={it.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg leading-tight truncate">{it.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">{it.desc}</p>
                    </div>
                    <span className="tabular-nums text-sm font-medium shrink-0 pr-1">
                      {it.price} <span className="text-muted-foreground text-xs">SAR</span>
                    </span>
                  </div>

                  {/* Desktop: stacked card */}
                  <div className="hidden sm:block">
                    <div className="aspect-[5/4] overflow-hidden">
                      <img
                        src={it.image}
                        alt={it.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-xl">{it.name}</h3>
                        <span className="tabular-nums text-sm font-medium">
                          {it.price} <span className="text-muted-foreground text-xs">SAR</span>
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Fade overlay — cards fade into bg */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-background/80 to-background" />

          </div>

          <div className="-mt-8 flex justify-center reveal relative z-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 hover:scale-105 transition-all"
            >
              View full menu
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About — bar bg */}
      <section id="about" className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 reveal">
            <img
              src={interiorImg}
              alt="Barista pulling a shot inside Butter Coffee"
              width={1400}
              height={1000}
              loading="lazy"
              className="rounded-3xl w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="md:col-span-7 md:pl-8 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Our story</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Small spot,<br />serious coffee.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
              Butter started with a simple obsession: coffee that tastes as good
              as the pastry beside it. Every cup gets our full attention — from
              the first grind to the final pour — so it lands on your table the
              way it should.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat n="6AM" label="Doors open" />
              <Stat n="04" label="Origins" />
              <Stat n="4.3★" label="On Google" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src={drinkImg} alt="Iced latte" width={900} height={1100} loading="lazy" className="reveal rounded-2xl aspect-[4/5] object-cover w-full hover:scale-[1.02] transition-transform duration-500" />
          <img src={pastryImg} alt="Butter croissants with espresso" width={900} height={1100} loading="lazy" className="reveal rounded-2xl aspect-[4/5] object-cover w-full hover:scale-[1.02] transition-transform duration-500" />
          <img src={beansImg} alt="Fresh coffee beans" width={900} height={1100} loading="lazy" className="reveal rounded-2xl aspect-[4/5] object-cover w-full col-span-2 md:col-span-1 hover:scale-[1.02] transition-transform duration-500" />
        </div>
      </section>

      {/* Visit — hero bg */}
      <section id="visit" className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Visit</p>
            <h2 className="font-display text-5xl md:text-6xl leading-none">
              Come by,<br />stay a while.
            </h2>

            <dl className="mt-12 space-y-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Address</dt>
                <dd className="text-lg">
                  Al Huwailat Center<br />
                  Al Huwailat, Al Jubail 35718<br />
                  Saudi Arabia
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Hours</dt>
                <dd className="text-lg leading-relaxed">
                  Sat – Thu · 6:00 AM – 12:00 AM<br />
                  Friday · 12:00 PM – 12:00 AM
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Follow</dt>
                <dd className="text-lg">
                  <a href="https://www.instagram.com/butter.speciality" target="_blank" rel="noreferrer" className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors">
                    @butter.speciality
                  </a>
                </dd>
              </div>
            </dl>

            <a
              href="https://maps.app.goo.gl/Qd6GXNn7d5gmMXXv6"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-10 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Get directions →
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border md:min-h-[500px] reveal">
            <iframe
              title="Butter Coffee location map"
              src="https://www.google.com/maps?q=butter+coffee+Al+Huwailat+Al+Jubail&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer — bar bg */}
      <footer className="border-t border-border py-12 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="font-display text-lg text-foreground">butter<span className="text-accent">.</span></div>
          <p>© {new Date().getFullYear()} Butter Coffee · Al Jubail, KSA</p>
        </div>
      </footer>

      <RevealScript />
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="reveal">
      <div className="font-display text-3xl">{n}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

// Intersection-observer reveal for .reveal elements
function RevealScript() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return null;
}
