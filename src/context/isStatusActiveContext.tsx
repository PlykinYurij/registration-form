// import { createContext } from "react";

// export const IsStatusActiveContext = createContext<boolean | null>(null)

import { createContext, useContext } from "react"
export type GlobalContent = {
    isActiveStatus: boolean
    setIsActiveStatus:(c: boolean) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    isActiveStatus: false, 
    setIsActiveStatus: () => {},
})

export const useGlobalContext = () => useContext(MyGlobalContext)

