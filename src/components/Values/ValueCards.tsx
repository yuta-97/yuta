import { ValueData } from ".";

const ValueCard = ({ philosophy }: { philosophy: ValueData }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
      <div className="mb-4 flex items-center">
        <span className="mr-4 text-3xl">{philosophy.icon}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {philosophy.title}
        </h3>
      </div>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        {philosophy.description}
      </p>
      <ul className="space-y-2">
        {philosophy.principles.map((principle, index) => (
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
