import { Outlet } from 'react-router-dom'
import HomeHeader from './components/HomeHeader'
import HomeFooter from './components/HomeFooter'

function Home() {
  return (
    <div className='bg-custom-green-teal grid min-h-screen grid-rows-[80px,1fr,auto]'>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </div>
  )
}

export default Home
