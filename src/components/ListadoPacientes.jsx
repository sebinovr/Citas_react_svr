import Paciente from "./Paciente";

function ListadoPacientes( {pacientes, setPaciente, eliminarPaciente} ) {

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-scroll">
            
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus{' '}
                        <span className="text-indigo-600 font-bold">Paciente y Citas</span>
                    </p>

                    {/* Para mostrar objetos en listado  */}
                    { pacientes.map( paciente => (
                        <Paciente
                            key = {paciente.id}
                            paciente = {paciente}
                            setPaciente = {setPaciente}
                            eliminarPaciente = {eliminarPaciente}
                        />
                    ))}
                </>


            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {' '}
                        <span className="text-indigo-600 font-bold">y se enlistaran aquí</span>
                    </p>
                </>
            )}

        </div>
    )
}

export default ListadoPacientes;