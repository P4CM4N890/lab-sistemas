import { Tag } from './Tag';
import { Entrance } from '../interfaces';

interface Props {
  entrance: Entrance
}

export const Card = ( { entrance } : Props ) => {
  return (
    <article className="w-[300px] max-h-[450px] md:w-[400px] md:max-h-[550px] rounded-lg flex flex-col overflow-hidden shadow-md" >
        <img className="max-h-[225px] md:max-h-[275px] bg-green-400 object-cover object-center" src={ entrance.image } alt={ entrance.title } loading="lazy" />
        <section className="p-4 text-pretty">
            <div className="flex justify-between items-center" >
                <span className="text-xs text-stone-600" >{ entrance.date }</span>
                <div className="flex space-x-2">
                    {
                        entrance.tags.map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))
                    }
                </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold md:py-2" >{ entrance.title }</h3>
            
            <p className="text-sm md:text-base text-stone-800 mb-2 overflow-hidden line-clamp-2 md:line-clamp-4 text-ellipsis" >{ entrance.description }</p>
            {
                entrance.link &&
                <a className="underline underline-offset-2 pt-3 font-semibold text-stone-800 text-sm md:text-base" href={ entrance.link }>Read More</a>
            }
        </section>
    </article>
  );
}
