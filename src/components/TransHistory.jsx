import { useGetTransHistory } from '../hooks'
import ErrorUi from './Error'
import ChuyenTien from '../assets/imgs/chuyentien.png'
import RutTien from '../assets/imgs/ruttien.png'
import NapTien from '../assets/imgs/naptien.png'
import Loading from './Loading'
export default function TransHistory() {
  const { data, isError, error, isFetching } = useGetTransHistory()
  if (isError) return <ErrorUi error={error} />
  if (isFetching) return <Loading />
  return (
    <div className='flex flex-col p-4 rounded-lg shadow-lg h-fit'>
      <div className='p-3 text-lg font-bold'>Lịch sử giao dịch</div>
      <div className='max-h-[400px] overflow-y-scroll'>
        {data.data.map((v) => {
          const date = v.created_at.substring(0, 10)
          const time = v.created_at.substring(11, 16)
          return (
            <div className='flex gap-3 p-2' key={v.id}>
              <div className='flex-shrink-0'>
                <img
                  alt=''
                  className='rounded-full w-12 h-12 border-2 '
                  src={v.type === '2' || v.type === '1' ? ChuyenTien : v.type === '3' ? NapTien : RutTien}
                />
              </div>
              <div className='flex flex-col'>
                <span className='text-lg font-bold'>{v.note}</span>
                <div className='flex flex-col'>
                  <span>{time + ' ' + date}</span>
                  <span className='font-bold'>{Number.parseInt(v.money)} vnd</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
