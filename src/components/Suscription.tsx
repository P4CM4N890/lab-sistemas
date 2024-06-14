import { useValidation } from '../hooks';

export const Suscription = () => {

  const { inputValue, onInputChange, onSubmit } = useValidation();

  return (
    <form className="flex h-12 w-full" onSubmit={ onSubmit } >
        <input 
          id="suscription" 
          type='email'
          onChange={ onInputChange }
          value={ inputValue }
          className="basis-5/6 rounded-tl-md rounded-bl-md px-6 focus:outline-none" 
          placeholder="Ingresa tu email"/>
        <button className="w-full bg-black border-white border-2  text-white font-semibold basis-1/6 rounded-tr-md rounded-br-md px-3" >Suscribirme</button>
    </form>
  );
}
