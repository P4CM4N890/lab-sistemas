import { Icon } from "../../interfaces"

export const MenuIcon = ( { extraClass } : Icon ) => {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round" className={ `${ extraClass }` } >
        <title>Menú</title>
        <desc>Icono de menú</desc>

        <rect fill="none" stroke="none" width="24" height="24"/>

        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 6l16 0" /><path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
    </svg>
  )
}
