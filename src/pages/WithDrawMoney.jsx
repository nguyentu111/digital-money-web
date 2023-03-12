import ErrorUi from '../components/Error'
import Loading from '../components/Loading'
import { useGetAllLinked, useTransToBank } from '../hooks'
import Header from '../patials/Header'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { widthDraw_schema } from '../utils/yup'
function WithDrawMoney() {
  const { data, isFetching, isError, error } = useGetAllLinked()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(widthDraw_schema)
  })
  const mutate_widraw = useTransToBank(reset)
  if (isFetching) return <Loading />
  if (isError) return <ErrorUi error={error} />
  const handleWithDraw = (data) => {
    const { id, bank_number } = JSON.parse(data.bankInfo)
    mutate_widraw.mutate({
      money: data.money,
      bank_id: id,
      bank_account_des: bank_number,
      note: data.note
    })
  }
  return (
    <div className='m-auto flex flex-col h-screen'>
      <Header />
      <div className=' flex-1 flex flex-col justify-center'>
        <div className='max-w-full w-[600px] shadow-lg m-auto rounded-lg overflow-hidden'>
          <div className='bg-red-500 text-white font-bold p-4 '>Rút tiền</div>
          <form onSubmit={handleSubmit(handleWithDraw)} className='p-4'>
            <div className='form-control'>
              <label className='form-label'>Chọn ngân hàng</label>
              <select className='form-input' {...register('bankInfo')}>
                {data.data.map((v) => (
                  <option key={v.id} value={JSON.stringify({ id: v.bank.id, bank_number: v.bank_account_number })}>
                    {v.bank.name + ' - ' + v.bank_account_number}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-control'>
              <label className='form-label'>Số tiền</label>
              <input type='number' className='form-input' {...register('money')} />
              <p className='text-red-500'>{errors.money?.message}</p>
            </div>
            <div className='form-control'>
              <label className='form-label'>Ghi chú</label>
              <input type='text' className='form-input' {...register('note')} />
            </div>
            <button type={'submit'} className='form-btn'>
              Rút tiền
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WithDrawMoney
