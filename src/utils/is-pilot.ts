/**
 * Check if the client is a pilot or not
 * @param clientData - Contains the client's raw data from the Whazzup file.
 */
export function isPilot(clientData: string[]): boolean {
    return clientData[3] === 'PILOT'
}
