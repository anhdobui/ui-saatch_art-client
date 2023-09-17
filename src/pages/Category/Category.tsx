import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getArtwork } from 'src/apis/artwork.api'
import { getCategoryDetail } from 'src/apis/category.api'
import Category from 'src/components/Category'
import { ProductType } from 'src/type/app.type'

function CategoryScreen() {
  const { category } = useParams()
  const categoryid = category && category.split('___')[1]
  const query = useQuery({ queryKey: ['artwork'], queryFn: getArtwork })
  const dataCategory: ProductType[] | undefined =
    query?.data?.data.data.listResult &&
    query?.data?.data.data.listResult.map((item: any) => ({
      id: item.id,
      image: `http://localhost:8080${item.thumbnailUrl}`,
      name: item.name,
      price: item.price
    }))
  return <Category data={dataCategory} name={category} />
}

export default CategoryScreen
