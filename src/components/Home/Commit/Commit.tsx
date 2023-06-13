import CommitItem from './CommitItem'
import { CommitItemType } from './CommitItem/CommitItem'
const dataCommit: CommitItemType[] = [
  {
    description:
      'Explore an unparalleled selection of paintings, photography, sculpture, and more by thousands of artists from around the world.',
    title: 'Global Selection'
  },
  {
    description:
      'Our 7-day 100% money-back guarantee allows you to buy with confidence. If you’re not satisfied with your purchase, return it and we’ll help you find a work you love.',
    title: 'Satisfaction Guaranteed'
  },
  {
    description: 'Our personalized art advisory service gives you access to your own expert curator, free of charge.',
    title: 'Complimentary Art Advisory Services'
  }
]
function Commit() {
  return (
    <div className='container'>
      <div className='relative mb-[70px] flex h-[175px] w-full flex-col bg-gray-51 pt-5'>
        <div className='font-helvetica-textoverflow-hidden grid grid-cols-3 gap-0'>
          {dataCommit.map((item) => (
            <CommitItem title={item.title} description={item.description} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Commit
