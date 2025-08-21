import Image from 'next/image';

const Page = () => {
  const calculateDuration = (startDate: string, endDate: string) => {
    const parseDate = (dateStr: string) => {
      if (dateStr === "PRESENT") return new Date();

      const [month, year] = dateStr.split("/");
      return new Date(parseInt(year), parseInt(month) - 1, 1);
    };

    const start = parseDate(startDate);
    const end = parseDate(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    if (years === 0 && months === 0) {
      months = 1;
    }

    if (years === 0) {
      return `${months} month${months !== 1 ? "s" : ""}`;
    } else if (months === 0) {
      return `${years} year${years !== 1 ? "s" : ""}`;
    } else {
      return `${years} year${years !== 1 ? "s" : ""} ${months} month${
        months !== 1 ? "s" : ""
      }`;
    }
  };

  const experience = [
    {
      company: "SIEMENS",
      period: "06/2023 — PRESENT",
      achievements: [
        "Integrated ChatGPT-4o into the application leading and coordinating multiple teams (business, design, backend). A pop-up window with an assistant accelerated user immersion and reduced tech support questions by 18%.",
        "Transformed the reporting website into a desktop Progressive Web App (PWA), enabling offline functionality, which eliminated interrupted sessions and increased daily usage duration by service workers by 31%.",
        "Onboarded a new team to a legacy codebase project and ensured consistent code style by implementing ESLint with a strict configuration. As a result, we faced and resolved 7,419 errors.",
        "During the refactoring process, reduced the project size (number of folders and files) by 49.5% while maintaining full functionality.",
        "Integrated LaTeX into a React project, accelerating the development process for rendering mathematical expressions by a factor of 20.",
        "Successfully launched the web application on the international market by implementing localization using the i18n library.",
        "Through optimizations and the implementation of best practices including Next.js framework, «lazy loading» and Webp image format, achieved a score of 99 across all four Google Lighthouse metrics: Performance, Accessibility, Best Practices, and SEO.",
      ],
      stack:
        "React.js, TypeScript, React Hooks, Redux.js, Webpack, Next.js, Tailwind CSS, SASS, Jest, Storybook, WebSocket",
    },
    {
      company: "NOVAKID",
      period: "08/2021 — 06/2023",
      achievements: [
        "Implemented and optimized the display and filtering of large data sets (over 100,000 records) to enhance performance and user experience.",
        "Analyzed application performance and proposed improvements, reducing the rendering delay in some places from 40 seconds to 1-2 seconds.",
        "Moved the project core to Angular 18 to merge multiple projects into a single service. This reduced server rental costs and improved company resource efficiency.",
        "Held over 10 technical interviews for middle developer roles, successfully hiring 3 skilled developers for the team.",
        "Improved project architecture by implementing the Feature-sliced design methodology in most new projects, which saved ~3 months of development time.",
      ],
      stack:
        "React, Angular, TypeScript, MobX, Ant Design, React Leaflet, d3.js, Vite",
    },
    {
      company: "SMARTCAT",
      period: "01/2020 — 08/2021",
      achievements: [
        "Created over 26 custom UI components for the CRM system, improving the user interface and achieving design consistency.",
        "Developed over 7 complex multi-step forms with validation to ensure accurate data and reduce input errors.",
        "Enhanced application performance and loading speed to reduce initial page rendering time by 17%-33%, achieving Google Page Speed scores of 98-100.",
      ],
      stack:
        "React.js, Vue.js, Nuxt, TypeScript, Node.js, Redux.js, Pinia, Zustand, RTK Query, Three.js",
    },
  ];

  return (
    <div className="flex flex-col max-w-3xl mx-auto p-4 smp-8 text-[15px] gap-6">
      <header className="sm:flex justify-between">
        <h1 className="flex flex-col">
          <a href="https://www.linkedin.com/in/equixdev/" className="text-xl text-[#5162FF] hover:underline">
            VLAD PECHKIN
          </a>
          <b>Frontend Developer</b>
          5+ years experience
        </h1>
        <div className="flex flex-col sm:items-end">
          <a href="mailto:pechkinde@gmail.com" className="underline text-[#5162FF]">
            pechkinde@gmail.com
          </a>
          <a href="tel:+77718497652" className="underline text-[#5162FF]">
            +7 771 849 7652
          </a>
          <nav className="flex gap-3">
            {Object.entries({
              Whatsapp: "https://wa.me/77718497652",
              Telegram: "https://t.me/pechk_in",
              LinkedIn: "https://www.linkedin.com/in/equixdev/",
              GitHub: "https://github.com/equixdev",
            }).map(([key, value]) => (
              <a key={key} href={value} className="underline text-[#5162FF]">
                {key}
              </a>
            ))}
          </nav>
          <time>GMT+4</time>
        </div>
      </header>
      <section>
        <h2 className="text-center font-bold">ABOUT</h2>
        <p>
          I am an experienced React Frontend Developer with over <b>5 years</b>{" "}
          in the industry, skilled in building scalable and maintainable web
          applications. My journey has equipped me with a diverse skill set,
          including leading frontend teams and working as a full-stack
          developer, allowing me to contribute effectively throughout the
          development lifecycle.
        </p>
      </section>
      <section>
        <h2 className="text-center font-bold">SKILLS</h2>
        <p>
          <b>Frontend:</b> React, Next.js, Vue, Angular, TypeScript, Redux,
          MobX, Zustand, Pinia, Storybook, RxJS, Tailwind CSS, Ant Design, Jest,
          Webpack, Vite, FSD architecture, CSS, HTML, React Hooks, Bootstrap,
          CSS Modules, Emotion, Styled Components, SCSS, SASS, PostCSS, Less,
          Electron.
        </p>
        <p>
          <b>Other:</b> Node.js, Python, SQL, MongoDB, PostgreSQL, Docker,
          GitLab CI/CD, Nginx, Git, GitHub, GitLab, Bitbucket, Express.js, HTTP,
          WebSocket, GraphQL, Mongoose, Moralis, React Native, REST API, MySQL,
          Figma, ESLint, Prettier.
        </p>
      </section>
      <section>
        <h2 className="text-center font-bold">EXPERIENCE</h2>
        <ul>
          {experience.map(({ company, period, achievements, stack }, index) => {
            const [startDate, endDate] = period.split(" — ");
            const duration = calculateDuration(startDate, endDate);

            return (
              <li key={index}>
                <h3 className="text-center">
                  <b>{company}:</b> {period}, <b>{duration}</b>
                </h3>
                <ul className="list-disc list-inside">
                  {achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>
                  <b>Stack:</b> {stack}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
              <section className="text-center">
          <h2 className="font-bold">EDUCATION</h2>
          <b>MOSCOW STATE UNIVERSITY</b>
          <p>Cybersecurity (OWASP) — Extern, 2020 — 2021</p>
          <b>TOGLIATTI STATE UNIVERSITY</b>
          <p>Software development — Bachelor, 2020 — 2024</p>
          <b>SAMSUNG IT ACADEMY</b>
          <p>Software development — Extern, 2019 — 2020</p>
        </section>
        <div className="flex justify-center">
          <Image src="/sign.svg" alt="Signature" width={64} height={64} className="w-16 h-auto" />
        </div>
      </div>
  );
};

export default Page;
