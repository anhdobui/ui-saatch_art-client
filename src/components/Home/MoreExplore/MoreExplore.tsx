import TitlePanel from 'src/components/UI/TitlePanel'
import Story from '../HomeUI/Story'
const dataStory = [
  {
    title: 'A Canvas of Expression',
    path: '',
    titleConnect: 'VIEW MORE',
    thumbnail:
      'https://d3t95n9c6zzriw.cloudfront.net/homepage/2020/featured-stories/hp-featuredstories-hpv0103-t1-10052020.jpg'
  },
  {
    title: 'Get $100 Off',
    path: '',
    titleConnect: 'START SHARING',
    thumbnail: 'https://d3t95n9c6zzriw.cloudfront.net/homepage/hybrid-2021/talkable-desktop.jpg'
  },
  {
    title: 'Art for Your Style',
    path: '',
    titleConnect: 'EXPLORE',
    thumbnail:
      'https://d3t95n9c6zzriw.cloudfront.net/homepage/hybrid-2021/featured-stories-3-art-for-your-style-02162023.jpg'
  }
]
function MoreExplore() {
  return (
    <div className='container'>
      <div className='mb-[35px] flex flex-col px-10'>
        <TitlePanel className='text-[44px]' title={'More to Explore'} titleConnect={'VIEW ALL'} linkConnect={'/'} />
        <div className='flex justify-between'>
          {dataStory.map((item) => (
            <Story
              thumbnailRatio='16:9'
              key={item.title}
              title={item.title}
              thumbnail={item.thumbnail}
              path={item.path}
              titleConnect={item.titleConnect}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoreExplore
