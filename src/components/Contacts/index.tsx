import Section from "../common/Section";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contacts = () => {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="재밌어 보이는 일 이라면, 언제든 환영이에요 😎 편하게 연락주세요!"
    >
      <div className="grid gap-12 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contacts;
