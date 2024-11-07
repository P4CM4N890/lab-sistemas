
interface Props {
  tag: string
}

export const Tag = ( { tag } : Props ) => {
  return (
    <div className="w-12 md:w-16 rounded-md border border-stone-700 text-center p-0.5" >
        <h5 className="text-stone-700 text-xs md:text-sm select-none overflow-hidden text-ellipsis ">{ tag }</h5>
    </div>
  );
}
