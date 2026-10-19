type Props = {
    titulo: string;
    valor: string | number;
    color: string;
};

export default function DashboardCard({
    titulo,
    valor,
    color
}: Props) {

    return (

        <div
            className={`
                ${color}
                w-full
                h-32
                rounded-2xl
                shadow-lg
                flex
                flex-col
                justify-center
                items-center
                text-center
                transition
                duration-300
                hover:scale-105
            `}
        >

            <p className="text-lg font-semibold">
                {titulo}
            </p>

            <p className="text-3xl font-bold mt-2">
                {valor}
            </p>

        </div>

    );
}