
const campaignsQueue = [];

export function addCampaign( campaign ){
    campaignsQueue.push( campaign );
}

export function extractCampaign( maxEvents ){
    if( campaignsQueue.length < maxEvents )
        maxEvents = campaignsQueue.length;

    const extracted = campaignsQueue.splice( 0, maxEvents );
    return extracted;    
}