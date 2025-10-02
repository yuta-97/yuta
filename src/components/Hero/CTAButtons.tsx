import Button from "../common/Button";

const CTAButtons = () => {
  return (
    <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button href="#projects" variant="primary" size="lg">
        프로젝트 보기
      </Button>
      <Button href="#contact" variant="outline" size="lg">
        연락하기
      </Button>
    </div>
  );
};

export default CTAButtons;
