import { useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { axiosClient } from '../constant'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signup_schema } from '../utils/yup'
function SignUp() {
  const nav = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signup_schema)
  })
  const mutate = useMutation(
    (data) => {
      return axiosClient.post('/register', data)
    },
    {
      onSuccess: (result) => {
        const rs_status = result.data.status
        if (rs_status === 'success') {
          toast.success('Đăng kí thành công')
          nav('/signin')
        } else {
          toast.error('Đăng kí thất bại')
          console.log(result.data)
        }
      },
      onError: (error) => {
        toast.error('Đăng kí thất bại')
        validationErr = error?.response?.data?.errors
      }
    }
  )
  const handleSignUp = (data) => {
    mutate.mutate(data)
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='m-auto w-[600px] max-w-full p-4 rounded-lg shadow-lg'>
        <div className='text-center font-bold text-xl'>Đăng kí</div>
        <form className='md:grid md:grid-cols-2' onSubmit={handleSubmit(handleSignUp)}>
          <div className='form-control'>
            <label className='form-label'>Tên</label>
            <input type='text' className='form-input' {...register('name')} />
            <p className='text-red-500'>{errors.name?.message}</p>
          </div>
          <div className='form-control'>
            <label className='form-label'>Địa chỉ</label>
            <input type='text' className='form-input' {...register('address')} />
            <p className='text-red-500'>{errors.address?.message}</p>
          </div>
          <div className='form-control'>
            <label className='form-label'>Ngày sinh</label>
            <input type='date' className='form-input' {...register('dob')} />
            <p className='text-red-500'>{errors.dob?.message}</p>
          </div>
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
          <div className='form-control'>
            <label className='form-label'>Nhập lại mật khẩu</label>
            <input type='password' className='form-input' {...register('password_confirmation')} />{' '}
            <p className='text-red-500'>{errors.password_confirmation?.message}</p>
          </div>

          <button type='submit' className='form-btn w-full md:col-span-2'>
            Đăng kí
          </button>
          <span className='m-2'>
            Đã có tài khoản
            <span onClick={() => nav('/signin')} className='text-blue-500 hover:underline mx-2 cursor-pointer'>
              Đăng nhập
            </span>
          </span>
        </form>
      </div>
    </div>
  )
}

export default SignUp
