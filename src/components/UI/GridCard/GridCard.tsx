import React, { ReactNode } from 'react'
import CardProduct from '../CardProduct'
import { ProductType } from 'src/type/app.type'
import { nanoid } from 'nanoid'
interface GridCardProps {
  children?: ReactNode
}
const dataPrd: ProductType[] = [
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/192132/art/9953017/9015935-UHMHKCGU-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/425707/art/9329927/8393035-ZVGJAWSP-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/192132/art/9953017/9015935-UHMHKCGU-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/425707/art/9329927/8393035-ZVGJAWSP-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/192132/art/9953017/9015935-UHMHKCGU-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/425707/art/9329927/8393035-ZVGJAWSP-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/192132/art/9953017/9015935-UHMHKCGU-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/425707/art/9329927/8393035-ZVGJAWSP-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/192132/art/9953017/9015935-UHMHKCGU-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/425707/art/9329927/8393035-ZVGJAWSP-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/192132/art/9953017/9015935-UHMHKCGU-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/425707/art/9329927/8393035-ZVGJAWSP-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/192132/art/9953017/9015935-UHMHKCGU-6.jpg',
    name: '',
    price: ''
  },
  {
    id: '',
    image: 'https://images.saatchiart.com/saatchi/425707/art/9329927/8393035-ZVGJAWSP-6.jpg',
    name: '',
    price: ''
  }
]
function GridCard({ children }: GridCardProps) {
  return (
    <div className='grid grid-cols-6 gap-4'>
      {dataPrd &&
        Array.from({ length: 6 }).map((_, colIndex) => (
          <div key={colIndex}>
            {dataPrd
              .filter((_, index) => index % 6 === colIndex)
              .map((item) => (
                <div key={nanoid()} className=''>
                  <CardProduct thumbnail={item.image} />
                </div>
              ))}
          </div>
        ))}
    </div>
  )
}

export default GridCard
