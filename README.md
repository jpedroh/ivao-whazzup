# ivao-whazzup
A lib for getting IVAO Whazzup data.

## Installation 
```sh
npm install ivao-whazzup --save
yarn add ivao-whazzup
```

## Usage
The function `fetchData()` will restore all data from IVAO's Whazzup and return you back in a JSON file.

### Javascript
```javascript
const Whazzup = require('ivao-whazzup');
new Whazzup().fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### TypeScript
```typescript
import Whazzup from 'ivao-whazzup';
new Whazzup().fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## The return
The return of the promise returns a object from `IVAOResult` interface:
```javascript
const data = {
  data: {
    updateTime: , // Last update of the whazzup file,
    clientsConnected: , // True number of connected clients at IVAO servers
    clientsRetrieved: // Number of connected clients that had their data got by the module
  },
  pilots: [], // Array of pilots, respecting the IVAOPilot Class
  atcs: [] // Array of ATCs, respecting the IVAOATC Class
}
```
In case of an error, an instance of `IVAORequestError` is returned.