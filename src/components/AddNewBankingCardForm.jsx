import { useForm } from 'react-hook-form'
import { useAddCard, useGetAllBanks } from '../hooks'
import { add_card_schema } from '../utils/yup'
import { yupResolver } from '@hookform/resolvers/yup'

function AddNewBankingCardForm() {
  const { data } = useGetAllBanks()
  const mutate_add_card = useAddCard()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(add_card_schema)
  })
  const handleAddCard = (data) => {
    mutate_add_card.mutate({
      ...data
    })
  }
  return (
    <form onSubmit={handleSubmit(handleAddCard)} className='p-4 min-w-[300px]'>
      <div className='form-control'>
        <label className='form-label'>Chọn ngân hàng</label>
        <select className='form-input' {...register('bank_id')}>
          {data?.data.map((v) => (
            <option value={v.id}>{v.name}</option>
          ))}
        </select>
      </div>
      <div className='form-control'>
        <label className='form-label'>Số tài khoản</label>
        <input type='text' className='form-input' {...register('bank_account_number')} />
        <p className='text-red-500'>{errors.money?.message}</p>
      </div>
      <button className='form-btn' disabled={mutate_add_card.isLoading}>
        {mutate_add_card.isLoading ? (
          <div className='animate-spin'>
            <i className='fa-solid fa-spinner'></i>
          </div>
        ) : (
          'Thêm'
        )}
      </button>
    </form>
  )
}

export default AddNewBankingCardForm
