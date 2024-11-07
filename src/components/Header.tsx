import { NavBar } from './NavBar';
import img from '../assets/images/udg.webp';

export const Header = () => {
  return (
    <header className="w-full h-20 flex px-2 items-end justify-between sticky top-0 bg-white drop-shadow-sm " >

      <div className="w-48 pb-2" >
        <img src={ img } alt="Logotipo de la Universidad de Guadalajara" />
      </div>

      <NavBar/>

      <div className="w-48 pb-2">

      </div>
    </header>
  )
}
