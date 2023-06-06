import { useNavigate } from 'react-router-dom'
import logo from '../assets/svgs/logo.svg'
import { useQueryClient } from 'react-query'
export default function Header() {
  const queryClient = useQueryClient()
  const nav = useNavigate()
  const handleSignOut = () => {
    nav('/signin')
    localStorage.removeItem('user')
    queryClient.clear()
  }
  return (
    <div className='border-b-2 '>
      <div className='flex justify-between max-w-[1200px] m-auto items-center '>
        <img onClick={() => nav('/')} className='p-2 w-[120px] h-[60px] px-2 cursor-pointer' src={logo} />
        <div className='flex gap-3 p-2'>
          <div>{JSON.parse(localStorage.getItem('user'))?.userInfo?.name}</div>
          <div>{JSON.parse(localStorage.getItem('user'))?.userInfo?.phone_number}</div>
          <div className='hover:underline cursor-pointer' onClick={handleSignOut}>
            Đăng xuất{' '}
          </div>
        </div>
      </div>
    </div>
  )
}
