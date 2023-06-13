import { Link } from 'react-router-dom'
import ProductSimple, { ProductSimpleType } from '../ProductSimple/ProductSimple'
import TitlePanel from '../TitlePanel/TitlePanel'
const dataCollectionProduct: ProductSimpleType[] = [
  {
    auth: 'Ayin Es',
    linkDetail: '/',
    name: 'Red Scarf',
    price: '$4,850',
    thumbnail: 'https://images.saatchiart.com/saatchi/1248/art/2282610/1357756-HSC00002-25.jpg'
  },
  {
    auth: 'Ayin Es',
    linkDetail: '/',
    name: 'In Training',
    price: '$4,850',
    thumbnail: 'https://images.saatchiart.com/saatchi/1248/art/2282642/1357788-HSC00002-25.jpg'
  },
  {
    auth: 'Martin Stranka',
    linkDetail: '/',
    name: 'Wait A Little Longer  - Limited Edition 5 of 25',
    price: '$2,300',
    thumbnail: 'https://images.saatchiart.com/saatchi/175785/art/2727253/1797146-PHATDXII-25.jpg'
  },
  {
    auth: 'Martin Stranka',
    linkDetail: '/',
    name: 'Dreamers and Warriors - Limited Edition 8 of 10',
    price: '$17,000',
    thumbnail: 'https://images.saatchiart.com/saatchi/175785/art/4205380/3275229-HSC00923-25.jpg'
  },
  {
    auth: 'Dick van Dijk',
    linkDetail: '/',
    name: 'All we ever look for (Spring Affair)',
    price: '$1,160',
    thumbnail: 'https://images.saatchiart.com/saatchi/979254/art/6821765/5891403-HSC00001-25.jpg'
  },
  {
    auth: 'Ayin Es',
    linkDetail: '/',
    name: 'Quarters',
    price: '$4,550',
    thumbnail: 'https://images.saatchiart.com/saatchi/1248/art/7301803/6371015-HSC00002-25.jpg'
  }
]
interface CollectionProductProps {
  dataCollection: ProductSimpleType[]
  title: string
  titleConnect: string
}
function CollectionProduct({ dataCollection, title, titleConnect }: CollectionProductProps) {
  return (
    <div className='container'>
      <div className='flex flex-col border-t-[1px] border-solid border-gray-300 px-10 pb-[50px]'>
        <TitlePanel title={title} titleConnect={titleConnect} linkConnect={'/'} />
        <div className='grid grid-cols-6 gap-4'>
          {dataCollection.map((item) => (
            <ProductSimple
              key={item.name}
              auth={item.auth}
              linkDetail={item.linkDetail}
              name={item.name}
              price={item.price}
              thumbnail={item.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionProduct
