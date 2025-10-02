const Info = () => {
  return (
    <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
      <div>
        <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Intro.
        </h3>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            {new Date().getFullYear() - 2021 + 1}년 차 개발자로 현재 직장에서
            치과용 환자 관리 소프트웨어-PMS(Patient Management System) 을
            개발/운영 했어요. 주로 웹 서비스 개발을 담당 하였으며 필요에 따라
            백엔드 및 인증서버 개발을 겸하였습니다.
          </p>
          <p>
            개발 초기단계의 팀에 합류하여 성공적으로 글로벌 서비스를 런칭하고
            안정적으로 운영하는데 기여 해 왔어요.
          </p>
          <p>
            빠르게 변화하는 IT 직군에서 다양한 기술 스택들을 경험 해 보고
            프런트엔드 엔지니어에 국한되지 않은 열린 사고를 가지고 있기 때문에,
            빠르게 적응하여 임팩트를 낼 수 있는 역량이 있다고 생각합니다.
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-gray-50 p-8 dark:bg-gray-800">
        <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
          빠른 정보
        </h3>
        <div className="space-y-4">
          <div>
            <span className="text-gray-600 dark:text-gray-400">이메일:</span>
            <span className="ml-2 text-gray-900 dark:text-white">
              kj2693119@gmail.com
            </span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">경력:</span>
            <span className="ml-2 text-gray-900 dark:text-white">
              {new Date().getFullYear() - 2021}+ years (2021.01 ~ 현재)
            </span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">전문분야:</span>
            <span className="ml-2 text-gray-900 dark:text-white">
              Frontend Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
