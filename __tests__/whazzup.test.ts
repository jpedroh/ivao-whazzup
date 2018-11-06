import 'jest'
import { Whazzup } from '../src'
import { IvaoATC } from '../src/models/ivao-atc'
import { IvaoPilot } from '../src/models/ivao-pilot'

jest.setTimeout(30000)

test('Test the whole model', (done) => {
    Whazzup.fetchData()
        .then((data) => {
            expect(data.atcs[0]).toBeInstanceOf(IvaoATC)
            expect(data.pilots[0]).toBeInstanceOf(IvaoPilot)
            expect(data.data.connectedClients).toBe(data.data.retrievedClients)
            done()
        })
})
