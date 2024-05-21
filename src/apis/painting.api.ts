import { PaintingType } from 'src/type/painting.type'
import http from 'src/utils/http'

export const getArtwork = () => http.get<any>('painting')
export const getPaintingByTopicId = (topicId: number) => http.get<PaintingType[]>(`painting?topicIds=${topicId}`)
