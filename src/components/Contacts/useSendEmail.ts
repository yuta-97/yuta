import emailjs from "@emailjs/browser";
import { useState } from "react";

type EmailParams = {
  name: string;
  email: string;
  message: string;
};

const useSendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMail = async (params: EmailParams) => {
    if (isLoading) return;
    const { name, email, message } = params;
    setIsLoading(true);
    try {
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: name,
          title: name + "님이 연락을 원합니다.",
          time: new Date().toDateString(),
          message: message,
          email: email,
        },
        publicKey,
      );

      if (result.status !== 200) {
        throw new Error("이메일 전송에 실패했습니다.");
      }
      return { success: true };
    } catch (error) {
      console.error("EmailJS Error:", error);
      throw new Error("이메일 전송에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMail, isLoading };
};

export default useSendEmail;
export type { EmailParams };
