type Props = {
  technologies: string[];
};

const TechStack = (props: Props) => {
  const { technologies } = props;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {technologies.map(tech => (
        <div
          key={tech}
          className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-center font-medium text-white"
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default TechStack;
