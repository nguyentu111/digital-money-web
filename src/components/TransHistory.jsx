import { useGetTransHistory } from '../hooks'
import ErrorUi from './Error'
import ChuyenTien from '../assets/imgs/chuyentien.png'
import RutTien from '../assets/imgs/ruttien.png'
import NapTien from '../assets/imgs/naptien.png'
import Loading from './Loading'
export default function TransHistory() {
  const { data, isError, error, isFetching } = useGetTransHistory()
  const phone_number = JSON.parse(localStorage.getItem('user'))?.userInfo?.phone_number
  if (isError) return <ErrorUi error={error} />
  if (isFetching) return <Loading />
  console.log({ data })
  return (
    <div className='flex flex-col p-4 rounded-lg shadow-lg h-fit'>
      <div className='p-3 text-lg font-bold'>Lịch sử giao dịch</div>
      <div className='max-h-[400px] overflow-y-scroll'>
        {data.data.map((v) => {
          return (
            <div className='flex gap-3 p-2' key={v.id}>
              <div className='flex-shrink-0'></div>
              <div className='flex flex-col'>
                <span className='text-lg font-bold'>
                  {v.type == 1 && v.phone_number_des == phone_number ? 'Nhận tiền từ ví khác' : v.note}
                </span>
                {v.type == 3 ? <span>Nguồn thẻ: {v.bank_account_source}</span> : null}
                {v.type == 2 ? <span>Thẻ đã chuyển: {v.bank_account_des}</span> : null}
                {v.type == 1 ? (
                  v.phone_number_des == phone_number ? (
                    <span>Sdt người gửi: {v.phone_number_source}</span>
                  ) : (
                    <span>Sdt người nhận: {v.phone_number_des}</span>
                  )
                ) : null}
                <div className='flex flex-col'>
                  <span>{v.create}</span>
                  <span
                    className={
                      v.type == 3 || (v.type == 1 && v.phone_number_des == phone_number)
                        ? 'font-bold text-green-600'
                        : 'font-bold text-red-600'
                    }
                  >
                    {v.type == 3 || (v.type == 1 && v.phone_number_des == phone_number)
                      ? '+' + Number.parseInt(v.money)
                      : '-' + Number.parseInt(v.money)}{' '}
                    vnd
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
