import http from 'src/utils/http'

export const getCategoryDetail = ({ id }: { id: string }) => http.get<any>(`category/${id}`)
