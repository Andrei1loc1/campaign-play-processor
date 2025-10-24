import { extractCampaign } from "./queue";
import { QUEUE_EVENT_SIZE, PROCESS_INTERVAL_MS } from "../config/config";
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

let intervalID = null;
let isRunnig = false;

export function startProcess(){
    if( isRunnig )
        return;

    intervalID = setInterval( extractProcess, PROCESS_INTERVAL_MS );
    isRunnig = true;
}

export function stopProcess(){
    if( !isRunnig || intervalID === null )
        return;

    clearInterval( intervalID );
    intervalID=null;
    isRunnig = false;
}

export function processStatus(){
    return { isRunnig: isRunnig };
}