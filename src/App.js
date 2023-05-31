import Index from "./pages/index";
import Create from "./pages/create";
import View from "./pages/view";
import { Routes, Route, BrowserRouter  } from "react-router-dom";
import Store from "./store/store";

function App() {
  return (
    <Store>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
        </Routes>
        </BrowserRouter>
      </div>
    </Store>
  );
}

export default App;