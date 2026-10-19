import { useState } from "react";

type Props = {

    question: string;

}

export default function QuestionItem ({ question }: Props) {

    const [answer, setAnswer] = useState<boolean | null>(null);

    return (

        <div className="flex justify-between items-center bg-gray-100 rounded-xl p-4">

            <p className="font-medium">

                {question}

            </p>

            <div className="flex gap-4">

                <button

                    onClick={() => setAnswer(true)}

                    className={`

                    px-6

                    py-2

                    rounded-full

                    ${answer === true ? "bg-green-500 text-white" : "bg-gray-300"}

                    `}

                >

                    Sí

                </button>

                <button

                    onClick={() => setAnswer(false)}

                    className={`

                    px-6

                    py-2

                    rounded-full

                    ${answer === false ? "bg-red-500 text-white" : "bg-gray-300"}

                    `}

                >

                    No

                </button>

            </div>

        </div>

    )

}