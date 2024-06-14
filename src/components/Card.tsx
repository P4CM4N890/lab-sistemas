import { Tag } from "./Tag"

export const Card = () => {
  return (
    <article className="w-[300px] h-[450px] md:w-[400px] md:h-[550px] rounded-lg flex flex-col overflow-hidden shadow-md" >
        <div className="basis-1/2 bg-green-400" ></div>
        <section className="p-4 text-pretty">
            <div className="flex justify-between items-center" >
                <span className="text-xs text-stone-600" >Abril 02, 2024</span>
                <div className="flex space-x-2">
                    <Tag/>
                    <Tag/>
                    <Tag/>
                </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold md:py-2" >Card</h3>
            
            <p className="text-sm md:text-base text-stone-800" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi hic iure temporibus neque unde, ipsa, ut laborum inventore fuga ipsam nostrum distinctio ab excepturi ducimus eos dolores! Deserunt, enim molestiae.</p>

            <button className="underline underline-offset-2 pt-3 font-semibold text-stone-800 text-sm md:text-base" >Read More</button>
        </section>
    </article>
  );
}
