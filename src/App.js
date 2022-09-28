import React from "react";
import "./App.css";
import Create from "./Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter,
  Routes,
  Route
}
from "react-router-dom";



function App() {
  return (
    <div>
   <BrowserRouter>
     <Routes>
          <Route exact path="/" element={<Create />}> </Route>
          <Route exact path="/read" element={<Read />}> </Route>
          <Route exact path="/update" element={<Update />}> </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
