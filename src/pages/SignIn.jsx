import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { axiosClient } from '../constant'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signin_schema } from '../utils/yup'
function SignIn() {
  const nav = useNavigate()
  const mutate = useMutation(
    (data) => {
      return axiosClient.post('/login', data)
    },
    {
      onSuccess: (result) => {
        const rs_status = result.data.status
        if (rs_status === 'success') {
          toast.success('Đăng nhập thành công')
          localStorage.setItem('user', JSON.stringify(result.data.data))
          nav('/')
        } else {
          toast.error('Tài khoản hoặc mật khẩu không chính xác')
          console.log(result.data)
        }
      },
      onError: () => {
        toast.error('Tài khoản hoặc mật khẩu không chính xác')
      }
    }
  )
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signin_schema)
  })
  const handleLogin = (data) => mutate.mutate(data)
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='m-auto w-[600px] max-w-full p-4 rounded-lg shadow-lg'>
        <div className='text-center font-bold text-xl'>Đăng nhập</div>
        <form className='' onSubmit={handleSubmit(handleLogin)}>
          <div className='form-control'>
            <label className='form-label'>Số điện thoại</label>
            <input type='text' className='form-input' {...register('phone_number')} />
            <p className='text-red-500'>{errors.phone_number?.message}</p>
          </div>
          <div className='form-control'>
            <label className='form-label'>Mật khẩu</label>
            <input type='password' className='form-input' {...register('password')} />
            <p className='text-red-500'>{errors.password?.message}</p>
          </div>
          <button className='form-btn' type='submit'>
            Đăng nhập
          </button>
          <span>
            Chưa có tài khoản
            <span onClick={() => nav('/signup')} className='text-blue-500 hover:underline mx-2 cursor-pointer'>
              Đăng kí
            </span>
          </span>
        </form>
      </div>
    </div>
  )
}

export default SignIn
