import httpGHN from './../utils/httpGHN'

export const getCity = () => httpGHN.get<any>(`province`)
export const getDistrict = ({ province_id }: { province_id: number }) => httpGHN.post<any>(`district`, { province_id })
export const getWard = ({ district_id }: { district_id: number }) => httpGHN.post<any>(`ward`, { district_id })
export const getShippingCost = ({
  to_district_id,
  to_ward_code,
  insurance_value
}: {
  to_district_id: number
  to_ward_code: string
  insurance_value: number
}) =>
  httpGHN.post<any>(
    `fee`,
    {
      to_district_id,
      to_ward_code,
      insurance_value,
      service_type_id: 2,
      coupon: null,
      from_district_id: 1542,
      height: 15,
      length: 15,
      weight: 1000,
      width: 15
    },
    {
      headers: {
        shop_id: 5081496,
        token: 'acaa2a58-17d6-11ef-be43-f60ece3fb56e'
      },
      baseURL: ' https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/'
    }
  )
