type Props = {
  icon: string | React.ReactElement;
  title: string;
  className?: string;
};

const SkillCard = (props: Props) => {
  const { icon, title, className = "" } = props;

  return (
    <div
      className={`group rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800 ${className}`}
    >
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
        <div className="flex h-12 items-center justify-center">{icon}</div>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
    </div>
  );
};

export default SkillCard;
