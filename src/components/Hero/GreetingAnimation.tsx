"use client";
import { useEffect, useState } from "react";

const GREETINGS = [
  "안녕하세요,", // 한국어
  "Hello,", // 영어
  "Hola,", // 스페인어
  "Bonjour,", // 프랑스어
  "Hallo,", // 독일어
  "Ciao,", // 이탈리아어
  "你好,", // 중국어
  "こんにちは,", // 일본어
  "Привет,", // 러시아어
  "नमस्ते,", // 힌디어
];

const GreetingAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % GREETINGS.length);
        setIsVisible(true);
      }, 300); // 페이드 아웃 시간
    }, 2500); // 2.5초마다 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
    >
      {GREETINGS[currentIndex]}{" "}
    </span>
  );
};

export default GreetingAnimation;
