import { useState } from 'react'
import { useGetAllBanks, useTransToBank, useTransToWallet } from '../hooks'
import Header from '../patials/Header'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useForm } from 'react-hook-form'
import { trans_money_schema } from '../utils/yup'
import { yupResolver } from '@hookform/resolvers/yup'
function TransferMoney() {
  const [transType, setTransType] = useState(1)
  const { data, isFetching, isError, error } = useGetAllBanks()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(trans_money_schema)
  })
  const mutate_trans_to_bank = useTransToBank(reset)
  const mutate_trans_to_wallet = useTransToWallet(reset)
  const handleTrans = (data) => {
    const { bank_account_des, ...rest } = data
    if (transType === 1) {
      mutate_trans_to_wallet.mutate({
        ...rest,
        phone_number_des: data.bank_account_des,
        note: 'Chuyển tiền tới ví'
      })
    } else {
      mutate_trans_to_bank.mutate({ ...data, note: 'Chuyển tiền tới ngân hàng' })
    }
  }
  if (isFetching) return <Loading />
  if (isError) return <Error error={error} />

  return (
    <div className='m-auto flex flex-col h-screen'>
      <Header />
      <div className=' flex-1 flex flex-col justify-center'>
        <div className='max-w-full w-[600px] shadow-lg m-auto rounded-lg overflow-hidden'>
          <div className='bg-red-500 text-white font-bold p-4 '>Chuyển tiền</div>
          <div className='flex relative'>
            <button className='btn-primary rounded-none flex-1' onClick={() => setTransType(1)}>
              Tới ví
            </button>
            <button className='btn-primary rounded-none flex-1' onClick={() => setTransType(2)}>
              Tới ngân hàng
            </button>
            <div
              className={` w-[50%] h-[2px] bg-red-600 absolute transition-all  duration-300 bottom-0 ${
                transType == 2 ? 'left-[50%]' : ''
              }`}
            ></div>
          </div>
          <form onSubmit={handleSubmit(handleTrans)} className='p-4'>
            {transType == 2 && (
              <div className='form-control'>
                <label className='form-label'>Chọn ngân hàng</label>
                <select type='text' className='form-input' {...register('bank_id')}>
                  {data.data.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className='form-control'>
              <label className='form-label'>Số tài khoản</label>
              <input type='number' className='form-input' {...register('bank_account_des')} />
              <p className='text-red-500'>{errors.bank_account_des?.message}</p>
            </div>
            <div className='form-control'>
              <label className='form-label'>Số tiền</label>
              <input type='number' className='form-input' {...register('money')} />
              <p className='text-red-500'>{errors.money?.message}</p>
            </div>
            <button type='submit' className='form-btn'>
              {mutate_trans_to_bank.isLoading || mutate_trans_to_wallet.isLoading ? (
                <div className='animate-spin'>
                  <i className='fa-solid fa-spinner'></i>
                </div>
              ) : (
                'Chuyển tiền'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TransferMoney
