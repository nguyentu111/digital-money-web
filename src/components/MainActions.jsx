import NapTien from '../assets/imgs/naptien.png'
import RutTien from '../assets/imgs/ruttien.png'
import ChuyenTien from '../assets/imgs/chuyentien.png'
import { useNavigate } from 'react-router-dom'
import { useGetBalance } from '../hooks'

function MainActions() {
  const nav = useNavigate()
  const { data, isFetching, isError } = useGetBalance()
  return (
    <div className=' rounded-lg shadow-lg p-4'>
      <div className='flex justify-evenly'>
        <div className='cursor-pointer' onClick={() => nav('/deposit')}>
          <img alt='' src={NapTien} className='w-12 h-12 m-auto' />
          <span className='font-bold'>Nạp tiền</span>
        </div>
        <div className='cursor-pointer' onClick={() => nav('/withdraw')}>
          <img alt='' src={RutTien} className='w-12 m-auto h-12 ' />
          <span className='font-bold'>Rút tiền</span>
        </div>
        <div className='cursor-pointer' onClick={() => nav('/transfer')}>
          <img alt='' src={ChuyenTien} className='w-12 m-auto h-12' />
          <span className='font-bold'>Chuyển tiền</span>
        </div>
      </div>
      <div className='font-bold text-xl mt-4'>Số dư hiện tại: {data ? data.data.data.balance : 'NaN'}</div>
    </div>
  )
}

export default MainActions
