import { LogoMark } from "@/components/logo-mark";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-canvas/55 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <LogoMark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="主导航">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-[0.18em] text-muted transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-ink transition hover:border-warm/50 hover:bg-warm/10"
        >
          建立连接
        </a>
      </div>
    </header>
  );
}
