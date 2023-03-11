import Chip from '../assets/svgs/chip.svg'
function BankingCard({ data }) {
  const handleDeleteCard = () => {
    if (window.confirm('Xóa liên kết thẻ này ?') == true) {
      console.log('xoa the')
    }
  }
  return (
    <div className='p-4 bg-black text-white rounded-lg flex flex-col min-w-[300px]'>
      <div>
        <span className='font-bold text-lg uppercase'>{data.bank.name}</span>
      </div>
      <img src={Chip} className='py-4 w-16 h-16' />
      <span className='font-bold  uppercase [word-spacing:10px] text-xl tracking-widest'>
        {data.bank_account_number}
      </span>
      <button className='rounded-md text-red-500 bg-red-200 max-w-[50px] mt-3' onClick={handleDeleteCard}>
        Xóa
      </button>
    </div>
  )
}

export default BankingCard
