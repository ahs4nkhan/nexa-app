import { useCallback, useState } from "react";

function useToasts() {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message) => {
      const id = Date.now() + Math.random();
      setToasts((current) => [...current, { id, message }]);
      setTimeout(() => removeToast(id), 3000);
    },
    [removeToast]
  );

  return { toasts, showToast, removeToast };
}

export default useToasts;
