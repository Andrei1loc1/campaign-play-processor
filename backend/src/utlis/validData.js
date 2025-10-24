
export function validEvent( event ){
    if( !event )
        return { valid: false, reason: 'Event body missing' };

    if( !event.campaignID )
        return { valid: false, reason: 'campaignID missing' };

    if( !event.screenID )
        return { valid: false, reason: 'screenID missing' };
    
    if( !event.timestamp )
        return { valid: false, reason: 'timestamp missing' };

    return { valid: true };
}