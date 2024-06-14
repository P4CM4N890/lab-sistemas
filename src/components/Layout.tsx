
interface Props {
    children?: any,
}

export const Layout = ( { children } : Props ) => {
  return (
    <div className="flex flex-wrap md:p-6 gap-6 justify-center" >
        { children }
    </div>
  );
}
