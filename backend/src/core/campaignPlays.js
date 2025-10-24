import { extractCampaign } from "./queue.js";
import { QUEUE_EVENT_SIZE, PROCESS_INTERVAL_MS } from "../config/config.js";
import { incrementCampaignPlay } from "./stats.js";

export function extractProcess(){
    const events = extractCampaign( QUEUE_EVENT_SIZE );

    if( events.length === 0 )
        return;

    for( const event of events ){
        incrementCampaignPlay( {
            campaignID: event.campaign_id,
            screenID: event.screen_id
        } );
    }
}

let intervalID = null;
let isRunning = false;

export function startProcess(){
    if( isRunning )
        return;

    intervalID = setInterval( extractProcess, PROCESS_INTERVAL_MS );
    isRunning = true;
}

export function stopProcess(){
    if( !isRunning || intervalID === null )
        return;

    clearInterval( intervalID );
    intervalID=null;
    isRunning = false;
}

export function processStatus(){
    return { isRunning: isRunning };
}