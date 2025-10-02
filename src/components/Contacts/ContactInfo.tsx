import GitHubIcon from "../common/icons/GitHubIcon";
import InstagramIcon from "../common/icons/InstagramIcon";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        연락 정보
      </h3>
      <div className="space-y-6">
        <div className="flex items-center">
          <div className="mr-4 rounded-lg bg-blue-100 p-3 dark:bg-blue-900">
            <svg
              className="h-6 w-6 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              이메일
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              kj2693119@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="mr-4 rounded-lg bg-blue-100 p-3 dark:bg-blue-900">
            <svg
              className="h-6 w-6 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              위치
            </h4>
            <p className="text-gray-600 dark:text-gray-300">서울, 대한민국</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
          소셜 미디어
        </h4>
        <div className="flex space-x-4">
          <a
            href="https://yuta-97.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform rounded-lg bg-gray-800 p-3 transition-all duration-200 hover:scale-105 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            title="GitHub"
          >
            <div>Blog</div>
          </a>
          <a
            href="https://www.github.com/yuta-97"
            target="_blank"
            rel="noopener noreferrer"
            className="transform rounded-lg bg-gray-800 p-3 transition-all duration-200 hover:scale-105 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            title="GitHub"
          >
            <GitHubIcon size={24} className="text-white" />
          </a>
          <a
            href="https://www.instagram.com/kkang.zzu/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-3 transition-all duration-200 hover:scale-105 hover:from-purple-600 hover:to-pink-600"
            title="Instagram"
          >
            <InstagramIcon size={24} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/%EA%B0%95%EC%A3%BC-%ED%97%88-68469614a/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform rounded-lg bg-blue-600 p-3 transition-all duration-200 hover:scale-105 hover:bg-blue-700"
            title="LinkedIn"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
