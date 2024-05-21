export interface User {
  email: string
  thumbnail: string
  name: string
}

export type UserProfile = Pick<UserType, 'id' | 'fullname' | 'username' | 'email'> & { thumbnail: string }
export type UserType = {
  username: string
  id: number
  email: string
  phone: string
  grade: string
  fullname: string
}
