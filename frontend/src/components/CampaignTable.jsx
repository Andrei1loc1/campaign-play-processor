import React from 'react'

const CampaignTable = () => {
  return (
    <div className='w-full overflow-x-auto'>
        <table className="campaign-table">
            <thead>
                <tr>
                    <th>Campaign ID</th>
                    <th>Total Plays</th>
                    <th>Last Update</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12345</td>
                    <td>1500</td>
                    <td>2024-06-15</td>
                </tr>
                <tr>
                    <td>67890</td>
                    <td>2500</td>
                    <td>2024-06-14</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default CampaignTable