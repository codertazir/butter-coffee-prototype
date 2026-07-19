import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import drinkImg from "@/assets/drink-1.jpg";
import pastryImg from "@/assets/pastry.jpg";
import beansImg from "@/assets/beans.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const menu = {
  Espresso: [
    { name: "Espresso", desc: "Single origin, seasonal", price: "10" },
    { name: "Cortado", desc: "Equal parts espresso & steamed milk", price: "14" },
    { name: "Flat White", desc: "Velvet microfoam, double shot", price: "17" },
    { name: "Butter Latte", desc: "House signature, brown butter syrup", price: "22" },
    { name: "Cappuccino", desc: "Classic Italian, dry foam", price: "16" },
  ],
  "Iced & Cold": [
    { name: "Iced Latte", desc: "Slow-poured over ice", price: "18" },
    { name: "Cold Brew", desc: "18-hour steeped, smooth finish", price: "17" },
    { name: "Spanish Latte", desc: "Condensed milk, double espresso", price: "20" },
    { name: "Iced Butter Cream", desc: "Salted butter cold foam", price: "24" },
  ],
  "Filter & More": [
    { name: "V60 Pour Over", desc: "Ask about today's beans", price: "22" },
    { name: "Matcha Latte", desc: "Ceremonial grade, whole milk", price: "22" },
    { name: "Hot Chocolate", desc: "Dark 70%, steamed milk", price: "18" },
    { name: "Butter Croissant", desc: "Baked in-house, daily", price: "15" },
  ],
} as const;

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight">
            butter<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#menu" className="hover:text-foreground transition-colors">Menu</a>
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

      {/* Hero */}
      <section id="top" className="relative pt-16">
        <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-12 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Specialty Coffee · Al Jubail
            </p>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] text-foreground">
              Slow<br />
              coffee,<br />
              <em className="italic text-accent">buttery</em> soul.
            </h1>
            <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
              A neighborhood specialty bar in Al Huwailat. We source seasonal
              beans, dial in every shot, and serve them alongside pastries
              worth waking up for.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#menu" className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                View Menu
              </a>
              <a href="#visit" className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors">
                Find Us
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src={heroImg}
                alt="Latte with rosetta art on a marble counter at Butter Coffee"
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border-y border-border/70 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span>Seasonal Beans</span>
            <span className="hidden sm:inline">·</span>
            <span>House Pastries</span>
            <span className="hidden sm:inline">·</span>
            <span>Open 6 AM – 12 AM</span>
            <span className="hidden sm:inline">·</span>
            <span>Al Huwailat Center</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img
              src={interiorImg}
              alt="Barista pulling a shot inside Butter Coffee"
              width={1400}
              height={1000}
              loading="lazy"
              className="rounded-3xl w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Our story</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Small bar,<br />serious coffee.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
              Butter started with a simple obsession: coffee that tastes as good
              as the pastry beside it. We roast in small batches, work with
              growers we know by name, and treat every cup like it's the only one
              we'll serve today.
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
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src={drinkImg} alt="Iced latte" width={900} height={1100} loading="lazy" className="rounded-2xl aspect-[4/5] object-cover w-full" />
          <img src={pastryImg} alt="Butter croissants with espresso" width={900} height={1100} loading="lazy" className="rounded-2xl aspect-[4/5] object-cover w-full" />
          <img src={beansImg} alt="Fresh coffee beans" width={900} height={1100} loading="lazy" className="rounded-2xl aspect-[4/5] object-cover w-full col-span-2 md:col-span-1" />
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 md:py-32 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">The menu</p>
              <h2 className="font-display text-5xl md:text-6xl">Today's pour.</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Prices in SAR. Menu rotates with the seasons — ask your barista
              what's brewing today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {Object.entries(menu).map(([section, items]) => (
              <div key={section}>
                <h3 className="font-display text-2xl mb-6 pb-3 border-b border-border">
                  {section}
                </h3>
                <ul className="space-y-5">
                  {items.map((it) => (
                    <li key={it.name} className="flex items-baseline gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="font-medium text-foreground">{it.name}</span>
                          <span className="flex-1 border-b border-dotted border-border/80 translate-y-[-4px]" />
                          <span className="tabular-nums text-sm">
                            {it.price} <span className="text-muted-foreground text-xs">SAR</span>
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div>
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
                <dd className="text-lg">Every day · 6:00 AM – 12:00 AM</dd>
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
              className="inline-block mt-10 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get directions →
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border md:min-h-[500px]">
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

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="font-display text-lg text-foreground">butter<span className="text-accent">.</span></div>
          <p>© {new Date().getFullYear()} Butter Coffee · Al Jubail, KSA</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl">{n}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
