import React, { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import { Alert } from "../../Atoms/Alert";

export const AlertManager = () => {
  const { visible, errorText, closeAlert } = useAlertHandlerContext();

  useEffect(() => {
    let timer;
    if (visible) {
      timer = setTimeout(() => {
        closeAlert();
      }, 5000); // 5000ミリ秒 = 5秒
    }

    return () => {
      clearTimeout(timer);
    };
  }, [visible, closeAlert]);
  return <Alert message={errorText} isVisible={visible} />;
};

export default AlertManager;
