import { NavLink } from 'react-router-dom';

interface Props {
    label: string,
    to?: string,
    onClick?: () => void,
}

export const NavButton = ( { label = 'Button', to = '', onClick } : Props ) => {

    const btnActive = 'py-2 md:border-b-2 md:border-b-black text-black';

    return (
        <NavLink  
            to={ `/${ to }` } 
            onClick={ onClick }
            className={ ({ isActive }) => `${ isActive ? btnActive : 'text-stone-500' } flex justify-center items-center grow md:grow-0 text-xl md:text-lg truncate py-2 px-6  border-t md:border-b-2 md:border-transparent border-t-stone-800 md:hover:border-b-black hover:text-black` }
        >
            { label }
        </NavLink>
    );
}
