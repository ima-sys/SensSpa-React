import { useState } from "react";


type Props = {
    onClose: () => void;

    onRegister: (
        nombre: string,
        fecha: string,
        precio: string
    ) => void;
};


export default function ClientForm({
    onClose,
    onRegister
}: Props) {

    const [nombre, setNombre] = useState("");

    const [fecha, setFecha] = useState("");

    const [precio, setPrecio] = useState("");


    function registrar() {

        if (!nombre.trim()) {

            alert("Ingresa el nombre del cliente");

            return;

        }

        if (!fecha) {

            alert("Selecciona una fecha");

            return;

        }

        if (!precio) {

            alert("Ingresa el precio");

            return;

        }

        onRegister(
            nombre,
            fecha,
            precio
        );

    }


    return (

        <div
            className="
                fixed
                inset-0
                bg-black/60
                flex
                justify-center
                items-center
                z-50
            "
        >

            <div
                className="
                    bg-white
                    w-[700px]
                    rounded-2xl
                    shadow-2xl
                    p-8
                "
            >

                <h2
                    className="
                        text-4xl
                        font-bold
                        text-center
                        mb-8
                    "
                >
                    Datos del cliente
                </h2>


                <div className="space-y-5">


                    {/* NOMBRE */}

                    <div>

                        <label
                            className="
                                block
                                font-semibold
                                mb-2
                            "
                        >
                            Nombre
                        </label>

                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) =>
                                setNombre(e.target.value)
                            }
                            className="
                                border
                                border-gray-400
                                rounded-xl
                                w-full
                                p-4
                            "
                            placeholder="Nombre del cliente"
                        />

                    </div>


                    {/* FECHA */}

                    <div>

                        <label
                            className="
                                block
                                font-semibold
                                mb-2
                            "
                        >
                            Fecha
                        </label>

                        <input
                            type="date"
                            value={fecha}
                            onChange={(e) =>
                                setFecha(e.target.value)
                            }
                            className="
                                border
                                border-gray-400
                                rounded-xl
                                w-full
                                p-4
                            "
                        />

                    </div>


                    {/* PRECIO */}

                    <div>

                        <label
                            className="
                                block
                                font-semibold
                                mb-2
                            "
                        >
                            Precio
                        </label>

                        <input
                            type="number"
                            value={precio}
                            onChange={(e) =>
                                setPrecio(e.target.value)
                            }
                            className="
                                border
                                border-gray-400
                                rounded-xl
                                w-full
                                p-4
                            "
                            placeholder="$Precio"
                        />

                    </div>

                </div>


                {/* BOTONES */}

                <div
                    className="
                        flex
                        justify-between
                        mt-8
                    "
                >

                    <button
                        onClick={onClose}
                        className="
                            bg-gray-300
                            px-8
                            py-3
                            rounded-xl
                            hover:bg-gray-400
                        "
                    >
                        Cancelar
                    </button>


                    <button
                        onClick={registrar}
                        className="
                            bg-cyan-400
                            px-8
                            py-3
                            rounded-xl
                            font-bold
                            hover:bg-cyan-500
                        "
                    >
                        Registrar
                    </button>

                </div>

            </div>

        </div>

    );

}