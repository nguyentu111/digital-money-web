import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { axiosClient } from './constant'
export const useGetAllLinked = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return useQuery(
    'all-linked',
    async () => {
      const res = await axiosClient.get('/all-linked-bank/' + user.userInfo.phone_number, {
        headers: {
          authorization: 'Bearer ' + user.token
        }
      })
      return res.data
    },
    { staleTime: Infinity }
  )
}
export const useGetAllBanks = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return useQuery(
    'all-banks',
    async () => {
      const res = await axiosClient.get('/all-banks/', {
        headers: {
          authorization: 'Bearer ' + user.token
        }
      })
      return res.data
    },
    { staleTime: Infinity }
  )
}

export const useGetTransHistory = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return useQuery(
    'tran-history',
    async () => {
      const res = await axiosClient.get('/trans-history/' + user.userInfo.phone_number, {
        headers: {
          authorization: 'Bearer ' + user.token
        }
      })
      return res.data
    },
    { staleTime: Infinity }
  )
}
// export const useDeposit = ()=>{
//   const queryClient = useQueryClient();
//   const user = JSON.parse(localStorage.getItem("user"));
//   return useMutation(async ()=>{
//     axios.post()
//   })
// }
export const useTransToBank = () => {
  const queryClient = useQueryClient()
  const user = JSON.parse(localStorage.getItem('user'))
  return useMutation(
    async (data) =>
      axios.post('/trans-to-bank', data, {
        headers: {
          authorization: 'Bearer ' + user.token
        }
      }),
    {
      onSuccess: () => queryClient.fetchQuery('tran-history')
    }
  )
}
