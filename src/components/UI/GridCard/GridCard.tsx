import CardProduct from '../CardProduct'
import { ProductType } from 'src/type/app.type'
import { nanoid } from 'nanoid'
interface GridCardProps {
  data: ProductType[] | undefined
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
function GridCard({ data }: GridCardProps) {
  console.log('GridCard', data)
  return (
    <div className='mb-10 grid grid-cols-4 gap-4'>
      {data &&
        Array.from({ length: 4 }).map((_, colIndex) => (
          <div key={colIndex}>
            {data
              .filter((_, index) => index % 4 === colIndex)
              .map((item) => (
                <div key={nanoid()} className=''>
                  <CardProduct name={item.name} image={item.image} price={item.price} id={item.id} />
                </div>
              ))}
          </div>
        ))}
      <h1>{!data && 'Trang không có sản phẩm nào'}</h1>
    </div>
  )
}

export default GridCard
