export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`group inline-flex items-center gap-3 ${className}`} aria-label="珩小派">
      <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-halo">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(198,160,106,.45),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(93,136,255,.45),transparent_32%)] opacity-80 transition duration-500 group-hover:scale-125" />
        <svg viewBox="0 0 40 40" className="relative h-7 w-7 text-ink" fill="none" aria-hidden="true">
          <path d="M10 13h20M10 27h20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M15 11v18M25 11v18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="20" cy="20" r="2.4" fill="currentColor" />
          <path d="M8 20c5-7 19-7 24 0" stroke="currentColor" strokeWidth="1" strokeOpacity=".42" />
        </svg>
      </div>
      <div className="leading-none">
        <div className="text-sm font-semibold tracking-[0.18em] text-ink">珩小派</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted/70">Heng Xiao Pai</div>
      </div>
    </div>
  );
}
