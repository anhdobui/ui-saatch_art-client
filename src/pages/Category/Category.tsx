import { useParams } from 'react-router-dom'
import Category from 'src/components/Category'

function CategoryScreen() {
  const { category } = useParams()
  return <Category name={category} />
}

export default CategoryScreen
