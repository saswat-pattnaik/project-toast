import React from "react";

import useKeydown from "../../hooks/use-keydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: "Oh No!",
      variant: "success",
    },
    {
      id: crypto.randomUUID(),
      message: "You probably shold log out !",
      variant: "warning",
    },
  ]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message: message,
        variant: variant,
      },
    ];
    setToasts(nextToasts);
  }

  function handleDismiss(id) {
    const updatedToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(updatedToasts);
  }

  const dismissHandler = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown("Escape", dismissHandler);

  return (
    <ToastContext.Provider value={{ toasts, createToast, handleDismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
