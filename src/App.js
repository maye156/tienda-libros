import { Routes,Route,BrowserRouter} from "react-router-dom";
import { Index } from "./pages";
import { Crear } from "./pages/crear";
import {Vista} from "./pages/vista";
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="crear" element={<Crear/>}/>
      <Route path="vista/:libroId" element={<Vista/>}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
