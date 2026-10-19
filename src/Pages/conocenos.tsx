type Props = {
    setPage: (page: string) => void;
};


export default function Conocenos({ setPage}: Props) {

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
                        SenSpa Massage
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
                        Conócenos
                    </h2>


                    <div
                        className="
                            bg-gray-100
                            rounded-2xl
                            p-10
                        "
                    >

                        <p
                            className="
                                text-xl
                                leading-relaxed
                            "
                        >

                            En SenSpa Massage ofrecemos
                            servicios profesionales de
                            masaje y bienestar. Nuestro
                            objetivo es brindar a nuestros
                            clientes un espacio cómodo,
                            tranquilo y agradable.

                        </p>

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