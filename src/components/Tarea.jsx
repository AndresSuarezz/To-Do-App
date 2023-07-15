/* eslint-disable react/prop-types */
const Tarea = ({ tarea, setTarea, setFormulario, eliminarTarea }) => {
  const { titulo, descripcion, importancia, id } = tarea;

  const editar = () => {
    setTarea(tarea);
    setFormulario(true);
  };

  const handleElimintar = () => {
    eliminarTarea(id);
  };

  // const pImportancia = () => {
  //   if (importancia === "Normal") {
  //     return (
  //       <p className="mt-1 mb-2 px-2 py-2 bg-blue-500 text-center rounded text-white font-bold">
  //         {importancia}
  //       </p>
  //     );
  //   }

  //   if (importancia === "Importante") {
  //     return (
  //       <p className="mt-1 mb-2 px-2 py-2 bg-green-500 text-center rounded text-white font-bold">
  //         {importancia}
  //       </p>
  //     );
  //   }

  //   if (importancia === "Urgente") {
  //     return (
  //       <p className="mt-1 mb-2 px-2 py-2 bg-red-500 text-center rounded text-white font-bold">
  //         {importancia}
  //       </p>
  //     );
  //   }
  // };

  const coloresImportancia = {
    Normal: "bg-blue-500",
    Importante: "bg-green-500",
    Urgente: "bg-red-500",
  };

  return (
    <div className="bg-white rounded-lg py-2 px-3 mx-auto mt-2 mr-2 shadow-lg w-full">
      <p className="font-black text-2xl break-words">{titulo}</p>
      <p className={`mt-1 mb-2 px-2 py-2 text-center rounded text-white font-bold ${coloresImportancia[importancia]}`}>{importancia}</p>
      <p className="break-words">{descripcion}</p>

      <div className="flex justify-end my-3 mx-1">
        {/* Completado */}
        <button
          onClick={handleElimintar}
          className="text-white font-bold bg-green-400 hover:bg-green-500 transition-colors rounded p-2 mr-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        {/* Editar */}
        <button
          onClick={editar}
          className="text-white font-bold bg-blue-400 hover:bg-blue-500 transition-colors rounded p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Tarea;
