import { ReactNode, createContext, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, FounderCard } from "./founderCard";

type CardContextTypes = {
    idx: number,
    goLeft: () => void,
    goRight: () => void
}

export const CardContext = createContext<CardContextTypes>({
    idx: 0,
    goLeft: () => { },
    goRight: () => { }
})

type FounderSectionProps = {
    children: ReactNode
    lastIdx: number
}

const FounderSection = ({ children, lastIdx }: FounderSectionProps) => {
    const [idx, setIdx] = useState(0);

    const currentIdx = useMemo(() => idx, [idx])

    const goLeft = () => {
        if (currentIdx === 0) {
            setIdx(lastIdx);
        } else {
            setIdx(currentIdx - 1);
        }
    };
    const goRight = () => {
        if (currentIdx === lastIdx) {
            setIdx(0);
        } else {
            setIdx(currentIdx + 1);
        }
    };

    return (
        <div className="cardholder-cont">
            <CardContext.Provider value={{ idx, goLeft, goRight }} >
                {children}
            </CardContext.Provider>
        </div>
    )
}

FounderSection.ArrowLeft = ArrowLeft;
FounderSection.ArrowRight = ArrowRight;
FounderSection.founderCard = FounderCard;
export default FounderSection;