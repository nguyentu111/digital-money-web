import Loading from '../components/Loading'
import { useGetAllLinked } from '../hooks'
import Header from '../patials/Header'
import { useForm } from 'react-hook-form'
import { deposit_schema } from '../utils/yup'
import { yupResolver } from '@hookform/resolvers/yup'
function DepositMoney() {
  const { data, isFetching, isError, error } = useGetAllLinked()

  if (isFetching) return <Loading />
  if (isError) return <Error error={error} />

  console.log(data)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(deposit_schema)
  })
  const handleDeposit = (data) => {}
  return (
    <div className='m-auto flex flex-col h-screen'>
      <Header />
      <div className=' flex-1 flex flex-col justify-center'>
        <div className='max-w-full w-[600px] shadow-lg m-auto rounded-lg overflow-hidden'>
          <div className='bg-red-500 text-white font-bold p-4 '>Nạp tiền</div>
          <form onSubmit={handleSubmit(handleDeposit)} className='p-4'>
            <div className='form-control'>
              <label className='form-label'>Chọn ngân hàng</label>
              <select className='form-input' {...register('linked_id')}>
                {data.data.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.bank.name + ' - ' + v.bank_account_number}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-control'>
              <label className='form-label'>Số tiền</label>
              <input type='text' className='form-input' {...register('money')} />
              <p className='text-red-500'>{errors.money?.message}</p>
            </div>
            <div className='form-control'>
              <label className='form-label'>Ghi chú</label>
              <input type='text' className='form-input' {...register('note')} />
            </div>
            <button className='form-btn' type='submit'>
              Nạp
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DepositMoney
