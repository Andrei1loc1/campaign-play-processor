
const campaignStore = {};

function incrementCampaignPlay( {campaignID, screenID} ){
    if( !campaignStore.campaignID){
        campaignStore.campaignID = {
            screens: {},
            plays: 0
        }
    }
    campaignStore.campaignID.plays += 1;
    
    if( !campaignStore.campaignID.screens.screenID ){
        campaignStore.campaignID.screens.screenID = 0;
    }
    campaignStore.campaignID.screens.screenID += 1;
}

function getAllCampaigns(){
    return campaignStore;
}