import { useEffect, useMemo, useState } from "react"
import { ComparisonDataType, ComparisonTable } from "../sharedComponents/comparisionTable"
import { competitorData } from "../../data/comparison"

export const Comparison = () => {
    const [counter, setCounter] = useState<number>(0)
    const [competitorText, setCompetitorText] = useState<ComparisonDataType>(competitorData[0])
    const currentCount = useMemo(() => counter, [counter])

    useEffect(() => {
        switchContent()
    }, [competitorText])

    const switchContent = () => {
        setTimeout(() => {
            if (currentCount === 0) {
                setCounter(1)
                setCompetitorText(competitorData[currentCount + 1])
            } else {
                setCounter(0)
                setCompetitorText(competitorData[currentCount - 1])
            }
        }, 8000)
    }

    return (
        <section id="comparisons" className="comparisons">
            <h2> Us vs Our Competitors </h2>
            <ComparisonTable comparisonData={competitorText} />
            <div className="blu-comparison">
                <p>
                    At our core, Bringing Link Ups (BLU) is a social event platform in your pocket. But more importantly, we’re a hub where people can build, discover, and create real community with a social media feel.

                    We understand the struggle of trying to find your tribe in a world that’s constantly moving. The platforms built to connect us have fallen short—focusing more on followers than real-world friendships.

                    BLU is different. Whether you're meeting up in person or sharing moments online, we believe you should have the freedom to connect in ways that feel meaningful—with people who get you. This is your space, your community, your link up.
                </p>
            </div>
        </section>
    )
}