import { toast } from "react-toastify";


const ParchedCard = ({ cards, setCards }) => {

    const totalPrice = cards.reduce((sum, items) => sum + items.price, 0)

    const handelPayments = () => {
        setCards([])
        toast.success("Payment Successfully Done")
    }
    const handelDelete = (item) => {
        const filteredArray = cards.filter(c => c.id !== item.id)
        setCards(filteredArray)
        toast.success("Card Deleted")
    }


    return (
        <div className="w-[80%] mx-auto px-10 py-15 bg-gray-200">
            <h2 className="text-black text-3xl font-bold p-3">Your Cart</h2>

            {

                cards.length === 0 ? <p className="text-center"> Card is Empty. </p> :
                    <>
                        <div className="space-y-4">
                            {
                                cards.map(items => <div className="flex items-center justify-between border rounded-lg p-4" key={items.id}>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <img src={items.icon} alt="" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-black">{items.name}</h2>
                                        </div>
                                    </div>
                                    <div className="flex gap-10 items-center">
                                        <div className="text-3xl font-bold text-black">${items.price}/month</div>
                                        <button onClick={() => handelDelete(items)} className="btn text-red-500">Remove</button>
                                    </div>

                                </div>)
                            }
                            <div className="flex justify-between font-bold text-black border rounded-lg p-4">
                                <div>Total</div>
                                <div>${totalPrice}/month</div>
                            </div>
                            <button onClick={handelPayments} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm w-full rounded-lg text-white p-4">Proceed to Checkout</button>
                        </div>
                    </>
            }

        </div>

    );
};

export default ParchedCard;