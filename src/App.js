import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Salaire from "./pages/Salaire";
import Cong from "./pages/Cong";
import Layout from "./pages/Layout";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>

                  <Route path="users" element={<Users />} />
                  <Route path="salaire" element={<Salaire />} />
                  <Route path="cong" element={<Cong />} />

              </Route>
          </Routes>


      </BrowserRouter>
  );
}

export default App;
