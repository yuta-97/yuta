type Props = {
  title: string;
  content: string;
  type?: "success" | "challenge" | "learning";
};

const getStyles = (type: Props["type"]) => {
  switch (type) {
    case "challenge":
      return {
        bg: "bg-red-50 dark:bg-red-900/10",
        border: "border-red-200 dark:border-red-800",
        accent: "bg-red-500",
      };
    case "learning":
      return {
        bg: "bg-emerald-50 dark:bg-emerald-900/10",
        border: "border-emerald-200 dark:border-emerald-800",
        accent: "bg-emerald-500",
      };
    default:
      return {
        bg: "bg-blue-50 dark:bg-blue-900/10",
        border: "border-blue-200 dark:border-blue-800",
        accent: "bg-blue-500",
      };
  }
};

const StoryCard = (props: Props) => {
  const { title, content, type = "success" } = props;

  const styles = getStyles(type);

  return (
    <div
      className={`relative rounded-xl border ${styles.border} ${styles.bg} p-6 transition-all duration-200 hover:shadow-lg`}
    >
      <div
        className={`absolute top-0 left-0 h-full w-1 rounded-l-xl ${styles.accent}`}
      ></div>
      <div className="pl-4">
        <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="space-y-3 leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">
          {content}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
