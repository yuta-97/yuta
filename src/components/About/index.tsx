import Info from "./Info";
import Skills from "./Skills";

const About = () => {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            재미를 찾아 BE 에서 FE 로.
          </p>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            사용자 경험과 개발자 경험, 모두를 생각하는 개발자입니다.
          </p>
        </div>

        <Info />
        <Skills />
      </div>
    </section>
  );
};

export default About;
