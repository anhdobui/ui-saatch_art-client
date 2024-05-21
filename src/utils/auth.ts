import { User, UserProfile, UserType } from 'src/type/user.type'

export const getProfileToLS = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}
export const setProfileToLS = (profile: User | UserProfile) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
export const clearLS = () => {
  localStorage.removeItem('profile')
}
