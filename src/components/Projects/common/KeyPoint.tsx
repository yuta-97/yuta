type Props = {
  title: string;
  description: string;
};

const KeyPoint = (props: Props) => {
  const { title, description } = props;

  return (
    <div className="flex items-start space-x-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
      <div>
        <h3 className="mb-1 font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default KeyPoint;
