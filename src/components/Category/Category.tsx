import { ProductType } from 'src/type/app.type'
import Breadcrumb from '../UI/Breadcrumb'
import GridCard from '../UI/GridCard'
import InfoCategory from './InfoCategory'

interface CategoryProps {
  name: string | undefined
  data?: ProductType[]
}
function Category({ name = '', data }: CategoryProps) {
  return (
    <div className='flex min-h-[400px] w-full flex-col justify-between px-[30px]'>
      <div className='relative flex w-full flex-1-1-0 flex-col justify-start overflow-hidden px-[30px]'>
        <Breadcrumb name={name} path={`/${name}`} />
        <InfoCategory />
        <GridCard data={data} />
      </div>
    </div>
  )
}

export default Category
