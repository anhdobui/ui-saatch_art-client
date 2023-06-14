import Breadcrumb from '../UI/Breadcrumb'
import CardProduct from '../UI/CardProduct'
import GridCard from '../UI/GridCard'
import InfoCategory from './InfoCategory'

interface CategoryProps {
  name: string | undefined
  data?: []
}
function Category({ name = '' }: CategoryProps) {
  return (
    <div className='flex min-h-[400px] w-full flex-col justify-between px-[30px]'>
      <div className='relative flex w-full flex-1-1-0 flex-col justify-start overflow-hidden px-[30px]'>
        <Breadcrumb name={name} path={`/${name}`} />
        <InfoCategory />
        <GridCard></GridCard>
      </div>
    </div>
  )
}

export default Category
