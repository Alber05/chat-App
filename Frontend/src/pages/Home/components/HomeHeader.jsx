import { Link } from 'react-router-dom'
import Logo from '../../../../public/images/logo-chat.png'

function HomeHeader() {
  return (
    <header className='flex h-20 w-full justify-end gap-16 px-16'>
      <Link className='flex items-center justify-center' href='#'>
        <img src={Logo} alt='' className='h-16' />
      </Link>
      <nav className='text-custom-gray flex flex-1 items-center justify-end gap-8'>
        <Link
          className='text-md hover:text-custom-green font-medium underline-offset-4 transition-all duration-150 hover:scale-110'
          href='#'
        >
          Características
        </Link>
        <Link
          className='text-md hover:text-custom-green font-medium underline-offset-4 transition-all duration-150 hover:scale-110'
          to='/login'
        >
          Login
        </Link>
        <Link
          className='text-md hover:text-custom-green font-medium underline-offset-4 transition-all duration-150 hover:scale-110'
          to='/register'
        >
          Registro
        </Link>
      </nav>
    </header>
  )
}

export default HomeHeader
