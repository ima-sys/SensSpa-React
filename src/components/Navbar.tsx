type Props = {
    onMenuClick: () => void;
};


export default function Navbar({
    onMenuClick
}: Props) {

    return (

        <header className="bg-black h-32 flex justify-between items-center px-10">

            <button
                onClick={onMenuClick}
                className="space-y-2"
            >

                <div className="w-16 h-2 bg-cyan-400 rounded-full"></div>

                <div className="w-16 h-2 bg-cyan-400 rounded-full"></div>

                <div className="w-16 h-2 bg-cyan-400 rounded-full"></div>

            </button>


            <h1 className="text-white text-5xl italic">
                SenSpa Massage
            </h1>


            <div className="w-16"></div>

        </header>

    );
}