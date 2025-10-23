import { extractCampaign } from "./queue";
import { QUEUE_EVENT_SIZE } from "../config/config";
import { incrementCampaignPlay } from "./stats";

export function extractProcess(){
    events = extractCampaign( QUEUE_EVENT_SIZE );

    if( events.length === 0 )
        return;

    for( const event of events ){
        incrementCampaignPlay( {
            campaignID: event.campaignID,
            screenID: event.screenID
        } );
    }
}