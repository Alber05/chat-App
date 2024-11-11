import { useContext } from 'react'
import { apiContext } from '../context/APicontext'

function HomeLayout() {
  const { hola, adios } = useContext(apiContext)

  return (
    <>
      <p className='text-black'>{hola}</p>
      <p>{adios}</p>
    </>
  )
}

export default HomeLayout
