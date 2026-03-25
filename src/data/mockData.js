// 프로젝트 목록 데이터
export const projects = [
  {
    id: 1,
    title: "DevBoard",
    description: "개인 프로젝트 관리 대시보드",
    status: "진행중",
    priority: "높음",
    progress: 65,
    tags: ["React", "CSS"],
    dueDate: "2025-05-01",
    tasks: [
      { id: 1, content: "라우터 설정", done: true },
      { id: 2, content: "대시보드 UI 구현", done: false },
      { id: 3, content: "다크모드 추가", done: false },
    ],
  },
  {
    id: 2,
    title: "Portfolio",
    description: "개인 포트폴리오 웹사이트",
    status: "완료",
    priority: "중간",
    progress: 100,
    tags: ["React", "Vite"],
    dueDate: "2025-03-15",
    tasks: [
      { id: 1, content: "디자인 시안 작성", done: true },
      { id: 2, content: "반응형 레이아웃", done: true },
    ],
  },
  {
    id: 3,
    title: "Weather App",
    description: "날씨 정보 조회 앱",
    status: "대기중",
    priority: "낮음",
    progress: 10,
    tags: ["React", "API"],
    dueDate: "2025-06-30",
    tasks: [
      { id: 1, content: "API 연동 설계", done: false },
      { id: 2, content: "UI 구현", done: false },
    ],
  },
];

// 대시보드 통계 데이터
export const stats = [
  { id: 1, label: "전체 프로젝트", value: 3 },
  { id: 2, label: "진행중", value: 1 },
  { id: 3, label: "완료", value: 1 },
  { id: 4, label: "대기중", value: 1 },
];

// 유저 프로필 데이터
export const userProfile = {
  name: "김개발",
  role: "Frontend Developer",
  email: "dev@example.com",
  github: "github.com/devkim",
};