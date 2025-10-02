import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contacts = () => {
  return (
    <section id="contact" className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Contact
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            재밌어 보이는 일 이라면, 언제든 환영이에요 😎 편하게 연락주세요!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
