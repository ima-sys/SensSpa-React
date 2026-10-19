import QuestionItem from "./QuestionItem";

type Props = {
    onClose: () => void;
    onConfirm: ()=> void
};

const questions = [
    "¿Tiene alguna alergia? (por ejemplo aceites, cremas, etc.)",
    "¿Ha tenido alguna cirugía en los últimos 6 meses?",
    "¿Está embarazada actualmente?",
    "¿Tiene alguna herida abierta?",
    "¿Sufre algún problema cardíaco o circulatorio?",
    "¿Tiene algún otro antecedente médico relevante?"
];

export default function MedicalQuestionnaire({ onClose, onConfirm }: Props) {

    return (

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

            <div className="bg-white w-[1100px] rounded-xl shadow-2xl p-8">

                {/* Título */}

                <div className="flex justify-center mb-8">

                    <div className="bg-green-100 rounded-full px-24 py-2">

                        <h1 className="text-4xl text-blue-700 font-mono">
                            Cuestionario Médico
                        </h1>

                    </div>

                </div>

                {/* Preguntas */}

                <div className="border border-gray-500 p-5 rounded-lg">

                    <div className="space-y-5">

                        {questions.map((question, index) => (

                            <QuestionItem
                                key={index}
                                question={question}
                            />

                        ))}

                    </div>

                </div>

                {/* Botones */}

                <div className="flex justify-between items-center mt-8">

                    <button
                        onClick={onClose}
                        className="bg-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-500 duration-300"
                    >
                        Volver
                    </button>

                    <button
                        onClick={onConfirm}
                        className="bg-cyan-300 px-20 py-5 rounded-full text-3xl font-bold hover:bg-cyan-400 duration-300"
                    >
                        Enviar
                    </button>

                </div>

            </div>

        </div>

    );

}