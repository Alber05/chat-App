import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faLock, faBolt } from '@fortawesome/free-solid-svg-icons'

export default function HomeMain() {
  return (
    <main className='flex-1'>
      <section className='bg-home-bg w-full bg-cover bg-center bg-no-repeat pb-40 pt-40'>
        <div className='bg-custom-green-teal relative mx-auto flex w-[90%] max-w-screen-lg flex-col items-center space-y-4 rounded-[80px] bg-opacity-80 py-20 text-center'>
          <div className='space-y-2'>
            <h1 className='text-custom-gray text-shadow-lg text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
              Conecta con cualquier persona <br /> en cualquier lugar
            </h1>
            <p className='text-custom-gray text-shadow-md mx-auto max-w-[700px] font-semibold text-opacity-75 md:text-xl'>
              Chatter une a las personas. Nuestra aplicación de chat intuitiva
              hace comunicación fluida y agradable.
            </p>
          </div>
          <Link
            to='/login'
            className='bg-custom-black hover:text-custom-green-emerald hover:border-custom-green-emerald border-custom-gray text-custom-gray rounded-xl border-2 p-2 font-bold transition-all duration-200 hover:scale-110'
          >
            Iniciar sesión
          </Link>
          <div className='border-t-custom-green-teal border-r-custom-green-teal absolute -bottom-20 right-[80px] h-20 w-20 border border-b-[40px] border-l-[40px] border-r-[40px] border-t-[40px] border-b-transparent border-l-transparent border-opacity-85 md:right-[100px] lg:right-[160px]'></div>
        </div>
      </section>
      <section className='text-custom-black w-full bg-gray-100 py-12 md:py-24 lg:py-32'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-shadow-sm text-custom-green-teal mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl'>
            Características
          </h2>
          <div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
            <div className='flex flex-col items-center space-y-4'>
              <FontAwesomeIcon
                icon={faUserGroup}
                className='text-custom-green-teal size-12 lg:size-16'
              />
              <h3 className='text-xl font-bold'>Chats grupales y privados</h3>
              <p className='text-custom-green-teal text-center font-semibold'>
                Cree y administre múltiples conversaciones con facilidad.
              </p>
            </div>
            <div className='flex flex-col items-center space-y-4'>
              <FontAwesomeIcon
                icon={faLock}
                className='text-custom-green-teal size-12 lg:size-16'
              />
              <h3 className='text-xl font-bold'>
                Cifrado de extremo a extremo
              </h3>
              <p className='text-custom-green-teal text-center font-semibold'>
                Sus mensajes están seguros con nuestro cifrado de última
                generación.
              </p>
            </div>
            <div className='flex flex-col items-center space-y-4'>
              <FontAwesomeIcon
                icon={faBolt}
                className='text-custom-green-teal size-12 lg:size-16'
              />
              <h3 className='text-xl font-bold'>Mensajería instantánea</h3>
              <p className='text-custom-green-teal text-center font-semibold'>
                Entrega de mensajes ultrarrápida para conversaciones en tiempo
                real.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32'>
        <div className='flex flex-col items-center space-y-8 text-center'>
          <div className='space-y-2'>
            <h2 className='text-custom-gray text-shadow-lg text-3xl font-bold tracking-tighter sm:text-5xl'>
              Comience a chatear hoy
            </h2>
            <p className='text-custom-baby-powder mx-auto max-w-[600px] md:text-xl'>
              Únase a millones de usuarios que ya disfrutan de Chatter.
            </p>
          </div>

          <Link
            to='/register'
            className='bg-custom-black text-custom-gray hover:text-custom-green-emerald hover:border-custom-green-emerald rounded-xl border-2 p-2 font-bold transition-all duration-200 hover:scale-110'
          >
            Registro
          </Link>
        </div>
      </section>
    </main>
  )
}
