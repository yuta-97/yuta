type Props = {
  title: string;
  description: string;
  details?: string;
};

const FeatureCard = (props: Props) => {
  const { title, description, details } = props;

  return (
    <div className="rounded-lg border border-gray-200 p-6 transition-shadow duration-200 hover:shadow-md dark:border-gray-600">
      <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>
      {details && (
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-500">
          {details}
        </p>
      )}
    </div>
  );
};

export default FeatureCard;
