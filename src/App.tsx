import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

//pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="*" element={<h2>Page not found</h2>}></Route>
    </Routes>
  );
}

export default App;
