/**
 * Check if the client is a pilot or not, by checking the field *OnGround* - pilot exclusive.
 * Checking field 3 doesn't always seems to work here.
 * @param clientData - Contains the client's raw data from the Whazzup file.
 */
export function isPilot(clientData: string[]): boolean {
    return clientData[46] === ''
}
