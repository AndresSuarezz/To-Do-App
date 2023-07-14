import { useEffect, useState } from "react";
/* eslint-disable react/prop-types */
const Formulario = ({ tareas, setTareas, tarea, setTarea, setFormulario }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [importancia, setImportancia] = useState("");

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setTitulo(tarea.titulo);
      setDescripcion(tarea.descripcion);
      setImportancia(tarea.importancia);
    }
  }, [tarea]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validamos el formulario
    if ([titulo, descripcion, importancia].includes("")) {
      alert("Todos los campos son obligatorios");
      return;
    }
    //Creamos la tarea
    const objetoTarea = {
      titulo,
      descripcion,
      importancia,
    };

    if(tarea.id) {
        //Edicion
        objetoTarea.id = tarea.id
        const tareaActualizada = tareas.map(tareaState => tareaState.id === tarea.id ? objetoTarea : tareaState)
        setTareas(tareaActualizada);
        setTarea({})
    } else {
        //Creamos tarea
        objetoTarea.id = generarId()
        setTareas([...tareas, objetoTarea])
    }

    //Reiniciamos el form
    setTitulo("");
    setDescripcion("");
    setImportancia("");
    setFormulario(false);
  };

  return (
    <div className="md:w-1/2 lg:mx-auto mt-2 mx-5 bg-white shadow-lg rounded py-3">
      <h2 className="text-black font-bold text-3xl text-center">
        ¡Aqui agregas tus actividades pendientes!
      </h2>
      <p className="font-bold text-lg mt-5 text-center mb-10">
        Añade tus tareas y configuralas a{""}{" "}
        <span className="text-green-400">tu gusto</span>
      </p>

      <form onSubmit={handleSubmit} className="rounded py-1 px-5 mx-1">
        {/* Tarea */}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="tarea"
          >
            Tarea
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Revision del carro"
            id="tarea"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        {/* Descripcion */}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="descripcion"
          >
            Descripción
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Sonido raro en el motor"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        {/* Importancia */}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="importancia"
          >
            Importancia
          </label>
          <select
            className=" border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400"
            id="importancia"
            value={importancia}
            onChange={(e) => setImportancia(e.target.value)}
          >
            <option>Selecciona</option>
            <option value={"Normal"}>Normal</option>
            <option value={"Importante"}>Importante</option>
            <option value={"Urgente"}>Urgente</option>
          </select>
        </div>

        {/* Agregar / Actualizar */}
        <div className="flex justify-center">
          <input
            type="submit"
            className="w-full mt-3 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors uppercase"
            value={tarea.id ? "Guardar" : "Agregar"}
          />
        </div>
        {/* Cancelar */}
        <div className="flex justify-center">
          <button
            onClick={() => setFormulario(false)}
            className="w-full mt-3 bg-red-400 hover:bg-red-500 text-white font-bold py-2 mb-2 px-4 rounded transition-colors uppercase"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
