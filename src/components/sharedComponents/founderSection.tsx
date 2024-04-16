import { ReactNode, createContext, useState } from "react";

export const CardContext = createContext({})

type FounderSectionProps = {
    children: ReactNode
}

export const FounderSection = ({ children }: FounderSectionProps) => {
    const [index, setIndex] = useState(0)

    return (
        <CardContext.Provider value={{ index, setIndex }} >
            {children}
        </CardContext.Provider>
    )
}