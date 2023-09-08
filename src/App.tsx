import { Global } from "@emotion/react";
import './App.css'

import reset from "./reset";
import { Navigator } from "./routes/Navigator";

import Splash from './pages/Splash.tsx';

function App() {
  return (
    <div>
      <Global styles={reset} />
      <Navigator />
    </div>
    <Splash/>
  );
}

export default App;
