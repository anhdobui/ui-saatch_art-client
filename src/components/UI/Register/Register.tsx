import React, { useContext, useState } from 'react'
import InputField from '../InputField'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { registerAcc, RegisterAccTypeBody } from 'src/apis/auth.api'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { AppContext } from 'src/contexts/app.context'

const registerSchema = yup.object().shape({
  username: yup.string().required('Bạn cần nhập tên tài khoản'),
  password: yup.string().required('Bạn cần nhập mật khẩu'),
  phone: yup.string(),
  email: yup.string(),
  fullname: yup.string(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Mật khẩu xác nhận không khớp')
    .required('Bạn cần nhập lại mật khẩu')
})
const Register: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  })
  const navigate = useNavigate()
  const [errorUsername, setErrorUsername] = useState<string>('')
  const mutationRegAccount = useMutation({
    mutationFn: (body: RegisterAccTypeBody) => registerAcc(body),
    onSuccess: () => {
      toast.success('Tạo tài khoản thành công')
      navigate('/login')
    },
    onError: (err: AxiosError) => {
      setErrorUsername((err.response?.data as any)?.errorMessage)
    }
  })
  const onSubmit = (data: {
    password: string
    phone?: string
    fullname?: string
    email?: string
    username: string
    confirmPassword: string
  }) => {
    const { confirmPassword, ...dataRegister } = data
    mutationRegAccount.mutate(dataRegister)
  }
  const { setIsShowLogin, setIsShowRegister } = useContext(AppContext)
  return (
    <div className=' '>
      <div className='w-full max-w-md space-y-3  bg-white p-8 '>
        <div className='flex items-center justify-between'>
          <h1 className='text-center text-2xl font-bold'>Đăng ký</h1>
          <div className='text-center'>
            <button
              onClick={() => {
                setIsShowRegister(false)
                setIsShowLogin(true)
              }}
              type='button'
              className=' text-gray-600 hover:underline'
            >
              Đăng nhập
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            name='username'
            checkError={false}
            type='text'
            label='Tên đăng nhập*'
            register={register}
            watch={watch}
            errorMessage={errors?.username?.message || errorUsername}
          />
          <InputField name='fullname' type='text' label='Họ Tên' register={register} watch={watch} />
          <InputField name='email' type='text' label='Email' register={register} watch={watch} />
          <InputField name='phone' type='text' label='Số điện thoại' register={register} watch={watch} />
          <InputField
            name='password'
            type='password'
            label='Mật khẩu*'
            register={register}
            watch={watch}
            errorMessage={errors?.password?.message}
          />
          <InputField
            name='confirmPassword'
            type='password'
            label='Nhập lại mật khẩu*'
            register={register}
            errorMessage={errors?.confirmPassword?.message}
            watch={watch}
          />

          <button
            type='submit'
            className='text-md w-full bg-gray-600  py-4 font-bold   text-white outline-none focus:ring-2 focus:ring-gray-600'
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
