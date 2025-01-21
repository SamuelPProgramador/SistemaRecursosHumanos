import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadosEmpleados from "./empleados/ListadosEmpleados";
import AgregarEmpleado from "./empleados/AgregarEmpleado";

import Navegacion from "./plantillas/Navegacion";
import EditarEmpleado from "./empleados/EditarEmpleado";

function App() {
  return (
    <div className="container">
   
      <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route path="/" element={<ListadosEmpleados/>} />
        <Route path="/agregar" element={<AgregarEmpleado/>}/>
        <Route path="/editar/:id" element={<EditarEmpleado/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
