import { useState } from 'react'
import { useQuery } from 'react-query'
import { axiosClient } from '../constant'
import { useGetAllBanks, useGetAllLinked } from '../hooks'
import AddNewBankingCardForm from './AddNewBankingCardForm'
import BankingCard from './BankingCard'
import ErrorUi from './Error'
import Loading from './Loading'

function MyCards() {
  const [isAdding, setIsAdding] = useState(false)
  const { data, isFetching, isError, error } = useGetAllLinked()
  if (isError) return <ErrorUi error={error} />
  if (isFetching) return <Loading />
  return (
    <div className='p-4 rounded-lg shadow-lg flex-1'>
      <div className='flex justify-between my-2'>
        <span className='text-xl font-bold '>Thẻ của tôi</span>
        <button className='btn-primary' onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? 'Hủy' : ' + Thêm thẻ mới'}
        </button>
      </div>
      <div className='flex flex-wrap'>
        {isAdding ? (
          <AddNewBankingCardForm />
        ) : (
          <div className='flex gap-3 flex-wrap'>
            {data.data.map((v, i) => (
              <BankingCard data={v} key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyCards
