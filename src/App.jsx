import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Tareas from "./components/Tareas";

function App() {
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) ?? []);
  const [tarea, setTarea] = useState({});
  const [formulario, setFormulario] = useState(false);
  
  useEffect(() => {
    //Guarda
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const eliminarTarea = (id) => {
    const tareaAct = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareaAct);
  };

  return (
    <div className="container mx-auto">
      <Header setFormulario={setFormulario} />
      {formulario && (
        <Formulario
          tareas={tareas}
          setTareas={setTareas}
          tarea={tarea}
          setTarea={setTarea}
          setFormulario={setFormulario}
        />
      )}
      <Tareas
        tareas={tareas}
        setTarea={setTarea}
        setFormulario={setFormulario}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;
