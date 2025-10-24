import { getCurrentDateTime } from "./dateTime";

export function info(message){
    console.log(`[INFO] [${getCurrentDateTime()}]: ${message}`);
}

export function error(message){
    console.error(`[ERROR] [${getCurrentDateTime()}]: ${message}`);
}