import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App(){
  return (
    <> {/* fragment: 두 컴포넌트를 동시에 렌더링 */}
      <HashRouter>
        <Navigation /> {/* Link는 꼭 Router안에 있어야 한다 */}
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
      </HashRouter>
      <footer>
        footer
      </footer>
    </>
  )
}

export default App;