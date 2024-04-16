import React from 'react'
import { useContext } from 'react';
import { CardContext } from './founderSection';

type FounderCardType = {
    name: string,
    photo_Url: string,
    role: string,
    description: string
}
type FounderCardProps = {
    data: FounderCardType[]
}

export const FounderCard: React.FC<FounderCardProps> = ({ data }) => {
    const { idx } = useContext(CardContext)
    return (
        <div className='container'>
            <div className='avatar'>
                <img src={data[idx].photo_Url} alt={`${data[idx].name}-photo`} aria-label={`${data[idx].name}-photo`} width={"80%"} />
            </div>
            <div className='content'>
                <h4>{data[idx].role}</h4>
                <p>{data[idx].description}</p>
            </div>
        </div>
    )
}

export function ArrowLeft() {
    const { goLeft } = useContext(CardContext)

    return (
        <div className="left-arrow-cont" onClick={goLeft}>
            <img src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons8-left-48.png?alt=media&token=69e957e0-c8c6-4a70-8fa7-1c96d18839cd" />
            <h4>Back</h4>
        </div>
    )
}

export function ArrowRight() {
    const { goRight } = useContext(CardContext)

    return (
        <div className="right-arrow-cont" onClick={goRight}>
            <img src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons8-arrow-right-48.png?alt=media&token=9d4b2b28-1e91-44a6-87c8-77f3d6635661" />
            <h4>Next</h4>
        </div>
    )
}