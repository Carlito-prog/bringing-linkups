import { useEffect, useMemo, useState } from "react"
import { ComparisonDataType, ComparisonTable } from "../comparisionTable"
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
                    At our core we are a social event planner always in your pocket, but equally as important, we're a hub to people build, find, create community! Here at Bringing Link Ups we realize no one is going to help us out of the despair of finding our tribe our community of people. Somewhere along the line the companies that chose to help connect us refuse to find a solution where people actually connect with one another physically and even if it is online we believe you should have the choice if it's in the privacy of people who most likely can relate.
                </p>
            </div>
        </section>
    )
}