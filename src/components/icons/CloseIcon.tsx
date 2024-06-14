import { Icon } from "../../interfaces"

export const CloseIcon = ( { extraClass } : Icon ) => {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round" className={ `${ extraClass }` }  >
        <title>Cerrar</title>
        <desc>Icono de una equis para cerrar</desc>

        <rect fill="none" stroke="none" width="24" height="24"/>

        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
    </svg>
  )
}
