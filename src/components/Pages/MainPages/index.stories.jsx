import React from "react";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import { Alert } from "../../Atoms/Alert";

export default { Component: Alert };
export const Default = {
  args: {},
};
/*以下を追加*/
Default.decorators = [
  (Story) => (
    <div>
      <AlertHandlerProvider>
        <Story />
      </AlertHandlerProvider>
    </div>
  ),
];
