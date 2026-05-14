import Section from "../common/Section";
import ValueCard from "./ValueCards";
import { VALUES } from "./data";

const Values = () => {
  return (
    <Section
      id="philosophy"
      title="Values"
      subtitle="좋은 코드를 만들기 위해 지키는 원칙들을 소개합니다"
      background="gradient"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {VALUES.map((value, index) => (
          <ValueCard key={index} value={value} />
        ))}
      </div>
    </Section>
  );
};
export default Values;
