interface Props {
  tech: string;
  size?: "sm" | "md";
}

const TechTag = (props: Props) => {
  const { tech, size = "md" } = props;
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={`rounded bg-gray-100 font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300 ${sizeClasses[size]}`}
    >
      {tech}
    </span>
  );
};

export default TechTag;
