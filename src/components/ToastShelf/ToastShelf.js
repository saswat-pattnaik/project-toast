import React from "react";

import {ToastContext} from '../ToastProvider';
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";


function ToastShelf() {

  const {toasts} = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              id={id}
              message={message}
              variant={variant}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
