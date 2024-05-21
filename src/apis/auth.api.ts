import { UserType } from 'src/type/user.type'
import http from 'src/utils/http'
export type RegisterAccTypeBody = Pick<UserType, 'username'> & { password: string } & Partial<Omit<UserType, 'grade'>>
export type LoginType = Pick<UserType, 'username'> & { password: string }
export const registerAcc = (body: RegisterAccTypeBody) => http.post<UserType>('acc', body)
export const login = (body: LoginType) => http.post<UserType>('acc/login', body)
