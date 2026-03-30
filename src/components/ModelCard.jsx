import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, cards, setCards }) => {
    const [isBuyNow, setBuynow] = useState(false)

    const handelBuynow = () => {
        setBuynow(true);

        const isFound = cards.find(item => item.id === model.id)
        if (isFound) {
            toast.error("Item already added.")
            return
        }

        setCards([...cards, model])
        toast.success("Add to card")
    }

    return (
        <div
            key={model.id}
            className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition"
        >
            <div className="flex justify-between items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-xl">
                    <img src={model.icon} alt="" className="w-6" />
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    {model.tag}
                </span>
            </div>

            <h2 className="text-lg font-semibold mb-2">
                {model.name}
            </h2>

            <p className="text-gray-500 text-sm mb-4">
                {model.description}
            </p>

            <h3 className="text-2xl font-bold mb-4">
                ${model.price}
                <span className="text-sm text-gray-400 font-normal">
                    /{model.period}
                </span>
            </h3>

            <ul className="space-y-2 mb-6">
                {model.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✔</span>
                        {feature}
                    </li>
                ))}
            </ul>
            <button onClick={handelBuynow} className="w-full py-3 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition">
                {isBuyNow ? "Perched " : "Buy Now"}
            </button>
        </div>
    );
};

export default ModelCard;