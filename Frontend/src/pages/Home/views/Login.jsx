function Login() {
  return (
    <main>
      {/*
    Heads up! 👋
    
    Plugins:
      - @tailwindcss/forms
    */}

      <section className='bg-white dark:bg-gray-900'>
        <div className='shadow-lg lg:grid lg:min-h-screen lg:grid-cols-12'>
          <section className='bg-login-bg relative flex h-32 items-end bg-cover bg-center bg-no-repeat lg:col-span-5 lg:h-full xl:col-span-6'></section>

          <main className='bg-custom-gray flex w-full items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
            <div className='max-w-3xl'>
              <div className='relative -mt-16 block'>
                <div className='flex'>
                  <h2 className='text-custom-black mt-8 text-center text-2xl font-bold sm:text-3xl md:text-4xl'>
                    ¡Bienvenido de nuevo a BlaBlaTalk!
                  </h2>
                </div>

                <p className='text-custom-black leading-relaxed/90 mx-auto mt-4 text-center'>
                  Ya eres parte de nuestra comunidad. Solo ingresa con tus
                  credenciales y vuelve a conectar con tus amigos y descubrir
                  nuevas conversaciones. Si aún no tienes cuenta, regístrate y
                  únete a nosotros para empezar a chatear. ¡Te estamos
                  esperando!
                </p>
              </div>
              <form action='#' className='mt-8 grid grid-cols-6 gap-6'>
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
                    autoComplete='off'
                    className='text-custom-black placeholder:text-custom-gray border-custom-black outline-custom-black mt-1 w-full rounded-md px-4 py-2 text-sm shadow-lg'
                    placeholder='Introduce tu email'
                  />
                </div>

                <div className='col-span-6'>
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
                    autoComplete='new-password'
                    className='text-custom-black placeholder:text-custom-gray mt-1 w-full rounded-md border-gray-200 px-4 py-2 text-sm shadow-lg'
                    placeholder='Introduce tu contraseña'
                  />
                </div>
                <div className='col-span-6'>
                  <input
                    type='submit'
                    value='Iniciar Sesión'
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

export default Login
