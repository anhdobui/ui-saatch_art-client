import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPaintingByTopicId } from 'src/apis/painting.api'
import Category from 'src/components/Category'
import { ProductType } from 'src/type/app.type'

function CategoryScreen() {
  const { topic } = useParams()
  const [dataCategory, setDataCategory] = useState<ProductType[]>([])

  const decodedTopic = topic && decodeURIComponent(topic)
  const topicId = decodedTopic && decodedTopic.split('-#-')[1]
  const topicName = decodedTopic && decodedTopic.split('-#-')[0]
  const queryTopic = useQuery({
    queryKey: ['paintings', { topic: topicId }],
    queryFn: () => getPaintingByTopicId(Number(topicId)),
    select: (data) =>
      data.data.map((item) => ({
        id: item.id,
        image: item.thumbnailUrl,
        name: item.name,
        price: `${item.price ?? '∞'}$`
      })),
    enabled: !!topicId
  })
  useEffect(() => {
    queryTopic.data && setDataCategory(queryTopic.data)
  }, [queryTopic.data, setDataCategory])
  return <Category data={dataCategory} name={topicName} />
}

export default CategoryScreen
