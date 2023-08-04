import Filtro from "./Filtro";
import Tarea from "./Tarea";

/* eslint-disable react/prop-types */
const Tareas = ({
  tareas,
  setTarea,
  setFormulario,
  eliminarTarea,
  filtro,
  setFiltro,
  tareasFiltradas,
}) => {
  return (
    <div>
      {tareas && tareas.length ? (
        <div className="flex flex-col text-center">
          <h2 className="font-black text-4xl">
            Aqui estan tus{" "}
            <span className="text-green-600 uppercase">tareas</span>
          </h2>
          <p className="text-2xl text-black">
            Aprovecha tu <span className="text-green-600">tiempo</span> y hazlas
          </p>
          <Filtro filtro={filtro} setFiltro={setFiltro} />

          {filtro ? (
            <div className="grid md:grid-cols-4 gap-3">
              {tareasFiltradas.map((tarea) => (
                <Tarea
                  key={tarea.id}
                  tarea={tarea}
                  setTarea={setTarea}
                  setFormulario={setFormulario}
                  eliminarTarea={eliminarTarea}
                />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-4 gap-3">
              {tareas.map((tarea) => (
                <Tarea
                  key={tarea.id}
                  tarea={tarea}
                  setTarea={setTarea}
                  setFormulario={setFormulario}
                  eliminarTarea={eliminarTarea}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col text-center">
          <h2 className="font-black text-4xl">
            Aun no has agregado{" "}
            <span className="text-green-600 uppercase">tareas</span>
          </h2>
          <p className="text-2xl text-black">
            Aprovecha tu <span className="text-green-600">tiempo</span> para
            salir o hablar con amigos
          </p>
        </div>
      )}
    </div>
  );
};

export default Tareas;
