import React from 'react'
import { BluData } from "../data/comparison"


export type ComparisonDataType = {
    companyName: string,
    logoUrl: string,
    eventsNearYou: boolean,
    createFlyer: boolean,
    joinEvents: boolean,
    followProfile: boolean,
    privacy: boolean,
    buyTickets: boolean,
    iNCrowdFund: boolean,
    iNMsg: boolean,
    mobileFirst: boolean
}
type ComparisonTableProps = {
    comparisonData: ComparisonDataType
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
    comparisonData,
}) => {

    return (
        <table>
            <tr>
                <th></th>
                <th>
                    <img src="https://firebasestorage.googleapis.com/v0/b/bringing-link-ups.appspot.com/o/blu-logo.png?alt=media&token=98ff515c-a1a3-4721-9e6e-6006b11b7524&_gl=1*ebc3mr*_ga*MjA5MDUxODA4Ny4xNjk2Mjk5ODE1*_ga_CW55HF8NVT*MTY5Njg1NzYxMC4xMS4xLjE2OTY4NTg2NTkuNi4wLjA." className='blu-logo' aria-label='blu-logo' />
                    <h4> {BluData.companyName} </h4>
                </th>
                <th>
                    <img src={comparisonData.logoUrl} className='competitors-logo' aria-label={`${comparisonData.companyName}-logo`} />
                    <h4> {comparisonData.companyName} </h4>
                </th>
            </tr>
            <tr>
                <th>Map View - Events Near You</th>
                <td><img src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" /></td>
                <td> <img src={comparisonData.eventsNearYou ? "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" : "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/X-Icon.png?alt=media&token=2b2b7b59-d708-4a3c-8070-6ca3d54da256"} /></td>
            </tr>
            <tr>
                <th>Generate Flyer</th>
                <td><img src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" /></td>
                <td> <img src={comparisonData.createFlyer ? "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" : "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/X-Icon.png?alt=media&token=2b2b7b59-d708-4a3c-8070-6ca3d54da256"} /></td>
            </tr>
            <tr>
                <th>Join Events</th>
                <td><img src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" /></td>
                <td> <img src={comparisonData.joinEvents ? "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" : "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/X-Icon.png?alt=media&token=2b2b7b59-d708-4a3c-8070-6ca3d54da256"} /></td>
            </tr>
            <tr>
                <th>Follow Profile</th>
                <td><img src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" /></td>
                <td> <img src={comparisonData.followProfile ? "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" : "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/X-Icon.png?alt=media&token=2b2b7b59-d708-4a3c-8070-6ca3d54da256"} /></td>
            </tr>
            <tr>
                <th>Private / Public Events</th>
                <td><img src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" /></td>
                <td> <img src={comparisonData.privacy ? "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" : "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/X-Icon.png?alt=media&token=2b2b7b59-d708-4a3c-8070-6ca3d54da256"} /></td>
            </tr>
            <tr>
                <th>Mobile First Approach</th>
                <td><img src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" /></td>
                <td> <img src={comparisonData.mobileFirst ? "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" : "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/X-Icon.png?alt=media&token=2b2b7b59-d708-4a3c-8070-6ca3d54da256"} /></td>
            </tr>
            <tr>
                <th> Buy Tickets</th>
                <td><img src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" /></td>
                <td> <img src={comparisonData.buyTickets ? "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" : "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/X-Icon.png?alt=media&token=2b2b7b59-d708-4a3c-8070-6ca3d54da256"} /></td>
            </tr>
            <tr>
                <th>In App Crowd Fund</th>
                <td><img src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" /></td>
                <td> <img src={comparisonData.iNCrowdFund ? "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" : "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/X-Icon.png?alt=media&token=2b2b7b59-d708-4a3c-8070-6ca3d54da256"} /></td>
            </tr>
            <tr>
                <th>In App Messaging</th>
                <td><img src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" /></td>
                <td> <img src={comparisonData.iNMsg ? "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/icons-check.png?alt=media&token=a9cd7976-ac07-4721-80e3-917dc98c579b" : "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/X-Icon.png?alt=media&token=2b2b7b59-d708-4a3c-8070-6ca3d54da256"} /></td>
            </tr>
        </table>
    )
}