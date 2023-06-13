import Carousel from '../HomeUI/Carousel'
import PanelFeatured, { PanelFeaturedType } from './PanelFeatured/PanelFeatured'

type FeaturedCollectionType = {
  dataPanelFeatured: PanelFeaturedType[]
}[]
const dataFeaturedCollection: FeaturedCollectionType = [
  {
    dataPanelFeatured: [
      {
        description: 'Discover curator-approved collector favorites.',
        path: '/',
        thumbnail:
          'https://d3t95n9c6zzriw.cloudfront.net/homepage/2020/large-carousel/Hybrid-collections_bestsellers_room-large.jpg',
        title: '2023 Bestsellers',
        titleConnect: 'Shop The Collection'
      },
      {
        description: 'Make a statement with a one-of-a-kind abstract.',
        path: '/',
        thumbnail:
          'https://d3t95n9c6zzriw.cloudfront.net/homepage/2020/large-carousel/hybrid-collections_abstract_room-large.jpg',
        title: 'Arresting Abstracts',
        titleConnect: 'Shop The Collection'
      }
    ]
  },
  {
    dataPanelFeatured: [
      {
        description: 'Discover curator-approved collector favorites.',
        path: '/',
        thumbnail:
          'https://d3t95n9c6zzriw.cloudfront.net/homepage/2020/large-carousel/hybrid-collections_pop_room-large.jpg',
        title: '2023 Bestsellers',
        titleConnect: 'Shop The Collection'
      },
      {
        description: 'Discover curator-approved collector favorites.',
        path: '/',
        thumbnail:
          'https://d3t95n9c6zzriw.cloudfront.net/homepage/2020/large-carousel/hybrid-collections_portrait_room-large.jpg',
        title: '2023 Bestsellers',
        titleConnect: 'Shop The Collection'
      }
    ]
  }
]
function FeaturedCollection() {
  return (
    <div className='container'>
      <div className='mb-[30px] px-10'>
        <h2 className='my-[50px] text-center font-crimson-text text-[60px]'>Featured Collections</h2>
        <Carousel>
          {dataFeaturedCollection.map((item, index) => (
            <PanelFeatured key={index} dataPanelFeatured={item.dataPanelFeatured} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default FeaturedCollection
