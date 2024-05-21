import { TopicType } from 'src/type/topic'
import http from 'src/utils/http'

export const getTopicDetail = ({ id }: { id: string }) => http.get<any>(`topic/${id}`)
export const getTopics = () => http.get<TopicType[]>('topic')
