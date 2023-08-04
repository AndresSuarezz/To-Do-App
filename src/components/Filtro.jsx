/* eslint-disable react/prop-types */
const Filtro = ({filtro, setFiltro}) => {
  return (
    <div className="mt-5">
        <form>
            <label className="block text-2xl">Filtrar Tareas</label>
            <select className=" max-md:w-full px-3 py-1 text-md rounded shadow-lg text-center" value={filtro} onChange={e => setFiltro(e.target.value)}>
                <option value="">Todos</option>
                <option value="Normal">Normal</option>
                <option value="Importante">Importante</option>
                <option value="Urgente">Urgente</option>
            </select>
        </form>
    </div>
  )
}

export default Filtro