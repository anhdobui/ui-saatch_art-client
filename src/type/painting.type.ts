import { TopicType } from './topic'

export type PaintingType = {
  id: number
  code: string
  name: string
  length: number
  width: number
  thickness: number
  inventory: number
  price: number
  artist: string
  thumbnailUrl: string
  albumUrl: string[]
  topics: TopicType[]
}
