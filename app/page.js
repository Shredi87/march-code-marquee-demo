import TechStack from "../components/tech-stack";

function VariantLabel({ corrected = false }) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8">
      <p className="flex items-center gap-3 text-sm font-semibold text-dark-100">
        <span className={`size-2 shrink-0 rounded-full ${corrected ? "bg-teal-400" : "bg-amber-300"}`} aria-hidden="true" />
        <span className="text-dark-400">{corrected ? "02" : "01"}</span>
        {corrected ? "Исправленный вариант" : "Как на исходном сайте"}
      </p>
      <p className="text-sm text-dark-400">
        {corrected ? "Непрерывная лента на любой ширине" : "Две копии списка, сдвиг на 50%"}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <header className="mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8 sm:pt-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">Разбор анимации</p>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Один блок. Два варианта.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-dark-300 sm:text-base">
          Блок «Наш стек» со страницы «О компании» Мартовского Кода.
          Измени ширину окна и сравни, как движутся строки.
        </p>
      </header>
      <VariantLabel />
      <TechStack />
      <div className="pt-8 sm:pt-12">
        <VariantLabel corrected />
        <TechStack corrected />
      </div>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs leading-6 text-dark-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Next.js · React · Tailwind CSS · CSS-анимация</p>
        <a href="https://march-code.ru/o-nas" target="_blank" rel="noreferrer" className="w-fit text-dark-300 underline decoration-dark-700 underline-offset-4 transition-colors hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400">
          Посмотреть оригинал ↗
        </a>
      </footer>
    </main>
  );
}
