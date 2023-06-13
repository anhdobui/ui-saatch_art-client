import classNames from 'classnames'

import thumb1 from 'src/access/hp-toptile1-06052023-large.jpg'
import thumb2 from 'src/access/hp-toptile3-05_22_2023-large.jpg'
import thumb3 from 'src/access/hp-toptile2-05012023-large.jpg'
import Story from '../HomeUI/Story'
interface Props {
  className?: string
}
const dataStory = [
  {
    title: 'A Canvas of Expression',
    path: '',
    titleConnect: 'Explore Our Pride Exhibition',
    thumbnail: thumb1
  },
  {
    title: 'Best of Spring',
    path: '',
    titleConnect: "Shop The Season's Bestselling Art",
    thumbnail: thumb2
  },
  {
    title: 'Back to Basics',
    path: '',
    titleConnect: 'DISCOVER THE ELEMENTS OF ART',
    thumbnail: thumb3
  }
]
function TopTitles({ className }: Props) {
  return (
    <div
      className={classNames('container', {
        [className as string]: className
      })}
    >
      <h1 className='mx-auto my-0 w-[448px] text-center font-helvetica-text text-[30px] font-light text-gray-800'>
        Discover Art You Love From the World's Leading Online Gallery
      </h1>
      <div className='mb-[35px] mt-20 flex justify-center'>
        {dataStory.map((item) => (
          <Story
            className='mr-10'
            key={item.title}
            path={item.path}
            thumbnail={item.thumbnail}
            title={item.title}
            titleConnect={item.titleConnect}
            alt={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default TopTitles
