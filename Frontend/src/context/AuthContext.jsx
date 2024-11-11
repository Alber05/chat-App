import { apiContext } from './APicontext'

// eslint-disable-next-line react/prop-types
function AuthContext({ children }) {
  const hola = 'hola'
  const adios = 'adios'

  return (
    <apiContext.Provider value={{ hola, adios }}>
      {children}
    </apiContext.Provider>
  )
}

export default AuthContext
