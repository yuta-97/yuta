import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";
import CTAButtons from "./CTAButtons";
import SkillsGrid from "./SkillGrid";
import ProfileAvatar from "./Avatar";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <ProfileAvatar />
          <MainHeader />
          <SubHeader />
          <CTAButtons />
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
