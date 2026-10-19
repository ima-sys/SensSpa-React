import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Services from "../components/Services";
import MedicalQuestionnaire from "../components/registroNuevo";
import Navbar from "../components/Navbar";
import ClientForm from "../components/ClientForm";
import DashboardCard from "../components/DashboardCards";
import Sidebar from "../components/sidebar";

import Conocenos from "./conocenos";
import Registros from "./registros";

import type { Client } from "../Types/client";


export default function Dashboard() {

    const [clients, setClients] =
        useState<Client[]>([]);

    const [showQuestionnaire, setShowQuestionnaire] =
        useState(false);

    const [showClientForm, setShowClientForm] =
        useState(false);

    const [showSidebar, setShowSidebar] =
        useState(false);

    const [page, setPage] =
        useState("home");


    useEffect(() => {

        let activo = true;

        async function cargarClientes() {

            try {

                const respuesta = await fetch(
                    "http://localhost:3000/api/clients"
                );

                if (!respuesta.ok) {

                    throw new Error(
                        `Error HTTP: ${respuesta.status}`
                    );

                }

                const data: Client[] =
                    await respuesta.json();

                if (activo) {

                    setClients(data);

                }

            } catch (error) {

                console.error(
                    "Error al cargar clientes:",
                    error
                );

            }

        }

        cargarClientes();

        return () => {

            activo = false;

        };

    }, []);


    async function agregarCliente(
    nombre: string,
    fecha: string,
    precio: number
): Promise<boolean> {

    try {

        const respuesta = await fetch(
            "http://localhost:3000/api/clients",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    nombre,
                    fecha,
                    precio
                })
            }
        );

        const texto = await respuesta.text();

        console.log("STATUS:", respuesta.status);
        console.log("RESPUESTA:", texto);

        if (!respuesta.ok) {

            alert(
                `Error ${respuesta.status}: ${texto}`
            );

            return false;

        }

        const nuevoCliente: Client =
            JSON.parse(texto);

        setClients(
            clientesActuales => [
                ...clientesActuales,
                nuevoCliente
            ]
        );

        return true;

    } catch (error) {

        console.error(error);

        alert(
            "No se pudo conectar con el servidor."
        );

        return false;

    }
}


    const ingresos = clients.reduce(
        (total, client) =>
            total + Number(client.precio),
        0
    );


    const completados = clients.filter(
        (client) =>
            client.estado === "Completado"
    ).length;


    const proceso = clients.filter(
        (client) =>
            client.estado === "En proceso"
    ).length;


    function renderDashboard() {

        return (

            <>

                <section className="px-10 py-8">

                    <div className="
                        grid
                        grid-cols-5
                        gap-5
                    ">

                        <DashboardCard
                            titulo="Ingresos del día"
                            valor={`$${ingresos}`}
                            color="bg-cyan-300"
                        />

                        <DashboardCard
                            titulo="Registrados hoy"
                            valor={clients.length}
                            color="bg-green-300"
                        />

                        <DashboardCard
                            titulo="Servicios completados"
                            valor={completados}
                            color="bg-blue-300"
                        />

                        <DashboardCard
                            titulo="Servicios en proceso"
                            valor={proceso}
                            color="bg-yellow-300"
                        />

                        <DashboardCard
                            titulo="Citas de hoy"
                            valor={clients.length}
                            color="bg-purple-300"
                        />

                    </div>

                </section>


                <main className="px-10 pb-10">

                    <Services />

                    <div className="
                        flex
                        justify-center
                        mt-10
                    ">

                        <button
                            onClick={() =>
                                setShowQuestionnaire(true)
                            }
                            className="
                                bg-cyan-400
                                px-10
                                py-4
                                rounded-2xl
                                text-2xl
                                font-bold
                                hover:bg-cyan-500
                                hover:scale-105
                                duration-300
                            "
                        >
                            + Nuevo registro
                        </button>

                    </div>

                </main>

            </>

        );

    }


    function cambiarPagina(
        nuevaPagina: string
    ) {

        setPage(nuevaPagina);

        setShowSidebar(false);

    }


    function renderPagina() {

        switch (page) {

            case "home":

                return renderDashboard();

            case "conocenos":

                return (
                    <Conocenos
                        setPage={setPage}
                    />
                );

            case "registros":

                return (
                    <Registros
                        clients={clients}
                        setPage={setPage}
                    />
                );

            default:

                return renderDashboard();

        }

    }


    return (

        <div className="
            min-h-screen
            bg-blue-200
            p-8
        ">

            <div className="
                bg-white
                max-w-7xl
                mx-auto
                shadow-2xl
                rounded-xl
                overflow-hidden
            ">

                <Navbar
                    onMenuClick={() =>
                        setShowSidebar(true)
                    }
                />

                {renderPagina()}

                <Footer />

            </div>


            {showSidebar && (

                <Sidebar

                    onClose={() =>
                        setShowSidebar(false)
                    }

                    onNavigate={(pagina) => {

                        cambiarPagina(
                            pagina
                        );

                    }}

                />

            )}


            {showQuestionnaire && (

                <MedicalQuestionnaire

                    onClose={() =>
                        setShowQuestionnaire(false)
                    }

                    onConfirm={() => {

                        setShowQuestionnaire(
                            false
                        );

                        setShowClientForm(
                            true
                        );

                    }}

                />

            )}


            {showClientForm && (

                <ClientForm

                    onClose={() =>
                        setShowClientForm(false)
                    }

                    onRegister={async (
                        nombre,
                        fecha,
                        precio
                    ) => {

                        const registrado =
                            await agregarCliente(
                                nombre,
                                fecha,
                                Number(precio)
                            );

                        if (registrado) {

                            setShowClientForm(
                                false
                            );

                        }

                    }}

                />

            )}

        </div>

    );

}