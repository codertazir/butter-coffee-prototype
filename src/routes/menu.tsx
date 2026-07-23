import { createFileRoute, Link } from "@tanstack/react-router";
import { menuSections } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Butter Coffee" },
      { name: "description", content: "The full Butter Coffee menu — espresso, iced drinks, filter coffee, and house pastries in Al Jubail." },
      { property: "og:title", content: "Menu — Butter Coffee" },
      { property: "og:description", content: "Espresso, iced drinks, filter coffee, and house pastries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Nav */}
      <header className="fixed top-4 inset-x-0 z-50 px-4 animate-fade-in">
        <div className="mx-auto max-w-6xl backdrop-blur-3xl backdrop-saturate-125 bg-background/15 border border-white/20 shadow-lg shadow-black/5 rounded-full px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-display text-xl tracking-tight">
            butter<span className="text-accent">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/" hash="menu" className="hover:text-foreground transition-colors">Menu</Link>
            <Link to="/" hash="about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/" hash="visit" className="hover:text-foreground transition-colors">Visit</Link>
          </nav>
          <Link
            to="/"
            className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            ← Home
          </Link>
        </div>
      </header>

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-6 text-center animate-fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">The full menu</p>
          <h1 className="font-display text-5xl md:text-7xl leading-none">
            Every cup,<br /><em className="italic text-accent">crafted.</em>
          </h1>
          <p className="mt-6 text-sm text-muted-foreground">Prices in SAR · VAT included</p>
        </div>
      </section>

      {menuSections.map((section, sIdx) => (
        <section key={section.title} className={`pb-20 ${sIdx === 0 ? "" : ""}`}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between mb-10 animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl">{section.title}</h2>
              <div className="flex-1 mx-6 border-b border-border/60 mb-3" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {String(sIdx + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.items.map((it, i) => (
                <article
                  key={it.name}
                  className="group flex items-center gap-4 rounded-2xl overflow-hidden bg-card border border-border/60 p-3 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="w-20 h-20 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={it.image}
                      alt={it.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg leading-tight truncate">{it.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">{it.desc}</p>
                  </div>
                  <span className="tabular-nums text-sm font-medium shrink-0 pr-2">
                    {it.price} <span className="text-muted-foreground text-xs">SAR</span>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <footer className="border-t border-border py-12 mt-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <Link to="/" className="font-display text-lg text-foreground">butter<span className="text-accent">.</span></Link>
          <p>© {new Date().getFullYear()} Butter Coffee · Al Jubail, KSA</p>
        </div>
      </footer>
    </div>
  );
}
