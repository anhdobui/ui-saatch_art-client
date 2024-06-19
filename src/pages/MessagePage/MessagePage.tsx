import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { returnVnpay, VnpayParams } from 'src/apis/paymentvnpay.api'

function MessagePage() {
  const location = useLocation()

  // Tạo mutation để gửi request tới API backend
  const { mutate, data, isError, isLoading, isSuccess } = useMutation({
    mutationFn: (params: VnpayParams) => returnVnpay(params)
  })

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const allParams: VnpayParams = {} as VnpayParams
    queryParams.forEach((value, key) => {
      allParams[key as keyof VnpayParams] = value
    })
    console.log(allParams)
    // Gọi API backend khi component được mount
    mutate(allParams)
  }, [location, mutate])
  return (
    <div
      className={`container mb-4 rounded-lg  p-4 text-sm ${isSuccess ? 'bg-green-50 text-green-800' : ''} ${
        isError ? 'bg-red-50 text-red-800' : ''
      }  `}
      role='alert'
    >
      {isSuccess && (
        <p>
          <span className='font-medium'>Success!</span>Payment has been completed
        </p>
      )}
      {isError && (
        <p>
          <span className='font-medium'>Error!</span>Payment Error
        </p>
      )}
    </div>
  )
}

export default MessagePage
