import { Global } from "@emotion/react";

import reset from "./reset";
import { Navigator } from "./routes/Navigator";

function App() {
  return (
    <div>
      <Global styles={reset} />
      <Navigator />
    </div>
  );
}

export default App;
