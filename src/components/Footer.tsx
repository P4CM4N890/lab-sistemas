import { Suscription } from "./Suscription";

export const Footer = () => {
  return (
    <footer className="w-full h-72 bg-black flex items-center justify-center px-8 flex-col md:flex-row" >
        <div className="w-full md:basis-7/12 flex items-center justify-center" >
          <p className="text-white text-2xl font-medium text-pretty">Mantente al día con nuestra newsletter.</p>
        </div>
        <div className="w-full basis-5/12 flex items-center justify-center" >
          <Suscription/>
        </div>
    </footer>
  );
}
