export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900/75 p-8 text-center shadow-2xl shadow-cyan-950/30 backdrop-blur sm:p-14">
        <span className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
          موسوعة عربية مستقلة
        </span>

        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
          موسوعة <span className="text-cyan-300">Power &amp; Revolution</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          مرجع عربي مبسّط يهدف إلى جمع شروحات اللعبة وأنظمتها واستراتيجياتها في مكان واحد.
        </p>

        <div className="mt-10 rounded-2xl bg-slate-950/60 p-5 text-sm leading-7 text-slate-400">
          المشروع في مرحلته الأولى — ستُضاف المقالات والأقسام تباعًا.
        </div>
      </section>
    </main>
  );
}
