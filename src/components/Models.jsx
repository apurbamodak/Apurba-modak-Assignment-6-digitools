import { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelPromise, cards, setCards }) => {
    const models = use(modelPromise)




    return (
        <div className='py-10'>

            <div className="w-[80%] mx-auto text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7">
                {models.map(model => (
                    <ModelCard key={model.id} model={model} cards={cards} setCards={setCards} />
                ))}
            </div>
        </div>
    );
};

export default Models;