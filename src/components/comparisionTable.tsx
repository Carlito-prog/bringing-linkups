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
                    <img src="src/public/favicon.ico" className='blu-logo' aria-label='blu-logo' />
                    <h4> {BluData.companyName} </h4>
                </th>
                <th>
                    <img src={comparisonData.logoUrl} className='competitors-logo' aria-label={`${comparisonData.companyName}-logo`} />
                    <h4> {comparisonData.companyName} </h4>
                </th>
            </tr>
            <tr>
                <th>Map View - Events Near You</th>
                <td><img src="src/public/icons-check.png" /></td>
                <td> <img src={comparisonData.eventsNearYou ? "src/public/icons-check.png" : "src/public/X-Icon.png"} /></td>
            </tr>
            <tr>
                <th>Generate Flyer</th>
                <td><img src="src/public/icons-check.png" /></td>
                <td> <img src={comparisonData.createFlyer ? "src/public/icons-check.png" : "src/public/X-Icon.png"} /></td>
            </tr>
            <tr>
                <th>Join Events</th>
                <td><img src="src/public/icons-check.png" /></td>
                <td> <img src={comparisonData.joinEvents ? "src/public/icons-check.png" : "src/public/X-Icon.png"} /></td>
            </tr>
            <tr>
                <th>Follow Profile</th>
                <td><img src="src/public/icons-check.png" /></td>
                <td> <img src={comparisonData.followProfile ? "src/public/icons-check.png" : "src/public/X-Icon.png"} /></td>
            </tr>
            <tr>
                <th>Private / Public Events</th>
                <td><img src="src/public/icons-check.png" /></td>
                <td> <img src={comparisonData.privacy ? "src/public/icons-check.png" : "src/public/X-Icon.png"} /></td>
            </tr>
            <tr>
                <th>Mobile First Approach</th>
                <td><img src="src/public/icons-check.png" /></td>
                <td> <img src={comparisonData.mobileFirst ? "src/public/icons-check.png" : "src/public/X-Icon.png"} /></td>
            </tr>
            <tr>
                <th> Buy Tickets</th>
                <td><img src="src/public/icons-check.png" /></td>
                <td> <img src={comparisonData.buyTickets ? "src/public/icons-check.png" : "src/public/X-Icon.png"} /></td>
            </tr>
            <tr>
                <th>In App Crowd Fund</th>
                <td><img src="src/public/icons-check.png" /></td>
                <td> <img src={comparisonData.iNCrowdFund ? "src/public/icons-check.png" : "src/public/X-Icon.png"} /></td>
            </tr>
            <tr>
                <th>In App Messaging</th>
                <td><img src="src/public/icons-check.png" /></td>
                <td> <img src={comparisonData.iNMsg ? "src/public/icons-check.png" : "src/public/X-Icon.png"} /></td>
            </tr>
        </table>
    )
}