import { useState } from 'react';

export const useMenu = () => {
    const [ isMenuActive, setIsMenuActive ] = useState( false );
    
    const activeClass = isMenuActive ? 'flex top-0 left-0' : 'hidden';

    const toggleMenu = () => {
        setIsMenuActive( !isMenuActive );
    }

    return {
        isMenuActive,
        activeClass,
        toggleMenu
    }
}