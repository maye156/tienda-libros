
import {Routes,Route,BrowserRouter} from "react-router-dom";
import { Index } from "./pages";
import { Create } from "./pages/crate";
import { Vista } from "./pages/vista";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="crate" element={<Create/>}/>
      <Route path="vista/:libroId" element={<Vista/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
