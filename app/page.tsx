import dynamic from "next/dynamic";
import { ArrowUpRight, Orbit, Sparkles, Workflow } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

const HeroParticles = dynamic(
  () => import("@/components/hero-particles").then((mod) => mod.HeroParticles),
  { ssr: false }
);

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-canvas text-ink">
      <SiteHeader />

      <section className="relative flex min-h-screen items-center px-6 pt-24">
        <HeroParticles />
        <div className="grid-mask absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs tracking-[0.22em] text-muted shadow-halo backdrop-blur">
              <Sparkles className="h-4 w-4 text-warm" />
              AI · OPC · DIGITAL IDENTITY
            </div>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[1.05] tracking-[-0.08em] text-ink md:text-8xl lg:text-9xl">
              {site.heroTitle}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              {site.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#method"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-canvas transition hover:scale-[1.02]"
              >
                查看方法论
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={site.blog}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-7 py-4 text-sm font-medium text-ink transition hover:border-cool/50 hover:bg-cool/10"
              >
                访问博客
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-12 rounded-full bg-cool/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-halo backdrop-blur-xl">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <div className="text-sm tracking-[0.2em] text-muted">SYSTEM SIGNAL</div>
                <div className="h-2 w-2 rounded-full bg-signal shadow-[0_0_24px_rgba(142,240,199,.8)]" />
              </div>
              <div className="space-y-5">
                {site.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-end justify-between rounded-3xl border border-white/10 bg-canvas/40 p-5">
                    <div className="text-sm text-muted">{metric.label}</div>
                    <div className="font-mono text-5xl tracking-[-0.08em] text-ink">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm tracking-[0.28em] text-warm">VISION</p>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
            一人公司不是一人作坊，而是被 AI 放大的高密度系统。
          </h2>
          <p className="mt-8 text-lg leading-9 text-muted">
            珩小派希望把个人判断力、产品审美、自动化工程与内容资产沉淀成一个可持续进化的工作系统，让外界看到的不只是一个网站，而是一种长期构建能力。
          </p>
        </div>
      </section>

      <section id="method" className="border-y border-white/10 bg-white/[0.025] px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-sm tracking-[0.28em] text-cool">METHOD</p>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] md:text-6xl">从想法到系统。</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["01", "判断", "明确问题、场景、目标与边界。"],
              ["02", "编排", "用 AI 与自动化重组工作流。"],
              ["03", "交付", "以网站、工具、内容与数据沉淀价值。"]
            ].map(([index, title, desc]) => (
              <article key={index} className="group rounded-[2rem] border border-white/10 bg-canvas/55 p-6 transition hover:-translate-y-1 hover:border-warm/40 hover:bg-white/[0.045]">
                <div className="mb-16 font-mono text-sm text-warm">{index}</div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-muted">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-sm tracking-[0.28em] text-warm">CAPABILITIES</p>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] md:text-6xl">能力版图</h2>
          </div>
          <p className="max-w-xl leading-8 text-muted">
            用产品、内容、自动化与品牌视觉构建高杠杆系统，让一个小团队也能呈现企业级气场。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {site.capabilities.map((item, index) => (
            <article key={item.title} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 transition hover:border-cool/50 hover:bg-cool/[0.055]">
              <div className="absolute right-6 top-6 font-mono text-sm text-white/25">0{index + 1}</div>
              {index % 2 === 0 ? <Workflow className="mb-16 h-8 w-8 text-cool" /> : <Orbit className="mb-16 h-8 w-8 text-warm" />}
              <h3 className="text-3xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-4 max-w-xl leading-8 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_75%_20%,rgba(198,160,106,.2),transparent_32%),rgba(255,255,255,.035)] p-8 md:p-14">
          <p className="mb-5 text-sm tracking-[0.28em] text-warm">CONTACT</p>
          <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.06em] md:text-6xl">让官网先成为你的第一件作品。</h2>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-muted">
                关注微信公众号「{site.wechat}」，或访问博客了解持续构建记录。后续可扩展联系表单、案例页、产品页和中英文版本。
              </p>
            </div>
            <div className="space-y-4">
              <a className="flex items-center justify-between rounded-3xl border border-white/10 bg-canvas/50 p-5 transition hover:border-warm/50" href={site.blog}>
                <span>blog.hengxiaopai.com</span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <div className="rounded-3xl border border-white/10 bg-canvas/50 p-5 text-muted">
                微信公众号：<span className="text-ink">珩小派</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
