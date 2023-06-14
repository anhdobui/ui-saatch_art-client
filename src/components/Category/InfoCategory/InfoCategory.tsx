import DescriptionCategory from './DesciptionCategory'
import SortBtn from './SortBtn'
import TitleCategory from './TitleCategory'

function InfoCategory() {
  return (
    <div>
      <div className='flex'>
        <TitleCategory />
        <SortBtn />
      </div>
      <hr className='mb-[10px] mt-2 h-[1px] border-0 bg-gray-233' />
      <DescriptionCategory />
      <hr className='mb-[15px] mt-2 h-[1px] border-0 bg-gray-233' />
    </div>
  )
}

export default InfoCategory
