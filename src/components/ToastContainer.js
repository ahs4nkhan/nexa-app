function ToastContainer({ toasts, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="animate-fade-up flex items-center gap-3 bg-ink text-white text-sm px-4 py-3 rounded-lg shadow-lg"
        >
          <span>{toast.message}</span>
          <button
            onClick={() => onClose(toast.id)}
            aria-label="Dismiss"
            className="bg-transparent border-none text-gray-300 cursor-pointer transition-colors hover:text-white"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
