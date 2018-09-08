import 'jest'
import { Whazzup } from '../src'
import { WhazzupATC } from '../src/models/atc'
import { WhazzupPilot } from '../src/models/pilot'

jest.setTimeout(30000)

test('Test the whole model', (done) => {
    Whazzup.fetchData()
        .then((data) => {
            expect(data.atcs[0]).toBeInstanceOf(WhazzupATC)
            expect(data.pilots[0]).toBeInstanceOf(WhazzupPilot)
            expect(data.data.connectedClients).toBe(data.data.retrievedClients)
            done()
        })
})
