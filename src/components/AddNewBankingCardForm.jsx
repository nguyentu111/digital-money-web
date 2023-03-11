import { useGetAllBanks } from '../hooks'

function AddNewBankingCardForm() {
  const { data } = useGetAllBanks()
  console.log(data)
  return (
    <div className='p-4 min-w-[300px]'>
      <div className='form-control'>
        <label className='form-label'>Chọn ngân hàng</label>
        <select className='form-input'>
          <option>Agribank</option>
          <option>Agribank</option>
        </select>
      </div>
      <div className='form-control'>
        <label className='form-label'>Số tài khoản</label>
        <input type='text' className='form-input' />
      </div>
      <button className='form-btn'>Lưu thẻ</button>
    </div>
  )
}

export default AddNewBankingCardForm
