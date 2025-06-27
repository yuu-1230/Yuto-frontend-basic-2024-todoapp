...

import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import AlertManager from "../../Organisms/AlertManager";

...

export const Default = Template.bind({});
Default.args = {};
/*以下を追加*/
Default.decorators = [
  (Story) => (
    <div>
      <AlertHandlerProvider>
        <AlertManager />
        <Story />
      </AlertHandlerProvider>
    </div>
  ),
];

