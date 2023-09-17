import http from 'src/utils/http'

export const getArtwork = () => http.get<any>('artwork')
export const getCategory = () => http.get<any>('category')
