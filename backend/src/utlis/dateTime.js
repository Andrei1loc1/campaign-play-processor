
export function getCurrentDateTime(){
    return new Date().toISOString();
}

export  function timeFormat(timestamp){
    return new Date(timestamp).toLocaleTimeString('ro-RO');
}