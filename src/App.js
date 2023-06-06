import {Routes,Route,BrowserRouter} from "react-router-dom";
import { Index } from "./pages";
import { Create } from "./pages/crate";
import { Vista } from "./pages/vista";
import { Store } from "./store/store";

function App() {
  return (<Store>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="crear" element={<Create/>}/>
      <Route path="vista/:libroId" element={<Vista/>}/>
      
    </Routes>
    </BrowserRouter>
    </Store>
  );
}

export default App;
