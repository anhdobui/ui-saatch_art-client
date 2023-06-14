import { createContext, useState } from 'react'
import { User } from 'src/type/user.type'
import { getProfileToLS } from 'src/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  isShow: boolean
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
}
const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getProfileToLS()),
  setIsAuthenticated: () => null,
  isShow: false,
  setIsShow: () => null,
  profile: getProfileToLS(),
  setProfile: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [isShow, setIsShow] = useState<boolean>(initialAppContext.isShow)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isShow,
        setIsShow,
        setProfile,
        profile
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
