import React from 'react'

type FounderCardType = {
    name: string,
    photo_Url: string,
    role: string,
    description: string
}
type FounderCardProps = {
    data: FounderCardType
}

export const FounderCard: React.FC<FounderCardProps> = ({ data }) => {
    return (
        <div className='container'>
            <div className='avatar'>
                <img src={data.photo_Url} alt={`${data.name}-photo`} aria-label={`${data.name}-photo`} />
            </div>
            <div className='content'>
                <h4>{data.role}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    )
}