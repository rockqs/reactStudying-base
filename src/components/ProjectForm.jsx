import { useState } from "react";

const statusOptions = ["진행중", "대기중"];
const priorityOptions = ["높음", "중간", "낮음"];

function ProjectForm({ onSubmit, onClose }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "진행중",
    priority: "중간",
    dueDate: "",
    tags: "",
  });

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 제출 핸들러
  const handleSubmit = () => {
    // 제목은 필수값
    if (!form.title.trim()) {
      alert("프로젝트 제목을 입력해주세요.");
      return;
    }

    // 부모로 데이터 전달
    onSubmit({
      id: Date.now(),
      title: form.title.trim(),
      description: form.description.trim(),
      status: form.status,
      priority: form.priority,
      dueDate: form.dueDate,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      progress: 0,
      tasks: [],
    });

    onClose();
  };

  return (
    <div className="flex flex-col gap-4">

      {/* 제목 */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          제목 <span className="text-red-400">*</span>
        </label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="프로젝트 제목"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 설명 */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">설명</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="프로젝트 설명"
          rows={3}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />
      </div>

      {/* 상태 + 우선순위 */}
      <div className="flex gap-3">
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium text-gray-700">상태</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {statusOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium text-gray-700">우선순위</label>
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {priorityOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 마감일 */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">마감일</label>
        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 태그 */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">태그</label>
        <input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="React, TypeScript (쉼표로 구분)"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 버튼 */}
      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          취소
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          추가하기
        </button>
      </div>

    </div>
  );
}

export default ProjectForm;