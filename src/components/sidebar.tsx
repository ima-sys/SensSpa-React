type Props = {
    onClose: () => void;
    onNavigate: (page: string) => void;
};


export default function Sidebar({
    onClose,
    onNavigate
}: Props) {

    return (

        <>

            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/40 z-40"
            />


            <aside
                className="
                    fixed
                    top-0
                    left-0
                    h-full
                    w-72
                    bg-black
                    text-white
                    z-50
                    shadow-2xl
                    p-6
                "
            >

                <div className="flex justify-between items-center mb-10">

                    <h2 className="text-3xl font-bold text-cyan-400">
                        SenSpa
                    </h2>


                    <button
                        onClick={onClose}
                        className="text-3xl"
                    >
                        
                    </button>

                </div>


                <nav className="space-y-4">

                    <button
                        onClick={() => onNavigate("home")}
                        className="
                            w-full
                            text-left
                            px-5
                            py-4
                            rounded-xl
                            hover:bg-cyan-400
                            hover:text-black
                            duration-300
                        "
                    >
                         Home
                    </button>


                    <button
                        onClick={() => onNavigate("registros")}
                        className="
                            w-full
                            text-left
                            px-5
                            py-4
                            rounded-xl
                            hover:bg-cyan-400
                            hover:text-black
                            duration-300
                        "
                    >
                         Registros
                    </button>


                    <button
                        onClick={() => onNavigate("conocenos")}
                        className="
                            w-full
                            text-left
                            px-5
                            py-4
                            rounded-xl
                            hover:bg-cyan-400
                            hover:text-black
                            duration-300
                        "
                    >
                         Conócenos
                    </button>

                </nav>

            </aside>

        </>

    );
}