import { ValueData } from ".";

type Props = {
  value: ValueData;
};

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "bg-blue-500";
    case "green":
      return "bg-green-500";
    case "purple":
      return "bg-purple-500";
    case "orange":
      return "bg-orange-500";
    default:
      return "bg-gray-500";
  }
};

const ValueCard = (props: Props) => {
  const { value } = props;

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
      <div className="mb-4 flex items-center">
        <div
          className={`mr-4 h-3 w-3 rounded-full ${getColorClasses(value.color)}`}
        ></div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {value.title}
        </h3>
      </div>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        {value.description}
      </p>
      <ul className="space-y-2">
        {value.principles.map((principle, index) => (
          <li key={index} className="flex items-start text-sm">
            <span className="mt-0.5 mr-2 text-green-500">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {principle}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValueCard;
