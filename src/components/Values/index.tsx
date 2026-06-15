import Section from "../common/Section";
import ValueCard from "./ValueCards";
import { VALUES } from "./data";

const Values = () => {
  return (
    <Section
      id="principles"
      eyebrow="Principles"
      title="좋은 코드는 혼자 빛나기보다, 다음 일을 쉽게 만듭니다"
      subtitle="기술적 선택이 사용자와 동료, 그리고 다음 변경에 어떤 영향을 남기는지까지 생각합니다."
      background="muted"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {VALUES.map((value, index) => (
          <ValueCard key={value.title} value={value} index={index} />
        ))}
      </div>
    </Section>
  );
};
export default Values;
