import React from "react";
import { TodoCard } from "./index";
import { AlertHandlerProvider } from "../../../contexts/alert_handler"; // Providerをimport

export default {
  title: "Organisms/TodoCard",
  component: TodoCard,
  decorators: [
    (Story) => (
      <AlertHandlerProvider>
        <Story />
      </AlertHandlerProvider>
    ),
  ],
};

export const Default = () => <TodoCard />;
