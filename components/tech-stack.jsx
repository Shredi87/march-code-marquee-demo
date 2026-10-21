import AdaptiveMarquee from "./adaptive-marquee";

const technologies = [
  ["React", "Next.js", "TypeScript", "Node.js", "Python", "Go", "C#", ".NET", "ASP.NET Core", "PostgreSQL", "Redis"],
  ["Claude API", "OpenAI", "LangChain", "RAG", "Computer Vision", "Docker", "Kubernetes", "React Native", "Flutter", "1С", "Telegram API", "AmoCRM"],
];

function OriginalMarquee({ items, reverse }) {
  return (
    <div className="marquee-window">
      <div className={`original-track ${reverse ? "original-track-reverse" : ""}`}>
        {[...items, ...items].map((item, index) => (
          <span className="tech-badge" key={`${item}-${index}`} aria-hidden={index >= items.length ? true : undefined}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack({ corrected = false }) {
  const headingId = corrected ? "corrected-heading" : "original-heading";

  return (
    <section className="overflow-hidden bg-dark-900 py-16 lg:py-20" aria-labelledby={headingId}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-400">
            Технологии
          </span>
          <h2 id={headingId} className="text-3xl font-extrabold text-white sm:text-4xl">
            Наш <span className="bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">стек</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-dark-300">
            Выбираем то, что подходит под задачу, а не то, что моднее.
          </p>
        </div>
      </div>

      <div className="space-y-4" role="group" aria-label="Технологии, с которыми работаем">
        {technologies.map((items, index) => corrected ? (
          <AdaptiveMarquee key={index} items={items} reverse={index === 1} speed={index === 1 ? 30 : 28} />
        ) : (
          <OriginalMarquee key={index} items={items} reverse={index === 1} />
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mt-12 text-center text-sm text-dark-400">
          Россия · США · Европа · СНГ — работаем онлайн, часовой пояс не мешает
        </p>
      </div>
    </section>
  );
}
