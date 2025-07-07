import React from "react";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import Alert from "./index";

export default { component: Alert };
export const Default = {
  args: {},
};

Default.decorators = [
  (Story) => (
    <div>
      <AlertHandlerProvider>
        <Story />
      </AlertHandlerProvider>
    </div>
  ),
];
