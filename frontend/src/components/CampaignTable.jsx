const CampaignTable = ({ campaigns, lastUpdate }) => {

    const formatScreens = (screens) => {
        if (!screens || Object.keys(screens).length === 0) 
            return 'N/A';

        return Object.entries(screens).map(([screenId, plays]) => `${screenId}: ${plays}`).join(' | ');
    };

    const campaignsArray = Object.entries(campaigns).map(([id, data]) => ({
        id,
        ...data,
    }));

  return (
    <div className="relative">
        <p className="absolute -top-8 left-2 text-gray-400 z-20">
            Last update: {lastUpdate.toLocaleTimeString()}
        </p>
        <div className='w-full overflow-auto rounded-2xl bg-gradient-to-b from-green-500/10 to-blue-400/10' style={{minHeight:'330px', maxHeight: '330px' }}>
            
            {campaignsArray.length > 0 ? (
                <table className="campaign-table" style={{ height: '100%' }}>
                    <thead>
                        <tr>
                            <th>Campaign ID</th>
                            <th>Total Plays</th>
                            <th>Screens</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaignsArray.map((campaign) => (
                            <tr key={campaign.id}>
                                <td className="py-3 px-4 whitespace-nowrap text-sm font-medium text-blue-400">{campaign.id}</td>
                                <td className="py-3 px-4 whitespace-nowrap text-lg font-bold text-green-400">{campaign.plays}</td>
                                <td className="py-3 px-4 whitespace-normal text-sm text-gray-300">{formatScreens(campaign.screens)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-400 ml-2"> Any campaign now. Press simulate! </p>
            )}
        </div>
    </div>
  )
}

export default CampaignTable