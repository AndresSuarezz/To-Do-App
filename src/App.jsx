import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Tareas from "./components/Tareas";

function App() {
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) ?? []);
  const [tarea, setTarea] = useState({});
  const [formulario, setFormulario] = useState(false);

  const [filtro, setFiltro] = useState("");
  const [tareasFiltradas, setTareasFiltradas] = useState([])
  
  useEffect(() => {
    //Guarda
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  //Filtro
  useEffect(() => {
    if(filtro) {
      const filtrarTareas = tareas.filter(tarea => tarea.importancia === filtro)
      setTareasFiltradas(filtrarTareas)
    }
  },[filtro])

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

        filtro={filtro}
        setFiltro={setFiltro}
        tareasFiltradas={tareasFiltradas}
      />
    </div>
  );
}

export default App;
