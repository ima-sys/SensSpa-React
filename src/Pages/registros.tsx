import type { Client } from "../Types/client";


type Props = {

    clients: Client[];

    setPage: (page: string) => void;

};


export default function Registros({
    clients,
    setPage
}: Props) {

    return (

        <div className="min-h-screen bg-blue-200 p-8">

            <div
                className="
                    bg-white
                    max-w-7xl
                    mx-auto
                    shadow-2xl
                    rounded-xl
                    overflow-hidden
                "
            >

                <header
                    className="
                        bg-black
                        h-32
                        flex
                        justify-between
                        items-center
                        px-10
                    "
                >

                    <button
                        onClick={() =>
                            setPage("home")
                        }
                        className="
                            text-cyan-400
                            text-xl
                            font-bold
                        "
                    >
                        ← Home
                    </button>


                    <h1
                        className="
                            text-white
                            text-5xl
                            italic
                        "
                    >
                        Registros
                    </h1>


                    <div className="w-20"></div>

                </header>


                <main className="p-10">

                    <h2
                        className="
                            text-4xl
                            font-bold
                            mb-8
                        "
                    >
                        Clientes registrados
                    </h2>


                    <div
                        className="
                            bg-white
                            rounded-2xl
                            shadow-lg
                            overflow-hidden
                        "
                    >

                        <table className="w-full">

                            <thead
                                className="
                                    bg-black
                                    text-white
                                "
                            >

                                <tr>

                                    <th className="p-4 text-left">
                                        ID
                                    </th>

                                    <th className="p-4 text-left">
                                        Nombre
                                    </th>

                                    <th className="p-4 text-left">
                                        Fecha
                                    </th>

                                    <th className="p-4 text-left">
                                        Precio
                                    </th>

                                    <th className="p-4 text-left">
                                        Estado
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {clients.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan={5}
                                            className="
                                                p-8
                                                text-center
                                                text-gray-500
                                            "
                                        >
                                            No hay clientes
                                            registrados.
                                        </td>

                                    </tr>

                                ) : (

                                    clients.map(
                                        (client) => (

                                            <tr
                                                key={client.id}
                                                className="
                                                    border-b
                                                    hover:bg-gray-100
                                                "
                                            >

                                                <td className="p-4">
                                                    {client.id}
                                                </td>

                                                <td className="p-4">
                                                    {client.nombre}
                                                </td>

                                                <td className="p-4">
                                                    {client.fecha}
                                                </td>

                                                <td className="p-4">
                                                    ${client.precio}
                                                </td>

                                                <td
                                                    className="
                                                        p-4
                                                        text-green-600
                                                        font-bold
                                                    "
                                                >
                                                    {client.estado}
                                                </td>

                                            </tr>

                                        )
                                    )

                                )}

                            </tbody>

                        </table>

                    </div>


                    <button
                        onClick={() =>
                            setPage("home")
                        }
                        className="
                            mt-8
                            bg-cyan-400
                            px-8
                            py-3
                            rounded-xl
                            font-bold
                        "
                    >
                        Volver al Home
                    </button>

                </main>

            </div>

        </div>

    );

}