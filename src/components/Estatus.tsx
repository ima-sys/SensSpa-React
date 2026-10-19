export default function  Estatus() {

    return (

        <section className="p-10">

            <h2 className="text-4xl font-bold mb-8">
                Estatus
            </h2>

            <div className="grid grid-cols-3 gap-6">

                <div className="bg-green-100 border-2 border-green-500 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-green-700">
                        Confirmado
                    </h3>

                    <p className="mt-2">
                        El cuestionario fue aprobado.
                    </p>
                </div>


                <div className="bg-yellow-100 border-2 border-yellow-500 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-yellow-700">
                        En espera
                    </h3>

                    <p className="mt-2">
                        Esperando asignación de cita.
                    </p>
                </div>


                <div className="bg-blue-100 border-2 border-blue-500 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-blue-700">
                        Cita pendiente
                    </h3>

                    <p className="mt-2">
                        El cliente aún no tiene una cita.
                    </p>
                </div>

            </div>

        </section>

    );
}