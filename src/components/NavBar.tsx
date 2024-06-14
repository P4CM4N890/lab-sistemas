import { useMenu } from '../hooks';

import { NavButton } from './NavButton';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

export const NavBar = ( ) => {

    const { activeClass, toggleMenu } = useMenu();

    return (
        <nav className="w-fit flex flex-row" >
            <button className="flex md:hidden justify-center items-center text-stone-500 hover:text-black mb-2" 
                onClick={ toggleMenu }
            >
                <MenuIcon  extraClass="w-10 h-10" />
            </button>

            <div className={ `flex-col w-full h-screen absolute md:relative bg-white md:flex md:flex-row md:w-fit md:h-fit ${ activeClass }` }
                
            >
                <button className="md:hidden grow md:grow-0 flex justify-center items-center text-stone-500 hover:text-black"
                    onClick={ toggleMenu }
                >
                    <CloseIcon extraClass="w-8 h-8" />
                </button>
                <NavButton label="News" onClick={ toggleMenu } />
                <NavButton label="People" to="people" onClick={ toggleMenu } />
                <NavButton label="Student Projects" to="student-projects" onClick={ toggleMenu } />
                <NavButton label="Contact" to="contact" onClick={ toggleMenu } />
            </div>
        </nav>
    );
}
