import { TagType } from 'src/type/app.type'
import CollectionTag from './CollectionTag'

import Shortcuts from './Shortcuts'
import Slider from './Slider'
import TopTitles from './TopTiles'
import FeaturedCollection from './FeaturedCollections'
import CollectionProduct from '../UI/CollectionProduct'
import { ProductSimpleType } from '../UI/ProductSimple/ProductSimple'
import Advisory from './Advisory'
import MoreExplore from './MoreExplore'
import Commit from './Commit'

const initListTag: TagType[] = [
  {
    link: '/',
    tagName: 'Paintings'
  },
  {
    link: '/',
    tagName: 'Photography'
  },
  {
    link: '/',
    tagName: 'Drawings'
  },
  {
    link: '/',
    tagName: 'Sculpture'
  }
]
const initListPrice: TagType[] = [
  {
    link: '/',
    tagName: 'UNDER $500'
  },
  {
    link: '/',
    tagName: '$500 - $1000'
  },
  {
    link: '/',
    tagName: '$1000 - $2000'
  },
  {
    link: '/',
    tagName: '$2000 - $5000'
  }
]

// ------------------------------------------------------
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
const dataElementsofArt: ProductSimpleType[] = [
  {
    auth: 'Ayin Es',
    linkDetail: '/',
    name: 'Red Scarf',
    price: '$4,850',
    thumbnail: 'https://images.saatchiart.com/saatchi/952872/art/3880912/2950795-HSC00002-25.jpg'
  },
  {
    auth: 'Ayin Es',
    linkDetail: '/',
    name: 'In Training',
    price: '$4,850',
    thumbnail: 'https://images.saatchiart.com/saatchi/467801/art/6545877/5615549-HSC00001-25.jpg'
  },
  {
    auth: 'Martin Stranka',
    linkDetail: '/',
    name: 'Wait A Little Longer  - Limited Edition 5 of 25',
    price: '$2,300',
    thumbnail: 'https://images.saatchiart.com/saatchi/769351/art/6734427/5804089-OTYOEDVJ-25.jpg'
  },
  {
    auth: 'Martin Stranka',
    linkDetail: '/',
    name: 'Dreamers and Warriors - Limited Edition 8 of 10',
    price: '$17,000',
    thumbnail: 'https://images.saatchiart.com/saatchi/620427/art/6816849/5886487-HSC00001-25.jpg'
  },
  {
    auth: 'Dick van Dijk',
    linkDetail: '/',
    name: 'All we ever look for (Spring Affair)',
    price: '$1,160',
    thumbnail: 'https://images.saatchiart.com/saatchi/1434818/art/7470277/6539275-HSC00001-25.jpg'
  },
  {
    auth: 'Ayin Es',
    linkDetail: '/',
    name: 'Quarters',
    price: '$4,550',
    thumbnail: 'https://images.saatchiart.com/saatchi/1248/art/7301803/6371015-HSC00002-25.jpg'
  }
]
function Home() {
  return (
    <div>
      <Slider />
      <Shortcuts />
      <TopTitles className='mt-[50px]' />
      <CollectionTag title='Shop by Category' listTag={initListTag} />
      <FeaturedCollection />
      <CollectionProduct
        dataCollection={dataCollectionProduct}
        title='A Canvas of Expression'
        titleConnect='BROWSE THE EXHIBITION'
      />
      <CollectionProduct
        dataCollection={dataElementsofArt}
        title='Elements of Art'
        titleConnect='EXPLORE THE CATALOG'
      />
      <CollectionTag title='Shop by Price' listTag={initListPrice} border='b-t' />
      <Advisory />
      <MoreExplore />
      <Commit />
    </div>
  )
}

export default Home
