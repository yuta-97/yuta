import GreetingAnimation from "./GreetingAnimation";

const MainHeader = () => {
  return (
    <h1 className="mb-6 flex flex-col gap-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
      <GreetingAnimation />
      <div>
        FE 개발자{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Yuta
        </span>
        입니다
      </div>
    </h1>
  );
};

export default MainHeader;
