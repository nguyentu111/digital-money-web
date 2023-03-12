import { useMutation, useQuery, useQueryClient } from 'react-query'
import { axiosClient } from './constant'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
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
export const useDeposit = (reset) => {
  const queryClient = useQueryClient()
  const user = JSON.parse(localStorage.getItem('user'))
  return useMutation(
    async (data) => {
      return axiosClient.post(
        '/deposit-money',
        {
          ...data,
          phone_number_des: user.userInfo.phone_number
        },
        {
          headers: {
            authorization: 'Bearer ' + user.token
          }
        }
      )
    },
    {
      onSuccess: (data) => {
        toast.success('nap tien thanh cong')
        queryClient.invalidateQueries('balance', { refetchInactive: true })
        queryClient.invalidateQueries('tran-history', { refetchInactive: true })
        reset()
      }
    }
  )
}
export const useTransToBank = (reset) => {
  const queryClient = useQueryClient()
  const user = JSON.parse(localStorage.getItem('user'))
  return useMutation(
    async (data) =>
      axiosClient.post(
        '/trans-to-bank',
        { ...data, phone_number_source: user.userInfo.phone_number },
        {
          headers: {
            authorization: 'Bearer ' + user.token
          }
        }
      ),
    {
      onSuccess: (data) => {
        const status = data.data.status
        if (status === 'fail') toast.error(data.data.msg)
        else {
          toast.success('Chuyen tien thanh cong')
          reset()
          queryClient.invalidateQueries('tran-history', { refetchInactive: true })
          queryClient.invalidateQueries('balance', { refetchInactive: true })
        }
      }
    }
  )
}
export const useTransToWallet = (reset) => {
  const queryClient = useQueryClient()
  const user = JSON.parse(localStorage.getItem('user'))
  return useMutation(
    async (data) =>
      axiosClient.post(
        '/trans-to-wallet',
        { ...data, phone_number_source: user.userInfo.phone_number },
        {
          headers: {
            authorization: 'Bearer ' + user.token
          }
        }
      ),
    {
      onSuccess: (data) => {
        toast.success('Chuyen tien thanh cong')

        reset()
        queryClient.invalidateQueries('tran-history', { refetchInactive: true })
        queryClient.invalidateQueries('balance', { refetchInactive: true })
      },
      onError: (error) => {
        if (error.response.data.errors.phone_number_des) {
          toast.error('So điện thoại không tìm thấy')
        }
      }
    }
  )
}
export const useGetBalance = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return useQuery('balance', async () =>
    axiosClient.get('/get-balance/' + user.userInfo.phone_number, {
      headers: {
        authorization: 'Bearer ' + user.token
      }
    })
  )
}
export const useDeleteCard = () => {
  const queryClient = useQueryClient()
  const user = JSON.parse(localStorage.getItem('user'))
  return useMutation(
    async (data) =>
      axiosClient.delete('/delete-card/' + data, {
        headers: {
          authorization: 'Bearer ' + user.token
        }
      }),
    {
      onSuccess: () => {
        toast.success('xoa thanh cong')
        queryClient.invalidateQueries('all-linked', { refetchInactive: true })
      },
      onError: (error) => {
        toast.error('Xóa thẻ thất bại')
      }
    }
  )
}
