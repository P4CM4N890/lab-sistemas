import { useState } from 'react';

export const useValidation = () => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setInputValue( event.target.value );
    }

    const onSubmit = ( event: { preventDefault: () => void; } ) => {
        event.preventDefault();

        console.log( inputValue );
        setInputValue('');
    }

    return {
        inputValue,
        onInputChange,
        onSubmit
    }
}