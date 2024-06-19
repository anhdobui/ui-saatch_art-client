import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../InputField'
import Grid from '../Grid'
import SelectForm from '../SelectForm'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getCity, getDistrict, getShippingCost, getWard } from 'src/apis/ghn.api'
import { AppContext } from 'src/contexts/app.context'
import { convertUSDToVND, convertVNDToUSD } from 'src/utils/utils'
import { toast } from 'react-toastify'
import { CartContext, DataShipInf } from 'src/contexts/cart.context'
import { clearDataShipLS, setDataShipToLS } from 'src/utils/ship'
import { debounce } from 'lodash'
const shippingAddressSchema = yup.object().shape({
  city: yup.string().required('City is requirement'),
  district: yup.string().required('District is requirement'),
  ward: yup.string().required('Ward is requirement'),
  point: yup.string().required('Address is requirement'),
  phone: yup.string()
})
function BoxShippingAddress() {
  const { dataCart } = useContext(AppContext)
  const { dataShip, setDataShip } = useContext(CartContext)

  const {
    register,
    watch,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(shippingAddressSchema)
  })

  const [dataCity, setDataCity] = useState([])
  const [dataDistrict, setDataDistrict] = useState([])
  const [dataWard, setDataWard] = useState([])
  const queryCity = useQuery({
    queryFn: () => getCity(),
    queryKey: ['city'],
    select: (data) => {
      return data?.data
    }
  })
  const debounceInputPhone = useCallback(
    debounce((nextValue) => {
      setDataShipToLS({ ...dataShip, phone: nextValue })
      setDataShip((prev) => ({ ...prev, phone: nextValue }))
    }, 1000),
    []
  )
  const debounceInputAddress = useCallback(
    debounce((nextValue) => {
      setDataShipToLS({ ...dataShip, address: nextValue })
      setDataShip((prev) => ({ ...prev, address: nextValue }))
    }, 1000),
    []
  )
  const watchedPhone = watch('phone')
  const watchedAddress = watch('point')
  useEffect(() => {
    debounceInputPhone(watchedPhone)
    return () => debounceInputPhone.cancel()
  }, [watchedPhone, debounceInputPhone])
  useEffect(() => {
    debounceInputAddress(watchedAddress)
    return () => debounceInputAddress.cancel()
  }, [watchedAddress, debounceInputAddress])

  const mutationGetDistrict = useMutation({
    mutationFn: ({ province_id }: { province_id: number }) => getDistrict({ province_id }),
    onSuccess: (data) => {
      data.data.data &&
        setDataDistrict(
          data.data.data.map((item: any) => ({
            name: item.DistrictName,
            value: item.DistrictID
          }))
        )
    }
  })
  const mutationGetWard = useMutation({
    mutationFn: ({ district_id }: { district_id: number }) => getWard({ district_id }),
    onSuccess: (data) => {
      data.data.data &&
        setDataWard(
          data.data.data.map((item: any) => ({
            name: item.WardName,
            value: item.WardCode
          }))
        )
    }
  })
  const mutationGetFee = useMutation({
    mutationFn: (body: { to_district_id: number; to_ward_code: string; insurance_value: number }) =>
      getShippingCost(body),
    onSuccess: (data) => {
      const { insurance_fee, service_fee, total } = data.data.data
      const feeShip = {
        insurance_fee: Number(convertVNDToUSD(Number(insurance_fee))),
        service_fee: Number(convertVNDToUSD(Number(service_fee))),
        total: Number(convertVNDToUSD(Number(total)))
      }
      if (data.data.data) {
        setDataShip((prev) => ({ ...prev, ...feeShip }))
        setDataShipToLS({ ...dataShip, ...feeShip })
      }
    },
    onError: () => {
      toast.error('Error')
    }
  })
  useEffect(() => {
    if (dataShip.city.id != '') {
      mutationGetDistrict.mutate({ province_id: Number(dataShip.city.id) })
    }
  }, [dataShip.city.id])
  useEffect(() => {
    if (dataShip.district.id != '') {
      mutationGetWard.mutate({ district_id: Number(dataShip.district.id) })
    }
  }, [dataShip.district.id])
  useEffect(() => {
    queryCity.data?.data &&
      setDataCity(
        (queryCity.data?.data as any).map((item: any) => ({
          name: item?.ProvinceName,
          value: item.ProvinceID
        }))
      )
  }, [queryCity.data, setDataCity])
  const onSubmit = (data: any) => {
    console.log(data)
    console.log('body', {
      insurance_value: Number(convertUSDToVND(Number(dataCart?.total))),
      to_district_id: Number(data.district),
      to_ward_code: data.ward
    })
    setDataShipToLS({
      ...dataShip,
      city: {
        id: dataShip.city.id,
        name: dataShip.city.name
      },
      district: {
        id: dataShip.district.id,
        name: dataShip.district.name
      },
      ward: { code: dataShip.ward.code, name: dataShip.ward.name }
    })
    mutationGetFee.mutate({
      insurance_value: Number(convertUSDToVND(Number(dataCart?.total))),
      to_district_id: Number(data.district),
      to_ward_code: data.ward
    })
  }
  const handleChangeCity = ({ value, name }: { value: string | number; name: string }) => {
    // setDataShipToLS({
    //   ...dataShip,
    //   city: {
    //     id: Number(value),
    //     name
    //   },
    //   district: {
    //     id: '',
    //     name: undefined
    //   },
    //   ward: { code: '', name: undefined }
    // })
    setDataShip((prev) => ({
      ...prev,
      city: {
        id: Number(value),
        name
      },
      district: {
        id: '',
        name: undefined
      },
      ward: { code: '', name: undefined }
    }))
    if (value !== '') {
      mutationGetDistrict.mutate({ province_id: Number(value) })
      setDataWard([])
    } else {
      setDataDistrict([])
    }
  }
  const handleChangeDistrict = ({ value, name }: { value: string | number; name: string }) => {
    // setDataShipToLS({ ...dataShip, district: { id: Number(value), name }, ward: { code: '', name: undefined } })
    setDataShip((prev) => ({ ...prev, district: { id: Number(value), name }, ward: { code: '', name: undefined } }))
    if (value !== '') {
      mutationGetWard.mutate({ district_id: Number(value) })
    } else {
      setDataWard([])
    }
  }
  const handleChangeWard = ({ value, name }: { value: string | number; name: string }) => {
    // setDataShipToLS({ ...dataShip, ward: { code: value.toString(), name } })
    setDataShip((prev) => ({ ...prev, ward: { code: value.toString(), name } }))
  }
  const handleCancel = () => {
    clearDataShipLS()
    setDataShip({
      city: {
        id: ''
      },
      district: {
        id: ''
      },
      ward: {
        code: ''
      },
      phone: '',
      address: '',
      insurance_fee: undefined,
      service_fee: undefined,
      total: undefined
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid cols={2} gap={3}>
          <SelectForm
            isDisabled={queryCity.isLoading}
            optionDefault='Choose city'
            setValue={setValue}
            defaultValue={dataShip.city.id != '' ? dataShip.city.id.toString() : undefined}
            control={control}
            name='city'
            checkError={true}
            onChange={handleChangeCity}
            errorMessage={errors?.city?.message}
            option={dataCity}
          />
          <SelectForm
            isDisabled={mutationGetDistrict.isLoading}
            optionDefault='Choose district'
            control={control}
            name='district'
            setValue={setValue}
            defaultValue={dataShip.district.id != '' ? dataShip.district.id.toString() : ''}
            onChange={handleChangeDistrict}
            checkError={true}
            errorMessage={errors?.district?.message}
            option={dataDistrict}
          />
          <SelectForm
            isDisabled={mutationGetWard.isLoading}
            optionDefault='Choose ward'
            control={control}
            name='ward'
            setValue={setValue}
            defaultValue={dataShip.ward.code != '' ? dataShip.ward.code.toString() : undefined}
            onChange={handleChangeWard}
            checkError={true}
            errorMessage={errors?.ward?.message}
            option={dataWard}
          />
          <InputField
            name='phone'
            setValue={setValue}
            checkError={false}
            type='text'
            label='Phone'
            defaultValue={dataShip.phone != '' ? dataShip.phone : undefined}
            register={register}
            watch={watch}
            className='mt-2'
          />
          <InputField
            name='point'
            checkError={false}
            type='text'
            label='Address*'
            register={register}
            watch={watch}
            setValue={setValue}
            defaultValue={dataShip.address != '' ? dataShip.address : undefined}
            errorMessage={errors?.point?.message}
            className='col-span-2'
          />
        </Grid>
        <div className=''>
          <button
            type='submit'
            disabled={mutationGetFee.isLoading}
            className={`my-5 flex h-[50px] w-full cursor-pointer items-center justify-center border border-gray-51 bg-gray-51 px-5 py-[5px] font-bold text-white outline-0 ${
              mutationGetFee.isLoading ? 'opacity-60' : ''
            }`}
          >
            Save Shipping Address {mutationGetFee.isLoading && '...'}
          </button>
          <button
            type='button'
            onClick={handleCancel}
            className='mx-auto mb-3 w-full cursor-pointer underline hover:text-red-500'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default BoxShippingAddress
