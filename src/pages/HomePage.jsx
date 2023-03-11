import TransHistory from '../components/TransHistory'
import Header from '../patials/Header'
import MyCards from '../components/MyCards'
import MainActions from '../components/MainActions'
import { useEffect } from 'react'
export default function HomePage() {
  return (
    <>
      <Header />
      <div className='gap-4 max-w-[1200px] m-auto p-4'>
        <MainActions />
        <div className='flex gap-3 flex-col sm:flex-row'>
          <TransHistory />
          <MyCards />
        </div>
      </div>
    </>
  )
}
