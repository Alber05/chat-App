import Logo from '../../../../public/images/logo-chat.png'

function Register() {
  return (
    <main>
      {/*
Heads up! 👋

Plugins:
  - @tailwindcss/forms
*/}

      <section className='bg-white dark:bg-gray-900'>
        <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
          <section className='bg-register-bg relative flex h-32 items-end bg-cover bg-center bg-no-repeat lg:col-span-5 lg:h-full xl:col-span-6'>
            <div className='hidden lg:relative lg:block lg:p-12'></div>
          </section>

          <main className='bg-custom-gray flex w-full items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
            <div className='max-w-3xl'>
              <div className='relative -mt-16 block'>
                <div className='flex'>
                  <img src={Logo} className='h-20' />
                  <h2 className='text-custom-black mt-8 text-2xl font-bold sm:text-3xl md:text-4xl'>
                    Únete a BlaBlaTalk
                  </h2>
                </div>

                <p className='text-custom-black leading-relaxed/90 mt-4'>
                  Regístrate hoy mismo y forma parte de una comunidad vibrante
                  de personas de todo el mundo. Con BlaBlaTalk, podrás compartir
                  ideas, hacer nuevos amigos y mantener conversaciones
                  divertidas y enriquecedoras. ¡Es rápido y fácil, y lo mejor de
                  todo, es gratis!
                </p>
              </div>
              <form action='#' className='mt-8 grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-6'>
                  <label
                    htmlFor='username'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Nombre de usuario
                  </label>
                  <input
                    type='text'
                    id='username'
                    name='username'
                    autoComplete='off'
                    className='bg-custom-green text-custom-black placeholder:text-custom-gray mt-1 w-full rounded-md border-gray-200 px-4 py-2 text-sm shadow-lg'
                    placeholder='Introduce tu nombre de usuario'
                  />
                </div>

                <div className='col-span-6'>
                  <label
                    htmlFor='userEmail'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='userEmail'
                    name='email'
                    className='bg-custom-green text-custom-black placeholder:text-custom-gray mt-1 w-full rounded-md border-gray-200 px-4 py-2 text-sm shadow-lg'
                    placeholder='Introduce tu email'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='userPassword'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Contraseña
                  </label>
                  <input
                    type='password'
                    id='userPassword'
                    name='password'
                    className='bg-custom-green text-custom-black placeholder:text-custom-gray mt-1 w-full rounded-md border-gray-200 px-4 py-2 text-sm shadow-lg'
                    placeholder='Introduce tu contraseña'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='fake-password-confirmation'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Confirmar contraseña
                  </label>
                  <input
                    type='password'
                    id='fake-password-confirmation'
                    name='fake-password-confirmation'
                    autoComplete='new-password'
                    className='bg-custom-green text-custom-black placeholder:text-custom-gray mt-1 w-full rounded-md border-gray-200 px-4 py-2 text-sm shadow-lg'
                    placeholder='Repite la contraseña'
                  />
                </div>
                <div className='col-span-6'>
                  <input
                    type='submit'
                    value='Registro'
                    className='bg-custom-green-teal text-custom-gray w-full cursor-pointer rounded-md p-2 font-semibold'
                  />
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </main>
  )
}

export default Register
