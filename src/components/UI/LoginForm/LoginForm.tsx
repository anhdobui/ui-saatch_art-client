import React, { useContext, useEffect, useState } from 'react'
import InputField from '../InputField'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { login, LoginType } from 'src/apis/auth.api'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { AppContext } from 'src/contexts/app.context'
import { UserProfile } from 'src/type/user.type'
import { setProfileToLS } from 'src/utils/auth'

const loginSchema = yup.object().shape({
  username: yup.string().required('Bạn cần nhập tên đăng nhập'),
  password: yup.string().required('Bạn cần nhập mật khẩu')
})
const LoginForm: React.FC = ({ isPopup = true }: { isPopup?: boolean }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  })
  const { setIsShowLogin, setIsShowRegister, setProfile, setIsAuthenticated } = useContext(AppContext)
  const [errorLogin, setErrorLogin] = useState<string>('')

  const mutationLogin = useMutation({
    mutationFn: (body: LoginType) => login(body),
    onSuccess: (data) => {
      const userProfile: UserProfile = {
        id: data.data.id,
        email: data.data.email,
        fullname: data.data.fullname,
        username: data.data.username,
        thumbnail: '/avatar.png'
      }
      setProfile(userProfile)
      setProfileToLS(userProfile)
      setIsShowLogin(false)
      setIsAuthenticated(true)
      toast.success('Đăng nhập thành công')
    },
    onError: (err: AxiosError) => {
      setErrorLogin((err.response?.data as any)?.errorMessage)
    }
  })
  useEffect(() => {
    errors?.password?.message && setErrorLogin(errors?.password?.message)
    errors?.username?.message && setErrorLogin(errors?.username?.message)
  }, [errors?.username?.message, errors?.password?.message, setErrorLogin])
  const onSubmit = (data: { username: string; password: string }) => {
    mutationLogin.mutate(data)
  }

  return (
    <div className={isPopup ? '' : 'flex min-h-screen items-center justify-center bg-gray-100'}>
      <div className={isPopup ? '' : 'w-full max-w-md space-y-3 rounded-xl bg-white p-8 shadow-md'}>
        {/* <h1 className='mb-5 text-center text-2xl font-bold'>or</h1> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            watch={watch}
            checkError={false}
            label='Tên đăng nhập*'
            register={register}
            name='username'
            type='text'
            placeholder='Tên đăng nhập*'
          />
          <InputField
            checkError={false}
            watch={watch}
            label='Mật khẩu*'
            register={register}
            name='password'
            type='password'
            placeholder='Mật khẩu*'
          />
          {errorLogin && <div className='mb-3 mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorLogin}</div>}
          <button
            type='submit'
            className='text-md w-full bg-gray-600  py-4 font-bold   text-white outline-none focus:ring-2 focus:ring-gray-600'
          >
            Đăng nhập
          </button>
        </form>
        <div className='text-center'>
          <button
            onClick={() => {
              setIsShowLogin(false)
              setIsShowRegister(true)
            }}
            type='button'
            className='mt-4 text-gray-600 hover:underline'
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
