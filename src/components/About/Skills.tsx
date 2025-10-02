const SKILLS = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "Apollo Client",
      "GraphQL",
    ],
  },
  {
    category: "Styling & UI",
    items: [
      "Styled-Components",
      "Emotion.js",
      "Tailwind CSS",
      "CSS-in-JS",
      "Storybook",
    ],
  },
  {
    category: "State & Data",
    items: [
      "Tanstack-Query",
      "Reducer Pattern",
      "Apollo-Client",
      "Query Optimization",
      "React-Hook-Form",
      "Yup",
    ],
  },
  {
    category: "Backend & API",
    items: ["Node.js", "Apollo-Server", "REST API", "OAuth 2.0", "OIDC"],
  },
];

const Skills = () => {
  return (
    <div>
      <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
        Skills
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skillGroup, index) => (
          <div
            key={index}
            className="rounded-xl bg-gray-50 p-6 transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800"
          >
            <h4 className="mb-4 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
              <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
              {skillGroup.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="cursor-default rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 transition-colors duration-200 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
