function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    // 배경 오버레이
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* 모달 박스 */}
      <div
        className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 모달 헤더 */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* 모달 내용 (자식 컴포넌트가 들어오는 자리) */}
        {children}

      </div>
    </div>
  );
}

export default Modal;