import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/pro-regular-svg-icons'

export default function Header() {
  return (
    <>
      <nav className="bg-white shadow flex justify-between items-center p-5 relative z-10">
        <button className="w-10 h-10 flex justify-center items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='w-4 h-4' />
        </button>
        <Image src={'/images/LOGO@2x.png'} width={98} height={46} alt={'Logo'} />
        <button className="w-10 h-10 flex justify-center items-center">
            <FontAwesomeIcon icon={faCartShopping} className='w-4 h-4' />
        </button>
      </nav>
    </>
  )
}
