import ListadosEmpleados from "./empleados/ListadosEmpleados";
import Navegacion from "./plantillas/Navegacion";

function App() {
  return (
    <div className="container">
      <Navegacion></Navegacion>
     <ListadosEmpleados></ListadosEmpleados>
    </div>
  
  );
}

export default App;
