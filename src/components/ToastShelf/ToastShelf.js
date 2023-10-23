import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              id={id}
              message={message}
              variant={variant}
              handleDismiss={handleDismiss}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
