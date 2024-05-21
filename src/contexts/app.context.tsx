import { createContext, useState } from 'react'
import { CartType } from 'src/type/cart.type'
import { UserProfile, UserType } from 'src/type/user.type'
import { getProfileToLS } from 'src/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  isShowLogin: boolean
  setIsShowLogin: React.Dispatch<React.SetStateAction<boolean>>
  isShowRegister: boolean
  setIsShowRegister: React.Dispatch<React.SetStateAction<boolean>>
  profile: UserProfile | null
  setProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
  dataCart: CartType | null
  setDataCart: React.Dispatch<React.SetStateAction<CartType | null>>
}
const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getProfileToLS()),
  setIsAuthenticated: () => null,
  isShowLogin: false,
  setIsShowLogin: () => null,
  isShowRegister: false,
  setIsShowRegister: () => null,
  profile: getProfileToLS(),
  setProfile: () => null,
  dataCart: null,
  setDataCart: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [isShowLogin, setIsShowLogin] = useState<boolean>(initialAppContext.isShowLogin)
  const [isShowRegister, setIsShowRegister] = useState<boolean>(initialAppContext.isShowRegister)
  const [profile, setProfile] = useState<UserProfile | null>(initialAppContext.profile)
  const [dataCart, setDataCart] = useState<CartType | null>(initialAppContext.dataCart)
  return (
    <AppContext.Provider
      value={{
        dataCart,
        setDataCart,
        isShowRegister,
        setIsShowRegister,
        isAuthenticated,
        setIsAuthenticated,
        isShowLogin,
        setIsShowLogin,
        setProfile,
        profile
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
